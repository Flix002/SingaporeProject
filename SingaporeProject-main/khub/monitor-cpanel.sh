#!/bin/bash

# Configuration
CPANEL_USERNAME="zqdtpszw"
CPANEL_HOST="knowledgehubmm.com"
SITE_URL="https://knowledgehubmm.com"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo "=== Knowledge Hub Site Monitor ==="
echo "Checking site status..."

# Check if site is accessible
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" $SITE_URL)
if [ $HTTP_STATUS -eq 200 ]; then
    echo -e "${GREEN}✓ Website is accessible (HTTP 200)${NC}"
else
    echo -e "${RED}✗ Website returned HTTP $HTTP_STATUS${NC}"
fi

# Check disk space
echo -e "\nChecking disk space..."
ssh ${CPANEL_USERNAME}@${CPANEL_HOST} 'df -h /home'

# Check error logs
echo -e "\nChecking recent errors..."
ssh ${CPANEL_USERNAME}@${CPANEL_HOST} 'tail -n 5 /home/*/error_log'

# Check CPU usage
echo -e "\nChecking CPU usage..."
ssh ${CPANEL_USERNAME}@${CPANEL_HOST} 'top -b -n 1 | head -n 3'

# Check memory usage
echo -e "\nChecking memory usage..."
ssh ${CPANEL_USERNAME}@${CPANEL_HOST} 'free -m'

echo -e "\n=== Monitoring Complete ==="