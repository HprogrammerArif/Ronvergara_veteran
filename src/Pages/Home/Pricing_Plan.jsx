
// import { useGetLoggedUserQuery, useGetPlansQuery, usePaymentCheckoutMutation } from "../../redux/features/baseApi";
// import FeaturesCard from "./Features";

// const Pricing_Plan = () => {

// const {data:plans} = useGetPlansQuery();
// console.log(plans)

// const [paymentCheckout] = usePaymentCheckoutMutation()
// const { data: loggedInUser } = useGetLoggedUserQuery();
// console.log("data", loggedInUser)

// const hasPricing_plan = loggedInUser?.subscription_plan

// if (hasPricing_plan) {
//     return null; 
//   }

//   if (!hasPricing_plan) {
//     return <FeaturesCard/>; 
//   }

// const handleSubcription = async (data) =>{
// console.log(data)

// const payload = {
//   plan_id: data?.id,
  
// }

// console.log("payload", payload)

// try {
//   const response = await paymentCheckout(payload).unwrap();
//   console.log("checkout", response)
//   console.log(response?.checkout_url);
//   window.location.href = response?.checkout_url;

// } catch (error) {
//   console.log("subcription error", error)
// }

// }


//   return (
//    <section className=" lg:p-20 md:p-5 dark:bg-white py-10 md:min-h-screen">
//  <div className="bg-white dark:bg-white container md:p-20 p-2  mx-auto">

//       <div className="text-center mb-10">
//         <h2 className="text-xl md:w-1/2 mx-auto md:text-4xl font-bold text-[#0B2559]">
//           Choose Your Plan to Complete the Veteran Benefits Form
//         </h2>
//       </div>

     
//       <div className="md:max-w-4xl w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:gap-20 gap-8">
//         {plans?.map((plan, index) => (
//        <div
//        key={index}
//        className="bg-[#0B2559] text-white p-8 rounded-3xl shadow-lg flex flex-col text-center h-full"
//      >
//        <h3 className="text-lg font-semibold">{plan?.name}</h3>
//        <p className="text-3xl font-bold mt-2">$ {plan?.amount}</p>
     
//        <ul className="mt-4 space-y-2 text-sm">
//          {plan?.descriptions.map((feature, i) => (
//            <li key={i} className="flex items-center space-x-2">
//              <span className="text-green-400">✔</span>
//              <span>{feature?.text}</span>
//            </li>
//          ))}
//        </ul>
     
      
//        <div className="mt-auto pt-10">
//          <button
 
//           onClick={()=>handleSubcription(plan)}
//            className="bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700 transition duration-300"
//          >
//            Get Started
//          </button>
//        </div>
//      </div>
     
//         ))}
//       </div>
//     </div>
//    </section>
//   );
// };

// export default Pricing_Plan;




// import {
//   useGetLoggedUserQuery,
//   useGetPlansQuery,
//   usePaymentCheckoutMutation,
// } from "../../redux/features/baseApi";
// import FeaturesCard from "./Features";

// const Pricing_Plan = () => {
//   const { data: plans } = useGetPlansQuery();
//   const { data: loggedInUser, isLoading } = useGetLoggedUserQuery();
//   const [paymentCheckout] = usePaymentCheckoutMutation();

//   // ✅ If user is logged in, do not show Pricing_Plan
//   if (isLoading) return null;
//   if (loggedInUser) return null;

//   // ✅ Only show if NOT logged in
//   const handleSubcription = async (data) => {
//     const payload = {
//       plan_id: data?.id,
//     };

//     try {
//       const response = await paymentCheckout(payload).unwrap();
//       window.location.href = response?.checkout_url;
//     } catch (error) {
//       console.log("subscription error", error);
//     }
//   };

//   return (
//     <section className="lg:p-20 md:p-5 dark:bg-white py-10 md:min-h-screen">
//       <div className="bg-white dark:bg-white container md:p-20 p-2 mx-auto">
//         <div className="text-center mb-10">
//           <h2 className="text-xl md:w-1/2 mx-auto md:text-4xl font-bold text-[#0B2559]">
//             Choose Your Plan to Complete the Veteran Benefits Form
//           </h2>
//         </div>

//         <div className="md:max-w-4xl w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:gap-20 gap-8">
//           {plans?.map((plan, index) => (
//             <div
//               key={index}
//               className="bg-[#0B2559] text-white p-8 rounded-3xl shadow-lg flex flex-col text-center h-full"
//             >
//               <h3 className="text-lg font-semibold">{plan?.name}</h3>
//               <p className="text-3xl font-bold mt-2">$ {plan?.amount}</p>

//               <ul className="mt-4 space-y-2 text-sm">
//                 {plan?.descriptions.map((feature, i) => (
//                   <li key={i} className="flex items-center space-x-2">
//                     <span className="text-green-400">✔</span>
//                     <span>{feature?.text}</span>
//                   </li>
//                 ))}
//               </ul>

