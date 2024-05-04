import React, { useState } from 'react'
import './Footer.css';
import footer_logo from '../Assets/logo_big.png';
import instagram_icon from '../Assets/instagram_icon.png';
import pintester_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png' ;
import { Link } from 'react-router-dom';
const Footer = () => {
  const [footerdata , setFooterData] = useState();

  return (
    <div className='footer'>
    <div className='footer-logo'>
        <img src={footer_logo} alt=''/>
        <p>SHOPPER</p>
    </div>
    <ul className='footer-links'>
        <li onClick={()=>setFooterData('Company')}>Company</li>
        <li onClick={()=>setFooterData('Products')}>Products</li>
        <li onClick={()=>setFooterData('Offices')}>Offices</li>
        <li onClick={()=>setFooterData('About')}>About</li>
        <li onClick={()=>setFooterData('Contact')}>Contact</li>
    </ul>
     {
        footerdata ==='Company'?<div className={footerdata==='Company'?'company-details':""}>

       <pre>
       Compnay :-

       </pre> An e-commerce website is an o online plateform that facilities buyin and selling of product or service over the internet serves as virtual marketplace where businesses an individe showcase their product ,intract with customer ,an conduct transactions without the need for a physical presence.e-commernce website have gained immense popularity due to their conveni accessibility,an the global the gloabl reach they offer
          </div>:null
       
     }
     {
        footerdata ==='Products'?<div className={footerdata==='Products'?'company-details':""}>
        <pre>products :-
        <p>
         SHOPER E- COMMENRCE website provide a new collection item
         <br/>1.designing shirt
         <br/>2.designing clothses
         <br/>3.designing paintss
        </p>
        </pre>
        </div>:null
     }
     {
        footerdata ==='Offices'?<div className={footerdata==='Offices'?'company-details':""}>
        <pre>
         Offices :-
         <p>Gorkhapur near by  kali mandir (boxipur)</p>
          </pre>
        </div>:null
     }
     {
        footerdata ==='About'?<div className={footerdata==='About'?'company-details':""}>
        <pre>About :-
        <p>
         <br/>1.life time customer care available
         <br/>2.product any issue then return can easy

        </p>
        </pre>
        </div>:null
     }
     {
        footerdata ==='Contact'?<div className={footerdata==='Contact'?'company-details':""}>
        <pre>Contact:-
        <p>Phone:+91 894-494-394-48</p>
        <p>Email:"shoper@gmail.com"</p>
        </pre>
        </div>:null
     }









    <div className='footer-social-icon'>

    <div className='footer-icons-container'>
    <a href='https://www.instagram.com/'><img src={instagram_icon} alt=''/></a>
    </div>
    <div className='footer-icons-container'>
        <a href='https://co.pinterest.com/login'><img src={pintester_icon} alt=''/></a>
    </div>
    <div className='footer-icons-container'>
        <a href='https://www.whatsapp.com/'><img src={whatsapp_icon} alt=''/></a>
    </div>

    </div>
       <div className='footer-copyright'>
        <hr/>
        <p>Copyright @ 2023 - All Right Reseverd</p>
       </div>      
    </div>
  )
}

export default Footer
