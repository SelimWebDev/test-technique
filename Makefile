install:
	$(MAKE) start
	docker-compose run --rm node npm install
	$(MAKE) migrate
	$(MAKE) restart
start:
	docker-compose up -d
stop:
	docker-compose down
restart:
	$(MAKE) stop && $(MAKE) start
node-sh:
	docker-compose run --rm node sh
python-sh:
	docker-compose run --rm python sh
migrate:
	docker-compose run --rm node npx sequelize-cli db:migrate
# Create a new SQL migration in /migrations directory, example : make new-migration NAME=bob
new-migration:
	docker-compose run --rm node npx sequelize-cli migration:generate --name=$(NAME)

#Log docker-compose logs -f
