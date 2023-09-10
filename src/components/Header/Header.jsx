import { faAngleDown, faCartShopping, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import './Header.css';

import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import PopupMenu from '../PopupMenu/PopupMenu';

const Header = () => {
    const [showModal, setShowModal] = useState(false);
    //console.log(showModal);
    const { user } = useContext(AuthContext)
    //console.log(user);

    const closeModal = () => {
        //console.log('close funtion called');
        return setShowModal(false)
    }

    return (
        <header>
            <div className='nav-wrapper'>
                <div className='nav-top-wrapper'>
                    <div className='nav-top container mx-auto'>
                        <div className='logo'>
                            <Link to='/'><img src="images/Logo.png" alt="Logo" /></Link>
                        </div>
                        <div className='search-bar'>
                            <input type="text" placeholder='Search here' />
                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M14.6667 25.3333C20.5577 25.3333 25.3333 20.5577 25.3333 14.6667C25.3333 8.77563 20.5577 4 14.6667 4C8.77563 4 4 8.77563 4 14.6667C4 20.5577 8.77563 25.3333 14.6667 25.3333Z" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M28 28L22.2 22.2" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg></a>
                        </div>
                    </div>
                </div>
                <div className='nav-bar container mx-auto'>
                    <div className='menu-wrapper'>
                        <Link to="/">Home</Link>
                        <a href="#">Shop<FontAwesomeIcon icon={faAngleDown} /></a>
                        <a href="#">Order<FontAwesomeIcon icon={faAngleDown} /></a>
                        <a href="#">Wishlist<FontAwesomeIcon icon={faAngleDown} /></a>
                        <a href="#">About Us</a>
                    </div>
                    <div className='cart-icons'>
                        <a href="#"><FontAwesomeIcon icon={faHeart} /></a>
                        <a href="#"><FontAwesomeIcon icon={faCartShopping} /></a>
                        {showModal && <PopupMenu closeModal={closeModal} />}

                        {
                            user?.uid ? <Link onClick={() => !showModal ? setShowModal(true) : setShowModal(false)} className='userId' to="/"><img src={user.photoURL} alt="" /></Link>
                                : <Link to="/login"><FontAwesomeIcon icon={faUser} /></Link>
                        }

                    </div>
                </div>
            </div>
        </header >
    );
};

export default Header;