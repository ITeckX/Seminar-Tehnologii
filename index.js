const express = require("express")
const req = require("express/lib/request")

const app = express()

app.get('/ping', (req, res) => {
    res.send('Cum');
console.log('cum');
})

app.listen(8080)