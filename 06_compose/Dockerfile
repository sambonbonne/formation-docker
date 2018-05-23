FROM node

WORKDIR /app
ADD index.js .
ADD package.json .
RUN npm install

ENTRYPOINT npm start
