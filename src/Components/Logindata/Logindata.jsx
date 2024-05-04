import React, { useContext, useEffect, useState } from 'react'
import cross_icon  from '../Assets/cart_cross_icon.png';
import emoji from '../Assets/imogi1.png';
import './Logindata.css'
import axios from 'axios';
import { ShopConext } from '../../Context/ShopConext';
const Logindata = ({setShowLogin,data,setLogoutData,LogoutData}) => {
   
const [currState , setcurrState] = useState("Sign up");
const [name , setName] = useState('');
const [email , setEmail] = useState('');
const [pass , setPass] = useState('');

   
const FromData = async(e) =>{
  e.preventDefault();
  if(currState === 'Sign up'){
  const API ='https://661a2490125e9bb9f29b66df.mockapi.io/login'
  await axios.post(API,{
    name,
    email,
    pass,
    emoji,

  }).then(()=>{
    setLogoutData(true)
    setShowLogin(false)
    data();
    
  })
  }
  console.log(name,email,pass)
}
  return (
    <div className='login-popup'> 
    <form className='login-popup-container' onSubmit={FromData}>
    <img src={emoji} alt='' style={{width:"60px", border:"5px solid black", marginLeft:"150px",padding:"10px", borderRadius:"50%"}}/>  
    <div className='login-popup-title'>
        <h2>{currState}</h2>
        <img src={cross_icon} alt='' onClick={()=>setShowLogin(false)}/>
    </div>
    <div className='login-popup-inputs'>
    {currState ==='Login'?<></>:<input type='text' placeholder='Enter Name' onChange={(e)=>setName(e.target.value)}/>}
        <input type='email' placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)}/>
        <input type='password' placeholder='Enter password' onChange={(e)=>setPass(e.target.value)}/>
    </div>
       <button>{currState ==='Sign up'?"create account":"Login"}</button>
    <div className='login-popup-condition'>
      <input type='checkbox' required/>
      <p>By Continue , i agree to the terms use Pivacy Policy</p>
    </div>
    {
        currState==='Login'
        ?<p>create a new account <span onClick={()=>setcurrState('Sign up')}>Click here</span></p>
        :<p>Already have an acount  <span onClick={()=>setcurrState('Login')}>Click here</span></p>
    }    
    </form>
    
    </div>
  )
}

export default Logindata
