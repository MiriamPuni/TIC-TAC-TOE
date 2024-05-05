const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())

const routeri = require('./router')
app.use('/', routeri)

app.listen(4567, ()=>console.log('🎉listen'))