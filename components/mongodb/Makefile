.PHONY: build, run

IMAGE_NAME = mongodb

build:
	docker build -f Dockerfile -t $(IMAGE_NAME) --no-cache .

run:
	docker run --name $(IMAGE_NAME) $(IMAGE_NAME)
