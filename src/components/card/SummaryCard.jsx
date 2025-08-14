import React, { useEffect, useState } from 'react'
import { listUserCart, saveAddress } from '../../api/user'
import useEcomStore from '../../store/econ-store'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { numberFormat } from '../../utils/numder'

const SummaryCard = () => {
  const token = useEcomStore((state)=>state.token)
  const [products,setProducts] = useState([])
  const [cartTotal,setCartTotal] = useState(0)
  const [address,setAddress] = useState('')
  const [addressSaved,setAddressSaved] = useState(false)
  const navigate = useNavigate()

  useEffect(()=>{
    hdlGetUserCart(token)
  },[])

  const hdlGetUserCart=(token)=>{
    listUserCart(token)
    .then((res)=>{
      //  console.log(res)
      setProducts(res.data.products)
      setCartTotal(res.data.cartTotal)
    })
    .catch((err)=>{console.log(err)})
  }

  const halSaveAddress=()=>{
    // console.log(address)
    if(!address){
      return toast.warning('Please fill address')
    }
    saveAddress(token,address)
    .then((res)=>{
      console.log(res)
      toast.success(res.data.message)
      setAddressSaved(true)
    })
    .catch((err)=>{console.log(err)})
  }

  const hdlGotopayment =()=>{
    if(!addressSaved){
      return toast.warning('กรุณากรอกที่อยู่')
    }
    navigate('/user/payment')
  }

  return (
    <div className='mx-auto'>
      <div className='flex flex-warp gap-4'>
        <div className='w-2/4'>
        <div className='bg-gray-200 p-4 rounded-md border shadow-md space-y-4'>
          <h1 className='font-bold text-lg'>ที่อยู่ในการจัดส่ง</h1>
          <textarea required onChange={(e)=>setAddress(e.target.value)} placeholder='กรุณากรอกที่อยู่จัดส่ง...' className='w-full px-2 bg-white' />
          <button onClick={halSaveAddress} className='bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 hover:scale-105 hover:translate-y-1 hover:duration-200'>Save Address</button>
        </div>
        </div>
        <div className='w-2/4'>
        <div className='bg-gray-100 p-4 rounded-md border shadow-md space-y-4'>
          <h1 className='text-lg font-bold'>คำสั่งซื้อของคุณ</h1>

          {
            products?.map((item,index)=>
          <div key={index}>
            <div className='flex justify-between items-end'>
              <div>
                <p className='font-bold'>{item.product.title}</p>
                <p className='text-sm'>จำนวน: {item.count} x {numberFormat(item.product.price) }</p>
              </div>
              <div>
                <p className='text-red-500 font-bold'>{numberFormat(item.product.price * item.count)}</p>
              </div>
            </div>
          </div>
            
            )
          }

          <div>
            <div className='flex justify-between'>
              <p>ค่าจัดส่ง:</p>
              <p>0.00</p>
            </div>
            <div className='flex justify-between'>
              <p>ส่วนลด:</p>
              <p>0.00</p>
            </div>
          </div>

<hr />
          <div>
            <div className='flex justify-between'>
              <p className='font-bold'>ยอดรวมสุทธิ:</p>
              <p className='text-red-500 font-bold text-lg'>{numberFormat(cartTotal)}</p>
            </div>
          </div>
          
          <div>
            <button onClick={hdlGotopayment}
            // disabled = {!addressSaved}
            className='bg-green-400 w-full p-2 rounded-md shadow-md text-white hover:bg-green-600'>ดำเนินการชำระเงิน</button>
          </div>

        </div>
        </div>
      </div>
    </div>
  )
}

export default SummaryCard