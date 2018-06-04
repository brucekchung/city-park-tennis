const express = require('express')
const server = express()
const bodyParser = require('body-parser')
const environment = process.env.NODE_ENV || 'development'
const configuration = require('./knexfile')[environment]
const database = require('knex')(configuration)
const path = require('path')

server.set('port', process.env.PORT || 5000)
server.use(bodyParser.json())
// server.use(express.static(path.join(__dirname, 'client/build')))

server.listen(5000, () => {
  console.log('The HTTP server is listening at Port 5000.')
})

server.get('/api/v1/players/', (req, res) => {
  database('players').select()
    .then(players => res.status(200).json(players))
})


module.exports = server
