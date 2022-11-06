const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/', (req, res) => {
    res.send('Got a POST request')
  })

app.listen(3000)