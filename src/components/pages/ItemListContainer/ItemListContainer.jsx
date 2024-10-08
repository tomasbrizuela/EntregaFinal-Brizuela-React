import './ItemListContainer.css'
import ProductCard from '../../common/productCard/ProductCard.jsx'
import ItemList from './ItemList.jsx'
import { useEffect, useState } from 'react';
import { products } from './../../../../productsMock.js'
import { ContentPasteOffSharp } from '@mui/icons-material';
export const ItemListContainer = () => {

    const [productList, setProducts] = useState([]);

    useEffect(() => {
        setProducts(products)
    }, [productList])

    return (
        <>
            <ItemList product={productList} />
        </>
    )
}

export default ItemListContainer
