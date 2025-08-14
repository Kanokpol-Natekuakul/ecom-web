import React from 'react'
import Content from '../components/home/content'
import BestSeller from '../components/home/BestSeller'
import NewProduct from '../components/home/NewProduct'

const Home = () => {
  return (
    <div>
      <Content />
      <p className='text-2xl text-center my-4'>สินค้าขายดี</p>
      <BestSeller/>
      <p className='text-2xl text-center my-4'>สินค้าใหม่</p>
      <NewProduct/>
    </div>
  )
}

export default Home