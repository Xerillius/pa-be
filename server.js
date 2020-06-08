const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const server = express()
server.use(helmet())
server.use(express.json())
server.use(cors())

const authRouter = require('./routers/authRouter')

server.use('/api/auth', authRouter)

server.get('/', (req, res) => {
  res.status(200).json({
    api: "is up!"
  })
})

module.exports = server