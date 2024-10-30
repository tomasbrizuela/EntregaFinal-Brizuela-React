import { useContext } from "react"
import CartItem from "./CartItem"
import { CartContext } from "../../../Context/CartContext"

const CartItemContainer = ({ item }) => {
    const { deleteFromCart } = useContext(CartContext)
    return (
        <>
            <CartItem {...item} deleteFromCart={deleteFromCart} />
        </>
    )
}

export default CartItemContainer