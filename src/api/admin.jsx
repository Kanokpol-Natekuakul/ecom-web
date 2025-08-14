import axios from 'axios'

export const getOrdersAdmin = async (token)=>{
  return axios.get('https://ecom-api-pearl.vercel.app/api/admin/orders',{
    headers:{
      Authorization:`Bearer ${token}`
    }
  })
}
export const chanageOrderStatus = async (token,orderId,orderStatus)=>{
  return axios.put('https://ecom-api-pearl.vercel.app/api/admin/order-status',{orderId,orderStatus},{
    headers:{
      Authorization:`Bearer ${token}`
    }
  })
}
export const getlistAllUsers = async (token)=>{
  return axios.get('https://ecom-api-pearl.vercel.app/api/users',{
    headers:{
      Authorization:`Bearer ${token}`
    }
  })
}
  export const changeUserStatus = async (token,value)=>{
    return axios.post('https://ecom-api-pearl.vercel.app/api/change-status',value,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
  }
  export const changeUserRole = async (token,value)=>{
    return axios.post('https://ecom-api-pearl.vercel.app/api/change-role',value,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
  }