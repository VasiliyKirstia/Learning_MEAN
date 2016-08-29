FROM ubuntu:trusty
MAINTAINER Vasiliy Kirstia

RUN apt-get update && apt-get install -y curl

RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -

RUN apt-get install -y nodejs build-essential

RUN npm install -g pm2@latest

RUN mkdir -p /srv/node/app/
