import { Component } from 'react'

class ProductShoppingCart extends Component {
    constructor(props) {
        super(props)
        this.sneaker = this.props.item
        this.addToList = this.props.addToList
    }

    handleChange = (e, mode) => {
        e.preventDefault()
        if (this.sneaker.quantity <= 1) {
            this.sneaker.quantity = 1
            mode && this.sneaker.quantity++;
        } else {
            mode ? this.sneaker.quantity++ : this.sneaker.quantity--;
            console.log(this.sneaker.quantity)
            this.addToList(this.props.shoppingList)
        }
        this.forceUpdate();
    }

    render() {
        const price = this.sneaker.retailPrice;
        return (
            <>
            <p style={shoppingProductTitle}>{this.sneaker.name}</p>
            <div style={shoppingProductContainer}>
                <div style={{ flex:2 }}>
                    <img style={{ width: '100%', minWidth: '70px'}} src={this.sneaker.media.smallImageUrl} alt={this.sneaker.name} />
                </div>
                <form style={shoppingProductInfo}>
                    <button min="1" max="50" value={this.sneaker.quantity} onClick={(e) => this.handleChange(e, true)}>+</button>
                    {
                    this.sneaker.quantity > 1 &&
                        <button min="1" max="50" value={this.sneaker.quantity} onClick={(e) => this.handleChange(e, false)}>-</button>
                    }
                    <p>x{this.sneaker.quantity}</p>
                    <p>{price ? price * this.sneaker.quantity : 100 * this.sneaker.quantity} €</p>
                    <button>Remove</button>
                </form>
            </div>
            </>
        )
    }
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
