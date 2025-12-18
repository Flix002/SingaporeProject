<#
PowerShell deploy script for cPanel (z.com)

Usage (interactive):
  .\deploy-to-cpanel.ps1 -CpanelUser youruser -CpanelHost your-domain.z.com -RemoteDir public_html

What it does:
  - Builds the frontend (`khub`) locally
  - Copies `dist` into `khub/server/public`
  - Zips the `server` folder to `khub-server-deploy.zip`
  - SCPs the zip to the cPanel home directory
  - SSH into the host and unzips into `~/khub-deploy`, runs `npm ci --production` inside the `server` folder

Notes:
  - You must have `ssh` and `scp` available on your machine.
  - Environment variables (MONGODB_URI, JWT_SECRET, etc.) should be added via cPanel Node.js App UI.
  - The script does NOT restart the cPanel Node app; restart it from the cPanel Application Manager.
#>

param(
  [Parameter(Mandatory=$true)] [string] $CpanelUser,
  [Parameter(Mandatory=$true)] [string] $CpanelHost,
  [string] $RemoteDir = 'public_html'
)

Set-StrictMode -Version Latest

$scriptRoot = Split-Path -Parent $MyInvocation.MyCommand.Definition
$khubDir = Join-Path $scriptRoot 'khub'

Write-Host "Building frontend in $khubDir..."
Push-Location $khubDir
npm ci
npm run build
npm run prepare-deploy
Pop-Location

# create zip from server folder
$zipPath = Join-Path $khubDir 'khub-server-deploy.zip'
if (Test-Path $zipPath) { Remove-Item $zipPath -Force }
Write-Host "Creating zip package..."
Push-Location (Join-Path $khubDir 'server')
Compress-Archive -Path * -DestinationPath $zipPath -Force
Pop-Location

Write-Host "Uploading $zipPath to $CpanelHost..."
scp $zipPath "$CpanelUser@$CpanelHost:~/$([System.IO.Path]::GetFileName($zipPath))"

if ($LASTEXITCODE -ne 0) { Write-Error "SCP failed"; exit 1 }

Write-Host "Running remote install/unpack..."
$remoteCmd = @"
mkdir -p ~/khub-deploy
unzip -o ~/$([System.IO.Path]::GetFileName($zipPath)) -d ~/khub-deploy
rm ~/$([System.IO.Path]::GetFileName($zipPath))
cd ~/khub-deploy/server
npm ci --production
"@

ssh $CpanelUser@$CpanelHost $remoteCmd

if ($LASTEXITCODE -ne 0) { Write-Warning "Remote commands may have failed; check SSH output." }

Write-Host "Upload complete. Set env vars in cPanel App Manager and start/restart the Node app via cPanel." 
<#
PowerShell deploy script for Knowledge Hub (khub)

What it does:
- Builds the frontend (Vite) locally
- Archives the `dist` folder to build.zip
- Uploads build.zip to the cPanel server using scp
- Connects via ssh and extracts into the target directory (default: public_html)

Usage (PowerShell):
.\deploy-to-cpanel.ps1 -CpanelUser "youruser" -CpanelHost "your-domain.z.com" -RemoteDir "public_html" -KeyPath "C:\Users\you\\.ssh\\id_rsa_cpanel"

Notes:
- Requires OpenSSH (ssh/scp) available in PowerShell. On modern Windows it's included.
- Make sure your SSH public key is authorized in cPanel > SSH Access > Manage SSH Keys
- This script only deploys the frontend static build (khub/dist). For backend deployment follow the `CPANEL_PRODUCTION.md` steps.
#>

param(
    [Parameter(Mandatory=$true)]
    [string]$CpanelUser,

    [Parameter(Mandatory=$true)]
    [string]$CpanelHost,

    [Parameter(Mandatory=$false)]
    [string]$RemoteDir = "public_html",

    [Parameter(Mandatory=$false)]
    [string]$KeyPath = "",

    [Parameter(Mandatory=$false)]
    [switch]$KeepLocalZip
n)

$ErrorActionPreference = 'Stop'

Write-Host "Starting deploy to $CpanelUser@$CpanelHost (remote dir: $RemoteDir)" -ForegroundColor Cyan

# 1) Build frontend
Write-Host "Building frontend..." -ForegroundColor Yellow
Push-Location -Path (Join-Path $PSScriptRoot '')
Set-Location -Path "$PSScriptRoot"

# Ensure node_modules exist
if (-not (Test-Path -Path "khub/node_modules")) {
    Write-Host "Installing frontend dependencies (this may take a minute)..." -ForegroundColor Yellow
    cd khub
    npm install
    cd ..
}

cd khub
npm run build
if ($LASTEXITCODE -ne 0) { Write-Error "Frontend build failed"; exit 1 }
cd ..

# 2) Create zip
if (Test-Path build.zip) { Remove-Item build.zip -Force }
Write-Host "Packaging build into build.zip..." -ForegroundColor Yellow
Add-Type -AssemblyName System.IO.Compression.FileSystem
[System.IO.Compression.ZipFile]::CreateFromDirectory("khub\dist", "build.zip")

if (-not (Test-Path build.zip)) { Write-Error "Failed to create build.zip"; exit 1 }

# 3) Upload via SCP
$scpCmd = "scp"
$sshArgs = @()
if ($KeyPath -ne "") {
    $scpTarget = "-i `"$KeyPath`" build.zip $CpanelUser@$CpanelHost:~/$RemoteDir/"
} else {
    $scpTarget = "build.zip $CpanelUser@$CpanelHost:~/$RemoteDir/"
}

Write-Host "Uploading build.zip to $CpanelHost:$RemoteDir ..." -ForegroundColor Yellow
$fullScp = "$scpCmd $scpTarget"
Write-Host "Running: $fullScp" -ForegroundColor Gray

$scpProc = Start-Process -FilePath $scpCmd -ArgumentList $scpTarget -NoNewWindow -Wait -PassThru
if ($scpProc.ExitCode -ne 0) { Write-Error "SCP failed with exit code $($scpProc.ExitCode)"; exit 1 }

# 4) SSH to extract and cleanup
$sshCmd = "ssh"
$remoteCommands = @(
    "cd $RemoteDir",
    "unzip -o build.zip -d .",
    "rm -f build.zip",
    "echo 'Extraction finished.'"
) -join "; "

if ($KeyPath -ne "") {
    $sshArgs = "-i `"$KeyPath`" $CpanelUser@$CpanelHost `"$remoteCommands`""
} else {
    $sshArgs = "$CpanelUser@$CpanelHost `"$remoteCommands`""
}

Write-Host "Connecting via SSH to extract files..." -ForegroundColor Yellow
$fullSsh = "$sshCmd $sshArgs"
Write-Host "Running: $fullSsh" -ForegroundColor Gray
$sshProc = Start-Process -FilePath $sshCmd -ArgumentList $sshArgs -NoNewWindow -Wait -PassThru
if ($sshProc.ExitCode -ne 0) { Write-Error "SSH remote commands failed with exit code $($sshProc.ExitCode)"; exit 1 }

# 5) Clean up local zip (unless requested to keep)
if (-not $KeepLocalZip) { Remove-Item build.zip -Force }

Write-Host "Deployment completed successfully!" -ForegroundColor Green
Write-Host "Visit: https://$CpanelHost/" -ForegroundColor Cyan

Pop-Location
