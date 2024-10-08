import { Link } from "react-router-dom"
import Cart from "./Cart"

const CartContainer = () => {
    return (
        <>
            <Link to={'/cart'}>
                <Cart />
            </Link>
        </>
    )
}

export default CartContainer