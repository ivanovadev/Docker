const express = require('express')
const app = express()
const port = 3000
var ip = require("ip"); //aditional library

app.get('/', (req, res) => {
  res.send('hello worrld')
  console.log('you asked container: ') //aditional info for is it works understanding
  console.log(ip.address()) //aditional info for is it works understanding
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
  console.log(ip.address());
})