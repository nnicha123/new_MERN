const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const CheckOutSchema = new Schema({
    name:String,
    price:Number,
    imgsrc:String
})

const CheckOut = mongoose.model('checkout',CheckOutSchema)
module.exports = CheckOut