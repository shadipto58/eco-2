import React, { useEffect, useState } from 'react';
import { faArrowRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Popular.css'
import Product from './Product/Product';
import { useLoaderData } from 'react-router-dom';

const Popular = () => {

    // const [products, setProduct] = useState([]);

    // useEffect(() => {
    //     fetch('product.json')
    //         .then(res => res.json())
    //         .then(data => setProduct(data))
    // }, [])

    const products = useLoaderData();
    //console.log(products);

    return (
        <div id='popular'>
            <div className='popular-wrapper container mx-auto'>
                <div className='popular-title'>
                    <h2>Popular Products <span></span></h2>
                    <p>View All <FontAwesomeIcon icon={faArrowRight} /></p>
                </div>
                <div className='popular-item-wrapper'>

                    {
                        products.map(product => <Product key={product._id} product={product}></Product>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Popular;