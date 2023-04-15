
FROM node:16-alpine3.16 as build
WORKDIR /app
COPY ./package*.json ./

RUN npm ci

COPY ./ ./
RUN npm run prod

FROM nginx:1.23.0-alpine
EXPOSE 8080
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/translator /usr/share/nginx/html
