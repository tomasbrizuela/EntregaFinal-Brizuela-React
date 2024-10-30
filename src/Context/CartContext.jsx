import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const [total, setTotal] = useState(0);


    useEffect(() => {
        let add = 0;
        cart.forEach((item) => add += item.total);
        setTotal(add);
    }, [cart])

    const deleteFromCart = (key) => {
        let newCart = cart.filter((item) => item.id != key);
        if (newCart.length === 0) {
            setCart([])
        } else {
            setCart(newCart)
        }
        console.log(cart)
    }

    const addToCart = (product, quantity) => {
        product.quantity = quantity;
        product.total = product.price * product.quantity;
        setCart([...cart, product]);
    }
    let data = { action: addToCart, cart, deleteFromCart, total }

    return <CartContext.Provider value={data}>{children}</CartContext.Provider>
}
