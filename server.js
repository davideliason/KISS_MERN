const express = require('express');
const app = express();
const path	= require('path');

require('dotenv').config();
const port = process.env.PORT || 8080;
const uri = process.env.MLAB;

var data = [
    {
        "id" : "001",
        "name" : "John",
        "text" : "hello"
    },
    {
        "id" : "002",
        "name" : "Bob",
        "text" : "coffee please"
    },
]

app.get('/api/data', (req,res,next) => {
  res.json(data);
});



app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });

app.listen(port, () => {
    console.log(`server at port ${port}`);
});