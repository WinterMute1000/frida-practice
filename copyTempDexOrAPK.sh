#!/system/bin/sh
# $1 = packageName $2 = fileName
while [ 1 ]; do

    if [ -f "/data/data/$1/files/$2.dex" ]; then
        cp /data/data/$1/files/$2.dex /sdcard/
    fi

    if [ -f "/data/data/$1/files/$2.apk" ]; then
        cp /data/data/$1/files/$2.apk /sdcard/
    fi

    sleep 0.1
done
