import React from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate()
  return (
    <div className='flex bg-sky-800 text-white gap-4 p-3 '>
        <p>ABI</p>
        <div className='flex gap-10 ml-[70%]'>
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
        <p onClick={()=>navigate('/login')}>Login</p>
        <p>Sign up</p>
        </div>

    </div>
  )
}

export default Header