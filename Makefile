PROJECT_NAME=apollo

start:
	@docker stop resurface
	@docker build -t test-apollo --no-cache .
	@docker-compose up --detach

stop:
	@docker-compose stop
	@docker-compose down --volumes
	@docker image rmi -f test-apollo:latest

bash:
	@docker exec -it apollo bash

logs:
	@docker logs -f apollo

ping:
	@curl 'http://localhost/graphql' -H 'Content-Type: application/json' --data-binary '{"query":"# Write your query or mutation here\n{\n  hero {\n    name\n    # Queries can have comments!\n    friends {\n      name\n    }\n  }\n}"}'
