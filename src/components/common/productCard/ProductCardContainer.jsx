import { Link } from "react-router-dom"
import ProductCard from "./ProductCard"

const ProductCardContainer = ({ product }) => {
    return (
        <>
            <Link to={`/products/${product.id}`} style={{ "textDecoration": "none" }}>
                <ProductCard {...product} />
            </Link>

        </>
    )
}

export default ProductCardContainer