import React, { Component } from "react";

class CardProduct extends Component {
    state = {
        order: 4,
        name: 'Siska'
    }
    handleCounterChange = (newValue) =>{
        this.props.onCounterChange(newValue)
    }
    handlePlus = () => {
        this.setState({
            order: this.state.order + 1
        }, () => {
            this.handleCounterChange(this.state.order);
        })
    }
    handleMinus = () =>{
        if(this.state.order > 0){
        
            this.setState({
                order: this.state.order - 1
            }, () => {
                this.handleCounterChange(this.state.order);
            })
        }
    }
    render() {
        return (
                <div className="card">
                    <div className="img-thumb-prod">
                        <img src="https://play-lh.googleusercontent.com/vWxdyTqxpwBpe4RaDarE-fKV3BgrO4MyriimYsMA96CJvcDMBuMJHtH9cWs-y1jZaIU=w220-rw" />
                    </div>
                    <p className="product-title">Daging ayam</p>
                    <p className="product-price">Rp. 410.000</p>
                    <div>
                        <button className="minus" onClick={this.handleMinus}>-</button>
                        <input type="text" value={this.state.order} />
                        <button className="plus" onClick={this.handlePlus}>+</button>
                    </div>
                </div>
        );
    }
}

export default CardProduct;