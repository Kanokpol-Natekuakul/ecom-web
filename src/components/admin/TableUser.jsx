import React, { useEffect, useState } from 'react'
import useEcomStore from '../../store/econ-store'
import { changeUserRole, changeUserStatus, getlistAllUsers } from '../../api/admin'
import { toast } from 'react-toastify'

const TableUser = () => {
  const token = useEcomStore((s)=>s.token)
  const [users,setUsers] = useState([])

  useEffect(()=>{
    hdlGetUsers(token)
  },[])

  const hdlGetUsers = (token)=>{
    getlistAllUsers(token)
    .then((res)=>{setUsers(res.data)})
    .catch((err)=>{console.log(err)})
  }

  const hdlChangeUserStatus = async(userId,userStatus)=>{
    console.log(userId,userStatus)
    const value ={
      id:userId,
      enabled: !userStatus
    }
    changeUserStatus(token,value)
    .then((res)=>{
      console.log(res)
      hdlGetUsers(token)
      toast.success(res.data)
    })
    .catch(err=>console.log(err))
  }
  const hdlChangeUserRole = async(userId,userRole)=>{
    // console.log(userId,userStatus)
    const value ={
      id:userId,
      role: userRole
    }
    changeUserRole(token,value)
    .then((res)=>{
      console.log(res)
      hdlGetUsers(token)
      toast.success(res.data)
    })
    .catch(err=>console.log(err))
  }
  return (
    <div className='container mx-auto p-4 bg-white shadow-md'>
<table className='w-full'>
  <thead>

  <tr>
    <th>ลำดับ</th>
    <th>Email</th>
    <th>สิทธิ์</th>
    <th>สถานะ</th>
    <th>จัดการ</th>
  </tr>
  </thead>
  <tbody>
    {
      users?.map((el,i)=>
  <tr key={el.id}>
    <td>{i+1}</td>
    <td>{el.email}</td> 

    <td>
      {/* {el.role} */}
      <select onChange={(e)=>hdlChangeUserRole(el.id,e.target.value)} value={el.role}>
        <option>user</option>
        <option>admin</option>
      </select>
      </td>



    <td>{el.enabled?'Active':'InActive'}</td>
    <td>
      <button className='bg-yellow-500 text-white p-1 rounded-md shadow-md' onClick={()=>hdlChangeUserStatus(el.id,el.enabled)}>{el.enabled?'Disable':'Enable'}</button>
    </td>
  </tr>
      
      )
    }
  </tbody>

</table>
    </div>
  )
}

export default TableUser