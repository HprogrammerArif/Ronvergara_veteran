


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

          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
  {plans?.map((plan) => (
    <div
      key={plan.id}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
    >

      <div className="bg-gradient-to-r from-[#0A3161] to-[#0d2036] text-white p-6 relative">
      
        <div className="absolute top-4 right-4">
          <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            ${plan.amount} value
          </span>
        </div>
        
        <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
        

        <div className="flex items-center text-sm opacity-90">
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
          <span>
            {plan.duration_type === "monthly" ? "Valid for 1 month" : `Valid for ${plan.name}`}
          </span>
        </div>
      </div>


      <div className="p-6 flex-1 flex flex-col">
   
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Benefits Include:</h3>
          <span className="text-green-600 font-bold">Premium Access</span>
        </div>


        <div className="space-y-3 mb-6 flex-1">
          {plan.descriptions && plan.descriptions.length > 0 ? (
            plan.descriptions.map((feature) => (
              <div key={feature.id} className="flex items-start">
                <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 text-sm leading-relaxed">{feature.text}</span>
              </div>
            ))
          ) : (
            <>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 text-sm leading-relaxed">Basic VA Benefits Support</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 text-sm leading-relaxed">
                  {plan.duration_type === "monthly" ? "Monthly Access" : "Extended Access"}
                </span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 text-sm leading-relaxed">Email Support</span>
              </div>
            </>
          )}
        </div>

  
        <div className="mb-4">
          <span className="text-4xl font-bold text-gray-900">${plan.amount}</span>
          <span className="text-gray-600 ml-2">USD</span>
        </div>

 
        <button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg transition duration-300 font-medium text-lg"
          onClick={() => handleSubscription(plan?.id)}
        >
          Get Started
        </button>
      </div>
    </div>
  ))}
            </div> */}

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
  {plans?.map((plan) => (
    <div
      key={plan.id}
      className="bg-white rounded-tr-[30px] rounded-bl-[30px] border-l border-[#16467e] shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
    >
      {/* Header with Background Image + Overlay */}
      <div
        className="relative text-white p-6 bg-cover bg-center "
        style={{
          backgroundImage: "url('https://i.ibb.co/KtxkstY/american-flag.jpg')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/75 rounded-tr-[30px]"></div>

        {/* Content on top of overlay */}
        <div className="relative z-10">
          {/* Benefits Badge */}
          <div className="absolute top-4 right-4">
            <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              ${plan.amount} value
            </span>
          </div>

          <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>

          {/* Duration with icon */}
          <div className="flex items-center text-sm opacity-90">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
            <span>
              {plan.duration_type === "monthly"
                ? "Valid for 1 month"
                : `Valid for ${plan.name}`}
            </span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Benefits Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Benefits Include:</h3>
          <span className="text-green-600 font-bold">Premium Access</span>
        </div>

        {/* Features List with Checkmarks */}
        <div className="space-y-3 mb-6 flex-1">
          {plan.descriptions && plan.descriptions.length > 0 ? (
            plan.descriptions.map((feature) => (
              <div key={feature.id} className="flex items-start">
                <svg
                  className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700 text-sm leading-relaxed">{feature.text}</span>
              </div>
            ))
          ) : (
            <>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700 text-sm leading-relaxed">Basic VA Benefits Support</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  />
                </svg>
                <span className="text-gray-700 text-sm leading-relaxed">
                  {plan.duration_type === "monthly" ? "Monthly Access" : "Extended Access"}
                </span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700 text-sm leading-relaxed">Email Support</span>
              </div>
            </>
          )}
        </div>

        {/* Price */}
        <div className="mb-4">
          <span className="text-4xl font-bold text-[#B31942]">${plan.amount}</span>
          <span className="text-gray-600 ml-2 font-semibold">USD</span>
        </div>

        {/* Subscribe Button */}
        <button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg transition duration-300 font-medium text-lg"
          onClick={() => handleSubscription(plan?.id)}
        >
          Get Started
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
            className="bg-[#0A3161] cursor-pointer shadow-lg shadow-black/80 h-44 w-44 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-105"
          >
            <span className="text-xl text-white mt-4">
              Claim now <FiArrowUpRight className="flex mx-auto" size={36} />
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