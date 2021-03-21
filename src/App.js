import HeaderStore from './components/Store/Header/HeaderStore'
import Products from './components/Store/Products'
import ShoppingCart from './components/Store/ShoppingCart'
import api from './api/data.js'

import { Component } from 'react'

class App extends Component {
    constructor() {
        super()
        this.state = {}
        this.shoppingList =
            localStorage.getItem('shoppingList')
                ? JSON.parse(localStorage.getItem('shoppingList')) : {}
        this.appMethods = {
            addToList: this.addToList.bind(this)
        }
    }

    addToList = function(list) {
        this.shoppingList = list
        this.setState(this.state)

        localStorage.setItem('shoppingList', JSON.stringify(list))
        console.log()
    }

    render() {
        return (
            <>
                <HeaderStore />

                <div style={appContainer}>

                    <Products
                        api={api}
                        state={this.state}
                        appMethods={this.appMethods}
                        shoppingList={this.shoppingList}
                    />

                    <ShoppingCart
                        api={api}
                        shoppingList={this.shoppingList}
                        appMethods={this.appMethods}
                        state={this.state}
                    />

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
