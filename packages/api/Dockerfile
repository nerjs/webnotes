FROM node:12-alpine

WORKDIR /app 

ENV API_SERVER_PORT=3000

COPY ./package.json ./package.json
COPY ./utils ./utils
COPY ./packages/api ./packages/api
COPY ./packages/api/.env.example ./packages/api/.env

RUN yarn 

WORKDIR /app/packages/api

EXPOSE 3000

ENTRYPOINT yarn start:prod
