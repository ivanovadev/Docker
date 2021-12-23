FROM node:16
WORKDIR /usr/src/app
RUN npm init --yes 
RUN npm install express --save
COPY . .

EXPOSE 3000
CMD ["node", "app.js"]