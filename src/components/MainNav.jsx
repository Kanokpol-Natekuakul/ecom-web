import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import useEcomStore from '../store/econ-store'
import { ChevronDown } from 'lucide-react';


const MainNav = () => {
  const carts = useEcomStore((state)=>state.carts)
  const [isOpen,setIsOpen] =useState(false)
  const user = useEcomStore((state)=>state.user)

  const logout = useEcomStore((state)=>state.logout)
  const toggleDropdown=()=>{
    setIsOpen(!isOpen)
  }
  return (
    <nav className='bg-white shadow-md'>
      <div className='mx-auto px-4'>
        <div className='flex justify-between h-16' >
          <div className='flex items-center gap-6'>
            <Link to={'/'} className='text-2xl font-bold'>LOGO</Link>
            <NavLink className={({isActive})=>isActive ? 'bg-gray-200 px-3 py-2 rounded-md text-sm font-medium':'px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-200'}
            to={'/'}>Home</NavLink>
            <NavLink className={({isActive})=>isActive ? 'bg-gray-200 px-3 py-2 rounded-md text-sm font-medium':'px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-200'} to={'/shop'}>Shop</NavLink>
            <NavLink  to={'/cart'} className={({isActive})=>isActive ? 'bg-gray-200 px-3 py-2 rounded-md text-sm font-medium':'px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-200'}>Cart
            {carts.length >0 && 
            (<span className='absolute top-0 bg-red-500 rounded-full px-2'>{carts.length}</span>)
            }
            
            </NavLink>
          </div>


          {
            user 
            ?            <div className='flex items-center gap-4'>
              <button onClick={toggleDropdown} className='flex items-center gap-2 hover:bg-gray-200 px-2 py-3 rounded-md'>
                <img className='w-8 h-8' src="https://cdn.iconscout.com/icon/free/png-512/free-avatar-icon-download-in-svg-png-gif-file-formats--user-professor-avatars-flat-icons-pack-people-456317.png?f=webp&w=256" alt="" />
                <ChevronDown />
              </button>
              {
                isOpen && <div className='z-50 absolute mt-2 top-16 bg-white shadow-md'>
                <Link to={'/user/history'} className='block px-4 py-2 hover:bg-gray-200'> History</Link>
                <button onClick={()=>logout()}  className='block px-4 py-2 hover:bg-gray-200'> Logout</button>
              
              </div>
              }
              
            </div>
            : 
          <div className='flex items-center gap-4'>
            <NavLink className={({isActive})=>isActive ? 'bg-gray-200 px-3 py-2 rounded-md text-sm font-medium':'px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-200'} to={'/register'}>Register</NavLink>
            <NavLink className={({isActive})=>isActive ? 'bg-gray-200 px-3 py-2 rounded-md text-sm font-medium':'px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-200'} to={'/login'}>Login</NavLink>
          </div>

          }
{/* 
            <div className='flex items-center gap-4'>
              <button onClick={toggleDropdown} className='flex items-center gap-2 hover:bg-gray-200 px-2 py-3 rounded-md'>
                <img className='w-8 h-8' src="https://cdn.iconscout.com/icon/free/png-512/free-avatar-icon-download-in-svg-png-gif-file-formats--user-professor-avatars-flat-icons-pack-people-456317.png?f=webp&w=256" alt="" />
                <ChevronDown />
              </button>
              {
                isOpen && <div className='absolute mt-2 top-16 bg-white shadow-md'>
                <Link to={'/user/history'} className='block px-4 py-2 hover:bg-gray-200'> History</Link>
                <button onClick={()=>logout()}  className='block px-4 py-2 hover:bg-gray-200'> Logout</button>
              
              </div>
              }
              
            </div>



          <div className='flex items-center gap-4'>
            <NavLink className={({isActive})=>isActive ? 'bg-gray-200 px-3 py-2 rounded-md text-sm font-medium':'px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-200'} to={'/register'}>Register</NavLink>
            <NavLink className={({isActive})=>isActive ? 'bg-gray-200 px-3 py-2 rounded-md text-sm font-medium':'px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-200'} to={'/login'}>Login</NavLink>
          </div> */}


          </div>
      </div>
    </nav>
  )
}

export default MainNav