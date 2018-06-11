FROM php
WORKDIR /app
RUN truncate -s 512M /app/bigfile
ENTRYPOINT php -r 'file("/app/bigfile");'
