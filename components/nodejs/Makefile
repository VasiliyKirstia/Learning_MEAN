.PHONY: build, run, deploy

IMAGE_NAME = nodejs

deploy:
	echo "deploied"

build:
	mkdir src
	cp -r ../../backend/* src/
	docker build -f Dockerfile -t $(IMAGE_NAME) --no-cache .
	rm -rf src

run:
	docker run -d -P $(IMAGE_NAME)
