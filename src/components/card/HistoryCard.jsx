import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getOrders } from '../../api/user'
import useEcomStore from '../../store/econ-store'
import { dateFormat } from '../../utils/dateformat'
import { numberFormat } from '../../utils/numder'

const HistoryCard = () => {
  const [orders,setOrders] = useState([])
  const token = useEcomStore((s)=>s.token)

  useEffect(()=>{
    hdlgetOrders(token)
  },[])

  const hdlgetOrders = (token)=>{
    getOrders(token)
    .then((res)=>{
      // console.log(res);
      setOrders(res.data.orders)
    })
    .catch((err)=>{console.log(err)})
  }

    const getStatusColor = (status)=>{
    switch(status){
      case "Not Process":return 'bg-gray-200'
      case "Processing":return 'bg-blue-200'
      case "Completed":return 'bg-green-200'
      case "Cancel":return 'bg-red-200'
    }
  }
  return (
    <div className='space-y-4'>
      <h1 className='text-2xl font-bold'>ประวัติการสั่งซื้อ</h1>

      <div className='space-y-4'>
        {
          orders?.map((item,index)=>{
            // console.log(item)
            return(
        <div key={index} className='bg-gray-100 p-4 rounded-md shadow-md'>
          <div className='flex justify-between mb-2'>
            <div>
              <p className='text-sm'>Order date</p>
              <p className='font-bold'>{dateFormat(item.updatedAt)}</p>
            </div>
            <div>
              <span className={`${getStatusColor(item.orderStatus)} px-2 py-1 rounded-full`}>
                {item.orderStatus}
                
                </span>
            </div>
          </div>
          <div>
            <table className='border w-full '>
              <thead>

              <tr className='bg-gray-200'>
                <th>สินค้า</th>
                <th>ราคา</th>
                <th>จำนวน</th>
                <th>รวม</th>
              </tr>
              </thead>
              <tbody>
              {
                item.products?.map((product,index)=>{
                  // console.log(product)
                  return(
              <tr key={index}>
                <th>{product.product.title}</th>
                <th>{numberFormat(product.product.price)}</th>
                <th>{product.count}</th>
                <th>{numberFormat(product.count * product.product.price)}</th>
              </tr>
                  )
                })
              }
            
              </tbody>
            </table>
          </div>
          <div>
            <div className='text-right'>
              <p>ราคาสุทธิ</p>
              <p>{numberFormat(item.cartTotal)}</p>
            </div>
          </div>
        </div>

            );
          })
        }
      </div>
    </div>
  )
}

export default HistoryCard