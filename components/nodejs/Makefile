.PHONY: build, run, deploy, clear, stop

IMAGE_NAME = nodejs
NETWORK_NAME = my-bridge-network

deploy:
	echo "deploied"

build:
	mkdir src
	cp -r ../../backend/* src/
	docker build -f Dockerfile -t $(IMAGE_NAME) --no-cache .
	rm -rf src

run:
	docker run -d \
		--name $(IMAGE_NAME) \
		--network $(NETWORK_NAME) \
		$(IMAGE_NAME)

stop:
	docker stop $(IMAGE_NAME)

clear: stop
	docker rm $(IMAGE_NAME)
	docker rmi $(IMAGE_NAME)
