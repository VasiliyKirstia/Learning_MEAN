.PHONY: build, run, stop, clear, create_dirs

IMAGE_NAME = mongodb
NETWORK_NAME = my-bridge-network
MONGODB_BASE_DIR = $(CURDIR)/../../dist/mongodb

build:
	docker build -f Dockerfile -t $(IMAGE_NAME) --no-cache .

create_dirs:
	sudo mkdir -p $(MONGODB_BASE_DIR)/db
	sudo mkdir -p $(MONGODB_BASE_DIR)/logs

run: create_dirs
	docker run -d \
		--name $(IMAGE_NAME) \
		--network $(NETWORK_NAME) \
		--volume $(MONGODB_BASE_DIR):/mongodb \
		$(IMAGE_NAME)

stop:
	docker stop $(IMAGE_NAME)

clear: stop
	docker rm $(IMAGE_NAME)
	docker rmi $(IMAGE_NAME)
