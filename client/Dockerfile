FROM node:alpine

RUN mkdir /var/client
WORKDIR /var/client

COPY . .
RUN yarn install

CMD yarn dev