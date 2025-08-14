import React from 'react'
import { useState } from 'react'
import useEcomStore from '../store/econ-store'
import { useEffect } from 'react'
import LoadingToRedirect from './LoadingToRedirect'
import { currentAdmin } from '../api/auth'

const ProtectRouteAdmin = ({element}) => {
  const [ok,setOk]=useState(false)
  const user = useEcomStore((state)=>state.user)
  const token = useEcomStore((state)=>state.token)
  useEffect(()=>{
    if(user && token){
      currentAdmin(token)
      .then((res)=>setOk(true))
      .catch((err)=>setOk(false))
    }
  },[])
  return ok ? element:<LoadingToRedirect/>
}

export default ProtectRouteAdmin