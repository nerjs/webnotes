#!/bin/bash

# CORE_FILE=/.appenv
CORE_FILE=/.appenv
TARGET_FILE="$PWD/.env"


cat "$PWD/$1" /.appenv > $TARGET_FILE



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

