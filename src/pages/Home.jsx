import React from 'react'
import Content from '../components/home/Content'
import BestSeller from '../components/home/BestSeller'
import NewProduct from '../components/home/NewProduct'

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6 space-y-8">
      <Content />
      <div className="text-center">
        <p className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">สินค้าขายดี</p>
      </div>
      <BestSeller/>
      <div className="text-center">
        <p className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">สินค้าใหม่</p>
      </div>
      <NewProduct/>
    </div>
  )
}

export default Home