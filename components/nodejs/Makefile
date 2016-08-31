.PHONY: build, run, clear, stop, start, install, remove, copy_comands, start_app

IMAGE_NAME = nodejs
NETWORK_NAME = my-bridge-network

build:
	docker build -f Dockerfile -t $(IMAGE_NAME) --no-cache .

copy_comands:
	sudo cp -R $(CURDIR)/../../src/backend/comands $(CURDIR)/../../dist/backend/

run: copy_comands
	docker run -d \
		--name $(IMAGE_NAME) \
		--volume $(CURDIR)/../../dist/backend:/srv/node/app \
		--network $(NETWORK_NAME) \
		$(IMAGE_NAME) \
		/bin/bash /srv/node/app/comands/start.sh

stop:
	docker stop $(IMAGE_NAME)

restart_app:
	docker exec $(IMAGE_NAME) /bin/bash /srv/node/app/comands/restart.sh

start_app:
	docker exec $(IMAGE_NAME) /bin/bash /srv/node/app/comands/start.sh

clear: stop
	docker rm $(IMAGE_NAME)
	docker rmi $(IMAGE_NAME)

install:
	docker exec $(IMAGE_NAME) /bin/bash /srv/node/app/comands/install.sh $(pkg)

uninstall:
	docker exec $(IMAGE_NAME) /bin/bash /srv/node/app/comands/remove.sh $(pkg)
