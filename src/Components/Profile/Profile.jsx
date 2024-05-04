import React, { useContext, useEffect, useState } from 'react';
import logo from '../Assets/logo.png';
import './Profile.css'
import axios from 'axios';
import { ShopConext } from '../../Context/ShopConext';
const Profile = () => {
    const {proFileData,profieApi} = useContext(ShopConext);
  return (
    <div className='profile'>
    
      {
        proFileData.map((item , index)=>{
            return(
                <>   
         <img src={item.emoji} alt=''/>
         
       <div className='profilebox'>
       <label> 𝐍𝐚𝐦𝐞 ✦</label>
        <input type='text' value={item.name} />
        <label>Email ✉</label>
        <input type='text' value={item.email} />
        <label>password 🔒</label>
        <input type='text' value={item.pass}/>
        </div>
        </>
     
            )
        })
      } 
    </div>
  )
}

export default Profile
