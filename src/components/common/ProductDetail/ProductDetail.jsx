import { Skeleton } from "@mui/material";

const ProductDetail = ({ img, quantity, title, price, min, add, number, error, stock, action, action2, product }) => {
    return (
        <div className="productDetail">
            <div className="productInfo">
                <div className="detailFirstPart">
                    <div>
                        {title ? <h2>{title}</h2> : <Skeleton variant="rectangular" width={420} height={40} />}
                    </div>
                    <div>
                        {img ? <img src={img} alt="" /> : <Skeleton variant="rectangular" width={400} height={200} />}
                    </div>
                </div>
                <div className="detailSecondPart">
                    <div>
                        {price ? <p className="price">${price}</p> : <Skeleton variant="rectangular" width={180} height={50} />}
                    </div>
                    <div className="quantity">
                        {stock ? <p>{`Stock disponible: ${stock}`}</p> : <Skeleton variant="rectangular" width={100} height={40} />}
                        {stock ?
                            <div className="quantityButtons">
                                <button onClick={min}>-</button>
                                <p>{number}</p>
                                <button onClick={add}>+</button>
                            </div> : <Skeleton variant="rectangular" width={100} height={100} />}
                    </div>
                    <div>
                        {number > 0 && <button onClick={() => {
                            action(product, number);
                        }}
                        >Add to cart!</button>}
                    </div>
                    <p className="error">
                        {error}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail