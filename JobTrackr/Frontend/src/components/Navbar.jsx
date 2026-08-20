import React from 'react'

const Navbar = () => {
    return (
        <div className='w-full border-b-2 border-violet-200 flex items-center justify-between px-5 py-2 bg-black text-violet-200 '>
            <img src="src\assets\logo.png" alt="logo" className='w-14 md:w-15 ' />
            <button className='border-2 h-fit px-3 py-1 text-sm rounded-2xl'>Log in</button>
        </div>
    )
}

export default Navbar