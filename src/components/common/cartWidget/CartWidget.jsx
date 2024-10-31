import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './cartWidget.css'
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';

export const CartWidget = ({ cart }) => {
    return (
        <>
            <Link to={'/cart'}>
                <Badge badgeContent={cart.length} color="primary">
                    <ShoppingCartIcon className='cartWidget' />
                </Badge>
            </Link>
        </>
    )
}

export default CartWidget
