# test-apollo
Example GraphQL API built with Apollo

This was cloned from Apollo's [Star Wars example server](https://github.com/apollographql/starwars-server) app at commit `c8760cb`.

## Requirements

* Install `docker` and `docker-compose`
* Sign up for [Resurface Pilot Edition](https://resurface.io/pilot-edition) access

## Ports Used

* 80 - GraphQL API
* 4002 - Resurface API Explorer
* 4001 - Resurface microservice
* 4000 - Trino database UI

## Deploy Locally

```
make start     # rebuild and start containers
make ping      # make simple ping request
make bash      # open shell session
make logs      # follow container logs
make stop      # halt and remove containers
```
