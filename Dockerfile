FROM alpine:3.4

RUN apk update && apk upgrade && apk add git build-base nodejs && rm -rf /var/cache/apk/*

RUN npm i -g gulp

ADD . /usr/hapidoc
WORKDIR /usr/hapidoc
RUN npm i

EXPOSE 3000
CMD ["npm", "start"]