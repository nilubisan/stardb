FROM node:16.10.0 AS build-step

WORKDIR /build
COPY package.json yarn.lock ./
RUN yarn install

COPY . .
RUN yarn run build

FROM nginx:1.18-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build-step /build/build /frontend/build