//               <div className="mt-auto pt-10">
//                 <button
//                   onClick={() => handleSubcription(plan)}
//                   className="bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700 transition duration-300"
//                 >
//                   Get Started
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Pricing_Plan;



// import {
//   useGetLoggedUserQuery,
//   useGetPlansQuery,
//   usePaymentCheckoutMutation,
// } from "../../redux/features/baseApi";
// import FeaturesCard from "./Features";

// const Pricing_Plan = () => {
//   const { data: plans } = useGetPlansQuery();
//   const { data: loggedInUser, isLoading } = useGetLoggedUserQuery();
//   const [paymentCheckout] = usePaymentCheckoutMutation();

//   if (isLoading) return null;

//   const hasSubscription = loggedInUser?.subscription_plan;
//   if (loggedInUser && hasSubscription) {
//     return <FeaturesCard />;
//   }

  
//   const handleSubcription = async (data) => {
//     const payload = {
//       plan_id: data?.id,
//     };

//     try {
//       const response = await paymentCheckout(payload).unwrap();
//       window.location.href = response?.checkout_url;
//     } catch (error) {
//       console.log("subscription error", error);
//     }
//   };

//   return (
//     <section className="lg:p-20 md:p-5 dark:bg-white py-10 md:min-h-screen">
//       <div className="bg-white dark:bg-white container md:p-20 p-2 mx-auto">
//         <div className="text-center mb-10">
//           <h2 className="text-xl md:w-1/2 mx-auto md:text-4xl font-bold text-[#0B2559]">
//             Choose Your Plan to Complete the Veteran Benefits Form
//           </h2>
//         </div>

//         <div className="md:max-w-4xl w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:gap-20 gap-8">
//           {plans?.map((plan, index) => (
//             <div
//               key={index}
//               className="bg-[#0B2559] text-white p-8 rounded-3xl shadow-lg flex flex-col text-center h-full"
//             >
//               <h3 className="text-lg font-semibold">{plan?.name}</h3>
//               <p className="text-3xl font-bold mt-2">$ {plan?.amount}</p>

//               <ul className="mt-4 space-y-2 text-sm">
//                 {plan?.descriptions.map((feature, i) => (
//                   <li key={i} className="flex items-center space-x-2">
//                     <span className="text-green-400">✔</span>
//                     <span>{feature?.text}</span>
//                   </li>
//                 ))}
//               </ul>

//               <div className="mt-auto pt-10">
//                 <button
//                   onClick={() => handleSubcription(plan)}
//                   className="bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700 transition duration-300"
//                 >
//                   Get Started
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Pricing_Plan;



import {
  useGetLoggedUserQuery,
  useGetPlansQuery,
  usePaymentCheckoutMutation,
} from "../../redux/features/baseApi";
import FeaturesCard from "./Features";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Pricing_Plan = () => {
  const { data: plans } = useGetPlansQuery();
  const { data: loggedInUser, isLoading } = useGetLoggedUserQuery();
  const [paymentCheckout] = usePaymentCheckoutMutation();
  const navigate = useNavigate();

  if (isLoading) return null;

  const hasSubscription = loggedInUser?.subscription_plan;
  if (loggedInUser && hasSubscription) {
    return <FeaturesCard />;
  }

  const handleSubcription = async (plan) => {
    if (!loggedInUser) {
      toast.error("Please login to continue", {
        position: "top-right",
        autoClose: 2000,
      });

      setTimeout(() => {
        navigate("/login");
      }, 2000);

      return;
    }

    const payload = {
      plan_id: plan?.id,
    };

    try {
      const response = await paymentCheckout(payload).unwrap();
      window.location.href = response?.checkout_url;
    } catch (error) {
      console.log("subscription error", error);
    }
  };

  return (
    <section className="lg:p-20 md:p-5 dark:bg-white py-10 md:min-h-[85vh]">
      <ToastContainer />
      <div className="bg-white dark:bg-white container  p-2 mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-xl md:w-1/2 mx-auto md:text-4xl font-bold text-[#0B2559]">
            Choose Your Plan to Complete the Veteran Benefits Form
          </h2>
        </div>

        <div className="md:max-w-4xl w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:gap-20 gap-8">
          {plans?.map((plan, index) => (
            <div
              key={index}
              className="bg-[#0B2559] text-white p-8 rounded-3xl shadow-lg flex flex-col text-center h-full"
            >
              <h3 className="text-lg font-semibold">{plan?.name}</h3>
              <p className="text-3xl font-bold mt-2">$ {plan?.amount}</p>

              <ul className="mt-4 space-y-2 text-sm">
                {plan?.descriptions.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <span className="text-green-400">✔</span>
                    <span>{feature?.text}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-10">
                <button
                  onClick={() => handleSubcription(plan)}
                  className="bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700 transition duration-300"
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing_Plan;
