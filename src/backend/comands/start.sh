#!/bin/bash

cd /srv/node/app
npm install
pm2 start server.js --no-daemon
