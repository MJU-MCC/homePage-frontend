import React from 'react';
import Logo from '../assets/images/Logo_img.png'
import '../styles/section/_header.scss'
import { Link, useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/scss/bootstrap.scss';

const Header = () => {
    const navigate=useNavigate()

    const loginStatus=()=>{
        const token=localStorage.getItem("accessToken")

        if(token){
            return <button type='button' className='btn btn-outline-primary'>Logout</button>
        }else{
            return <button type='button' className='btn btn-outline-primary'>Login</button>
        }
    }

    const logoutHandler=()=>{
        localStorage.removeItem("accessToken")
        navigate('/login')
        console.log(localStorage.getItem())
        console.log("logout")
    }

    const mypageHandler=()=>{
        const tokencheck=localStorage.getItem('accessToken')
        if(tokencheck){
            navigate('/mypage')
        }else{
            navigate('/login')
        }
    }
    return (
        <header id='header' role='banner'>
            <div className='header__inner'>
                <a href='/'><img src={Logo} alt='Logo'></img></a>
                <div className='Nav'>
                <span>About</span>
                <span>Study</span>
                <span>Project</span>
                <span>Vote</span>
                <span onClick={mypageHandler}>MyPage</span>
                <Link to='/login' onClick={logoutHandler}>
                    {loginStatus()}
                </Link>
                </div>
            </div>

        </header>
    );
};

export default Header;