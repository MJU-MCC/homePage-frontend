import React from 'react';
import Logo from '../assets/images/Logo_img.png'
import '../styles/section/_header.scss'
import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/scss/bootstrap.scss';

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
                <span>MyPage</span>
                <Link to='/login'>
                    <button type="button" className="btn btn-outline-primary">Login</button>
                </Link>
                </div>
            </div>

        </header>
    );
};

export default Header;