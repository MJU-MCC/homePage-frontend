import React, { useEffect, useState } from 'react';
import '../styles/section/_pwdchange.scss';
import 'bootstrap/scss/bootstrap.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PwdChange = () => {
    const [pwd, setPwd]=useState('');
    const [nextPwd,setNextPwd]=useState('')
    const navigate=useNavigate();
    
    const pwdChange=async(e)=>{
        setNextPwd(e.target.value);
        try{
            const info=await axios.post("http://localhost:8080/member/change/password",{
                nextPassword:nextPwd,
            })
            if(info.status===200){
                console.log("변경되었습니다.")
            }
        }catch(error){
            if(error.nextpassword.status ===404){
                navigate('/error')
            }else{
                console.log(error.status)
            }
        }
    }

    const onPwdCheck=async(e)=>{
        const token=localStorage.getItem('accessToken')
        try{
            if(token){
                const res=await axios.get("http://localhost:8080/member/get/myinfo",{
                    headers:{
                        Authorization:token,
                    },
                })
                if(res.status===200){
                    if(res.data.currentPassWord===pwd){ //이부분 api 수정 후 다시 
                        pwdChange();
                    }else{
                        alert("비밀번호가 틀렸습니다.")
                    }
                }
            }else{
                navigate('/login')
            }
        }catch(error){
            if(error.info===404){
                navigate('/error')
            }else{
                console.log(error.status)
            }
        }
    }

    const handleSubmit=(e)=>{
        onPwdCheck()
    }
    return (
        <section id='change'>
            <div className='inner__change'>
                <form onSubmit={handleSubmit}>
                    <input type='text' value={pwd} onChange={(e)=>setPwd(e.target.value)} placeholder='현재 비밀번호' class="p-3 bg-info bg-opacity-10 border border-info border-start rounded"></input><br/>
                    <input type='text' value={nextPwd} onChange={(e)=>setNextPwd(e.target.value)} placeholder='변경할 비밀번호' class="p-3 bg-info bg-opacity-10 border border-info border-start rounded"></input><br/>
                    <button type='submit' className='btn btn-outline-primary'>비밀번호 변경</button>
                </form>
            </div>
            
        </section>
    );
};

export default PwdChange;