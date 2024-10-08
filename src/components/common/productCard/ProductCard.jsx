import { Link } from 'react-router-dom';
import './productCard.css';

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
                    <p className='productPrice'>${price}</p>
                </div>
                <div>
                    <Link to={`/products/${id}`} >
                        <button>See details!</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ProductCard