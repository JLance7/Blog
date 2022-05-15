const mongoose = require('mongoose')

const mongooseSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('MyBlog', mongooseSchema)