# Instructions

Complete the `docker-compose.yml` file to make the application work.

## Application

The application is a Web server connected to a Redis database (Web server and Redis database have their own containers).

The Web server should be reachable thought a port to us the 2 URLs:

* `GET /key`: read a key in the Redis database and send its value
* `GET /key/value`: write a key in the Redis database
