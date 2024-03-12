import React, { useEffect, useState } from 'react';
import '../styles/section/_footer.scss'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Footer = () => {
    const navigate=useNavigate();

    const adminClick=async()=>{
        const token=localStorage.getItem('accessToken')
        if(token){
            try{
                const info=await axios.get("http://localhost:8080/member/get/myinfo",{
                    headers:{
                        Authorization:token,
                    }
                })
                if(info.status===200){
                    console.log(info.data.admin)
                    if(info.data.admin===true){
                        navigate('/admin')
                    }else{
                        alert("관리자만 접속할 수 있습니다.")
                        navigate('/')
                    }
                }
            }catch(error){
                if(error.info===404){
                    navigate('/error')
                }else{
                    console.log(error.status)
                }
            }
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
                    <span onClick={adminClick}>Admin</span>
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