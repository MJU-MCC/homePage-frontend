import React from 'react';
import Logo from '../assets/images/Logo_img.png'
import '../styles/section/_header.scss'
// import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <header id='header' role='banner'>
            <div className='header__inner'>
                <div className='header__logo'>
                    <a href='/'><img src={Logo} alt='Logo'></img></a>
                </div>

                <div className='Nav'>
                <span>About</span>
                <span>Study</span>
                <span>Project</span>
                <span>Vote</span>
                <span>My Page</span>
                <button type="button" class="btn btn-outline-primary" >Login</button>
                </div>
            </div>

        </header>
    );
};

export default Header;