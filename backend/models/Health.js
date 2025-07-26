const mongoose = require('mongoose')

const healthSchema = new mongoose.Schema({
  author: String,
  title: String,
  description: String,
  url: String,
  category: String,
  image: String,
  source: String,
  publishedAt: String,
})

module.exports = mongoose.model('health', healthSchema)