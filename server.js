const express = require('express');

const app = express();
const PORT = 3001

app.get('/', (req, res)=>{
  res.send('Hello')
})

app.listen(PORT, ()=>{
    console.log('listening...', PORT);
});
