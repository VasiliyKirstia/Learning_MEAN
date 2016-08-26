.PHONY: build, run

IMAGE_NAME = mongodb

build:
	docker build -f Dockerfile -t $(IMAGE_NAME) --no-cache .

run:
	docker run $(IMAGE_NAME)
