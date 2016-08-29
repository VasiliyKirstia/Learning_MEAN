.PHONY: build, run, stop, start, reload_nginx

IMAGE_NAME = nginx
NETWORK_NAME = my-bridge-network

build:
	docker build -f Dockerfile -t $(IMAGE_NAME) --no-cache .

run:
	docker run -P -d \
		--name $(IMAGE_NAME) \
		--network $(NETWORK_NAME) \
		--volume $(CURDIR)/configs/sites-enabled:/etc/nginx/sites-enabled \
		$(IMAGE_NAME)

stop:
	docker stop $(IMAGE_NAME)

start:
	docker start $(IMAGE_NAME)

reload_nginx:
	docker exec $(IMAGE_NAME) service nginx reload

clear: stop
	docker rm $(IMAGE_NAME)
	docker rmi $(IMAGE_NAME)
