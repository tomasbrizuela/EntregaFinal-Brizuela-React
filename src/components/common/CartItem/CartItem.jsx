import DeleteIcon from '@mui/icons-material/Delete';
import './CartItemStyle.css'
const CartItem = ({ id, title, quantity, img, total, deleteFromCart }) => {
    return (
        <div className='divItem'>
            <div className="cartItemImg">
                <img src={img} alt="" />
            </div>
            <div className="cartItemInfo">
                <div>
                    <h5>{title}</h5>
                </div>
                <div>
                    {"Cantidad: " + quantity}
                </div>
                <div>
                    {"Total: $" + total}
                </div>
                <div className='button'>
                    <button onClick={() => deleteFromCart(id)}>
                        <DeleteIcon />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CartItem