


// import { useGetLoggedUserQuery, useGetPlansQuery, usePaymentCheckoutMutation } from "../../redux/features/baseApi"
// import FeaturesCard from "./Features"
// import { toast, ToastContainer } from "react-toastify"
// import "react-toastify/dist/ReactToastify.css"
// import { useNavigate } from "react-router-dom"
// import { FiArrowUpRight } from "react-icons/fi"
// import { motion } from "framer-motion"
// import { useState } from "react"

// const Pricing_Plan = () => {
//   const { data: plans } = useGetPlansQuery()
//   const { data: loggedInUser, isLoading } = useGetLoggedUserQuery()
//   const [paymentCheckout] = usePaymentCheckoutMutation()

//   const navigate = useNavigate()
//   const [isModalOpen, setIsModalOpen] = useState(false)

//   if (isLoading) return null

//   const hasSubscription = loggedInUser?.subscription_plan

//   if (loggedInUser && hasSubscription) {
//     return <FeaturesCard />
//   }

//   const handleSubscription = async () => {
//     if (!loggedInUser) {
//       toast.error("Please login to continue", {
//         position: "top-right",
//         autoClose: 2000,
//       })
//       setTimeout(() => {
//         navigate("/login")
//       }, 2000)
//       return
//     }

//     try {
//       const response = await paymentCheckout().unwrap()
//       window.location.href = response?.checkout_url
//     } catch (error) {
//       console.log("subscription error", error)
//     }
//   }

//   const closeModal = () => {
//     setIsModalOpen(false)
//   }

//   // Animation variants for mobile view
//   const mobileTextVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   }

//   const mobileButtonVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
//   }

//   return (
//     <section className="md:p-5 dark:bg-gray-200 md:py-20 pt-32 md:pt-28 pb-20 md:pb-10 md:min-h-[75vh] flex items-center justify-center">
//       <ToastContainer />

//       {/* DaisyUI Modal */}
//       <input
//         type="checkbox"
//         id="plan-modal"
//         className="modal-toggle"
//         checked={isModalOpen}
//         onChange={() => setIsModalOpen(!isModalOpen)}
//       />
//       <div className="modal">
//         <div className="modal-box md:max-w-5xl w-full mx-auto bg-white md:p-8 rounded-none md:rounded-2xl">
//           <label
//             htmlFor="plan-modal"
//             className="btn btn-sm btn-circle absolute right-2 top-2 z-10"
//             onClick={closeModal}
//           >
//             ✕
//           </label>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
//             {plans?.map((plan) => (
//               <div
//                 key={plan.id}
//                 className="text-center md:border md:border-gray-200 rounded-xl md:p-6 p-2 md:hover:shadow-lg transition-shadow duration-300 flex flex-col"
//               >
//                 {/* Plan Name */}
//                 <h2 className="text-2xl font-semibold text-gray-800 mb-4">{plan.name}</h2>

//                 {/* Price Display */}
//                 <div className="mb-4">
//                   <span className="text-5xl font-bold text-gray-900">${plan.amount}</span>
//                 </div>

//                 {/* Duration Type */}
//                 <p className="text-gray-600 mb-2 text-lg capitalize">
//                   {plan.duration_type === "monthly" ? "Every month" : plan.duration_type}
//                 </p>
//                 <p className="text-gray-600 mb-6">
//                   {plan.name === "6 Months" ? "Short-term trial for beginners" : "Flexible monthly subscription"}
//                 </p>
//                 <p className="text-gray-600 mb-6">
//                   {plan.name === "6 Months" ? "Valid for 6 months" : "Cancel anytime"}
//                 </p>

