const express = require('express')
const app = express()
var port = process.env.PORT || 3000

app.get('/', function (req, res) { res.send('Hello World!')
})

app.get('/chat', (req, res) => {
  res.send('chat')
})

app.listen(port, function () {
  console.log('Example app listening on port 3000!')
})
