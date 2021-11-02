const express = require('express');
const router = express.Router();
const Games = require('../models/games.js')

router.get('/', (req, res)=>{
  Games.find({}, (err, foundgames) => {
    res.json(foundgames)
  })
})

router.post('/', (req, res) => {
  Games.create(req.body, (err, createdgames) => {
    res.json(createdgames)
  })
})

router.delete('/:id', (req, res) => {
  Games.findByIdAndRemove(req.params.id, (err, deletedgames) => {
    res.json(deletedgames)
  })
})

router.put('/:id', (req, res) => {
  Games.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedgames) => {
    res.json(updatedgames)
  })
})

module.exports = router
