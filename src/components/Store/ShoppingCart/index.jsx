import { Component } from 'react'
import ProductShoppingCart from './Product'

class ShoppingCart extends Component {

    constructor(props) {
        super(props)
        this.shoppingList = this.props.shoppingList
    }

    render() {
        return (
            <div style={shoppingCartContainer}>
                <p>Shopping Cart</p>
                <hr />
                <p>TOTAL</p>
                {
                    this.shoppingList.map(item => {
                        return <ProductShoppingCart item={item} />
                    })
                }
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
