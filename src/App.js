import HeaderStore from './components/Store/Header/HeaderStore'
import Products from './components/Store/Products'
import ShoppingCart from './components/Store/ShoppingCart'
import api from './api/data.js'

function App() {

    return (
        <div className="App">
            <HeaderStore />
            <Products api={api} />
            <ShoppingCart />
        </div>
    );
}

export default App;
