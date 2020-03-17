FROM node:alpine
COPY index.js /app/index.js
COPY package.json /app/package.json
RUN cd /app && npm install
EXPOSE 3005