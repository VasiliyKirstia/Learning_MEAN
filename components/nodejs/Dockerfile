FROM ubuntu:xenial
MAINTAINER Vasiliy Kirstia

RUN apt-get update && apt-get install -y apt-utils curl wget

RUN curl -sL https://deb.nodesource.com/setup_6.x | \
    apt-get install -y nodejs \
    && apt-get install -y build-essential
