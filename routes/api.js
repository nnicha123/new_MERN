const express = require('express')
const router = express.Router()
const CheckOut = require('../models/checkout')

router.get('/items',(req,res) => {
    res.send({type:"GET"})
})
router.post('/items',(req,res) => {
    
    CheckOut.create(req.body).then((checkout) => {
        res.send(checkout)
    })
})
router.put('/items/:id',(req,res) => {
    res.send({type:"PUT"})
})
router.delete('/items/:id',(req,res) => {
    res.send({type:"DELETE"})
})

module.exports = router