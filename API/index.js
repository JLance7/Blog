const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { corsOptionsRequests, corsSimpleRequests } = require('./Middleware/cors')
const removePoweredBy = require('./Middleware/removePoweredBy')
const homePage = require('./Endpoints/homePage')
const postRouter= require('./Endpoints/posts')

//middleware
app.options('*', corsOptionsRequests)
app.use(corsSimpleRequests)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(removePoweredBy)

//endpoints
app.get('/', homePage)
app.use('/posts', postRouter)

module.exports = app