import React from 'react'
import { BrushCleaning, Minus, Plus } from 'lucide-react';
import useEcomStore from '../../store/econ-store';
import {Link} from 'react-router-dom'
import { numberFormat } from '../../utils/numder';

const CartCard = () => {
  const carts = useEcomStore((state)=>state.carts)
  const actionUpdateQuantity = useEcomStore((state)=>state.actionUpdateQuantity)
  const actionRemoveProduct = useEcomStore((state)=>state.actionRemoveProduct)
  const actionGetTotalPrice = useEcomStore((state)=>state.actionGetTotalPrice)
  return (
    <div>
        <h1 className='text-2xl font-bold'>ตะกร้าสินค้า</h1>
        <div className='boeder p-2'>
          {carts.map((item,index)=>
          <div key={index} className='bg-white p-2 rounded-md shadow-md mb-2'>
            <div className='flex justify-between mb-2'>
              <div className='flex gap-2 items-center'>
                {
                  item.images && item.images.length > 0
                  ? <img className='w-16 h-16 rounded-md' src={item.images[0].url} alt="" />
                  : <div className='w-16 h-16 bg-gray-200 rounded-md flex text-center items-center'>
                  No image
                  </div>
                }
                <div>
                  <p className='font-bold'>{item.title}</p>
                  <p className='text-sm'>{item.description}</p>
                </div>
              </div>
              <div onClick={()=>actionRemoveProduct(item.id)} className='text-red-600 p-2'>
                <BrushCleaning />
              </div>
            </div>
            <div className='flex justify-between'>
              <div className='border rounded-sm px-2 py-1 flex items-center'>
                <button onClick={()=>actionUpdateQuantity(item.id,item.count - 1)} className='px-2 py-1 bg-gray-300 rounded-sm hover:bg-red-300'><Minus size={16} /></button>
                <span className='px-4'>{item.count}</span>
                <button onClick={()=>actionUpdateQuantity(item.id,item.count + 1)} className='px-2 py-1 bg-gray-300 rounded-sm hover:bg-gray-500'><Plus size={16}/></button>
              </div>
              <div className='font-bold text-blue-500'>
                {numberFormat(item.price * item.count)}
              </div>
            </div>
          </div>)}
          <div className='flex justify-between px-2'>
            <span>รวม</span>
            <span>{numberFormat(actionGetTotalPrice())}</span>
          </div>
          <Link to='/cart'>
          <button className='mt-4 bg-green-500 w-full text-white py-2 rounded-md shadow-md hover:bg-green-700'>ดำเนินการชำระเงิน</button>
          </Link>
        </div>
    </div>
  )
}

export default CartCard