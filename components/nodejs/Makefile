.PHONY: build, run, clear, stop, start, install, remove, start_app

IMAGE_NAME = nodejs
NETWORK_NAME = my-bridge-network

build:
	docker build -f Dockerfile -t $(IMAGE_NAME) --no-cache .

run:
	docker run -d \
		--name $(IMAGE_NAME) \
		--volume $(CURDIR)/../../dist/backend:/srv/node/app \
		--volume $(CURDIR)/comands:/srv/node/comands \
		--network $(NETWORK_NAME) \
		$(IMAGE_NAME) \
		/bin/bash /srv/node/comands/start.sh

stop:
	docker stop $(IMAGE_NAME)

restart_app:
	docker exec $(IMAGE_NAME) /bin/bash /srv/node/comands/restart.sh

start_app:
	docker exec $(IMAGE_NAME) /bin/bash /srv/node/comands/start.sh

clear: stop
	docker rm $(IMAGE_NAME)
	docker rmi $(IMAGE_NAME)

install:
	docker exec $(IMAGE_NAME) /bin/bash /srv/node/comands/install.sh $(pkg)

uninstall:
	docker exec $(IMAGE_NAME) /bin/bash /srv/node/comands/remove.sh $(pkg)
