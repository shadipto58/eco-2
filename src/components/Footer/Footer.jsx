import React from 'react';
import './Footer.css';
import { FaLinkedinIn, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <div className='footer-wrapper container mx-auto'>
                <div className='company-details'>
                    <div className='logo'>
                        <img src="./images/logo-2.png" alt="Logo" />
                    </div>
                    <p>Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.</p>
                    <div className="social-icon">
                        <a className="" href=""><FaLinkedinIn /></a>
                        <a className="" href=""><FaFacebookF /></a>
                        <a className="" href=""><FaInstagram /></a>
                        <a className="" href=""><FaTwitter /></a>
                    </div>

                </div>
                <div className='sortlinks-wrapper'>
                    <div className='sortlinks'>
                        <h2>My Account</h2>
                        <a href="">Shoping Cart</a>
                        <a href="">Order History</a>
                        <a href="">Wishlist</a>
                    </div>
                    <div className='sortlinks'>
                        <h2>Helps</h2>
                        <a href="">Contact</a>
                        <a href="">Faqs</a>
                        <a href="">Terms & Condition</a>
                    </div>
                    <div className='sortlinks'>
                        <h2>Categories</h2>
                        <a href="">Fruit & Vegetables</a>
                        <a href="">Meat & Fish</a>
                        <a href="">Bread & Bakery</a>
                        <a href="">Beauty & Health</a>
                    </div>
                    <div className='sortlinks'>
                        <h2>Proxy</h2>
                        <a href="">About</a>
                        <a href="">Shop</a>
                        <a href="">Product</a>
                        <a href="">Track Order</a>
                    </div>
                </div>

            </div>
            <div className='copyright-text container mx-auto'>
                <p>Ecobazar eCommerce © 2021. All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;