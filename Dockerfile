FROM node:12-slim

ENV PORT=3000

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . ./

CMD [ "node", "app.js" ]
