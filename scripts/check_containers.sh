#!/bin/bash

EXITED_CONTAINERS=$(docker-compose ps | grep Exit)

echo $EXITED_CONTAINERS

if [ "$EXITED_CONTAINERS" ]; then
    exit 1
else
    exit 0
fi
