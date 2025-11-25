<#
PowerShell script to deploy backend (Node/Express) to cPanel via SSH.

What it does:
- Archives the `server` folder into server.zip
- Uploads server.zip to the remote cPanel account (remote path: ~/<RemoteDir>)
- SSHs into the remote server, extracts, and runs `npm install --production`
- Attempts to start the app using PM2 (installs pm2 globally if missing)

Usage:
.
\deploy-backend-to-cpanel.ps1 -CpanelUser "youruser" -CpanelHost "your-domain.z.com" -RemoteDir "khub_app" -KeyPath "C:\Users\you\.ssh\id_rsa_cpanel" -EnvFile ".\.env.production"

Notes & warnings:
- Running PM2 and global npm installs may not be permitted on some shared cPanel hosts. If PM2 is not available, use cPanel "Setup Node.js App" to run the application instead.
- It's safer to set environment variables through the cPanel Node.js App UI rather than uploading .env files. If you provide `-EnvFile`, it will be uploaded to the remote app directory as `.env.production`.
- Make sure your SSH public key is authorized in cPanel > SSH Access > Manage SSH Keys.
#>

param(
    [Parameter(Mandatory=$true)]
    [string]$CpanelUser,

    [Parameter(Mandatory=$true)]
    [string]$CpanelHost,

    [Parameter(Mandatory=$false)]
    [string]$RemoteDir = "khub_app",

    [Parameter(Mandatory=$false)]
    [string]$KeyPath = "",

    [Parameter(Mandatory=$false)]
    [string]$EnvFile = "",

    [Parameter(Mandatory=$false)]
    [switch]$KeepLocalZip
)

$ErrorActionPreference = 'Stop'

Write-Host "Starting backend deploy to $CpanelUser@$CpanelHost (remote dir: $RemoteDir)" -ForegroundColor Cyan

# Ensure script runs from repo root
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $scriptDir

# 1) Create zip of server folder
if (-not (Test-Path -Path "server")) { Write-Error "server folder not found. Please run this script from the repository root where the 'server' folder exists."; exit 1 }

if (Test-Path server.zip) { Remove-Item server.zip -Force }

Write-Host "Creating server.zip..." -ForegroundColor Yellow
Add-Type -AssemblyName System.IO.Compression.FileSystem
[System.IO.Compression.ZipFile]::CreateFromDirectory("server", "server.zip")

if (-not (Test-Path server.zip)) { Write-Error "Failed to create server.zip"; exit 1 }

# 2) Upload server.zip via SCP
$scpCmd = "scp"
if ($KeyPath -ne "") {
    $scpArgs = @("-i", "$KeyPath", "server.zip", "$CpanelUser@$CpanelHost:~/$RemoteDir/")
} else {
    $scpArgs = @("server.zip", "$CpanelUser@$CpanelHost:~/$RemoteDir/")
}

Write-Host "Uploading server.zip to $CpanelHost:~/$RemoteDir ..." -ForegroundColor Yellow
$scp = Start-Process -FilePath $scpCmd -ArgumentList $scpArgs -NoNewWindow -Wait -PassThru
if ($scp.ExitCode -ne 0) { Write-Error "SCP failed with exit code $($scp.ExitCode)"; exit 1 }

# 3) SSH remote commands: extract and install
$remoteCmds = @(
    "mkdir -p $RemoteDir",
    "cd $RemoteDir",
    "unzip -o server.zip -d .",
    "rm -f server.zip",
    "echo 'Extracted server files'",
    "cd server",
    "npm install --production || (echo 'npm install failed')"
) -join "; "

$sshCmd = "ssh"
if ($KeyPath -ne "") {
    $sshArgs = @("-i", "$KeyPath", "$CpanelUser@$CpanelHost", $remoteCmds)
} else {
    $sshArgs = @("$CpanelUser@$CpanelHost", $remoteCmds)
}

Write-Host "Running remote setup commands..." -ForegroundColor Yellow
$ssh = Start-Process -FilePath $sshCmd -ArgumentList $sshArgs -NoNewWindow -Wait -PassThru
if ($ssh.ExitCode -ne 0) { Write-Warning "Remote setup commands exited with code $($ssh.ExitCode). You may need to run them manually in cPanel Terminal." }

# 4) Upload .env.production if provided
if ($EnvFile -ne "" -and (Test-Path $EnvFile)) {
    Write-Host "Uploading env file to remote..." -ForegroundColor Yellow
    if ($KeyPath -ne "") {
        $scpArgs2 = @("-i", "$KeyPath", "$EnvFile", "$CpanelUser@$CpanelHost:~/$RemoteDir/.env.production")
    } else {
        $scpArgs2 = @("$EnvFile", "$CpanelUser@$CpanelHost:~/$RemoteDir/.env.production")
    }
    $scp2 = Start-Process -FilePath $scpCmd -ArgumentList $scpArgs2 -NoNewWindow -Wait -PassThru
    if ($scp2.ExitCode -ne 0) { Write-Warning "Env file upload failed with exit code $($scp2.ExitCode)." }
}

# 5) Attempt to start using PM2 (if available)
$pm2Remote = @(
    "cd ~/$RemoteDir/server",
    "if ! command -v pm2 >/dev/null 2>&1; then npm i -g pm2 || echo 'pm2 install failed'; fi",
    "if command -v pm2 >/dev/null 2>&1; then pm2 start src/index.js --name khub --update-env || pm2 restart khub || echo 'pm2 start/restart failed'; pm2 save; else echo 'pm2 not available; please use cPanel Node.js App or install pm2 manually'; fi"
) -join "; "

if ($KeyPath -ne "") {
    $sshArgs3 = @("-i", "$KeyPath", "$CpanelUser@$CpanelHost", $pm2Remote)
} else {
    $sshArgs3 = @("$CpanelUser@$CpanelHost", $pm2Remote)
}

Write-Host "Attempting to start app with PM2 on remote host..." -ForegroundColor Yellow
$ssh3 = Start-Process -FilePath $sshCmd -ArgumentList $sshArgs3 -NoNewWindow -Wait -PassThru
if ($ssh3.ExitCode -ne 0) { Write-Warning "PM2 remote commands returned exit code $($ssh3.ExitCode). Check if pm2 is allowed on your host or use cPanel Node.js App." }

# 6) Clean up local zip unless user asked to keep
if (-not $KeepLocalZip) { Remove-Item server.zip -Force }

Write-Host "Backend deployment finished. Verify the app via cPanel or SSH and check logs." -ForegroundColor Green
Write-Host "If PM2 did not start the app, use cPanel 'Setup Node.js App' or the Terminal to run 'npm install' and start the app." -ForegroundColor Cyan

Exit 0
