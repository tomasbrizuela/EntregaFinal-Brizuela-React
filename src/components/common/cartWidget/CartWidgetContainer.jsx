import React, { useContext } from 'react'
import { CartContext } from '../../../Context/CartContext'
import CartWidget from './cartWidget';

const CartWidgetContainer = () => {
    const { cart } = useContext(CartContext);

    return (
        <>
            <CartWidget cart={cart} />
        </>
    )
}

export default CartWidgetContainer