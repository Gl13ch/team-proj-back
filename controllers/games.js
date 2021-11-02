const express = require('express');
const router = express.Router();
const Games = require('../models/games.js')

router.get('/', (req, res)=>{
  Games.find({}, (err, foundpet) => {
    res.json(foundpet)
  })
})

router.post('/', (req, res) => {
  Games.create(req.body, (err, createdpet) => {
    res.json(createdpet)
  })
})

router.delete('/:id', (req, res) => {
  Games.findByIdAndRemove(req.params.id, (err, deletedpet) => {
    res.json(deletedpet)
  })
})

router.put('/:id', (req, res) => {
  Games.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedpet) => {
    res.json(updatedpet)
  })
})

module.exports = router
