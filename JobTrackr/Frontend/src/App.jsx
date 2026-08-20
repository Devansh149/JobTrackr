import React from 'react'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='w-full min-h-screen flex flex-col '>
      <Navbar />
      {/* Hero section   */}

      <div className='flex flex-1 flex-col items-center justify-center text-center bg-linear-to-br  from-black via-slate-900 to-violet-950 w-full gap-2 '>
        <h1 className='text-4xl md:text-6xl font-bold text-white'>Track Every Application <br /> Land the <span className='text-transparent bg-linear-to-l from-violet-400 to-violet-700 bg-clip-text'>offer</span></h1>
        <p className='text-amber-50 text-sm md:text-base mb-4'>Clean dashboard for every application,interview and follow-ups</p>
        
        <button className=' border rounded-xl text-white text-base px-3 py-2 '>Start Tracking</button>
      </div>
    </div>
  )
}

export default App