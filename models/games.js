const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema(
  {
    title: String,
    genre: String,
    completed: Boolean
  }
)
const Games = mongoose.model('Games', gameSchema);
module.exports = Games
