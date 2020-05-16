#!/bin/bash

READY_CONTAINERS=$(docker-compose ps -q)
EXITED_CONTAINERS=$(docker-compose ps | grep Exit)


if [ -z "$READY_CONTAINERS" ]; then
    exit 1
fi

echo $EXITED_CONTAINERS
if [ "$EXITED_CONTAINERS" ]; then
    exit 1
fi

echo "Success!!!"