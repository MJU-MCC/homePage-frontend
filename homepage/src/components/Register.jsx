import React, { useCallback, useState } from 'react';
import '../styles/section/_admin.scss'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [id, setId]=useState('');
    const [pwd, setPwd]=useState('');
    const navigate=useNavigate();
    const onIdHandler=(e)=>{
        setId(e.target.value)
    }

    const onPwdHandler=(e)=>{
        setPwd(e.target.value)
    }

    const onSubmit=async(e)=>{
        e.preventDefault();
        try{
            let body={
                memberNumber:id,
                memberPassword:pwd,
            }
            const res=await axios.post("http://localhost:8080/member/sign",body)
            if(res.status===200){
                console.log(res.data)
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
        <section id='adminpage'>
            <div className='admin__inner'>
                <form onSubmit={onSubmit}>
                    <input type='text' placeholder='ID' onChange={onIdHandler} value={id}></input>
                    <input type='text' placeholder='Password' onChange={onPwdHandler} value={pwd}></input>
                    <button type='submit'>등록하기</button>
                </form>
            </div>
        </section>
    );
};

export default Register;