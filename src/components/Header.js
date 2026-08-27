import React from 'react'

function Header() {
  return (
    <div className='flex bg-sky-800 text-white gap-4 p-3 '>
        <p>ABI</p>
        <div className='flex gap-10 ml-[70%]'>
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
        <p>Login</p>
        <p>Sign up</p>
        </div>

    </div>
  )
}

export default Header