FROM ubuntu:trusty
MAINTAINER Vasiliy Kirstia

RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
RUN echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.2 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-3.2.list

RUN apt-get update && apt-get install -y mongodb-org

RUN mkdir -p /mongodb/db && mkdir -p /mongodb/logs

RUN rm /etc/mongod.conf

COPY configs/mongod.conf /etc/

EXPOSE 27017

CMD mongod --config /etc/mongod.conf
