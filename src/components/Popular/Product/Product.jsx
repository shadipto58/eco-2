import React from 'react';
import { faCartShopping, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {

    const { _id, name, price, img } = product;
    return (
        <div className='popular-item'>
            <img src={img} alt="" />
            <div className='details-wrapper'>
                <div className='item-details'>
                    <h2>{name}</h2>
                    <h3>${price}</h3>
                    <div className='star'>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />

                    </div>
                </div>
                <div className='cart-icon-wrapper'>
                    <div className='cart-icon'>
                        <Link to={`/product/${_id}`}><FontAwesomeIcon icon={faCartShopping} /></Link>
                    </div>
                    <div className='cart-icon'>
                        <FontAwesomeIcon icon={faHeart} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;