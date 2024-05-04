import React from 'react'
import './NewsLeeter.css';
const NewsLtter = () => {
  return (
    <div className='newsletter'>
    <h1>Get Exclusive Offers On Your Email </h1>
    <p>Subcribe to our newsletter an stay updated ! </p>
    <div>
        <input type='email' placeholder='Your Email Id'/>
        <button>Subscriber !</button>
    </div>
      
    </div>
  )
}

export default NewsLtter
