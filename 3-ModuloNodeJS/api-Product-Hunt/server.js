const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const requireDir = require('require-dir')

requireDir('./src/models') //Fazendo require em tds arquivos do model  cm o require dir


//Iniciando o app
const app = express();

app.use(express.json())

app.use(cors())

//iniciando o DB
const options = { //Array que contém todas as opções de configuração 
    keepAlive: 1,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  };

mongoose.connect("mongodb+srv://lucasp_alves8:Internacional1909@cluster0-d8as2.mongodb.net/starter?retryWrites=true&w=majority", options).then(()=>{
    console.log("Conectado com sucesso")
}).catch((err) => {
    console.log("Não conectado " + err)
})

//Configurando o Banco de dados MongoDb

//Rotas
app.use('/', require('./src/routes'))

app.listen(3008)