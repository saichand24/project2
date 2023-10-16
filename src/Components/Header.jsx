import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

function Header() {
  return (
    <div id='main'>
        <div className='name'>
            <h2>Your journey to beauty</h2>
            <h1><span>BEGINS</span>HERE</h1>
            <p className='details'>We take pride in our commitment to using top-quality, skin-friendly products that enhance your natural features while emphasizing your unique style.</p>
            <div className='header-btns'>
                <a href='#' className='header-btn'><FaPhoneAlt />9121688211</a>
            </div>
        </div>
    </div>
  )
}

export default Header;