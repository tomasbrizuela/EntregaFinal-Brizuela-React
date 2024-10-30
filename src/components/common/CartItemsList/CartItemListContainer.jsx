import CartItemList from "./CartItemList"

const CartItemListContainer = ({ cart }) => {
    console.log("Updated!")
    return (
        <>
            <CartItemList cart={cart} />
        </>
    )
}

export default CartItemListContainer