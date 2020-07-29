import React, { Component } from 'react'
import api from '../../services/api'

import './Styles.css'

export default class Product extends Component{
    state = {
        Product: {},
    };
    
    async componentDidMount() {
        const { id } = this.props.match.params; //Capturando o id que vem da url

        const response = await api.get(`/products/${id}`) //Passano o id para a api
   
        this.setState({ Product: response.data})
    }

    render() {
        const { Product } = this.state

        return(
            <div className="product-info">
                <h1>{Product.title}</h1>
                <p>{Product.description}</p>

                <p>
        url: <a href={Product.url}>{Product.url}</a>
                </p>
            </div>
        )
    }
}