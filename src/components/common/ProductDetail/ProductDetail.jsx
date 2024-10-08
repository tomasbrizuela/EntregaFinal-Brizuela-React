const ProductDetail = ({ id, img, title, price, stock, min, add, number }) => {
    return (
        <div>
            <div>
                <h2>{title}</h2>
            </div>
            <div>
                {price}
            </div>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <button onClick={min}>-</button>
                <p>{number}</p>
                <button onClick={add}>+</button>
            </div>
            <div>
                <button>Buy now!</button>
            </div>
        </div>
    )
}

export default ProductDetail