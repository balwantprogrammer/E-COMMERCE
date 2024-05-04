import React, { useContext, useRef, useState } from 'react'
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png'
import login_man from '../Assets/loginman.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { ShopConext } from '../../Context/ShopConext';
import dropdown_icon from '../Assets/nav_dropdwn2.jpg'
import axios from 'axios';


const Navbar = ({setShowLogin,LogoutData,profile}) => {
   const navigate = useNavigate();
    const {profieApi} = useContext(ShopConext)
    const [menu , setMenu] = useState('shop');
    const {TotalCartCount} = useContext(ShopConext)
    const menuRef = useRef();
    const dropdown_toggle =(e)=>{
      menuRef.current.classList.toggle("nav-menu-visible");
      e.target.classList.toggle('open');
    }

    const ProfildataRun = () =>{
      navigate('/profile')
      profieApi();
    }
  return (
    <div className='navbar'>
    
    
     <Link to='/'><div className='navbar-logo'><img src={logo} alt=''/><p>SHOPPER</p></div></Link>
    <img   className='nav-dropdown' onClick={dropdown_toggle} src={dropdown_icon} style={{height:"50px"}}  alt=''/>
    <ul ref={menuRef} className='nav-menu'>
        <li onClick={()=>setMenu('shop')}><Link to='/e-commerce/'>Shop</Link> {menu==='shop'?<hr />:<></>}</li>
        <li    onClick={()=>setMenu('men')}> <Link to='/mens'>Mens</Link> {menu==='men'?<hr />:<></>}</li>
        <li  onClick={()=>setMenu('women')}><Link to='/womens'>Womens</Link>{menu==='women'?<hr />:<></>}</li>
        <li   onClick={()=>setMenu('kid')}><Link to='/kid'>Kids</Link> {menu==='kid'?<hr />:<></>}</li>
    </ul> 
      <div className='nav-login-cart'>
      {
        LogoutData?<img src={profile} onClick = {()=>ProfildataRun()} style={{width:"50px", border:"5px solid blue", borderRadius:"50%"}}/>:<button onClick={()=>setShowLogin(true)}>Sign👨‍💻</button>
      } 
      <Link to='/cart'><img src={cart_icon} alt=''/></Link>
      <div className='nav-login-count'>{TotalCartCount()}</div>

      </div>
      
    </div>
      )
}

export default Navbar
  