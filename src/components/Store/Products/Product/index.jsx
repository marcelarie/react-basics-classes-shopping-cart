import { useEffect } from 'react'

function Product({ sneaker, shoppingList, appMethods }) {

    const addProductToList = function(product) {

        const currentProductOnList = shoppingList[product.id];
        shoppingList[product.id] = product

        // filter quantity 
        if (currentProductOnList) {
            shoppingList[product.id].quantity++;
        } else {
            shoppingList[product.id].quantity = 1;
        }
        appMethods.addToList(shoppingList)
    }

    const price = sneaker.retailPrice;

    return (
        <div style={productContainer}>
            <img style={{ width: '150px' }} src={sneaker.media.smallImageUrl} alt={sneaker.name} />
            <p style={productTitle}>{sneaker.name}</p>
            <p>{sneaker.brand}</p>
            <p>{price ? price : '100'} €</p>
            <p style={productButton} onClick={() => addProductToList(sneaker)}>Add to card</p>
        </div>
    )
}

const productContainer = {
    flex: '1 0 21%',
    margin: '0.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    // border: '1px solid gray'
}

const productTitle = {
    overflow: 'hidden',
    width: '150px',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    fontSize: '1em'
}

const productButton = {
    all: 'unset',
    backgroundColor: 'darkgray',
    textAlign: 'center',
    borderRadius: '5px',
    width: '8rem',
    fontSize: '0.8rem',
    padding: '0.5rem 0.1rem',
    verticalAlign: 'middle'

}

export default Product
