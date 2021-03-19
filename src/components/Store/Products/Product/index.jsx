import { Component } from 'react'

class Product extends Component {
    constructor(props) {
        super(props)
        this.sneaker = this.props.sneaker
    }

    render() {
        return (
            <h1>{this.sneaker.name}</h1>
        )
    }
}

export default Product
