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
                    if(res.data.currentPassword===pwd){ 
                        if(nextPwd===checkNextPwd){
                                alert("비밀번호가 변경되었습니다.")
                                navigate('/login')
                        }else{
                            alert("변경 비밀번호가 일치하지 않습니다.")
                        }
                    }
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