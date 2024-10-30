import './ItemListContainer.css'
import ItemList from './ItemList.jsx'
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../../firebaseConfig.js';
export const ItemListContainer = () => {

    const [productList, setProducts] = useState([]);

    useEffect(() => {
        try {
            let collectionProducts = collection(db, "productos");
            getDocs(collectionProducts)
                .then((res) => {
                    let products = res.docs.map((item) => item.data())
                    setProducts(products)
                })
        } catch (e) {
            console.log(e)
        }
    }, [])

    return (
        <>
            <ItemList product={productList} />
        </>
    )
}

export default ItemListContainer
