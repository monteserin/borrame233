import { createContext, useState } from 'react';
import Cart from '../screens/Cart';

const Provider = ({ children }) => {
    const [state, setState] = useState([]);


    const isInCart = (product) => {
        return state.filter(productInCart => productInCart.id === product.id).length !== 0 ? true : false;
    }

    const addToCart = (product) => {
        if (isInCart(product)) return
        else setState([...state, product])
    }

    const clearProduct = (product) => {
        setState(state.filter(productInCart => productInCart.id !== product.id));
    }

    return (
        <AppContext.Provider value={{ state, addToCart, clearProduct }}>
            {children}
        </AppContext.Provider>
    );
}

export default Provider;
export const AppContext = createContext();