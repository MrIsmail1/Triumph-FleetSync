FROM node:22.12.0

WORKDIR /usr/app/infrastructure/platforms/express

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm","run","dev"]