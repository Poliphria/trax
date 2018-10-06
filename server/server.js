// packages that we will need for the server
const express = require('express')
const app = express()
const errorhandler = require('errorhandler')
const logger = require('morgan')
const bodyParser = require('body-parser')

const port = 8080

app.disable('x-powered-by')

mongoose.connect('mongodb://localhost/test')
    .then(() => { console.log('Connection successful!') })
    .catch((err) => { console.log(err) })

app.use(logger('dev'))
app.use(bodyParser.json())

// use only in dev mode
if (process.env.NODE_ENV === 'development') {
    app.use(errorhandler())
}

app.use('/', indexRouter)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})