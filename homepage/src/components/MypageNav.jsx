import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const MypageNav = () => {
    const [id,setId]=useState()
    const navigate=useNavigate()

    useEffect(()=>{
        const token=localStorage.getItem('accessToken')
        if(token){
            try{
                axios.get('http://localhost:8080/member/get/myinfo',{
                    headers:{
                        Authorization:token.accessToken,
                    },
                })
                .then(res=>{
                    if(res.status===200){
                        console.log(res.data)
                        setId(res.data.memberNumber)
                    }
                })
            }catch(error){
                if(error.status===404){
                    navigate('/error')
                }else{
                    console.log(error.status)
                }
            }
        }
    },[])
    return (
        <div id='mypage'>
            <div className='mypage__inner'>
                <div>
                    <p>{id}님 안녕하세요!</p>
                </div>
            </div>
        </div>
    );
};

export default MypageNav;