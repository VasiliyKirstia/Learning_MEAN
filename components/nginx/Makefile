.PHONY: build, run

IMAGE_NAME = nginx

build:
	docker build -f Dockerfile -t $(IMAGE_NAME) --no-cache .

run:
	docker run -P -d --name $(IMAGE_NAME) $(IMAGE_NAME)
