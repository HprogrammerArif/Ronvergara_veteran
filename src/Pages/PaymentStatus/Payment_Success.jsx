import React from 'react'
import { Link } from 'react-router-dom'

const Payment_Success = () => {
  return (
    <div className='min-h-screen bg-white flex flex-col items-center justify-center mx-auto text-center'>
      <h1>Payment Successfull Completed</h1>
      
      <Link to="/">
     <button className='bg-red-500 px-10 py-2 rounded-md font-semibold text-white mt-5'>
     Go Home
     </button>
      </Link>
    </div>
  )
}

export default Payment_Success
