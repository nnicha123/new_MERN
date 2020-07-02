const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

// connect to mongoDB
mongoose.connect('mongodb://localhost/checkout',{ useUnifiedTopology: true, 
useNewUrlParser: true })
// mongoose.Promise = global.Promise

app.use(bodyParser.json())
app.use('/api',require('./routes/api'))

app.listen(process.env.port || 4000,() => {
    console.log('Now listening for requests')
})