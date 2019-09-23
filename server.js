const express = require('express')
const app = express()
var port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded())


app.get('/', (req, res) => {
  const username = req.body.username
  const message = req.body.message

  res.end()
})


app.get('/hello', function (req, res) {
  var name  = req.param('name')
  res.send("Quel est votre nom ?")

  if(name === undefined || name === "" ) {
    res.send("Quel est votre nom ?")
  }

  res.send("Hello " + name)

})

app.post('/chat', (req, res) => {
  if(req.body.msg === "ville"){
    let ville = req.body.msg
    console.log("Nous sommes à Paris")
    res.send("Nous sommes a paris")
  } else if (req.body.msg === "météo") {
    meteo = req.body.msg
    console.log("Il fait beau")
    res.send("Il fait beau")
  }
})

app.listen(port, function () {
  console.log('Example app listening on port 3000!')
})
