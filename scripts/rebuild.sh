# CORE_FILE=/.appenv
CORE_FILE=/.appenv
TARGET_FILE="$PWD/.env"


cat "$PWD/$1" > $TARGET_FILE


if [ -f "$CORE_FILE" ]; then
    echo "" >> $TARGET_FILE
    echo "" >> $TARGET_FILE
    cat $CORE_FILE | while read line || [ -n "$line" ]; do 
        echo $line >> $TARGET_FILE
    done;
fi;

READY_CONTAINERS=$(docker-compose ps -q)
if [ "$READY_CONTAINERS" ]; then
    echo "Stop containers"
    docker-compose down
fi

if [ "$(docker ps -q)" ]; then
    docker-compose down
fi;

docker-compose build

docker-compose up -d 

