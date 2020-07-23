const mongoose = require('mongoose')

const Product = mongoose.model('Product')

module.exports = {
//Criando um controller que iré listar, adicionar, editar e excluir produtos do banco de dados mongoDb

    async index(req, res){ //Return all products
        try{
            const {page = 1} = req.query;
            const products = await Product.paginate({}, {page, limit: 10});        
            return res.json(products);
        
        }catch(err){
            console.log("Erro: " + err )
        }
    },

    async show(req,res) { //Return product for id
        const product = await Product.findById(req.params.id)

        return res.json(product)
    },

    async store(req, res){ //creates a product
        const product = await Product.create(req.body)

        return res.json(product)
    },

    async update(req, res){ //Update a product
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true})
        
        return res.json(product)
    },

    async destroy(req, res){ //Remove a product
        await Product.findByIdAndRemove(req.params.id)

        return res.send()
    }
}