FROM ubuntu:trusty
MAINTAINER Vasiliy Kirstia

RUN apt-get update && apt-get install -y nginx

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]
