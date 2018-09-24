FROM node:alpine
WORKDIR /tmp
ADD package.json ./
ADD server.js ./
RUN npm install

EXPOSE 3000
EXPOSE 3001

CMD ["node", "./server.js"]
