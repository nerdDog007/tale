const mongoose = require('mongoose')

const generalSchema = new mongoose.Schema({
  author: String,
  title: String,
  description: String,
  url: String,
  category: String,
  image: String,
  source: String,
  publishedAt: String,
})

module.exports = mongoose.model('general', generalSchema)