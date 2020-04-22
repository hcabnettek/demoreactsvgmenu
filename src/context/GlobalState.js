import React, {useReducer} from 'react'
import ShopContext from './shop-context'
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT} from './reducers'

const GlobalState = props =>  {

    const products = []

    const [cartState, dispatch] = useReducer(shopReducer, {cart: []})

    const func1 = () =>{
        setTimeout(() => dispatch({type: ADD_PRODUCT, product: {}}),700)
    }
    const func2 = () =>{
        setTimeout(() => dispatch({type: REMOVE_PRODUCT, product: {}}), 700)
    }

    return (
        <ShopContext.Provider value={{
            products: products,
            cart: cartState.cart,
            addProductToCart: func1,
            removeProductFromCart: func2
        }}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default GlobalState
