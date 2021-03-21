import { Component } from 'react'
import ProductShoppingCart from './Product'

class ShoppingCart extends Component {

    constructor(props) {
        super(props)
        this.shoppingList = this.props.shoppingList
        this.addToList = this.props.appMethods.addToList
    }

    convertToArray = function(object) {
        var array = []
        for (const key in object) {
            array.push(object[key])
        }
        return array;
    }

    render() {
        const result = this.convertToArray(this.shoppingList)

        return (
            <div style={shoppingCartContainer}>
                <p>Shopping Cart</p>
                <hr />
                <p>TOTAL</p>
                {
                    result.map(item => {
                        return <ProductShoppingCart
                            addToList={this.addToList}
                            shoppingList={this.shoppingList}
                            key={item.name} item={item} />
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
