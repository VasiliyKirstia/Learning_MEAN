FROM ubuntu:xenial
MAINTAINER Vasiliy Kirstia

RUN apt-get update && apt-get install -y apt-utils curl wget

RUN curl -sL https://deb.nodesource.com/setup_6.x | \
    apt-get install -y nodejs \
    && apt-get install -y build-essential

#TODO: добавить запускалку для systemctl
RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927 \
    && echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.2 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-3.2.list \
    && apt-get update \
    && apt-get install -y mongodb-org

#TODO: добавить запускалку для systemctl
RUN echo "deb http://apt.postgresql.org/pub/repos/apt/ xenial-pgdg main" | tee /etc/apt/sources.list.d/pgdg.list \
    && wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | \
    apt-key add - \
    && apt-get update \
    && apt-get install -y postgresql-9.4
