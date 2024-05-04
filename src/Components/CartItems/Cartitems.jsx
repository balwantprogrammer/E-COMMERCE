import React, { useContext } from 'react'
import './CartItems.css';
import remove_icon from '../Assets/cart_cross_icon.png';
import all_product from '../Assets/all_product';
import { ShopConext } from '../../Context/ShopConext';
import { Link } from 'react-router-dom';
const Cartitems = () => {
    const {cartItems,getTotalCartamoutn,removeFromCart , all_product} = useContext(ShopConext)
  return (
    <div className='cartitems'>
    <div className='cartitems-format-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
    </div>
    <hr />
    {
        all_product.map((e,i)=>{
            if(cartItems[e.id]>0){
                return(
                    <div key={i}>
                        <div className='cartitems-format  cartitems-format-main'>
                            <img src={e.image} alt='' className='cartitem-product-icon'/>
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                            <p>${e.new_price *  cartItems[e.id]}</p>
                            <img src={remove_icon} alt='' className='cartitems-remove-icon' onClick={()=>removeFromCart(e.id)}/>
                        </div>
                        <hr />
                    </div>
                )
            }
            return null
            
        })}

        <div className='cartitems-down'>

            <div className='cartitems-total'>
                <h1>Cart Totals</h1>
                <div>
                    <div className='cartitems-total-item'>
                        <h3>Subtotal</h3>
                        <h3>${getTotalCartamoutn()}</h3>
                    </div>
                    <hr />
                    <div className='cartitems-total-item'>
                        <h3>Shipping Fee</h3>
                        <h3> Free</h3>
                    </div>
                    <hr />
                <div className='cartitems-total-item'>
                    <h3>Total</h3>
                    <h3>${getTotalCartamoutn()}</h3>
                </div>
                </div>
                <Link to='/order'><button>PROCEED TO CHECKOUT</button></Link>
                
                </div>
            
            <div className='cartitems-promocode'>
            <p>If you Have promo , Enter it here</p>
            <div className='cartitems-promobox'>
                <input type='text' placeholder='promo code'/>
                <button>Submit</button>
            </div>
            </div>
        </div>
        </div>
        
               

  )
}

export default Cartitems;
