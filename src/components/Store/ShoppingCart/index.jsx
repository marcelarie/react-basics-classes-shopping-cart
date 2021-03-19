import { Component } from 'react'
import ProductShoppingCart from './Product'

class ShoppingCart extends Component {

    constructor(props) {
        super(props)
        this.props.state.methods = {
            renderSneaker: this.renderSneaker
        }
        console.log(this.list)
    }

    renderSneaker(id, mode) {
        console.log(mode)
        console.log(id)
    }

    render() {
        return (
            <div style={shoppingCartContainer}>
                <p>Shopping Cart</p>
                <hr />
                <p>TOTAL</p>
                <p>{this.list}</p>
                <hr />
                <p>Checkout</p>
            </div >
        )
    }
}


const shoppingCartContainer = {
    flex: 1,
}

export default ShoppingCart
