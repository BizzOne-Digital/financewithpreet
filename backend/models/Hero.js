const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  headline: String,
  subheadline: String,
  image: String,
  ctaPrimary: String,
  ctaSecondary: String,
}, { timestamps: true })
module.exports = mongoose.model('Hero', schema)
