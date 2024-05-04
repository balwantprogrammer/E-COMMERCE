import { createContext, useState } from "react";

import all_product from '../Components/Assets/all_product';
import axios from "axios";
const getDefaultCart =()=>{
    let item ={};
    for(let index = 0; index < all_product.length+1; index++){
        item[index]= 0
    }  
    return item
}
export const ShopConext = createContext(null);
const ShopConextProvider = (props) =>{
    const [cartItems,setCartitems] = useState(getDefaultCart())
    const [proFileData , setProFileData] = useState([]);
    
  
    const addToCart =(itemId)=>{
        setCartitems((pre)=>({...pre, [itemId]:pre[itemId]+1}));
        console.log(cartItems);
    }

    const removeFromCart =(itemId)=>{
        setCartitems((pre)=>({...pre, [itemId]:pre[itemId]-1}));
    }

    const getTotalCartamoutn =()=>{
        let TotalAmount =0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let cartInfo = all_product.find((product)=>product.id===Number(item))
                TotalAmount+= cartItems[item] * cartInfo.new_price;
            }
        }
        return TotalAmount
    }

    const TotalCartCount =()=>{
        let totalcount =0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalcount+= cartItems[item];
            }

        }
       return totalcount;
    }


        
   const profieApi = async()=>{
    
    const API='https://661a2490125e9bb9f29b66df.mockapi.io/login'
    await axios.get(API).then((data)=>{
        setProFileData(data.data);
    })
   }
   

   



    const ShopConextValue = {all_product,TotalCartCount,proFileData, profieApi,addToCart,getTotalCartamoutn,removeFromCart,cartItems}
 return(
    <ShopConext.Provider value={ShopConextValue}>
        {props.children}
    </ShopConext.Provider>
 )
};
export default ShopConextProvider;
