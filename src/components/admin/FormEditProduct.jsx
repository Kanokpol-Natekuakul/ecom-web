import React, { useEffect, useState } from 'react'
import useEcomStore from '../../store/econ-store'
import { createProduct, readProduct, updateProduct } from '../../api/product'
import { toast } from 'react-toastify'
import Uploadfile from './Uploadfile'
import { Link } from 'react-router-dom'
import { useParams,useNavigate } from 'react-router-dom'


const initialState = {
  title: "",
  description: "",
  price: 0,
  quantity: 0,
  categoryId: "",
  images: [],
};

const FormEditProduct = () => {
  const {id}=useParams()
  const navigate = useNavigate()
  const token = useEcomStore((state) => state.token)
  const getCategory = useEcomStore((state) => state.getCategory)
  const categories = useEcomStore((state) => state.categories)
  const [form, setForm] = useState(initialState)
  const getProduct = useEcomStore((state) => state.getProduct)
  const products = useEcomStore((state) => state.products)

  useEffect(() => {
    getCategory()
    fetchProduct(token,id,form)
  }, [])

  const fetchProduct = async(token,id,form)=>{
    try{
      const res = await readProduct(token,id,form)
      console.log(res)
      setForm(res.data)
    }catch(err){
      console.log(err)
    }
  }

  const handleOnChange = (e) => {
    // console.log(e.target,name,e.target.value)
    setForm({
      ...form, [e.target.name]: e.target.value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await updateProduct(token,id, form)
      console.log(res)
      toast.success(`แก้ไข ${res.data.title} สำเร็จ`)
      navigate('/admin/product')
    } catch (err) {
      console.log(err)
    }
  }
  return (

    <div className='container mx-auto p-4 bg-white shadow-md'>
      <form onSubmit={handleSubmit}>
        <h1>เพิ่มข้อมูลสินค้า</h1>
        <input className='border' value={form.title} onChange={handleOnChange} placeholder='Title' name='title' />
        <input className='border' value={form.description} onChange={handleOnChange} placeholder='Description' name='description' />
        <input className='border' value={form.price} onChange={handleOnChange} placeholder='Price' name='price' type='number' />
        <input className='border' value={form.quantity} onChange={handleOnChange} placeholder='Quantity' name='quantity' type='number' />
        <select className='border' name='categoryId' onChange={handleOnChange} required value={form.categoryId} >
          <option value="" disabled>Please Select</option>
          {categories.map((item, index) =>
            <option key={index} value={item.id}>{item.name}</option>
          )}
        </select>
        <hr />
        <Uploadfile form={form} setForm={setForm}/>
        <button className='bg-blue-500'>แก้ไขสินค้า</button>
        <hr />
        <br />
        
      </form>
    </div>


  )
}

export default FormEditProduct