import { Link } from "react-router-dom"
import Cart from "./Cart"
import { useContext, useState } from "react";
import { CartContext } from "../../../Context/CartContext";

const CartContainer = () => {
    const { cart, total } = useContext(CartContext)
    const [buy, setBuy] = useState(false);
    const [visible, setVisible] = useState(false);


    return (
        <>
            <Cart cart={cart} total={total} buy={buy} set={setBuy} visible={visible} setVisible={setVisible} />

        </>
    )
}

export default CartContainer