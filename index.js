const http  = require('http')
const express = require('express')

  const app = express()
 const server  = http.createServer(app)

 app.use(express.static("/public"))
 server.listen(3000, () => console.log('Server Started') )