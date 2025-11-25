#!/bin/bash

# Configuration
CPANEL_USERNAME="your_cpanel_username"
CPANEL_HOST="your_domain.z.com"
REMOTE_DIR="public_html"  # or your specific subdirectory

# Build the React application
echo "Building React application..."
npm run build

# Check if build was successful
if [ $? -ne 0 ]; then
    echo "Build failed! Aborting deployment."
    exit 1
fi

# Create a temporary archive of the build
echo "Creating archive of build files..."
cd dist
zip -r ../build.zip ./*
cd ..

# Upload to cPanel using SCP
echo "Uploading to cPanel..."
scp build.zip ${CPANEL_USERNAME}@${CPANEL_HOST}:~/${REMOTE_DIR}/

# Execute remote commands
ssh ${CPANEL_USERNAME}@${CPANEL_HOST} << 'EOF'
    cd ${REMOTE_DIR}
    unzip -o build.zip
    rm build.zip
    
    # Create/update .htaccess for React routing
    cat > .htaccess << 'EOL'
    <IfModule mod_rewrite.c>
        RewriteEngine On
        RewriteBase /
        RewriteRule ^index\.html$ - [L]
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteCond %{REQUEST_FILENAME} !-l
        RewriteRule . /index.html [L]
    </IfModule>
EOL
EOF

# Clean up local archive
rm build.zip

echo "Deployment completed successfully!"