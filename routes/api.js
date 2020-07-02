const express = require('express')
const router = express.Router()

router.get('/items',(req,res) => {
    res.send({type:"GET"})
})
router.post('/items',(req,res) => {
    res.send({type:"POST"})
})
router.put('/items/:id',(req,res) => {
    res.send({type:"PUT"})
})
router.delete('/items/:id',(req,res) => {
    res.send({type:"DELETE"})
})

module.exports = router