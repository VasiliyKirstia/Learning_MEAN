.PHONY: build, run, stop, clear

IMAGE_NAME = mongodb
NETWORK_NAME = my-bridge-network
MONGODB_DIR = /home/xcode2/MONGODB

build:
	docker build -f Dockerfile -t $(IMAGE_NAME) --no-cache .

run:
	docker run -d \
		--name $(IMAGE_NAME) \
		--network $(NETWORK_NAME) \
		--volume $(MONGODB_DIR):/mongodb \
		$(IMAGE_NAME)

stop:
	docker stop $(IMAGE_NAME)

clear: stop
	docker rm $(IMAGE_NAME)
	docker rmi $(IMAGE_NAME)
