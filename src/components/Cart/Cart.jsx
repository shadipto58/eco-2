import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Cart = () => {

    const product = useLoaderData();
    console.log(product);

    return (
        <div>
            <h2>Cart components</h2>
            <h2>{product.name}</h2>
        </div>
    );
};

export default Cart;