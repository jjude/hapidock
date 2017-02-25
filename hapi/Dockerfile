# this file is part of hapidock
# refer https://jjude.com/hapidock
FROM alpine:3.4

RUN apk update && apk upgrade && apk add git build-base nodejs && rm -rf /var/cache/apk/*
# ref: https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
# we want tsc compiler; install it globally
RUN npm i -g typescript
# let us cache node_modules; install only if package.json changes
RUN mkdir -p /usr/hapi
WORKDIR /usr/hapi

COPY package.json /usr/hapi
RUN npm install

# we want to see code from host
COPY . /usr/hapi

EXPOSE 3000
CMD ["npm", "start"]
