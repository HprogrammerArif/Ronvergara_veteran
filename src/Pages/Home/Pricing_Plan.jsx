// import {
// 	useGetLoggedUserQuery,
// 	useGetPlansQuery,
// 	usePaymentCheckoutMutation,
// } from "../../redux/features/baseApi";
// import FeaturesCard from "./Features";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from "react-router-dom";

// const Pricing_Plan = () => {
// 	const { data: plans } = useGetPlansQuery();
// 	const { data: loggedInUser, isLoading } = useGetLoggedUserQuery();
// 	const [paymentCheckout] = usePaymentCheckoutMutation();
// 	const navigate = useNavigate();

// 	const payment_video = "../../../public/payment.mov"

// 	if (isLoading) return null;

// 	const hasSubscription = loggedInUser?.subscription_plan;
// 	if (loggedInUser && hasSubscription) {
// 		return <FeaturesCard />;
// 	}

// 	const handleSubcription = async (plan) => {
// 		if (!loggedInUser) {
// 			toast.error("Please login to continue", {
// 				position: "top-right",
// 				autoClose: 2000,
// 			});

// 			setTimeout(() => {
// 				navigate("/login");
// 			}, 2000);

// 			return;
// 		}

// 		const payload = {
// 			plan_id: plan?.id,
// 		};

// 		try {
// 			const response = await paymentCheckout(payload).unwrap();
// 			window.location.href = response?.checkout_url;
// 		} catch (error) {
// 			console.log("subscription error", error);
// 		}
// 	};

// 	return (
// 		<section className="  md:p-5 dark:bg-gray-200 md:py-0 md:pt-10  py-10 md:min-h-[75vh] min-h-[60vh]">
// 			<ToastContainer />
// 			<div className="bg-white dark:bg-gray-200 container  p-2 mx-auto md:Pb-10">
// 			<div className="w-full  mx-auto pb-5">
// 					<iframe
// 					className="w-[1150px] h-[630px] mx-auto pb-10 rounded"
// 					src="https://www.youtube.com/embed/tkoxvKiBtwc?si=aspqN1u1M7Gm_TfP"
// 					title="YouTube video player"
// 					frameBorder="0"
// 					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
// 					referrerPolicy="strict-origin-when-cross-origin"
// 					allowFullScreen
// 					></iframe>
//      		 </div>

// 				<div className="text-center mb-10">
// 					<h2 className="text-xl md:w-1/2 mx-auto md:text-4xl font-bold text-[#0B2559]">
// 						Choose Your Plan to Complete the Veteran Benefits Form
// 					</h2>
// 				</div>

// 				<div className="md:max-w-5xl w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:gap-20 gap-8">
// 					{plans?.map((plan, index) => (
// 						<div
// 							key={index}
// 							className="bg-[#0B2559] text-white p-8 rounded-3xl shadow-lg flex flex-col text-center h-full"
// 						>
// 							<h3 className="text-lg font-semibold">
// 								{plan?.name}
// 							</h3>
// 							<p className="text-3xl font-bold mt-2">
// 								${plan?.amount}
// 							</p>

// 							<ul className="mt-4 space-y-2 md:text-base text-[10px]">
// 								{plan?.descriptions.map((feature, i) => (
// 									<li
// 										key={i}
// 										className="flex items-center space-x-2"
// 									>
// 										<span className="text-green-400">
// 											✔
// 										</span>
// 										<span className="text-xs">{feature?.text}</span>
// 									</li>
// 								))}
// 							</ul>

// 							<div className="mt-auto pt-10">
// 								<button
// 									onClick={() => handleSubcription(plan)}
// 									className="bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700 transition duration-300"
// 								>
// 									Get Started
// 								</button>
// 							</div>
// 						</div>
// 					))}
// 				</div>
// 			</div>
// 		</section>
// 	);
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
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";

const Pricing_Plan = () => {
  const { data: plans } = useGetPlansQuery();
  const { data: loggedInUser, isLoading } = useGetLoggedUserQuery();
  const [paymentCheckout] = usePaymentCheckoutMutation();
  const navigate = useNavigate();

  const payment_video = "../../../public/payment.mov";

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

    try {
      const response = await paymentCheckout().unwrap();
      window.location.href = response?.checkout_url;
    } catch (error) {
      console.log("subscription error", error);
    }
  };

  // Animation variants for mobile view
  const mobileTextVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const mobileButtonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className="md:p-5 dark:bg-gray-200 md:py-20 pt-32  md:pt-28 pb-20 md:pb-10 md:min-h-[75vh] flex items-center justify-ce20ter"
> 
      <ToastContainer />
      {/* Large Device View */}
      <div className="hidden md:block bg-white dark:bg-gray-200 container p-2 mx-auto md:pb-10">
        <div className="container w-3/4 mx-auto text-start flex items-start justify-between mb-10 text-4xl font-bold">
          <div>
            <h1 className="text-[#16437E]">
              You can complete the Veterans <br /> Benefits form with just a one-time
            </h1>
            <h1 className="bg-[#B31942] text-white w-[450px] flex items-center justify-center rounded-full p-4 px-10 text-3xl py-4 shadow-md shadow-gray-700 font-bold mt-7">
              <span className="text-white font-bold text-4xl">Payment of $195</span>
            </h1>
          </div>
          <div
            onClick={() => handleSubcription()}
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
        <motion.div
          variants={mobileTextVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-8"
        >
          <h1 className="text-2xl font-bold text-[#16437E]">
            Complete the Veterans Benefits form with a one-time payment
          </h1>
          <h1 className="bg-[#B31942] text-white w-full max-w-[300px] mx-auto flex items-center justify-center rounded-full p-3 text-2xl shadow-md shadow-gray-700 font-bold mt-5">
            <span className="text-white font-bold text-2xl">Payment of $195</span>
          </h1>
        </motion.div>
        <motion.div
          variants={mobileButtonVariants}
          initial="hidden"
          animate="visible"
          className="flex justify-center mb-8"
        >
          <div
            onClick={() => handleSubcription()}
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
  );
};

export default Pricing_Plan;
