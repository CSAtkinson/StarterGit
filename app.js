const express = require('express');
const app = express();


app.get('/', (req,res) => {
    res.send("Having trouble rendering an HTML page through express for now. Will work on it more tomorrow, so here is a res.send with git stuffs.")
})

app.listen(3000, () => {
    console.log("Listening on port 3000")
})