import React, { useState } from 'react';
import image from '../assets/images/keyboard.PNG'
import '../styles/section/_login.scss'
import 'bootstrap/scss/bootstrap.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginNav = () => {
    const [id,setId]=useState('')
    const [pwd,setPwd]=useState('')
    
    const navigate=useNavigate();

    const onIdHandler=(e)=>{
        setId(e.target.value)
    }
    const onPwdHandler=(e)=>{
        setPwd(e.target.value)
    }

    const onSubmit=async(e)=>{
        e.preventDefault()
        try{
            let body={
                memberNumber: id,
                memberPassword:pwd,
            }

            const res= await axios.post("http://localhost:8080/member/login",body)
            if(res.status===200){
                console.log(res.data)
                localStorage.setItem("accessToken",res.data.accessToken)
                localStorage.setItem("refreshToken",res.data.refreshToken)
                navigate('/')
            }
        }catch(err){
            if(err.res && err.res.status ===404){
                navigate('/error')
            }else{
                console.log(err.status)
            }
        }   

    }
    
    return (
        <section id='login'>
            <div className='login__inner'>
                <div className='login-image'>
                    <img src={image} alt="mcc-login"/>
                    <br/><br/><br/>
                    <form onSubmit={onSubmit}>
                        <input type='text' placeholder='ID' value={id} onChange={onIdHandler}></input><br/>
                        <input type='text' placeholder='Password' value={pwd} onChange={onPwdHandler}></input><br/><br/>
                        <button type='submit' className="btn btn-light">Login</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default LoginNav;