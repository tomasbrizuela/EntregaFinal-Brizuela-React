import React, { useContext, useEffect, useState } from 'react'
import ProductDetail from './ProductDetail'
import './ProductDetail.css';
import { useParams } from 'react-router-dom'
import { CartContext } from '../../../Context/CartContext';
import { db } from '../../../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const ProductDetailContainer = () => {
    const [added, setAdded] = useState(false);
    const { action } = useContext(CartContext);
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [error, setError] = useState();

    useEffect(() => {
        let productCollection = collection(db, "productos");
        getDocs(productCollection)
            .then((res) => {
                let listOfProducts = res.docs.map(item => item.data())
                let productSelected = listOfProducts.find(item => item.id == id)
                setProduct(productSelected);
            })
    }, [])

    const [number, setNumber] = useState(0);

    const addQuantity = () => {
        if (number < product.stock) {
            setNumber(number + 1);
            setError("")
        } else {
            setError('No hay más productos en stock')
        }
    }

    const minusQuantity = () => {
        if (number > 0) {
            setNumber(number - 1);
            setError("");
        }

    }

    return (
        <>
            <ProductDetail {...product} add={addQuantity} min={minusQuantity} number={number} error={error} action={action} product={product} added={added} setter={setAdded} />
        </>
    )
}

export default ProductDetailContainer