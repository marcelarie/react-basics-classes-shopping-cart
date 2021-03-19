import HeaderStore from './components/Store/Header/HeaderStore'
import Products from './components/Store/Products'
import ShoppingCart from './components/Store/ShoppingCart'
import api from './api/data.js'

import { Component } from 'react'
// import { createContext } from 'react'

// const appContext = createContext('0');

class App extends Component {
    constructor() {
        super()
        this.state = {
            shopping: []
        }
    }
    render() {
        return (
            <>
                <HeaderStore />
                <div style={appContainer}>
                    <Products api={api} state={this.state} />
                    <ShoppingCart api={api} state={this.state} />
                </div>
            </>
        )
    }
}

const appContainer = {
    display: 'flex',
    width: '80%',
    margin: '0 auto'
}

export default App;
