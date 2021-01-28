FROM node:10.13-alpine
WORKDIR /usr/src/students-app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3306
CMD [ "node", "index.js" ]