require("dotenv").config();

const express = require('express')
const app = express()
const cors = require('cors')
const LOG = require('../lib/log/log')
const connectToDB = require('../database')

connectToDB()

const port = process.env.PORT
app.use(express.json())
app.use(cors())


app.use('/user', require('./user/user.routes'))

app.listen(port, () => {
  LOG.info(`ENVIROMENT:[ ${process.env.NODE_ENV} ] Server started on port ${port}`)
})