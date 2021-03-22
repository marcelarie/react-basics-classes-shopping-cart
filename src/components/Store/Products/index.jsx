import { useState, useEffect } from 'react'
import Product from './Product'

function Products({ state, api, shoppingList, appMethods }) {

    const [sneakers, setSneakers] = useState([])

    useEffect(() => {
        api.then(api => {
            const data = api.data.results;
            setSneakers(data)
        })
    }, [])

    return (
        <div style={mainProductsContainer}>
            {
                sneakers.map((sneaker, index) =>
                    sneaker.media.imageUrl &&
                    < Product
                        key={index}
                        state={state}
                        shoppingList={shoppingList}
                        sneaker={sneaker}
                        appMethods={appMethods}
                    />
                )
            }
        </div>
    )

}

const mainProductsContainer = {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 3,
    // width: '100vw',
    // height: '100vh',
}

export default Products
