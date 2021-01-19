const express = require('express');
const { Console } = require('console');
const app = express();


app.get('/', (req, res) => {
    res.render('index')
})




app.listen(3000, (req, res) => {
    console.log("Listening on port 3000")
})