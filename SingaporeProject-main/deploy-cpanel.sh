#!/bin/bash

# Configuration
CPANEL_USERNAME="Admin"
CPANEL_DOMAIN="knowledgehubmm.com"
APP_PATH="khub"
NODE_VERSION="18"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m'

echo "🚀 Starting deployment to cPanel..."

# 1. Build frontend
echo "📦 Building frontend..."
cd khub
npm install
npm run build
cd ..

# 2. Prepare backend
echo "🔧 Preparing backend..."
cd server
npm install
npm run build
cd ..

# 3. Create deployment package
echo "📝 Creating deployment package..."
zip -r deploy.zip khub/build/* server/* package.json

# 4. Upload to cPanel
echo "📤 Uploading to cPanel..."
scp deploy.zip $CPANEL_USERNAME@$CPANEL_DOMAIN:~/$APP_PATH/

# 5. SSH into cPanel and deploy
ssh $CPANEL_USERNAME@$CPANEL_DOMAIN << 'EOF'
  cd ~/$APP_PATH
  unzip -o deploy.zip
  
  # Setup Node.js app
  source /home/$CPANEL_USERNAME/.nvm/nvm.sh
  nvm use $NODE_VERSION
  
  # Install dependencies
  npm install --production
  
  # Update PM2 process if exists
  if pm2 list | grep -q "khub"; then
    pm2 restart khub
  else
    pm2 start server/src/index.js --name khub
  fi
  
  # Clean up
  rm deploy.zip
EOF

echo -e "${GREEN}✅ Deployment completed successfully!${NC}"

# 6. Display information
echo -e "\n📊 Deployment Info:"
echo -e "Frontend: https://$CPANEL_DOMAIN"
echo -e "API: https://api.$CPANEL_DOMAIN"
echo -e "\n💡 Don't forget to:"
echo "1. Check logs in cPanel"
echo "2. Verify MongoDB connection"
echo "3. Test file uploads"
echo "4. Monitor error logs"