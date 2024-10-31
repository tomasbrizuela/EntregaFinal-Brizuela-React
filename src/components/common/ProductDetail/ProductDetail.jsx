import { Alert, Skeleton } from "@mui/material";
import { Link } from "react-router-dom";

const ProductDetail = ({ added, setter, img, quantity, title, price, min, add, number, error, stock, action, action2, product }) => {
    return (
        <div className="productDetail">
            {added &&
                <Link style={{ alignSelf: 'center', width: 300 }} to={"/cart"}>
                    <Alert severity="success" style={{ textDecoration: "underline", width: 300, borderRadius: 20, marginBottom: 50, position: "fixed", top: 100 }}>Added to cart!</Alert>
                </Link>}
            <div className="productInfo">

                <div className="detailFirstPart">
                    <div>
                        {title ? <h2>{title}</h2> : <Skeleton variant="rectangular" width={420} height={40} />}
                    </div>
                    <div>
                        {img ? <img src={img} alt="" style={{ width: "400", height: "200" }} /> : <Skeleton variant="rectangular" width={400} height={200} />}
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
                            setter(true)
                            setTimeout(() => {
                                setter(false)
                            }, 2000)
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