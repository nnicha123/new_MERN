const mongoose = require('mongoose')

mongoose.Promise = global.Promise

before((done) => {
    // connect to mongodb
    mongoose.connect('mongodb://localhost/newProj', { useNewUrlParser: true, useUnifiedTopology: true })

    mongoose.connection.once('open', function () {
        console.log('Connection has been made...')
        done()
    }).on('error', function (error) {
        console.log('Connection error', error)
    })
})

beforeEach((done) => {
    mongoose.connection.collections.checkouts.drop(() => {
        done()
    })
})