//                 {/* Features List */}
//                 <div className="space-y-3 text-left mb-6">
//                   {plan.descriptions && plan.descriptions.length > 0 ? (
//                     plan.descriptions.map((feature) => (
//                       <div key={feature.id} className="flex items-center text-gray-700">
//                         <span className="mr-3 text-gray-400 mt-1">→</span>
//                         <span className="text-sm">{feature.text}</span>
//                       </div>
//                     ))
//                   ) : (
//                     <>
//                       <div className="flex items-center text-gray-700">
//                         <span className="mr-3 text-gray-400 mt-1">→</span>
//                         <span className="text-sm">Basic VA Benefits Support</span>
//                       </div>
//                       <div className="flex items-center text-gray-700">
//                         <span className="mr-3 text-gray-400 mt-1">→</span>
//                         <span className="text-sm">Monthly Access</span>
//                       </div>
//                       <div className="flex items-center text-gray-700">
//                         <span className="mr-3 text-gray-400 mt-1">→</span>
//                         <span className="text-sm">Email Support</span>
//                       </div>
//                     </>
//                   )}
//                 </div>

//                 {/* Subscribe Button at Bottom */}
//                 <div className="mt-auto">
//                   <button
//                     className="w-full bg-[#2D5A4A] text-white py-3 px-6 rounded-lg hover:bg-[#1e3d2f] transition duration-300 font-medium text-lg"
//                     onClick={() => {
//                       closeModal()
//                       handleSubscription()
//                     }}
//                   >
//                     Subscribe now
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Large Device View */}
//       <div className="hidden md:block bg-white dark:bg-gray-200 container p-2 mx-auto md:pb-10">
//         <div className="container w-3/4 mx-auto text-start flex items-start justify-between mb-10 text-4xl font-bold">
//           <div>
//             <h1 className="text-[#16437E]">
//               You can complete the Veterans <br /> Benefits form with a
//             </h1>
//             <h1 className="bg-[#B31942] text-white w-[600px] flex items-center justify-center rounded-full p-4 px-10 text-3xl py-4 shadow-md shadow-gray-700 font-bold mt-7">
//               <span className="text-white font-bold text-4xl">Payment of $195 or $50</span>
//             </h1>
//           </div>
//           <div
//             onClick={() => setIsModalOpen(true)}
//             className="bg-[#0A3161] cursor-pointer h-36 w-36 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-105"
//           >
//             <span className="text-xl text-white mt-4">
//               buy now <FiArrowUpRight className="flex mx-auto" size={36} />
//             </span>
//           </div>
//         </div>
//         <div className="w-full mx-auto pb-5">
//           <iframe
//             className="md:w-[1150px] md:rounded-r-[50px] mx-auto md:rounded-bl-[50px] rounded-r-[20px] rounded-bl-[20px] rounded-tl-none md:h-[630px] w-full h-[250px] rounded relative z-10"
//             src="https://www.youtube.com/embed/tkoxvKiBtwc?si=aspqN1u1M7Gm_TfP"
//             title="YouTube video player"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             referrerPolicy="strict-origin-when-cross-origin"
//             allowFullScreen
//           ></iframe>
//         </div>
//       </div>

//       {/* Mobile Device View */}
//       <div className="md:hidden bg-white dark:bg-gray-200 container p-2 mx-auto">
//         <motion.div variants={mobileTextVariants} initial="hidden" animate="visible" className="text-center mb-8">
//           <h1 className="text-2xl font-bold text-[#16437E]">Complete the Veterans Benefits form with a</h1>
//           <h1 className="bg-[#B31942] text-white w-full max-w-[300px] mx-auto flex items-center justify-center rounded-full p-3 text-2xl shadow-md shadow-gray-700 font-bold mt-5">
//             <span className="text-white font-bold text-2xl">Payment of $195 or $50</span>
//           </h1>
//         </motion.div>
//         <motion.div
//           variants={mobileButtonVariants}
//           initial="hidden"
//           animate="visible"
//           className="flex justify-center mb-8"
//         >
//           <div
//             onClick={() => setIsModalOpen(true)}
//             className="bg-[#0A3161] cursor-pointer h-32 w-32 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-105"
//           >
//             <span className="text-xl text-white mt-2 font-bold">
//               Buy Now <FiArrowUpRight className="flex mx-auto font-bold space-y-2" size={32} />
//             </span>
//           </div>
//         </motion.div>
//         <div className="w-full mx-auto">
//           <iframe
//             className="rounded-r-[20px] rounded-bl-[20px] rounded-tl-none w-full h-[250px] rounded relative z-10"
//             src="https://www.youtube.com/embed/tkoxvKiBtwc?si=aspqN1u1M7Gm_TfP"
//             title="YouTube video player"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             referrerPolicy="strict-origin-when-cross-origin"
//             allowFullScreen
//           ></iframe>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Pricing_Plan

