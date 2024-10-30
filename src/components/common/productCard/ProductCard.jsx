import './productCard.css';
import { Skeleton } from '@mui/material';

const ProductCard = ({ id, price, title, img }) => {
    return (
        <>
            <div className='product'>
                <div>
                    <img src={img} alt="" className='productImg' />
                </div>
                <div>
                    <h4 className='productTitle'>{title}</h4>
                </div>
                <div>
                    {price ? <p className='productPrice'>${price}</p> : <Skeleton variant="rounded" width={300} height={60} />}
                </div>

            </div>
        </>
    )
}

export default ProductCard