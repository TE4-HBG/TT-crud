# syntax=docker/dockerfile:1
FROM node:19-alpine
WORKDIR /app
COPY . .
RUN npm install
CMD ["node", "src/index.js"]
EXPOSE 3000
