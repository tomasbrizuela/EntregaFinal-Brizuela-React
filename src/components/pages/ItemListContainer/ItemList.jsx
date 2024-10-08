import ProductCardContainer from "../../common/productCard/ProductCardContainer"

const ItemList = ({ product }) => {
    return (
        <div>
            <div>
                <h2 className='tituloProductos'>Productos Populares</h2>
            </div>
            <div className='productList'>
                {
                    product.map((item) => {
                        return (
                            <div key={item.id}>
                                <ProductCardContainer product={item} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ItemList