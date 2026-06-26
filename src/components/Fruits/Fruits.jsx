import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgFruits from '../../assets/Fruits-banner.jpg'
const Fruits = () => {
  return (
    <div>
      <CategoryPage title="Fruits & Veggies" bgImage={BgFruits} categories={['Fruits', 'Vegetables']}/>
    </div>
  )
}

export default Fruits
