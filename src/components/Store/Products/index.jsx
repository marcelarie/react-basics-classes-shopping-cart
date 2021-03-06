import { Component } from 'react'
import Product from './Product'

class Products extends Component {

    constructor(props) {
        super(props)
        this.state = this.props.state
        this.state.sneakers = []
        this.api = this.props.api
        this.shoppingList = this.props.shoppingList
        this.appMethods = this.props.appMethods
    }

    componentDidMount() {
        this.api.then(api => {
            const sneakers = api.data.results;
            this.setState({ sneakers })
        })
    }

    render() {
        return (
            <div style={mainProductsContainer}>
                {
                    this.state.sneakers.map((sneaker, index) =>
                        sneaker.media.imageUrl
                        &&
                        <Product
                            key={index}
                            state={this.state}
                            shoppingList={this.shoppingList}
                            sneaker={sneaker}
                            appMethods={this.appMethods}
                        />
                    )
                }
            </div>
        )
    }
}

const mainProductsContainer = {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 3,
    // width: '100vw',
    // height: '100vh',
}

export default Products
