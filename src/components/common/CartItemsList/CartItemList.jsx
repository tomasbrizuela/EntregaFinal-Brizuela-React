import CartItemContainer from "../CartItem/CartItemContainer"
import './CartItemListStyles.css'
const CartItemList = ({ cart }) => {
    return (
        <div>
            {cart.map((item) => {
                return <CartItemContainer item={item} key={item.id} />
            })}
        </div>
    )
}

export default CartItemList