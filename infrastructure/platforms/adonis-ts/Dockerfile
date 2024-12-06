FROM node:22.12.0

WORKDIR /usr/app/infrastructure/platforms/adonis-ts

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm","run","dev"]