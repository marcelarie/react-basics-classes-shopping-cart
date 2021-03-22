import { Component } from 'react'
import ProductShoppingCart from './Product'

function ShoppingCart({ shoppingList, appMethods}) {

    const convertToArray = function(object) {
        console.log( object )
        var array = []
        for (const key in object) {
            array.push(object[key])
        }
        return array;
    }

    const shoppingStatus = (result) => {
        if (result.length) {
            return result.map(item => {
                return <ProductShoppingCart
                    addToList={appMethods.addToList}
                    shoppingList={shoppingList}
                    key={item.name} sneaker={item} />
            })
        } else {
            return <h5>No items on the list</h5>
        }
    }

    const totalPrice = (sneakerList) => {
        let totalPrice = 0;

        sneakerList.forEach(item => {
            const price = item.retailPrice * item.quantity
            totalPrice += price;
        })

        return totalPrice
    }

    const result = convertToArray(shoppingList)

    return (
        <div style={shoppingCartContainer}>
            <h3>Shopping Cart</h3>
            <hr />
            {
                shoppingStatus(result)
            }
            <hr />
            <p>TOTAL {result.length > 0 && totalPrice(result)} €</p>
           <p>Checkout</p>
        </div>
    ) 
}
        

const shoppingCartContainer = {
    flex: 1,
}

export default ShoppingCart
