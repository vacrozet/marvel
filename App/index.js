var express = require('express')
var bodyParser = require('body-parser')
const cors = require('cors')

// Nous définissons ici les paramètres du serveur.
var hostname = 'localhost'
var port = 3005

var app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', require('./route/index.js'))

app.listen(port, hostname, () => {
  console.log('Mon serveur fonctionne sur http://' + hostname + ':' + port)
})
