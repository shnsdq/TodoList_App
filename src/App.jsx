import { useState } from 'react'
import Navbar from './components/Navbar'


function App() {
  

  return (
    <>
    <Navbar/>
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100">
        <div className="">
          <h1 className='text-xl font-bold'>Your Todos</h1>
          
        </div>
      </div>
    </>
  )
}

export default App
