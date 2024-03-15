import React, { useEffect, useState } from 'react';
import '../styles/section/_pwdchange.scss';
import 'bootstrap/scss/bootstrap.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PwdChange = () => {
    const [pwd, setPwd]=useState('');
    const [nextPwd,setNextPwd]=useState('')
    const [checkNextPwd, setCheckNextPwd]=useState('')
    const navigate=useNavigate();
    
    const logoutHandler=()=>{
        localStorage.removeItem("accessToken")
        navigate('/login')
        console.log(localStorage.getItem())
        console.log("logout")
    }



    const onPwdCheck=async(e)=>{
        e.preventDefault()
        const token=localStorage.getItem('accessToken')
        try{
            if(token){
                const res=await axios.post("http://localhost:8080/member/change/password",{
                    currentPassword:pwd,
                    nextPassword:nextPwd,
                },{
                    headers:{
                        Authorization:token,
                    },
                })
                if(res.status===200){
                    
                        alert("비밀번호가 변경되었습니다.")
                        logoutHandler()
                    
                }
            }
        }catch(error){
            if(error.response&&error.response.status===404){
                navigate('/error')
            }else if(error.response&&error.response.status===400){
                alert(error.response.data.message)
            }else{
                console.log(error.status)
            }
        }
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(!pwd || !nextPwd || !checkNextPwd){
            alert("모든 필드를 입력하세요")
            
        }

        if(nextPwd!==checkNextPwd){
            alert("변경할 비밀번호가 일치하지 않습니다.")
        }
        onPwdCheck(e)
    }
    return (
        <section id='change'>
            <div className='inner__change'>
                <form onSubmit={handleSubmit}>
                    <input type='password' value={pwd} onChange={(e)=>setPwd(e.target.value)} placeholder='현재 비밀번호' class="p-3 bg-info bg-opacity-10 border border-info border-start rounded"></input><br/>
                    <input type='password' value={nextPwd} onChange={(e)=>setNextPwd(e.target.value)} placeholder='변경할 비밀번호' class="p-3 bg-info bg-opacity-10 border border-info border-start rounded"></input><br/>
                    <input type='password' value={checkNextPwd} onChange={(e)=>setCheckNextPwd(e.target.value)} placeholder='변경할 비밀번호 확인' class="p-3 bg-info bg-opacity-10 border border-info border-start rounded"></input><br/>
                    <button type='submit' className='btn btn-outline-primary'>비밀번호 변경</button>
                </form>
                
            </div>
            
        </section>
    );
};

export default PwdChange;