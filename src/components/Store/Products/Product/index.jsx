import { Component } from 'react'

class Product extends Component {
    constructor(props) {
        super(props)
        this.state = this.props.state
        this.sneaker = this.props.sneaker
        this.shoppingList = this.props.shoppingList
        this.addToList = this.props.appMethods.addToList
    }

    addProductToList = function(product) {
        this.shoppingList.push(product)
        this.addToList(this.shoppingList)

    }

    render() {
        const price = this.sneaker.retailPrice;
        return (
            <div style={productContainer}>
                <img style={{ width: '150px' }} src={this.sneaker.media.smallImageUrl} alt={this.sneaker.name} />
                <p style={productTitle}>{this.sneaker.name}</p>
                <p>{this.sneaker.brand}</p>
                <p>{price ? price : '100'} €</p>
                <p style={productButton} onClick={() => this.addProductToList(this.sneaker)}>Add to card</p>
            </div>
        )
    }
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
