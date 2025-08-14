import React from 'react'
import { List } from 'lucide-react';
import useEcomStore from '../../store/econ-store';
import { Link, useNavigate } from 'react-router-dom';
import { createUserCart } from '../../api/user';
import { toast } from 'react-toastify';
import { numberFormat } from '../../utils/numder';

const ListCard = () => {
  const cart = useEcomStore((state)=>state.carts)
  const user = useEcomStore((state)=>state.user)
  const actionGetTotalPrice = useEcomStore((state)=>state.actionGetTotalPrice)
  const token = useEcomStore((state)=>state.token)

  const navigate = useNavigate()

  
  const handleSaveCart = async () => {
    await createUserCart(token, { cart })
      .then((res) => {
        console.log(res);
        toast.success(res.data);
        navigate("/checkout");
      })
      .catch((err) => {
        console.log("err", err);
        toast.warning(err.response.data.message);
      });
  };

  return (
    <div className='bg-gray-100 rounded-sm p-4'>
      <div className='flex gap-4 mb-4'>
        <List size={36}/>
        <p className='text-2xl font-bold'>รายการสินค้า {cart.length} รายการ</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 md:gap-4 gap-y-4'>
        <div className='col-span-2'>
          {cart.map((item,index)=>(
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
                  <p className='text-sm'>{numberFormat(item.price)} x {item.count}</p>
                </div>
              </div>
              <div>
                <div className='font-bold text-blue-500'>
                {numberFormat(item.price * item.count)}
              </div>
              </div>
            </div>
          </div>))}
        </div>
        <div className='bg-white p-4 rounded-md shadow-md space-y-4'>
          <p className='text-2xl font-bold'>ยอดรวม</p>
          <div className='flex justify-between'>
            <span>รวมสุทธิ</span>
            <span className='text-2xl'>{numberFormat(actionGetTotalPrice())}</span>
          </div>
          <div className='flex flex-col gap-2'>

            {
              user
              ?
          <Link>
          <button disabled={cart.length<1} onClick={handleSaveCart} className='bg-red-500 w-full rounded-md text-white py-2 shadow-md hover:bg-red-700'>สั่งซื้อ</button>
          </Link>
              :
          <Link to={'/login'}>
          <button className='bg-blue-500 w-full rounded-md text-white py-2 shadow-md hover:bg-blue-700'>Login</button>
          </Link>
            }
          <Link to={'/shop'}>
          <button className='bg-gray-500 w-full rounded-md text-white py-2 shadow-md hover:bg-gray-700'>แก้ไขรายการ</button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListCard