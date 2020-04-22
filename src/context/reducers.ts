export const ADD_PRODUCT :string = 'ADD_PRODUCT';
export const REMOVE_PRODUCT :string = 'REMOVE_PRODUCT';

export interface Product {
    id: string,
    description: string
}

export interface CartItem {
    product: Product,
    quantity: number
}

interface State {
    cart: CartItem[];
}

  
export interface Action { type: string }

export interface AddProductAction extends Action {
    payload: Product
}
  
export interface RemoveProductAction extends Action {
    payload: string
}


const addProductToCart = (product: Product, state: State) => {
    const updatedCart = [...state.cart];
    const updatedItemIdx = updatedCart.findIndex(item => item.product.id === product.id);

    if (updatedItemIdx < 0) {
        updatedCart.push({product:{...product}, quantity: 1})
    } else {
        const updatedItem = {
            ...updatedCart[updatedItemIdx]
        }

        updatedItem.quantity++
        updatedCart[updatedItemIdx] = updatedItem
    }

    return { ...state, cart: updatedCart}
}

const removeProductFromCart = (productId: string, state: State) => {

    return { ...state, cart: []};
}

// The Type Guard Functions
function isAddProductAction(action: Action): action is AddProductAction {
    return action.type === ADD_PRODUCT
}

function isRemoveProductAction(action: Action): action is RemoveProductAction {
    return action.type === REMOVE_PRODUCT
} 
  

export const shopReducer = (state: State, action: Action) => {
    if(isAddProductAction(action)) {
        return addProductToCart(action.payload, state);
    }

    if(isRemoveProductAction(action)) {
        return removeProductFromCart(action.payload, state);
    }

}