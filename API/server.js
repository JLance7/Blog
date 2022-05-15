require('dotenv').config()
const mongoose = require('mongoose')
const app = require('./index.js')
const port = 3000

mongoose.connect(process.env.CONNECTION_STRING, {useNewUrlParser: true}, err => {
  if (err)
    console.log('error connecting to DB')
  else {
    console.log('connected to DB')
    app.listen(port, () => {
      console.log('listening')
    })
  }  
})