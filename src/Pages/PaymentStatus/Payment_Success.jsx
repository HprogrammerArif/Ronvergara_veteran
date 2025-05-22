// import React from 'react'
// import { FaCheck } from 'react-icons/fa'
// import { Link } from 'react-router-dom'

// const Payment_Success = () => {
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//     <div className="bg-white p-6 rounded-lg shadow-lg w-80">
//       <div className="flex justify-center mb-4">
//       <FaCheck  />
//       </div>
//       <h2 className="text-2xl font-semibold text-center text-green-600">
//         Payment Successful!
//       </h2>
//       <p className="mt-2 text-center text-gray-500">
//         Thank you for your payment. Your transaction was successfully completed.
//       </p>
//       <div className="mt-6 text-center">
//       <Link to="/veteran_information">
//           <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
//           Next Phase
//         </button>
//       </Link>
//       </div>
//     </div>
//   </div>
//   )
// }

// export default Payment_Success




import { useState, useEffect } from "react"
import { CheckCircle, ArrowRight, Download } from "lucide-react"
import { Link } from "react-router-dom"

export default function PaymentSuccess({ initialTransactionId = "", initialAmount = "" }) {
  const [transactionId, setTransactionId] = useState(initialTransactionId)
  const [amount, setAmount] = useState(initialAmount)
  const [date, setDate] = useState("")

  useEffect(() => {
    // Set current date in a readable format
    const currentDate = new Date()
    setDate(
      currentDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    )

    // Simulate dynamic data fetch (e.g., from an API)
    if (!initialTransactionId || !initialAmount) {
      // Example: Simulate API response
      setTransactionId(`TXN${Math.floor(100000000 + Math.random() * 900000000)}`)
      setAmount(`$${(Math.random() * 100 + 50).toFixed(2)}`)
    }
  }, [initialTransactionId, initialAmount])

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-green-50 to-white p-4">
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-lg shadow-lg">
          <div className="p-6">
            <div className="flex flex-col items-center">
              <div className="mb-6 mt-2">
                <div className="rounded-full bg-green-100 p-3">
                  <CheckCircle className="h-12 w-12 text-green-600" strokeWidth={1.5} />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-green-600 mb-2">Payment Successful!</h2>
              <p className="text-gray-500 text-center">
                Thank you for your payment. Your transaction has been completed successfully.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 space-y-3 mt-6">
              <div className="flex justify-between">
                <span className="text-gray-500">Transaction ID</span>
                <span className="font-medium">{transactionId || "Loading..."}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Amount</span>
                <span className="font-medium text-green-600">{amount || "Loading..."}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Date</span>
                <span className="font-medium">{date || "Loading..."}</span>
              </div>
            </div>

            <div className="mt-6">
              <hr className="border-gray-200" />
              
            </div>
          </div>

          <div className="p-6 pt-0 flex flex-col space-y-3">
            <Link href="/veteran_information" className="w-full">
              <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors flex items-center justify-center">
                Continue to Next Phase
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </Link>
            {/* <button className="w-full border border-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-50 transition-colors flex items-center justify-center">
              <Download className="mr-2 h-4 w-4" />
              Download Receipt
            </button> */}
          </div>
        </div>
      </div>
    </div>
  )
}