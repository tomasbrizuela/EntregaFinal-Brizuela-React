import React, { useEffect, useState } from 'react'
import ProductDetail from './ProductDetail'
import { useParams } from 'react-router-dom'
import { products } from '../../../../productsMock';

const ProductDetailContainer = () => {
    const { id } = useParams();


    const [product, setProduct] = useState({});

    useEffect(() => {

        let producto = products.find(item => item.id == id);
        setProduct(producto);

    }, [product])

    const [number, setNumber] = useState(0);

    const addQuantity = () => {
        if (number < product.Stock) {
            setNumber(number + 1);
        }
    }

    const minusQuantity = () => {
        if (number > 0) {
            setNumber(number - 1);
        }

    }

    return (
        <>
            <ProductDetail {...product} add={addQuantity} min={minusQuantity} number={number} />
        </>
    )
}

export default ProductDetailContainer