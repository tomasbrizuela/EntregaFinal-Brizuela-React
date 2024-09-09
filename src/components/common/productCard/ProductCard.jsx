import './productCard.css';

const ProductCard = ({ precio, nombre, img }) => {

    return (
        <>
            <div className='product'>
                <div>
                    <img src={img} alt="" className='productImg' />
                </div>
                <div>
                    <h4 className='productTitle'>{nombre}</h4>
                </div>
                <div>
                    <p className='productPrice'>${precio}</p>
                </div>
            </div>
        </>
    )
}

export default ProductCard