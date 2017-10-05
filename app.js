// imports
const express = require('express')
const routes = require('./routes/index')
const errorHandler = require('./handlers/errors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
// create express app
const app = express()

// dont show the engine
app.disable('x-powered-by')

// middleware
app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// routes
app.use('/', routes)

// errorHandling
app.use(errorHandler.notFound)
app.use(errorHandler.defaultError)

// start app
app.set('port', process.env.PORT || 8080)
const server = app.listen(app.get('port'), () => {
  console.log(`API running on port ${server.address().port}`)
})

// export app for testing puposes
module.exports = app
