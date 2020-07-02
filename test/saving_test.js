const mocha = require('mocha')
const assert = require('assert')
const CheckOut = require('../models/checkout')
const mongoose = require('mongoose')

describe('Saving test', () => {

    it('Saves record to database', (done) => {

        var checkout = new CheckOut({
            name: 'Ice Cream',
            price:13,
            imgsrc:'google.com'
        })

        checkout.save().then(() => {
            assert(checkout.isNew === false)
            done();
        })
    })
})