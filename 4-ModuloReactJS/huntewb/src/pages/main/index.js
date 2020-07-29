import React, {Component} from 'react'
import api from "../../services/api"
import { Link } from 'react-router-dom'

import './styles.css'

export default class Main extends Component{
    state = {
        products: [],
        productInfo: {},
        page: 1,
    }

    componentDidMount(){ //Isto faz com que seja executado uma ação logo que o componente main for exibido em tela
        this.loadProducts();
    }

    loadProducts = async (page = 1) =>{
        const response = await api.get(`/products?page=${page}`)

        const { docs, ...productInfo } = response.data

        this.setState({ products: docs })
        this.setState({ productInfo})
        this.setState({ page })
    };

    prevPage = () =>{
        const { page } = this.state;

        if(page === 1) return

        const pageNumber = page - 1;

        this.loadProducts(pageNumber)
    }

    nextPage = () =>{
        const { page, productInfo } = this.state;

        if(page === productInfo.pages){ //productInfo.pages retorna o numero total de paginas
            return 
        }

        const pageNumber = page + 1;

        this.loadProducts(pageNumber)
    }

    render(){
        const {products, page, productInfo} = this.state

        return(
            <div className="product-list">
                {products.map(product => {
                    return(
                        <article key={product._id}>
                            <strong>{product.title}</strong>
                            <p>{product.description}</p>
                            <Link to={`/products/${product._id}`}>Acessar</Link>
                        </article>
                    )
                })}
                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page === productInfo.pages} onClick={this.nextPage}>Proximo</button>
                </div>
            </div>
        )
    }
}