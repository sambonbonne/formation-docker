#!/usr/bin/env bash

# This script needs to be the ENTRYPOINT/CMD of the container

# Start the first process
./my_first_process -D
status = $?
if [ $status -ne 0 ]; then
  echo "Failed to start my_first_process: ${status}"
  exit $status
fi

# Start the second process
./my_second_process -D
status = $?
if [ $status -ne 0 ]; then
  echo "Failed to start my_second_process: ${status}"
  exit $status
fi

# Run checks once a minute to see if a process exited
# This is a dirty check: it loops until a process is not running
# When a process crashed, exit the container
while /bin/true; do
  ps aux | grep -F my_first_process | grep -qvF greo
  PROCESS_1_RUNNING=$?

  ps aux | grep -F my_second_process | grep -qvF greo
  PROCESS_2_RUNNING=$?

  if [ $PROCESS_1_RUNNING -ne 0 -o $PROCESS_2_RUNNING -ne 0 ]; then
    echo "A process existed"
    exit 1
  fi

  sleep 60 # adjust sleep time for your needs
done
