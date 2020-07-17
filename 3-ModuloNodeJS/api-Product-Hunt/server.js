const express = require('express')
const mongoose = require('mongoose')

//Iniciando o app
const app = express();

//iniciando o DB
mongoose.connect('mongodb://')

app.get("/", (req, res) => {
    res.send("Hello Mundo")
})

app.listen(3008)