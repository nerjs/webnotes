FROM node:12-alpine


ARG REACT_APP_API_SERVER_HOST
ARG REACT_APP_API_SERVER_PORT
ARG REACT_APP_API_SERVER_PATH
ARG REACT_APP_SUBSCRIBE_SERVER_PATH


WORKDIR /app 

COPY ./package.json ./package.json
COPY ./utils ./utils
COPY ./packages/client ./packages/client
COPY ./packages/client/.env.prod ./packages/client/.env
RUN yarn && cd packages/client  && yarn build


FROM nginx

WORKDIR /app
COPY --from=0 /app/packages/client/build /usr/share/nginx/html

EXPOSE 80

VOLUME [ "/var/log/client_nginx" ]

CMD ["nginx", "-g", "daemon off; error_log /var/log/client_nginx/error.log;"]
