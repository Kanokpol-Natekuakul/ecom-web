import React, { useEffect, useState } from 'react'
import useEcomStore from '../../store/econ-store'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { numberFormat } from '../../utils/numder';

const SearchCard = () => {
  const getProduct = useEcomStore((state)=>state.getProduct)
  const products = useEcomStore((state)=>state.products)
  const categories = useEcomStore((state)=>state.categories)
  const getCategory = useEcomStore((state)=>state.getCategory)
  const actionSearchFilters = useEcomStore((state)=>state.actionSearchFilters)

  useEffect(()=>{
    getCategory()
  },[])

  const [text,setText] = useState('')
  // console.log(text)
  const [categorySelected,setCategorySelected] = useState([])
  const [price,setPrice] = useState([1000,30000])
  const [ok,setOk] = useState(false)

  useEffect(()=>{
    const delay = setTimeout(()=>{
      if(text){
        actionSearchFilters({query:text})
      }else{
        getProduct( )
      }
    },300)
    return ()=>clearTimeout(delay)
  },[text])

  const handleCheck = (e)=>{
    console.log(e.target.value)
    const inCheck = e.target.value
    const inState = [...categorySelected]
    const findCheck = inState.indexOf(inCheck)

    if(findCheck=== -1){
      inState.push(inCheck)
    }else{
      inState.splice(findCheck,1)
    }
    setCategorySelected(inState)

    if(inState.length>0){
      actionSearchFilters({category:inState})
    }else{
      getProduct()
    }
  }

  useEffect(()=>{
    actionSearchFilters({price})
  },[ok])
  const handlePrice = (value)=>{
    console.log(value)
    setPrice(value)
    setTimeout(() => {
      setOk(!ok)
    },300);
  }

  return (
    <div>
      <h1 className='text-xl font-bold mb-4'>ค้นหาสินค้า</h1>
      <input onChange={(e)=>setText(e.target.value)} type='text' className='border rounded-md w-full mb-4 px-2' placeholder='ค้นหาสินค้า...' />
      <hr />
      <div>
        <h1>หมวดหมู่สินค้า</h1>
        <div>
          {
            categories.map((item,index)=>
              <div className='flex gap-2' key={index}>
              <input onChange={handleCheck} type="checkbox" value={item.id}/>
              <label>{item.name}</label>
              </div>
            )
          }
        </div>
      </div>
      <hr />
      <div>
          <h1>ค้นหาราคา</h1>
          <div>
            <div className='flex justify-between'>
              <span>Min: {numberFormat(price[0])}</span>
              <span>Max: {numberFormat(price[1])}</span>
            </div>
            <Slider onChange={handlePrice} range min={0} max={10000} defaultValue={[1000,30000]}/>
          </div>
      </div>
    </div>
  )
}

export default SearchCard