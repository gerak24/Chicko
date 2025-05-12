FROM node:alpine as base

WORKDIR /src/web

COPY ../ChickoFront/package.json ./
COPY ../ChickoFront/src/public ./public
COPY ../ChickoFront/src ./src

RUN npm install
FROM base as build
WORKDIR /src/web

RUN npm run build

FROM nginx as runtime

COPY --from=build ./nginx.conf /etc/nginx/conf.d/default.conf
