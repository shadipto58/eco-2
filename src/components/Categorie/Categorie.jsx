import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Categorie.css'

const Categorie = () => {
    return (
        <div id='categorie'>
            <div className='categorie-wrapper container mx-auto'>
                <div className='categorie-title'>
                    <h2>Popular Categories <span></span></h2>
                    <p>View All <FontAwesomeIcon icon={faArrowRight} /></p>
                </div>
                <div className='categorie-item-wrapper'>
                    <div className='categorie-item'>
                        <img src="./images/image-1.png" alt="" />
                        <p>Fresh fruit</p>
                    </div>
                    <div className='categorie-item'>
                        <img src="./images/image-2.png" alt="" />
                        <p>Fresh fruit</p>
                    </div>
                    <div className='categorie-item'>
                        <img src="./images/image-3.png" alt="" />
                        <p>Fresh fruit</p>
                    </div>
                    <div className='categorie-item'>
                        <img src="./images/image-4.png" alt="" />
                        <p>Fresh fruit</p>
                    </div>
                    <div className='categorie-item'>
                        <img src="./images/image-5.png" alt="" />
                        <p>Fresh fruit</p>
                    </div>
                    <div className='categorie-item'>
                        <img src="./images/image-6.png" alt="" />
                        <p>Fresh fruit</p>
                    </div>
                    <div className='categorie-item'>
                        <img src="./images/image-7.png" alt="" />
                        <p>Fresh fruit</p>
                    </div>
                    <div className='categorie-item'>
                        <img src="./images/image-8.png" alt="" />
                        <p>Fresh fruit</p>
                    </div>
                    <div className='categorie-item'>
                        <img src="./images/image-9.png" alt="" />
                        <p>Fresh fruit</p>
                    </div>
                    <div className='categorie-item'>
                        <img src="./images/image-10.png" alt="" />
                        <p>Fresh fruit</p>
                    </div>
                    <div className='categorie-item'>
                        <img src="./images/image-7.png" alt="" />
                        <p>Fresh fruit</p>
                    </div>
                    <div className='categorie-item'>
                        <img src="./images/image-11.png" alt="" />
                        <p>Fresh fruit</p>
                    </div>
                    <div className='categorie-item'>
                        <img src="./images/image-12.png" alt="" />
                        <p>Fresh fruit</p>
                    </div>
                    <div className='categorie-item'>
                        <img src="./images/image-5.png" alt="" />
                        <p>Fresh fruit</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categorie;