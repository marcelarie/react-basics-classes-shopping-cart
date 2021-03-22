import HeaderStore from './components/Store/Header/HeaderStore'
import Products from './components/Store/Products'
import ShoppingCart from './components/Store/ShoppingCart'
import api from './api/data.js'
import { useState } from 'react'
// import { Component } from 'react'

function App() {
    const [state, setState] = useState({})

    const [shoppingList, setShoppingList] = useState(localStorage.getItem('shoppingList')
        ? JSON.parse(localStorage.getItem('shoppingList')) : {})

    const addToList = (list) => {
        setShoppingList(list)
        localStorage.setItem('shoppingList', JSON.stringify(list))
        setState({ state })
    }

    const [appMethods, setAppMethods] = useState({ addToList });

    return (
        <>
            <HeaderStore />

            <div style={appContainer}>

                <Products
                    api={api}
                    state={state}
                    appMethods={appMethods}
                    shoppingList={shoppingList}
                    setState={setState}
                />

                <ShoppingCart
                    api={api}
                    shoppingList={shoppingList}
                    appMethods={appMethods}
                    state={state}
                />

            </div>
        </>
    )
}

const appContainer = {
    display: 'flex',
    width: '80%',
    margin: '0 auto'
}

export default App;


