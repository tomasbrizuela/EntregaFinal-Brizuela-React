import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './cartWidget.css'
import Badge from '@mui/material/Badge';

export const cartWidget = () => {
    return (
        <>
            <Badge badgeContent={4} color="primary">
                <ShoppingCartIcon className='cartWidget' />
            </Badge>
        </>
    )
}

export default cartWidget
