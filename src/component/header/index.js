import React from 'react';

import logo from '../../assets/images/VGF_Icon.jpg'

import './style.css'

const Header = () => {
    return (
        <div className='header-container'>
            <div className='header-intro'>
                <img src={logo} alt='header-icon' width={100} height={100} className='intro-image'/>
                <div className='header-title'>
                    WOTB Bootcamp by VGF Clan
                </div>
            </div>
            <div className='header-navigation'>

            </div>
        </div>
    );
};

export default Header;