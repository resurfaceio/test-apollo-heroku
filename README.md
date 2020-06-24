# test-apollo-heroku
Apollo test app for Heroku

This was cloned from Apollo's [Star Wars example server](https://github.com/apollographql/starwars-server) app at commit `c8760cb`. We prefer to keep our own copy to keep our tests from breaking without warning.

To run locally:

```
npm install
npm start
heroku local
```

To test:

```
curl 'http://localhost:5000/graphql' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json' --data-binary '{"query":"# Write your query or mutation here\n{\n  hero {\n    name\n    # Queries can have comments!\n    friends {\n      name\n    }\n  }\n}"}' --compressed
```
