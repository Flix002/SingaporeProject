# cPanel Deployment Guide for Knowledge Hub

## 1. cPanel Initial Setup

### 1.1 Accessing cPanel
1. Go to: `https://your-domain.z.com:2083`
2. Login with your credentials provided by the hosting company
3. You should see the cPanel dashboard

### 1.2 Setting up Node.js
1. In cPanel, look for "Setup Node.js App" or "Software"
2. Click "Setup Node.js App"
3. Choose Node.js version 18.x or higher
4. Create a new application:
   - Application root: /public_html
   - Application URL: your-domain.z.com
   - Application startup file: index.html
   - Save the configuration

### 1.3 Setting up SSH Access (Required for deployment)
1. In cPanel, find "SSH Access" or "SSH/Shell Access"
2. Click "Manage SSH Keys"
3. Generate a new key pair or upload your existing public key
4. If generating new:
   - Click "Generate a New Key"
   - Enter a strong password
   - Save the private key to your local machine
5. Authorize the key for use

## 2. Local Machine Setup

### 2.1 Save SSH Key
1. Create a .ssh folder in your user directory if it doesn't exist
2. Save the private key as: ~/.ssh/id_rsa_cpanel
3. Set correct permissions:
   - Windows: Right-click → Properties → Security → Advanced
   - Make sure only your user has access

### 2.2 Configure SSH Config
Add this to ~/.ssh/config:
```
Host z.com
    HostName your-domain.z.com
    User your-cpanel-username
    IdentityFile ~/.ssh/id_rsa_cpanel
    Port 22
```

## 3. Deployment Process

### 3.1 Before First Deployment
1. Backup existing files in public_html
2. Note down any existing .htaccess rules you want to keep
3. Make sure you have enough disk space (check cPanel → Disk Usage)

### 3.2 Running the Deployment
1. Update deploy-cpanel.sh with your credentials:
   ```bash
   CPANEL_USERNAME="your-cpanel-username"
   CPANEL_HOST="your-domain.z.com"
   REMOTE_DIR="public_html"
   ```
2. Open PowerShell in the project directory
3. Run: `.\deploy-cpanel.sh`

### 3.3 Post-Deployment Checks
1. Visit your website to verify it loads
2. Check browser console for any errors
3. Test all main functionality
4. Verify routing works for direct URL access

## 4. Troubleshooting

### 4.1 Common Issues
1. 500 Internal Server Error:
   - Check .htaccess syntax
   - Verify Node.js setup
   - Check error logs in cPanel

2. Blank Page:
   - Verify index.html exists
   - Check file permissions (should be 644)
   - Ensure all assets were uploaded

3. Routing Issues:
   - Verify .htaccess is uploaded
   - Check RewriteBase setting
   - Enable mod_rewrite in cPanel

### 4.2 Checking Logs
1. In cPanel, go to "Errors" or "Error Log"
2. Check both Apache and Node.js logs
3. Look for any recent errors during deployment time

## 5. Maintenance

### 5.1 Regular Tasks
1. Monitor disk space usage
2. Check error logs weekly
3. Keep Node.js version updated
4. Backup your application regularly

### 5.2 Backup Process
1. In cPanel, go to "Backup"
2. Create a full backup before major changes
3. Download and store backups securely

## 6. Security Best Practices

### 6.1 File Permissions
- HTML/CSS/JS files: 644
- Directories: 755
- Script files: 644
- Upload directories: 744

### 6.2 SSL/HTTPS
1. In cPanel, find "SSL/TLS Status"
2. Install AutoSSL certificate if available
3. Force HTTPS in .htaccess

Need help? Contact:
- Your hosting provider's support
- Check cPanel documentation: https://docs.cpanel.net/