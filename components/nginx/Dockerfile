FROM ubuntu:trusty
MAINTAINER Vasiliy Kirstia

RUN apt-get update && apt-get install -y nginx

RUN rm /etc/nginx/nginx.conf

COPY configs/nginx.conf /etc/nginx/

RUN service nginx reload

EXPOSE 80 443 55555

CMD ["nginx", "-g", "daemon off;"]
