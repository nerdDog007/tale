const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const newsRoutes = require('./routes/newsRoute')
const connectDB = require('./utils/db')

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

connectDB()

app.use('/api', newsRoutes)

module.exports = app