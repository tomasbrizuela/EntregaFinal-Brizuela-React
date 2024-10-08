import ProductCard from "./ProductCard"

const ProductCardContainer = ({ product }) => {
    return (
        <>
            <ProductCard {...product} />
        </>
    )
}

export default ProductCardContainer