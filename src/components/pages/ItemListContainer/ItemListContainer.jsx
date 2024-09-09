import './ItemListContainer.css'
import ProductCard from '../../common/productCard/ProductCard.jsx'
export const ItemListContainer = ({ saludo }) => {

    return (
        <div>
            <div>

                <h2 className='tituloProductos'>Productos Populares</h2>
            </div>
            <div className='productList'>
                <p>{saludo}</p>
            </div>
        </div>
    )
}

export default ItemListContainer
