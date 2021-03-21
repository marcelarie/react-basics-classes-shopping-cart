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
            <div style={shoppingProductContainer}>
                <img style={{ width: '70px', flex: 1.5 }} src={this.sneaker.media.smallImageUrl} alt={this.sneaker.name} />
                <form style={shoppingProductInfo}>
                    <p style={shoppingProductTitle}>{this.sneaker.name}</p>
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
        )
    }
}
const shoppingProductTitle = {
    overflow: 'hidden',
    width: '150px',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    fontSize: '1em'
}

const shoppingProductContainer = {
    display: 'flex',
    padding: '2em 0',
}

const shoppingProductInfo = {
    display: 'flex',
    flexDirection: 'column',
    flex: 1
}
export default ProductShoppingCart
