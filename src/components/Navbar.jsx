import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-purple-200 flex justify-between items-center px-4'>
      <div className="logo font-bold">Locker</div>
        <ul>
            <li className='flex'>
                <a href="/">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </li>
        </ul>
    </nav>
  )
}
 
export default Navbar
