import React, { useEffect } from 'react'
import ProductCard from '../components/card/ProductCard'
import useEcomStore from '../store/econ-store'
import SearchCard from '../components/card/SearchCard'
import CartCard from '../components/card/CartCard'

const Shop = () => {
  const getProduct = useEcomStore((state)=>state.getProduct)
  const products = useEcomStore((state)=>state.products)

  useEffect(()=>{
    getProduct()
  },[])
  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-2 py-6 gap-6">
      <aside className="md:w-1/4 w-full bg-gray-50 rounded-lg shadow-sm p-4 mb-4 md:mb-0">
        <SearchCard />
      </aside>
      <main className="md:w-1/2 w-full p-2">
        <p className="text-xl md:text-2xl font-bold mb-4 text-gray-700">สินค้าทั้งหมด</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {
            products.map((item,index)=><ProductCard key={index} item={item}/>)
          }
        </div>
      </main>
      <aside className="md:w-1/4 w-full bg-gray-50 rounded-lg shadow-sm p-4">
        <CartCard/>
      </aside>
    </div>
  )
}

export default Shop