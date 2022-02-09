#!/system/bin/sh
# $1 = packageName $2 = fileName
cnt=0
while [ 1 ]; do
    if [ -f "/data/data/$1/se/$2.dex" ]; then
    echo "COPY dex-->>>>>"
    cp -r /data/data/$1/se/$2.dex /sdcard/$2$cnt.dex
    fi

    if [ -f "/data/data/$1/se/$2.jar" ]; then
    echo "COPY jar-->>>>>"
    cp -r /data/data/$1/se/$2.jar /sdcard/$2$cnt.jar
    fi
    cnt=$(($cnt+1))
    sleep 0.1
done

