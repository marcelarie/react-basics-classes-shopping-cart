
function ProductShoppingCart({ sneaker, addToList, shoppingList }) {

    const handleChange = (e, mode) => {
        e.preventDefault()
        if (sneaker.quantity <= 1) {
            sneaker.quantity = 1
            mode && sneaker.quantity++;
            addToList(shoppingList)
        } else {
            mode ? sneaker.quantity++ : sneaker.quantity--;
            addToList(shoppingList)
        }
    }

    const removeItemOfCart = (event, id) => {
        event.preventDefault();
        delete shoppingList[id]
        addToList(shoppingList)
    }

    const price = sneaker.retailPrice;

    return (
        <>
            <p style={shoppingProductTitle}>{sneaker.name}</p>
            <div style={shoppingProductContainer}>
                <div style={{ flex: 2 }}>
                    <img style={{ width: '100%', minWidth: '70px' }} src={sneaker.media.smallImageUrl} alt={sneaker.name} />
                </div>
                <form style={shoppingProductInfo}>
                    <button min="1" max="50" value={sneaker.quantity} onClick={(e) => handleChange(e, true)}>+</button>
                    {
                        sneaker.quantity > 1 &&
                        <button min="1" max="50" value={sneaker.quantity} onClick={(e) => handleChange(e, false)}>-</button>
                    }
                    <p>x{sneaker.quantity}</p>
                    <p>{price ? price * sneaker.quantity : 100 * sneaker.quantity} €</p>
                    <button onClick={e => removeItemOfCart(e, sneaker.id)}>Remove</button>
                </form>
            </div>
        </>
    )
}

const shoppingProductTitle = {
    overflow: 'hidden',
    maxWidth: '150px',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    fontSize: '1em'
}

const shoppingProductContainer = {
    display: 'flex',
    padding: '0 1em',
}

const shoppingProductInfo = {
    display: 'flex',
    flexDirection: 'column',
    flex: 0.5,
    margin: '0 1rem'
}
export default ProductShoppingCart
