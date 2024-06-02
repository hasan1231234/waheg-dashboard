import React, { useState } from 'react'
import '../App.css'
import logo from '../images/logo.png'
import login from '../images/تسجيل الدخول.png'
import passIcon from '../images/passIcon.png'
import emailIcon from '../images/emailIcon.png'
import axios from 'axios'
export default function Login() {
  const [eamil , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const handelSubmit =(e) =>{
     e.preventDefault()

     axios.post('' , {password , eamil})
     .then(res => console.log(res))
     .catch(e => console.log(e)) 

     setTimeout(() => {
      window.location = '/home'
     },2000)
  }
  return (
    <form onSubmit={(e) => handelSubmit(e)}>
        <img src={logo} alt="" width='200' height='150'/>
        <img src={login} alt="" className='mb-3' width='208' height='39'/>
        <div className='input-div d-flex align-items-center w-90'><img src={emailIcon} alt="" /><input type="email" className='input-log' placeholder='البريد الالكتروني' onChange={(e) => setEmail(e.target.value)}/></div>
        <div className='input-div d-flex align-items-center w-90'><img src={passIcon} alt="" /><input type="email" className='input-log' placeholder='كلمة المرور' onChange={(e) => setPassword(e.target.value)}/></div>
        <span className='text-secondary curser span-m'>هل نسيت كلمة المرور؟</span>
        <input type="submit" value="تسجيل الدخول" className='backgroundcolor-blue text-white curser w-75 submit-input'/>
        <p className='fw-bold curser mt-3'>ليس لدي حساب؟   <span className='text-success '> التسجيل </span></p>
    </form>
  )
}
