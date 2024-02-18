import React from 'react';
import image from '../assets/images/error.png'
import '../styles/section/_404.scss'
const _404 = () => {
    return (
        <div id='error'>
            <div className='error__inner'>
                <img src={image}></img>
            </div>
        </div>
    );
};

export default _404;