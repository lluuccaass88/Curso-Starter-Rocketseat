const mongoose = require('mongoose')

const Product = mongoose.model('Product')

module.exports = {
    async index(req, res){
        try{
            const products = await Product.find();        
            return res.json(products);
        
        }catch(err){
            console.log("Erro: " + err )
        }

       // Product.create({
        //    title: 'React-Native',
        //    description: 'build native apps witch React',
       //     url: 'http://github.com/facebook/react-native'
       // })

    }
}