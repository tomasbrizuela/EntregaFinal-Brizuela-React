import React, { useEffect, useState } from 'react'
import ProductDetail from './ProductDetail'
import './ProductDetail.css';
import { useParams } from 'react-router-dom'
import { products } from '../../../../productsMock';

const ProductDetailContainer = () => {
    const { id } = useParams();


    const [product, setProduct] = useState({});
    const [error, setError] = useState();

    useEffect(() => {

        let producto = products.find(item => item.id == id);
        setProduct(producto);

    }, [product])

    const [number, setNumber] = useState(0);

    const addQuantity = () => {
        if (number < product.Stock) {
            setNumber(number + 1);
            setError("")
        } else {
            setError('No hay más productos disponibles en stock')
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
            <ProductDetail {...product} add={addQuantity} min={minusQuantity} number={number} error={error} />
        </>
    )
}

export default ProductDetailContainer