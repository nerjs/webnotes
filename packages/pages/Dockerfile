FROM node:12-alpine

WORKDIR /app 

ENV PAGES_SERVER_APP_PORT=4000

COPY ./package.json ./package.json
COPY ./utils ./utils
COPY ./packages/pages ./packages/pages
COPY ./packages/pages/.env.example ./packages/pages/.env

RUN yarn 

WORKDIR /app/packages/pages

EXPOSE 4000

ENTRYPOINT yarn start:prod
