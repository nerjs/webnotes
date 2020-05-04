FROM node:12-alpine

WORKDIR /app 

COPY ./package.json ./package.json
COPY ./utils ./utils
COPY ./packages/client ./packages/client
COPY ./packages/client/.env.prod ./packages/client/.env

RUN yarn && cd packages/client && yarn build

FROM nginx

WORKDIR /app
COPY --from=0 /app/packages/client/build /usr/share/nginx/html

EXPOSE 8080
EXPOSE 80
