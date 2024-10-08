import './productCard.css';

const ProductCard = ({ price, title, img }) => {

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
            </div>
        </>
    )
}

export default ProductCard