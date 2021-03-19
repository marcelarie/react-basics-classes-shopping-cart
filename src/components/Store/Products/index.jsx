import { Component } from 'react'
import Product from './Product'

class Products extends Component {

    constructor(props) {
        super(props)
        this.state = {
            sneakers: []
        }
        this.api = this.props.api
    }

    componentDidMount() {
        this.api.then(api => {
            const sneakers = api.data.results;
            this.setState({ sneakers })
        })
    }

    render() {
        return (
            this.state.sneakers.map((sneaker, index) =>
                <Product key={index} sneaker={sneaker} />
            )
        )
    }
}

export default Products
