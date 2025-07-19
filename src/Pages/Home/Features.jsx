import {  FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useGetLoggedUserQuery } from "../../redux/features/baseApi";

const FeaturesCard = () => {
	const { data: loggedInUser, isLoading } = useGetLoggedUserQuery();

	if (isLoading || !loggedInUser) {
		return null;
	}

	return (
		<div className="bg-[#16437e] py-10">
			<div className="bg-white ">
			{/* Feature Cards */}
			<div className="flex flex-col md:flex-row md:justify-center md:items-center md:gap-8 min-h-[90vh] ">
			

				<div className="basis-6/12 ">
					<img src="https://i.ibb.co/chH8jp2j/Blue-and-White-Modern-Cricket-Match-Sports-Banner.png" className="mt-6" />
				</div>

			<div className="basis-6/12 px-10 space-y-10">
					<div>
						<h1 className="text-4xl font-bold text-[#0B2A52] ">Unmatched Experience</h1>
					<p className="pt-3 text-gray-500">With decades of experience, we’ve helped thousands of veterans secure their benefits. No case is too complex for our team.</p>
					</div>

					<div>
	
					<h1 className="text-4xl font-bold text-[#0B2A52]">Turn Your Disabilities Into Possibilities</h1>
					<p className="pt-3 text-gray-500">We transform the challenges of navigating the VA system into a clear path toward the benefits you deserve.</p>
				</div>

					<div>
						<h1 className="text-4xl font-bold text-[#0B2A52]">100% Success Rate</h1>
					<p className="pt-3 text-gray-500">We’ve never failed to achieve our clients’ goals. Every veteran we’ve worked with has seen results.</p>
					</div>

					<div className="group flex items-center bg-red-500 w-[280px] rounded-md cursor-pointer shadow-lg shadow-gray-500 overflow-hidden transform transition-transform duration-300 hover:-translate-y-1 ">
						<Link
						to="/narrative" 
						className="px-5 py-4 text-white text-lg font-semibold uppercase">
							Start Your Claim
						</Link>
						<div className="transition-transform duration-300 ease-in-out group-hover:translate-x-2 pr-4">
							<FaArrowRightLong size={28} className="text-white" />
						</div>
						</div>
				</div>
			</div>

				<div className="bg-[#16437e] py-20">
					<div className="w-full flex items-center justify-center container  mx-auto ">
						<iframe
						className="w-[1150px] h-[630px] rounded"
						src="https://www.youtube.com/embed/LWHixRchlYc?si=9AeuHvP1C_C5MEAj"           title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
						></iframe>
					</div>
				</div>


			</div>
		</div>
	);
};

export default FeaturesCard;
