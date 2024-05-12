const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())

const http = require('http')

app.use('/test', (_, res) => res.send({ true: true }))
const socketIo = require('socket.io')

const server = http.createServer(app)
const io = socketIo(server, { cors: '*'})
require('./socket')(io);



const routeri = require('./router')
app.use('/', routeri)

server.listen(4567, () => console.log('🎉listen'))