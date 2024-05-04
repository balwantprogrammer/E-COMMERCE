
import { useContext } from 'react';
import './PlaceOrder.css';
import { ShopConext } from '../../Context/ShopConext';
const PlaceOrder = () => {
 const {getTotalCartamoutn} = useContext(ShopConext);
  return (
    <form className='place-order'>
      <div className='place-order-left'>
        <p className='title'>Delivery Information</p>
        <div className='multi-feilds'>
          <input type='text' placeholder='Firts Name'/>
          <input type='text' placeholder='Firts Name'/>
        </div>
        <input type='text' placeholder='Email address'/>
          <input type='text' placeholder='street'/>
          <div className='multi-fields'> 
          <input type='text' placeholder='City'/>
          <input type='text' placeholder='State'/>
          </div>
          
          <div className='multi-fields'> 
          <input type='text' placeholder='Zip Code'/>
          <input type='text' placeholder='Country'/>
          </div>
         <input type='text' placeholder='Phone'/>
      </div>

      <div className='place-order-right'>
      <div className='cart-total'>
        <h2>cart Totals</h2>
          <div>
          <div className='cart-total-details'>
            <h2>Subtotal</h2>
            <p>${getTotalCartamoutn()}</p>
          </div>
            <hr/>
            <div className='cart-total-details'>
              <h2>Delivery Fee</h2>
              <p>Free</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <h2>Total</h2>
              <b>${getTotalCartamoutn()}</b>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
       
     </div>
    </form>
    
  )
}

export default PlaceOrder
