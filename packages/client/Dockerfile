FROM node:12-alpine

WORKDIR /app 

RUN node -v && npm -v

COPY ./package.json ./package.json
COPY ./yarn.lock ./yarn.lock
COPY ./utils ./utils
COPY ./packages/client ./packages/client
COPY ./packages/client/.env.prod ./packages/client/.env

RUN npm config set registry https://registry.npmjs.org/

RUN echo "$(npm config get registry)"
RUN echo "$(yarn config list)"
RUN echo "$(yarn --version)"


RUN echo "$(yarn config get registry)"

# RUN /bin/bash -c "npm i yarn -g"
RUN yarn
WORKDIR /app/packages/client
RUN yarn 

ENTRYPOINT yarn start
EXPOSE 4000

