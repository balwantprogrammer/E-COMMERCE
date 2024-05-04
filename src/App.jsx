import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import {Routes , Route, useParams} from 'react-router-dom';
import Shop from './Pages/Shop';
import Shopcategory from './Pages/Shopcategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import men_banner  from './Components/Assets/banner_mens.png'
import women_banner  from './Components/Assets/banner_women.png'
import kid_banner  from './Components/Assets/banner_kids.png'
import { useState } from 'react';
import Logindata from './Components/Logindata/Logindata';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import axios from 'axios';
import Profile from './Components/Profile/Profile';


const App = () => {

  const [showLogin , setShowLogin] = useState(false);
  const [profile , setprofile] = useState('');
  const  [LogoutData,setLogoutData] = useState(false)
  
  
  const data = async() =>{
    const API='https://661a2490125e9bb9f29b66df.mockapi.io/login'
    await axios.get(API).then((data)=>{
      setprofile(data.data[0].emoji);
    })
    
    }

    
    
  return (
    <div>
    {showLogin?<Logindata setShowLogin={setShowLogin} setLogoutData={setLogoutData} LogoutData={LogoutData}  data={data}/>:<></>}
      <Navbar setShowLogin={setShowLogin} LogoutData={LogoutData} profile={profile}/>
      
      <Routes>
        <Route path='/e-commerce/' element={<Shop/>}/>
        <Route path='/mens' element={<Shopcategory banner={men_banner} category="men"/>}/>
        <Route path='/womens' element={<Shopcategory banner={women_banner} category="women"/>}/>
        <Route path='/kid' element={<Shopcategory banner={kid_banner} category="kid"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path =':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
