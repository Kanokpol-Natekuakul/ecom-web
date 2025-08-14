import axios from 'axios'

export const createCategory = async (token,form)=>{
  return axios.post('https://ecom-api-pearl.vercel.app/api/category',form,{
    headers:{
      Authorization:`Bearer ${token}`
    }
  })
}
export const listCategory = async ()=>{
  return axios.get('https://ecom-api-pearl.vercel.app/api/category')
}
export const deleteCategory = async (token,id)=>{
  return axios.delete('https://ecom-api-pearl.vercel.app/api/category/'+id,{
    headers:{
      Authorization:`Bearer ${token}`
    }
  })
}