import { Component } from 'react'

class ProductShoppingCart extends Component {
    render() {
        return (
            <div>
                <img />
                <p>Product name</p>
                <p>66 E</p>
                <form>
                    <input type="number" min="1" max="50" defaultValue={1} />
                    <button>Remove</button>
                </form>
            </div>
        )
    }
}

export default ProductShoppingCart
