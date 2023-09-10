import React, { useContext } from 'react';
import './Hero.css';
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../../context/UserContext';

const Hero = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className='hero-section'>
            <Slider {...settings}>
                <div>
                    <div className='hero-wrapper container mx-auto'>
                        <div className='hero-left'>
                            <h5>Welcome to shopery</h5>
                            <h1>Fresh & Healthy Organic Food</h1>
                            <h3>Sale up to <span>30% OFF</span></h3>
                            <p>Free shipping on all your order. we deliver, you enjoy</p>
                            <button>Shop now <FontAwesomeIcon icon={faArrowRight} /></button>
                        </div>
                        <div className='hero-right'>
                            <img src="./images/Image.png" alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className='hero-wrapper container mx-auto'>
                        <div className='hero-left'>
                            <h5>Welcome to shopery</h5>
                            <h1>Fresh & Healthy Organic Food</h1>
                            <h3>Sale up to <span>30% OFF</span></h3>
                            <p>Free shipping on all your order. we deliver, you enjoy</p>
                            <button>Shop now <FontAwesomeIcon icon={faArrowRight} /></button>
                        </div>
                        <div className='hero-right'>
                            <img src="./images/Image.png" alt="" />
                        </div>
                    </div>
                </div>

                <div>
                    <div className='hero-wrapper container mx-auto'>
                        <div className='hero-left'>
                            <h5>Welcome to shopery</h5>
                            <h1>Fresh & Healthy Organic Food</h1>
                            <h3>Sale up to <span>30% OFF</span></h3>
                            <p>Free shipping on all your order. we deliver, you enjoy</p>
                            <button>Shop now <FontAwesomeIcon icon={faArrowRight} /></button>
                        </div>
                        <div className='hero-right'>
                            <img src="./images/Image.png" alt="" />
                        </div>
                    </div>
                </div>
            </Slider>

            <div className='fetured-wrapper container mx-auto'>
                <div className='fetured'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <path d="M32.7021 26.3042C31.7247 26.3042 30.7962 26.687 30.0957 27.3793C29.3952 28.0798 29.0043 28.992 29.0043 29.9694C29.0043 30.9468 29.3871 31.8591 30.0957 32.5595C30.8043 33.2519 31.7247 33.6347 32.7021 33.6347C34.7058 33.6347 36.3348 31.9894 36.3348 29.9694C36.3348 27.9495 34.7058 26.3042 32.7021 26.3042ZM32.7021 32.0057C31.5781 32.0057 30.6333 31.0772 30.6333 29.9694C30.6333 28.8617 31.5781 27.9332 32.7021 27.9332C33.8098 27.9332 34.7058 28.8454 34.7058 29.9694C34.7058 31.0935 33.8098 32.0057 32.7021 32.0057ZM33.6469 14.0949C33.5003 13.9564 33.3048 13.8831 33.1012 13.8831H28.9228C28.4749 13.8831 28.1083 14.2496 28.1083 14.6976V21.3765C28.1083 21.8245 28.4749 22.191 28.9228 22.191H35.5528C36.0008 22.191 36.3673 21.8245 36.3673 21.3765V16.9049C36.3673 16.6768 36.2696 16.4569 36.0986 16.3022L33.6469 14.0949ZM34.7383 20.562H29.7373V15.504H32.7835L34.7383 17.2633V20.562ZM12.8121 26.3042C11.8347 26.3042 10.9061 26.687 10.2057 27.3793C9.50519 28.0798 9.11423 28.992 9.11423 29.9694C9.11423 30.9468 9.49705 31.8591 10.2057 32.5595C10.9143 33.2519 11.8347 33.6347 12.8121 33.6347C14.8157 33.6347 16.4447 31.9894 16.4447 29.9694C16.4447 27.9495 14.8157 26.3042 12.8121 26.3042ZM12.8121 32.0057C11.688 32.0057 10.7432 31.0772 10.7432 29.9694C10.7432 28.8617 11.688 27.9332 12.8121 27.9332C13.9198 27.9332 14.8157 28.8454 14.8157 29.9694C14.8157 31.0935 13.9198 32.0057 12.8121 32.0057ZM7.37935 27.306H5.74221V25.1395C5.74221 24.6915 5.37569 24.325 4.92771 24.325C4.47974 24.325 4.11322 24.6915 4.11322 25.1395V28.1205C4.11322 28.5685 4.47974 28.935 4.92771 28.935H7.37935C7.82733 28.935 8.19385 28.5685 8.19385 28.1205C8.19385 27.6726 7.82733 27.306 7.37935 27.306ZM11.5089 22.867C11.5089 22.419 11.1423 22.0525 10.6944 22.0525H0.814498C0.366524 22.0525 0 22.419 0 22.867C0 23.315 0.366524 23.6815 0.814498 23.6815H10.6944C11.1423 23.6815 11.5089 23.3231 11.5089 22.867ZM2.46793 19.9267L12.3478 19.9837C12.7958 19.9837 13.1623 19.6253 13.1704 19.1773C13.1786 18.7212 12.8121 18.3547 12.3641 18.3547L2.48422 18.2977C2.47607 18.2977 2.47607 18.2977 2.47607 18.2977C2.0281 18.2977 1.66158 18.6561 1.66158 19.104C1.65343 19.5602 2.01996 19.9267 2.46793 19.9267ZM4.12951 16.2289H14.0094C14.4573 16.2289 14.8239 15.8623 14.8239 15.4144C14.8239 14.9664 14.4573 14.5999 14.0094 14.5999H4.12951C3.68153 14.5999 3.31501 14.9664 3.31501 15.4144C3.31501 15.8623 3.68153 16.2289 4.12951 16.2289ZM39.6986 15.1293L33.8668 10.2993C33.7202 10.1771 33.541 10.112 33.3456 10.112H26.4875V7.17979C26.4875 6.73182 26.121 6.3653 25.673 6.3653H4.92771C4.47974 6.3653 4.11322 6.73182 4.11322 7.17979V13.1419C4.11322 13.5899 4.47974 13.9564 4.92771 13.9564C5.37569 13.9564 5.74221 13.5899 5.74221 13.1419V7.99429H24.8666V27.306H18.1877C17.7398 27.306 17.3732 27.6726 17.3732 28.1205C17.3732 28.5685 17.7398 28.935 18.1877 28.935H28.1328C28.5807 28.935 28.9473 28.5685 28.9473 28.1205C28.9473 27.6726 28.5807 27.306 28.1328 27.306H26.4956V11.741H33.0605L38.371 16.1393L38.314 27.2897H37.4669C37.0189 27.2897 36.6524 27.6563 36.6524 28.1042C36.6524 28.5522 37.0189 28.9187 37.4669 28.9187H39.1203C39.5683 28.9187 39.9348 28.5604 39.9348 28.1124L40 15.7646C39.9919 15.5203 39.886 15.284 39.6986 15.1293Z" fill="#00B307" />
                    </svg>
                    <div>
                        <h3>Free Shipping</h3>
                        <p>Free shipping on all your order</p>
                    </div>
                </div>
                <div className='fetured'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <path d="M32.7021 26.3042C31.7247 26.3042 30.7962 26.687 30.0957 27.3793C29.3952 28.0798 29.0043 28.992 29.0043 29.9694C29.0043 30.9468 29.3871 31.8591 30.0957 32.5595C30.8043 33.2519 31.7247 33.6347 32.7021 33.6347C34.7058 33.6347 36.3348 31.9894 36.3348 29.9694C36.3348 27.9495 34.7058 26.3042 32.7021 26.3042ZM32.7021 32.0057C31.5781 32.0057 30.6333 31.0772 30.6333 29.9694C30.6333 28.8617 31.5781 27.9332 32.7021 27.9332C33.8098 27.9332 34.7058 28.8454 34.7058 29.9694C34.7058 31.0935 33.8098 32.0057 32.7021 32.0057ZM33.6469 14.0949C33.5003 13.9564 33.3048 13.8831 33.1012 13.8831H28.9228C28.4749 13.8831 28.1083 14.2496 28.1083 14.6976V21.3765C28.1083 21.8245 28.4749 22.191 28.9228 22.191H35.5528C36.0008 22.191 36.3673 21.8245 36.3673 21.3765V16.9049C36.3673 16.6768 36.2696 16.4569 36.0986 16.3022L33.6469 14.0949ZM34.7383 20.562H29.7373V15.504H32.7835L34.7383 17.2633V20.562ZM12.8121 26.3042C11.8347 26.3042 10.9061 26.687 10.2057 27.3793C9.50519 28.0798 9.11423 28.992 9.11423 29.9694C9.11423 30.9468 9.49705 31.8591 10.2057 32.5595C10.9143 33.2519 11.8347 33.6347 12.8121 33.6347C14.8157 33.6347 16.4447 31.9894 16.4447 29.9694C16.4447 27.9495 14.8157 26.3042 12.8121 26.3042ZM12.8121 32.0057C11.688 32.0057 10.7432 31.0772 10.7432 29.9694C10.7432 28.8617 11.688 27.9332 12.8121 27.9332C13.9198 27.9332 14.8157 28.8454 14.8157 29.9694C14.8157 31.0935 13.9198 32.0057 12.8121 32.0057ZM7.37935 27.306H5.74221V25.1395C5.74221 24.6915 5.37569 24.325 4.92771 24.325C4.47974 24.325 4.11322 24.6915 4.11322 25.1395V28.1205C4.11322 28.5685 4.47974 28.935 4.92771 28.935H7.37935C7.82733 28.935 8.19385 28.5685 8.19385 28.1205C8.19385 27.6726 7.82733 27.306 7.37935 27.306ZM11.5089 22.867C11.5089 22.419 11.1423 22.0525 10.6944 22.0525H0.814498C0.366524 22.0525 0 22.419 0 22.867C0 23.315 0.366524 23.6815 0.814498 23.6815H10.6944C11.1423 23.6815 11.5089 23.3231 11.5089 22.867ZM2.46793 19.9267L12.3478 19.9837C12.7958 19.9837 13.1623 19.6253 13.1704 19.1773C13.1786 18.7212 12.8121 18.3547 12.3641 18.3547L2.48422 18.2977C2.47607 18.2977 2.47607 18.2977 2.47607 18.2977C2.0281 18.2977 1.66158 18.6561 1.66158 19.104C1.65343 19.5602 2.01996 19.9267 2.46793 19.9267ZM4.12951 16.2289H14.0094C14.4573 16.2289 14.8239 15.8623 14.8239 15.4144C14.8239 14.9664 14.4573 14.5999 14.0094 14.5999H4.12951C3.68153 14.5999 3.31501 14.9664 3.31501 15.4144C3.31501 15.8623 3.68153 16.2289 4.12951 16.2289ZM39.6986 15.1293L33.8668 10.2993C33.7202 10.1771 33.541 10.112 33.3456 10.112H26.4875V7.17979C26.4875 6.73182 26.121 6.3653 25.673 6.3653H4.92771C4.47974 6.3653 4.11322 6.73182 4.11322 7.17979V13.1419C4.11322 13.5899 4.47974 13.9564 4.92771 13.9564C5.37569 13.9564 5.74221 13.5899 5.74221 13.1419V7.99429H24.8666V27.306H18.1877C17.7398 27.306 17.3732 27.6726 17.3732 28.1205C17.3732 28.5685 17.7398 28.935 18.1877 28.935H28.1328C28.5807 28.935 28.9473 28.5685 28.9473 28.1205C28.9473 27.6726 28.5807 27.306 28.1328 27.306H26.4956V11.741H33.0605L38.371 16.1393L38.314 27.2897H37.4669C37.0189 27.2897 36.6524 27.6563 36.6524 28.1042C36.6524 28.5522 37.0189 28.9187 37.4669 28.9187H39.1203C39.5683 28.9187 39.9348 28.5604 39.9348 28.1124L40 15.7646C39.9919 15.5203 39.886 15.284 39.6986 15.1293Z" fill="#00B307" />
                    </svg>
                    <div>
                        <h3>Free Shipping</h3>
                        <p>Free shipping on all your order</p>
                    </div>
                </div>
                <div className='fetured'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <path d="M32.7021 26.3042C31.7247 26.3042 30.7962 26.687 30.0957 27.3793C29.3952 28.0798 29.0043 28.992 29.0043 29.9694C29.0043 30.9468 29.3871 31.8591 30.0957 32.5595C30.8043 33.2519 31.7247 33.6347 32.7021 33.6347C34.7058 33.6347 36.3348 31.9894 36.3348 29.9694C36.3348 27.9495 34.7058 26.3042 32.7021 26.3042ZM32.7021 32.0057C31.5781 32.0057 30.6333 31.0772 30.6333 29.9694C30.6333 28.8617 31.5781 27.9332 32.7021 27.9332C33.8098 27.9332 34.7058 28.8454 34.7058 29.9694C34.7058 31.0935 33.8098 32.0057 32.7021 32.0057ZM33.6469 14.0949C33.5003 13.9564 33.3048 13.8831 33.1012 13.8831H28.9228C28.4749 13.8831 28.1083 14.2496 28.1083 14.6976V21.3765C28.1083 21.8245 28.4749 22.191 28.9228 22.191H35.5528C36.0008 22.191 36.3673 21.8245 36.3673 21.3765V16.9049C36.3673 16.6768 36.2696 16.4569 36.0986 16.3022L33.6469 14.0949ZM34.7383 20.562H29.7373V15.504H32.7835L34.7383 17.2633V20.562ZM12.8121 26.3042C11.8347 26.3042 10.9061 26.687 10.2057 27.3793C9.50519 28.0798 9.11423 28.992 9.11423 29.9694C9.11423 30.9468 9.49705 31.8591 10.2057 32.5595C10.9143 33.2519 11.8347 33.6347 12.8121 33.6347C14.8157 33.6347 16.4447 31.9894 16.4447 29.9694C16.4447 27.9495 14.8157 26.3042 12.8121 26.3042ZM12.8121 32.0057C11.688 32.0057 10.7432 31.0772 10.7432 29.9694C10.7432 28.8617 11.688 27.9332 12.8121 27.9332C13.9198 27.9332 14.8157 28.8454 14.8157 29.9694C14.8157 31.0935 13.9198 32.0057 12.8121 32.0057ZM7.37935 27.306H5.74221V25.1395C5.74221 24.6915 5.37569 24.325 4.92771 24.325C4.47974 24.325 4.11322 24.6915 4.11322 25.1395V28.1205C4.11322 28.5685 4.47974 28.935 4.92771 28.935H7.37935C7.82733 28.935 8.19385 28.5685 8.19385 28.1205C8.19385 27.6726 7.82733 27.306 7.37935 27.306ZM11.5089 22.867C11.5089 22.419 11.1423 22.0525 10.6944 22.0525H0.814498C0.366524 22.0525 0 22.419 0 22.867C0 23.315 0.366524 23.6815 0.814498 23.6815H10.6944C11.1423 23.6815 11.5089 23.3231 11.5089 22.867ZM2.46793 19.9267L12.3478 19.9837C12.7958 19.9837 13.1623 19.6253 13.1704 19.1773C13.1786 18.7212 12.8121 18.3547 12.3641 18.3547L2.48422 18.2977C2.47607 18.2977 2.47607 18.2977 2.47607 18.2977C2.0281 18.2977 1.66158 18.6561 1.66158 19.104C1.65343 19.5602 2.01996 19.9267 2.46793 19.9267ZM4.12951 16.2289H14.0094C14.4573 16.2289 14.8239 15.8623 14.8239 15.4144C14.8239 14.9664 14.4573 14.5999 14.0094 14.5999H4.12951C3.68153 14.5999 3.31501 14.9664 3.31501 15.4144C3.31501 15.8623 3.68153 16.2289 4.12951 16.2289ZM39.6986 15.1293L33.8668 10.2993C33.7202 10.1771 33.541 10.112 33.3456 10.112H26.4875V7.17979C26.4875 6.73182 26.121 6.3653 25.673 6.3653H4.92771C4.47974 6.3653 4.11322 6.73182 4.11322 7.17979V13.1419C4.11322 13.5899 4.47974 13.9564 4.92771 13.9564C5.37569 13.9564 5.74221 13.5899 5.74221 13.1419V7.99429H24.8666V27.306H18.1877C17.7398 27.306 17.3732 27.6726 17.3732 28.1205C17.3732 28.5685 17.7398 28.935 18.1877 28.935H28.1328C28.5807 28.935 28.9473 28.5685 28.9473 28.1205C28.9473 27.6726 28.5807 27.306 28.1328 27.306H26.4956V11.741H33.0605L38.371 16.1393L38.314 27.2897H37.4669C37.0189 27.2897 36.6524 27.6563 36.6524 28.1042C36.6524 28.5522 37.0189 28.9187 37.4669 28.9187H39.1203C39.5683 28.9187 39.9348 28.5604 39.9348 28.1124L40 15.7646C39.9919 15.5203 39.886 15.284 39.6986 15.1293Z" fill="#00B307" />
                    </svg>
                    <div>
                        <h3>Free Shipping</h3>
                        <p>Free shipping on all your order</p>
                    </div>
                </div>
                <div className='fetured'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <path d="M32.7021 26.3042C31.7247 26.3042 30.7962 26.687 30.0957 27.3793C29.3952 28.0798 29.0043 28.992 29.0043 29.9694C29.0043 30.9468 29.3871 31.8591 30.0957 32.5595C30.8043 33.2519 31.7247 33.6347 32.7021 33.6347C34.7058 33.6347 36.3348 31.9894 36.3348 29.9694C36.3348 27.9495 34.7058 26.3042 32.7021 26.3042ZM32.7021 32.0057C31.5781 32.0057 30.6333 31.0772 30.6333 29.9694C30.6333 28.8617 31.5781 27.9332 32.7021 27.9332C33.8098 27.9332 34.7058 28.8454 34.7058 29.9694C34.7058 31.0935 33.8098 32.0057 32.7021 32.0057ZM33.6469 14.0949C33.5003 13.9564 33.3048 13.8831 33.1012 13.8831H28.9228C28.4749 13.8831 28.1083 14.2496 28.1083 14.6976V21.3765C28.1083 21.8245 28.4749 22.191 28.9228 22.191H35.5528C36.0008 22.191 36.3673 21.8245 36.3673 21.3765V16.9049C36.3673 16.6768 36.2696 16.4569 36.0986 16.3022L33.6469 14.0949ZM34.7383 20.562H29.7373V15.504H32.7835L34.7383 17.2633V20.562ZM12.8121 26.3042C11.8347 26.3042 10.9061 26.687 10.2057 27.3793C9.50519 28.0798 9.11423 28.992 9.11423 29.9694C9.11423 30.9468 9.49705 31.8591 10.2057 32.5595C10.9143 33.2519 11.8347 33.6347 12.8121 33.6347C14.8157 33.6347 16.4447 31.9894 16.4447 29.9694C16.4447 27.9495 14.8157 26.3042 12.8121 26.3042ZM12.8121 32.0057C11.688 32.0057 10.7432 31.0772 10.7432 29.9694C10.7432 28.8617 11.688 27.9332 12.8121 27.9332C13.9198 27.9332 14.8157 28.8454 14.8157 29.9694C14.8157 31.0935 13.9198 32.0057 12.8121 32.0057ZM7.37935 27.306H5.74221V25.1395C5.74221 24.6915 5.37569 24.325 4.92771 24.325C4.47974 24.325 4.11322 24.6915 4.11322 25.1395V28.1205C4.11322 28.5685 4.47974 28.935 4.92771 28.935H7.37935C7.82733 28.935 8.19385 28.5685 8.19385 28.1205C8.19385 27.6726 7.82733 27.306 7.37935 27.306ZM11.5089 22.867C11.5089 22.419 11.1423 22.0525 10.6944 22.0525H0.814498C0.366524 22.0525 0 22.419 0 22.867C0 23.315 0.366524 23.6815 0.814498 23.6815H10.6944C11.1423 23.6815 11.5089 23.3231 11.5089 22.867ZM2.46793 19.9267L12.3478 19.9837C12.7958 19.9837 13.1623 19.6253 13.1704 19.1773C13.1786 18.7212 12.8121 18.3547 12.3641 18.3547L2.48422 18.2977C2.47607 18.2977 2.47607 18.2977 2.47607 18.2977C2.0281 18.2977 1.66158 18.6561 1.66158 19.104C1.65343 19.5602 2.01996 19.9267 2.46793 19.9267ZM4.12951 16.2289H14.0094C14.4573 16.2289 14.8239 15.8623 14.8239 15.4144C14.8239 14.9664 14.4573 14.5999 14.0094 14.5999H4.12951C3.68153 14.5999 3.31501 14.9664 3.31501 15.4144C3.31501 15.8623 3.68153 16.2289 4.12951 16.2289ZM39.6986 15.1293L33.8668 10.2993C33.7202 10.1771 33.541 10.112 33.3456 10.112H26.4875V7.17979C26.4875 6.73182 26.121 6.3653 25.673 6.3653H4.92771C4.47974 6.3653 4.11322 6.73182 4.11322 7.17979V13.1419C4.11322 13.5899 4.47974 13.9564 4.92771 13.9564C5.37569 13.9564 5.74221 13.5899 5.74221 13.1419V7.99429H24.8666V27.306H18.1877C17.7398 27.306 17.3732 27.6726 17.3732 28.1205C17.3732 28.5685 17.7398 28.935 18.1877 28.935H28.1328C28.5807 28.935 28.9473 28.5685 28.9473 28.1205C28.9473 27.6726 28.5807 27.306 28.1328 27.306H26.4956V11.741H33.0605L38.371 16.1393L38.314 27.2897H37.4669C37.0189 27.2897 36.6524 27.6563 36.6524 28.1042C36.6524 28.5522 37.0189 28.9187 37.4669 28.9187H39.1203C39.5683 28.9187 39.9348 28.5604 39.9348 28.1124L40 15.7646C39.9919 15.5203 39.886 15.284 39.6986 15.1293Z" fill="#00B307" />
                    </svg>
                    <div>
                        <h3>Free Shipping</h3>
                        <p>Free shipping on all your order</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Hero;