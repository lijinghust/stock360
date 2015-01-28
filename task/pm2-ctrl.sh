#!/bin/sh

# config
export PATH=$PATH:/usr/local/bin
PM2='/usr/local/bin/pm2';
PRJ_PATH='/home/wwwroot/www.stock360.cn';

ACTION=$1;
FILE=$PRJ_PATH/src/www/index.js;
LOG=$PRJ_PATH/src/task/crontab.log;

# usage
usage() {
    echo "Usage: ./pm2-ctrl.sh {start|stop|restart}"
    exit 1;
}

case "$ACTION" in
    start)
        $PM2 start $FILE >> $LOG 2>&1;
    ;;
    stop)
        $PM2 stop $FILE >> $LOG 2>&1;
    ;;
    restart)
        $PM2 restart $FILE >> $LOG 2>&1;
    ;;
    *)
        usage
    ;;
esac
