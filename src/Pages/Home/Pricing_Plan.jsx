import React from "react";
import { useGetPlansQuery, usePaymentCheckoutMutation } from "../../redux/features/baseApi";

const Pricing_Plan = () => {

const {data:plans} = useGetPlansQuery();
console.log(plans)

const [paymentCheckout] = usePaymentCheckoutMutation()


const handleSubcription = async (data) =>{
console.log(data)

const payload = {
  plan_id: data?.id,
  
}

console.log("payload", payload)

try {
  const response = await paymentCheckout(payload).unwrap();
  console.log("checkout", response)
  console.log(response?.checkout_url);
  window.location.href = response?.checkout_url;

} catch (error) {
  console.log("subcription error", error)
}


}


  return (
   <section className="bg-gray-200 lg:p-20 p-5">
 <div className="bg-white container md:p-20 p-5  mx-auto">

      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
          Choose Your Plan to Complete <br /> the Veteran Benefits Form
        </h2>
      </div>

     
      <div className="md:max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:gap-20 gap-8">
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
          //  to="/veteran_information"
          onClick={()=>handleSubcription(plan)}
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

