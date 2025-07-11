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

	const payment_video = "../../../public/payment.mov"

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
		<section className="  md:p-5 dark:bg-gray-200 md:py-0 md:pt-10  py-10 md:min-h-[75vh] min-h-[60vh]">
			<ToastContainer />
			<div className="bg-white dark:bg-gray-200 container  p-2 mx-auto md:Pb-10">

 			{/* <div className="md:mb-20 conatiner mx-auto md:h-2/3 md:w-2/3  aspect-video mb-5">
					<iframe
					className="w-full h-full rounded"
					src="https://www.youtube.com/embed/0PX_92ItgHE?si=8dVeZR8W2che838e"          title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
					></iframe>
      		</div> */}

			<div className="w-full  mx-auto pb-5">
					<iframe
					className="w-[1150px] h-[630px] mx-auto pb-10 rounded"
					src="https://www.youtube.com/embed/0PX_92ItgHE?si=8dVeZR8W2che838e"           
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
					></iframe>
     		 </div>

				<div className="text-center mb-10">
					<h2 className="text-xl md:w-1/2 mx-auto md:text-4xl font-bold text-[#0B2559]">
						Choose Your Plan to Complete the Veteran Benefits Form
					</h2>
				</div>

				<div className="md:max-w-5xl w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:gap-20 gap-8">
					{plans?.map((plan, index) => (
						<div
							key={index}
							className="bg-[#0B2559] text-white p-8 rounded-3xl shadow-lg flex flex-col text-center h-full"
						>
							<h3 className="text-lg font-semibold">
								{plan?.name}
							</h3>
							<p className="text-3xl font-bold mt-2">
								${plan?.amount}
							</p>

							<ul className="mt-4 space-y-2 md:text-base text-[10px]">
								{plan?.descriptions.map((feature, i) => (
									<li
										key={i}
										className="flex items-center space-x-2"
									>
										<span className="text-green-400">
											✔
										</span>
										<span className="text-xs">{feature?.text}</span>
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
