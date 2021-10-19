import React, { Component, Fragment } from "react";
import CardProduct from "../CardProduct/CardProduct";
import './Product.css';

class Product extends Component {
    state = {
        order: 4,
        name: 'Siska'
    }

    handleCounterChange = (newValue) =>{
        this.setState({
            order: newValue
        })
    }

    render() {
        return (
            <Fragment>
                <div className="header">
                    <div className="logo">
                        <img src="https://cf.shopee.co.id/file/3151d0c82a520c26f45791624c5be24f" />

                    </div>
                    <div className="troley">
                        <img src="https://img.favpng.com/13/3/13/computer-icons-vector-graphics-shopping-cart-online-shopping-icon-design-png-favpng-Zt4Z0cFjFhi4BYGb60XCtWSsf.jpg" />
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>
                <CardProduct onCounterChange={(value) => this.handleCounterChange(value)}/>
            </Fragment>
        );
    }
}

export default Product;