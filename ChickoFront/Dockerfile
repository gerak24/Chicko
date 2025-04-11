FROM node:alpine as base

WORKDIR /src

COPY ../ChickoFront/package.json .

RUN npm install
FROM base as build
WORKDIR /src
COPY . ./

RUN npm run build

FROM nginx as runtime

COPY --from=build /src/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /src/dist /usr/share/nginx/html