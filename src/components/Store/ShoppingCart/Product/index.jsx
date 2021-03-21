import { Component } from 'react'

class ProductShoppingCart extends Component {
    constructor(props) {
        super(props)
        this.sneaker = this.props.item
    }

    render() {
        return (
            <div>
                <p>Product name</p>
                <p>66 E</p>
                <form>
                    <input type="number" min="1" max="50" defaultValue={1} />
                    <img style={{ width: '150px' }} src={this.sneaker.media.smallImageUrl} alt={this.sneaker.name} />
                    <button>Remove</button>
                </form>
            </div>
        )
    }
}

export default ProductShoppingCart
