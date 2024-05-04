import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import Newcollection from '../Components/Newcollection/Newcollection'
import NewsLtter from '../Components/NewsLetter/NewsLtter'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <Newcollection/>
      <NewsLtter/>
    </div>
  )
}

export default Shop
