const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

requireDir('./src/models') //Fazendo require em tds arquivos do model  cm o require dir

const Product = mongoose.model('Product')

//Iniciando o app
const app = express();

//iniciando o DB
const options = { //colocando tds opções de configurações do mongo neste array para n precisaar escrever td
    keepAlive: 1,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  };

mongoose.connect("mongodb+srv://lucasp_alves8:Internacional1909@cluster0-d8as2.mongodb.net/Starter1?retryWrites=true&w=majority", options).then(()=>{
    console.log("Conectado com sucesso")
}).catch((err) => {
    console.log("Não conectado " + err)
})


//Rotas
app.get("/", (req, res) => {
    Product.create({
        title: 'Reactive Native',
        description: 'Built native apps with React',
        url: 'http://github.com/facebook/react-native'
    })


    return res.send("Hello Mundo")
})

app.listen(3008)