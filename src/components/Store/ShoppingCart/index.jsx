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

    shoppingStatus = (result) => {
        if (result.length) {
            return result.map(item => {
                return <ProductShoppingCart
                    addToList={this.addToList}
                    shoppingList={this.shoppingList}
                    key={item.name} item={item} />
            })
        } else {
            return <h5>No items on the list</h5>
        }
    }

    totalPrice = (sneakerList) => {

        let totalPrice = 0;

        sneakerList.forEach(item => {
            const price = item.retailPrice * item.quantity
            totalPrice += price;
        })

        return totalPrice
    }

    render() {
        const result = this.convertToArray(this.shoppingList)

        return (
            <div style={shoppingCartContainer}>
                <h3>Shopping Cart</h3>
                <hr />
                {
                    this.shoppingStatus(result)
                }
                <hr />
                <p>TOTAL {result.length && this.totalPrice(result)} €</p>
                <p>Checkout</p>
            </div >
        )
    }
}


const shoppingCartContainer = {
    flex: 1,

}

export default ShoppingCart
