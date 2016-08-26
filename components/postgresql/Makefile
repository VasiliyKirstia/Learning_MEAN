.PHONY: build, run

IMAGE_NAME = postresql

build:
	docker build -f Dockerfile -t $(IMAGE_NAME) --no-cache .

run:
	docker run $(IMAGE_NAME)
