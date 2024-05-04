import React from 'react';
import { ShopConext } from '../Context/ShopConext';
import { useContext } from 'react';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import './CSS/Shopcategory.css'
import Item from '../Components/Item/Item';

const Shopcategory = (props) => {
  const {all_product} = useContext(ShopConext)
  
  return (
    <div className='shop-category'>
    <img  className='shopcategory-banner' src={props.banner} alt=''/>
    <div className='shopcategory-indexSort'>
    <p>
      <span>Showing 1-12</span>out of 36 product
    </p>
    <div className='shopcategory-sort'>
      Sort by <img src={dropdown_icon} alt=''/> 
    </div>

    </div>
      <div className='shopcategory-product'>
        {all_product.map((item,i)=>{
        
          if(props.category === item.category){
          
            return <Item key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}/>        
          }
        })}
      </div>
      <div className='shopcategory-loadMore'>
        Explore More
      </div>
    </div>
  )
}

export default Shopcategory
