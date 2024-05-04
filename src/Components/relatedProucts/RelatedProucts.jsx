import React, { useContext } from 'react'
import './ralatedProducts.css';
import data_product from '../Assets/data';
import new_collection from '../Assets/new_collections';
import Item from '../Item/Item';
import { ShopConext } from '../../Context/ShopConext';
import Product from '../../Pages/Product';
 const Joindata = data_product.concat(new_collection);
const RelatedProucts = ({product}) => {
  const {all_product} = useContext(ShopConext);
  return (
    <div className='relatedproducts'>
    <h1>Related Proucts</h1>
    <hr />
    <div className='relatedproducts-item'>
      { Joindata.map((item,i)=>{
        return <Item key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}/>        
      })}
      </div>
      
    </div>
  )
}

export default RelatedProucts