import { useGetLoggedUserQuery, useGetPlansQuery, usePaymentCheckoutMutation } from "../../redux/features/baseApi"
import FeaturesCard from "./Features"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useNavigate } from "react-router-dom"
import { FiArrowUpRight } from "react-icons/fi"
import { motion } from "framer-motion"
import { useState } from "react"
import { IoClose } from "react-icons/io5"

const Pricing_Plan = () => {
  const { data: plans } = useGetPlansQuery()
  const { data: loggedInUser, isLoading } = useGetLoggedUserQuery()
  const [paymentCheckout] = usePaymentCheckoutMutation()

  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false)

  if (isLoading) return null

  const hasSubscription = loggedInUser?.subscription_plan

  if (loggedInUser && hasSubscription) {
    return <FeaturesCard />
  }

  const handleSubscription = async (id) => {
    console.log("id", id)

    if (!loggedInUser) {
      toast.error("Please login to continue", {
        position: "top-right",
        autoClose: 2000,
      })
      setTimeout(() => {
        navigate("/login")
      }, 2000)
      return
    }

    const payload = {
      plan_id: id,
    }

    try {
      const response = await paymentCheckout(payload).unwrap()
      window.location.href = response?.checkout_url
    } catch (error) {
      console.log("subscription error", error)
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  // Animation variants for mobile view
  const mobileTextVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const mobileButtonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  }

  return (
    <section 
    id="pricing_plan"
    className="md:p-5 dark:bg-gray-200 md:py-20 pt-10 md:pt-28 pb-10 md:pb-10 md:min-h-[75vh] flex items-center justify-center">
      <ToastContainer />

      {/* DaisyUI Modal */}
      <input
        type="checkbox"
        id="plan-modal"
        className="modal-toggle"
        checked={isModalOpen}
        onChange={() => setIsModalOpen(!isModalOpen)}
      />
      <div className={`modal ${isModalOpen ? "modal-open" : ""}`}>
        <div className="modal-box md:max-w-5xl w-full mx-auto bg-white md:p-8 rounded-none md:rounded-2xl">
          <button
            htmlFor="plan-modal"
            className="btn btn-sm hover:bg-red-700 hover:text-white btn-circle absolute right-2 top-2 z-10"
            onClick={closeModal}
          >
            <IoClose size={30}  />

          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 ">
            {plans?.map((plan) => (
              <div
                key={plan.id}
                className="text-center md:border md:border-gray-200 md:border-b-4 md:border-b-[#2D5A4A] rounded-xl md:p-6 p-2 md:hover:shadow-lg transition-shadow duration-300 flex flex-col"
>
              
                
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">{plan.name}</h2>

              
                <div className="mb-4">
                  <span className="text-5xl font-bold text-gray-900">${plan.amount}</span>
                </div>

                {/* Duration Type */}
                <p className="text-gray-600 mb-2 text-lg capitalize">
                  {plan.duration_type === "monthly" ? "Every month" : plan.duration_type}
                </p>
                <p className="text-gray-600 mb-6 font-medium">
                  {plan.name === "6 Months" ? "Short-term trial for beginners" : "Flexible monthly subscription"}
                </p>
                <p className="text-gray-600 mb-6 font-medium">
                  {plan.name === "6 Months" ? "Valid for 6 months" : "Cancel anytime"}
                </p>

                {/* Features List */}
                <div className="space-y-3 text-left mb-6">
                  {plan.descriptions && plan.descriptions.length > 0 ? (
                    plan.descriptions.map((feature) => (
                      <div key={feature.id} className="flex items-center text-gray-700">
                        <span className="mr-3 text-gray-400 mt-1 font-medium">→</span>
                        <span className="text-sm font-medium">{feature.text}</span>
                      </div>
                    ))
                  ) : (
                    <>
                      <div className="flex items-center text-gray-700">
                        <span className="mr-3 text-gray-400 mt-1">→</span>
                        <span className="text-sm">Basic VA Benefits Support</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <span className="mr-3 text-gray-400 mt-1">→</span>
                        <span className="text-sm">Monthly Access</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <span className="mr-3 text-gray-400 mt-1">→</span>
                        <span className="text-sm">Email Support</span>
                      </div>
                    </>
                  )}
                </div>

                {/* Subscribe Button at Bottom */}
                <div className="mt-auto">
                  <button
                    className="w-full bg-[#0A3161] text-white py-3 px-6 rounded-lg hover:bg-[#0d2036] transition duration-300 font-medium text-lg"
                    onClick={() => handleSubscription(plan?.id)}
                  >
                    Subscribe now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Large Device View */}
      <div className="hidden md:block bg-white dark:bg-gray-200 container p-2 mx-auto md:pb-10">
        <div className="container w-3/4 mx-auto text-start flex items-start justify-between mb-10 text-4xl font-bold">
          <div>
            <h1 className="text-[#16437E]">
              You can complete the Veterans <br /> Benefits form with a
            </h1>
            <h1 className="bg-[#B31942] text-white w-[600px] flex items-center justify-center rounded-full p-4 px-10 text-3xl py-4 shadow-md shadow-gray-700 font-bold mt-7">
              <span className="text-white font-bold text-4xl">Payment of $195 or $50</span>
            </h1>
          </div>
          <div
            onClick={() => setIsModalOpen(true)}
            className="bg-[#0A3161] cursor-pointer h-36 w-36 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-105"
          >
            <span className="text-xl text-white mt-4">
              buy now <FiArrowUpRight className="flex mx-auto" size={36} />
            </span>
          </div>
        </div>
        <div className="w-full mx-auto pb-5">
          <iframe
            className="md:w-[1150px] md:rounded-r-[50px] mx-auto md:rounded-bl-[50px] rounded-r-[20px] rounded-bl-[20px] rounded-tl-none md:h-[630px] w-full h-[250px] rounded relative z-10"
            src="https://www.youtube.com/embed/tkoxvKiBtwc?si=aspqN1u1M7Gm_TfP"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Mobile Device View */}
      <div className="md:hidden bg-white dark:bg-gray-200 container p-2 mx-auto">
        <motion.div variants={mobileTextVariants} initial="hidden" animate="visible" className="text-center mb-8">
          <h1 className="text-2xl font-bold text-[#16437E]">Complete the Veterans Benefits form with a</h1>
          <h1 className="bg-[#B31942] text-white w-full max-w-[350px] mx-auto flex items-center justify-center rounded-full p-3 text-2xl shadow-md shadow-gray-700 font-bold mt-5">
            <span className="text-white font-bold text-2xl">Payment of $195 or $50</span>
          </h1>
        </motion.div>
        <motion.div
          variants={mobileButtonVariants}
          initial="hidden"
          animate="visible"
          className="flex justify-center mb-8"
        >
          <div
            onClick={() => setIsModalOpen(true)}
            className="bg-[#0A3161] cursor-pointer h-32 w-32 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-105"
          >
            <span className="text-xl text-white mt-2 font-bold">
              Buy Now <FiArrowUpRight className="flex mx-auto font-bold space-y-2" size={32} />
            </span>
          </div>
        </motion.div>
        <div className="w-full mx-auto">
          <iframe
            className="rounded-r-[20px] rounded-bl-[20px] rounded-tl-none w-full h-[250px] rounded relative z-10"
            src="https://www.youtube.com/embed/tkoxvKiBtwc?si=aspqN1u1M7Gm_TfP"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default Pricing_Plan