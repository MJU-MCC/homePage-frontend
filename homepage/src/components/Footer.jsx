import React, { useEffect, useState } from 'react';
import '../styles/section/_footer.scss'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Footer = () => {
    const [isLogin, setIsLogin]=useState(false)
    const navigate=useNavigate();

    useEffect(()=>{
        const token=localStorage.getItem("accessToken")
        if(token){
            setIsLogin(true)
        }else{
            setIsLogin(false)
        }
    },[])

    const adminClick=()=>{
        if(isLogin){
            //운영진 확인 api 
        }else{
            navigate('/login')
        }
    }

    return (
        <footer id='footer' role='footer'>
            <div className='footer__inner'>
            <div className='option'>
                    <span>Notion</span>
                    <span>Instagram</span>
                    <span>Github</span>
                    <Link to='/admin'>
                        <span>Admin</span>
                    </Link>
                </div>
                
                <div className='text'>
                    <p>
                        MCC Myungji Computer Club (명지대학교 컴퓨터 동아리)<br/>
                        Copyright©2024.MCC. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;