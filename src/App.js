import HeaderStore from './components/Store/Header/HeaderStore'
import Products from './components/Store/Products'
import ShoppingCart from './components/Store/ShoppingCart'
import api from './api/data.js'

function App() {

    return (
        <>
            <HeaderStore />
            <div style={appContainer}>
                <Products api={api} />
                <ShoppingCart />
            </div >
        </>
    );
}

const appContainer = {
    display: 'flex',
    margin: 0
}

export default App;
