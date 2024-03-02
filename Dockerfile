FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install glob rimraf

RUN npm install -S hnswlib-node

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["node", "dist/main"]
