# Build me

Build me with `docker build -t formation/restart .` (you should now how to do it)

# Run me

Run me with different restart policies, exposing my 80 port: `docker run --restart=<policy> -p 8080:80 formation/restart`

Try the restart policy with different URLs:

  * `curl http://localhost:8080/test` do nothing
  * `curl http://localhost:8080/success` stop with status 0
  * `curl http://localhost:8080/error` stop with status 1
