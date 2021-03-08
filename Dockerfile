FROM node:12-alpine
#directorio de aplicación
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json . ./

RUN apk update && npm install
RUN npm install pm2 -g

COPY . /usr/src/app

CMD [ "pm2-runtime", "server-backup/app.js" ]