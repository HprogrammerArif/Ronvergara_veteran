import React from 'react'
import { FaCheck } from 'react-icons/fa'

const Payment_Success = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <div className="bg-white p-6 rounded-lg shadow-lg w-80">
      <div className="flex justify-center mb-4">
      <FaCheck  />
      </div>
      <h2 className="text-2xl font-semibold text-center text-green-600">
        Payment Successful!
      </h2>
      <p className="mt-2 text-center text-gray-500">
        Thank you for your payment. Your transaction was successfully completed.
      </p>
      <div className="mt-6 text-center">
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
          Go to Dashboard
        </button>
      </div>
    </div>
  </div>
  )
}

export default Payment_Success
