app.js
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

Helloworld Node.js сервіс
# Terminal 1
mkdir myapp
cd myapp
# create app.js
npm init --yes
npm install express --save
node app.js

# Terminal 2
cd myapp2
curl -X GET http://localhost:3000
# Hello World!

2. Node.js
Створити Docker image для Helloworld Node.js сервісу. Запустити Docker контейнер з Helloworld Node.js сервісом, який буде слухати порту 3000 host машини. 
