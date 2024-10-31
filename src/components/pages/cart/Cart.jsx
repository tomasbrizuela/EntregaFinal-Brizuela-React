import { TextField } from "@mui/material"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CartItemListContainer from "../../common/CartItemsList/CartItemListContainer"
import './CartStyle.css'
const Cart = ({ cart, total, buy, set, visible, setVisible }) => {
    return (
        <div className="cartPage">
            <div className="cartItems">
                {cart.length > 0 ? <h2>Products</h2> : <></>}
                <CartItemListContainer cart={cart} />
            </div>
            <div className="paymentSummary">
                <div>
                    <h3>Resumen de tu compra</h3>
                </div>
                <div>
                    <h5>Total a pagar</h5>
                </div>
                <div>
                    <p>{"$" + total}</p>
                </div>
                {
                    total > 0 && <div>
                        <button onClick={() => { set(true) }} style={{ backgroundColor: "orange" }}>Comprar</button>
                    </div>
                }
            </div>
            {(buy && total > 0) &&
                <div className="formConfirm">
                    <h3 style={{ textAlign: "center" }}>Ingresá tus datos para confirmar la compra</h3>
                    <TextField
                        required
                        id="outlined-required"
                        label="Your Name"
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Your email"

                        style={{ fontSize: 9 }}
                    />
                    <button onClick={() => setVisible(true)}>
                        Confirmar
                    </button>
                </div>
            }

            {visible &&
                <div className="compraConfirmada">
                    <CheckCircleIcon style={{ fontSize: "140px", color: "#b4eeb4" }} />
                    <h3>Compra confirmada!</h3>
                    <p>Orden #</p>
                </div>}
        </div>
    )
}

export default Cart