FROM node:alpine

RUN mkdir -p usr/src/app

WORKDIR /usr/src/app

COPY . /usr/src/app/

RUN npm i 

RUN npm run build

CMD ["npm","start"]