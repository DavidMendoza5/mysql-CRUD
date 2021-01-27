FROM node:10.13-alpine
WORKDIR /usr/src/students-app
COPY package*.json ./
RUN npm install
COPY . .
ENV PORT=3306 DB_USER=root DB_PASSWORD=davidmaster5 DB_DB=students DB_HOST=localhost
EXPOSE 3306
CMD [ "node", "index.js" ]