const express = require('express')
const router = express.Router()
const CheckOut = require('../models/checkout')

router.get('/items',(req,res) => {
    CheckOut.find({}).then((checkout) => {
        res.send(checkout)
    })
})
router.post('/items',(req,res) => {
    
    CheckOut.create(req.body).then((checkout) => {
        res.send(checkout)
    })
})
router.put('/items/:id',(req,res) => {
    CheckOut.findByIdAndUpdate({_id:req.params.id},req.body).then(() => {
        CheckOut.findOne({_id:req.params.id}).then((checkout) => {
            res.send(checkout)
        })
    })
})
router.delete('/items/:id',(req,res) => {
    CheckOut.findByIdAndRemove({_id:req.params.id}).then((checkout) => {
        res.send(checkout)
    })
})

module.exports = router