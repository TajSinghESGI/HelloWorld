const express = require('express')
const app = express()
var port = process.env.PORT || 3000

app.use(express.json())

app.get('/', function (req, res) { res.send('Hello World!')
})

app.post('/chat', (req, res) => {
  if(req.body.msg == "ville"){
    let ville = req.body.msg
    console.log("Nous sommes à Paris")
    res.send(ville)
  } else if (req.body.msg == "météo") {
    meteo = req.body.msg
    console.log("Il fait beau")
    res.send(meteo)
  }
})

app.listen(port, function () {
  console.log('Example app listening on port 3000!')
})
