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
                    <span><a href='https://www.notion.so/mjucodingclub/45-95d6016f30cf4449b35ee2f397ecc8ca?pvs=4'>Notion</a></span>
                    <span><a href='https://www.instagram.com/mjumcc/'>Instagram</a></span>
                    <span><a href='https://github.com/MJU-MCC'>Github</a></span>
                    <Link to='/admin'>
                        <span>Admin</span>
                    </Link>
                </div>
                
                <div className='text'>
                    <p>
                        MCC Myongji Computer Club (명지대학교 컴퓨터 동아리)<br/>
                        Copyright©2024.MCC. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;