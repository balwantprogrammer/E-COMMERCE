import React, { useContext } from 'react'
import { ShopConext } from '../Context/ShopConext'
import   {useParams}  from 'react-router-dom';
import Breadcrum from '../Components/Breacrum/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import Description from '../Components/Description/Description';
import RelatedProucts from '../Components/relatedProucts/RelatedProucts';

const Product = () => {
  const { all_product } = useContext(ShopConext);
  const  { productId }  = useParams();  
  const product = all_product.find((item)=>item.id===Number(productId));
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <Description/>
      <RelatedProucts product={product}/>
    
    </div>
  )
}

export default Product
