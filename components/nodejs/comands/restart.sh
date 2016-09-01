#!/bin/bash

cd /srv/node/app
npm install
pm2 restart all
