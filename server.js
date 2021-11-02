const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();
const PORT = 3001

app.use(express.json())
app.use(cors())

const gamesController = require('./controllers/games.js');
app.use('/games', gamesController);

app.listen(PORT, ()=>{
    console.log('listening...', PORT);
})

mongoose.connect('mongodb://localhost:27017/games')
mongoose.connection.once('open', ()=>{
    console.log('connected to mongod...');
});
