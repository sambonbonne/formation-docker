FROM debian:stretch
WORKDIR /app
RUN apt update && apt install -y build-essential mongodb-server mysql-server
ADD main.c .
RUN gcc -o main main.c && chmod +x main
ENTRYPOINT service mongodb start && service mysql start && ./main
