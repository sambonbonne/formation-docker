#!/usr/bin/env bash

docker volume ls | grep -F formation-docker > /dev/null 2>&1 || exit 1

docker build -f read-Dockerfile -t formation/volumes-read .
docker build -f write-Dockerfile -t formation/volumes-write .

write_container="$(docker run --rm -d -v formation-docker:/mnt formation/volumes-write)"
docker run --rm -it -v formation-docker:/mnt:ro formation/volumes-read

on_exit() {
  docker stop "${write_container}"
}

trap on_exit EXIT
