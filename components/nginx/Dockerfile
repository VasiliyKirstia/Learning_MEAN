FROM ubuntu:trusty
MAINTAINER Vasiliy Kirstia

RUN apt-get update && apt-get install -y nginx

RUN rm /etc/nginx/nginx.conf

RUN rm -rf /etc/nginx/sites-enabled

COPY configs/nginx.conf /etc/nginx/

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]
