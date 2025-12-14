#!/bin/bash

# Configuration
CPANEL_USERNAME="your_cpanel_username"
CPANEL_DOMAIN="your_domain.com"
LOG_DIR="/home/$CPANEL_USERNAME/logs"
THRESHOLD_CPU=80
THRESHOLD_MEMORY=80
ALERT_EMAIL="kaungsethmue2001@gmail.com"

# Check Node.js application status
check_node_app() {
    if ! pm2 list | grep -q "khub"; then
        echo "⚠️ Node.js application is not running!" | mail -s "Alert: Node.js App Down" $ALERT_EMAIL
        pm2 start server/src/index.js --name khub
    fi
}

# Check MongoDB status
check_mongodb() {
    if ! mongo --eval "db.stats()" > /dev/null 2>&1; then
        echo "⚠️ MongoDB is not responding!" | mail -s "Alert: MongoDB Down" $ALERT_EMAIL
    fi
}

# Check disk space
check_disk_space() {
    USAGE=$(df -h / | grep -v Filesystem | awk '{print $5}' | sed 's/%//')
    if [ $USAGE -gt 80 ]; then
        echo "⚠️ Disk space usage is at $USAGE%" | mail -s "Alert: High Disk Usage" $ALERT_EMAIL
    fi
}

# Check CPU usage
check_cpu() {
    CPU_USAGE=$(top -bn1 | grep "Cpu(s)" | awk '{print $2}' | cut -d. -f1)
    if [ $CPU_USAGE -gt $THRESHOLD_CPU ]; then
        echo "⚠️ CPU usage is at $CPU_USAGE%" | mail -s "Alert: High CPU Usage" $ALERT_EMAIL
    fi
}

# Check memory usage
check_memory() {
    MEMORY_USAGE=$(free | grep Mem | awk '{print $3/$2 * 100.0}' | cut -d. -f1)
    if [ $MEMORY_USAGE -gt $THRESHOLD_MEMORY ]; then
        echo "⚠️ Memory usage is at $MEMORY_USAGE%" | mail -s "Alert: High Memory Usage" $ALERT_EMAIL
    fi
}

# Clean old logs
clean_logs() {
    find $LOG_DIR -name "*.log" -mtime +7 -exec rm {} \;
}

# Main execution
echo "🔍 Starting system check..."

check_node_app
check_mongodb
check_disk_space
check_cpu
check_memory
clean_logs

echo "✅ System check completed"