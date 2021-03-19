import { Component } from 'react'

class Product extends Component {
    constructor(props) {
        super(props)
        this.sneaker = this.props.sneaker
    }

    render() {
        console.log(this.sneaker)
        const price = this.sneaker.retailPrice;
        return (
            <div style={productContainer}>
                <img style={{ width: '150px' }} src={this.sneaker.media.thumbUrl} alt={this.sneaker.name} />
                <h1 style={productTitle}>{this.sneaker.name}</h1>
                <p>{this.sneaker.brand}</p>
                <p>{price ? price : '100'} €</p>
                <button style={productButton}>Add to card</button>
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

}

export default Product
