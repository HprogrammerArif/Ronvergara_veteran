// import uploadImg from "../../assets/DD_upload.png";
// import narrationImg from "../../assets/narration.png";
// import { Link } from "react-router-dom";
// import { useGetLoggedUserQuery } from "../../redux/features/baseApi";

// const FeaturesCard = () => {
// 	const { data: loggedInUser, isLoading } = useGetLoggedUserQuery();
// 	const valr_into = "../../../public/valr_review.mp4"

// 	if (isLoading || !loggedInUser) {
// 		return null;
// 	}

// 	return (
// 		<div className="bg-gray-200 py-8 px-2 md:px-10">
// 			<div className="flex flex-col md:flex-row md:justify-center md:items-stretch md:gap-8">
// 				<Link
// 					to="/dd_214_info"
// 					className="bg-[#0A3161] flex flex-col items-center justify-start text-center w-full md:w-[45%] lg:w-2/6 rounded-lg shadow-md p-6 md:p-8 lg:p-10 mb-6 md:mb-0"
// 				>
// 					<img
// 						src={uploadImg}
// 						alt="DD-214 Upload"
// 						className="w-[180px] md:w-[200px] lg:w-[250px] h-auto"
// 					/>
// 					<h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mt-6 leading-snug">
// 						DD-214 Upload & Auto-Population
// 					</h1>
// 				</Link>

// 				<Link
// 					to="/narrative"
// 					className="bg-[#0A3161] flex flex-col items-center justify-start text-center w-full md:w-[45%] lg:w-2/6 rounded-lg shadow-md p-6 md:p-8 lg:p-10"
// 				>
// 					<img
// 						src={narrationImg}
// 						alt="Auto Generated Claim"
// 						className="w-[180px] md:w-[200px] lg:w-[250px] h-auto"
// 					/>
// 					<h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mt-6 leading-snug">
// 						Auto Generated Claim Narrative
// 					</h1>
// 				</Link>
// 			</div>
// 			<div className="container mx-auto">
// 				<div className="overflow-hidden shadow-lg">
// 					<video
// 						className="w-full h-auto"
// 						controls
// 						autoPlay
// 						muted
// 						playsInline
// 					>
// 						<source src={valr_into} type="video/mp4" />
// 						Your browser does not support the video tag.
// 					</video>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default FeaturesCard;


import uploadImg from "../../assets/DD_upload.png";
import narrationImg from "../../assets/narration.png";
import { Link } from "react-router-dom";
import { useGetLoggedUserQuery } from "../../redux/features/baseApi";

const FeaturesCard = () => {
	const { data: loggedInUser, isLoading } = useGetLoggedUserQuery();
	const valr_intro = "/valr_review.mp4"; // ✅ Correct path to public video

	if (isLoading || !loggedInUser) {
		return null;
	}

	return (
		<div className="bg-gray-200 py-8 px-4 md:px-10">
			{/* Feature Cards */}
			<div className="flex flex-col md:flex-row md:justify-center md:items-stretch md:gap-8">
				{/* DD-214 Upload Card */}
				<Link
					to="/dd_214_info"
					className="bg-[#0A3161] flex flex-col items-center justify-start text-center w-full md:w-[45%] lg:w-2/6 rounded-lg shadow-md p-6 md:p-8 lg:p-10 mb-6 md:mb-0"
				>
					<img
						src={uploadImg}
						alt="DD-214 Upload"
						className="w-[180px] md:w-[200px] lg:w-[250px] h-auto"
					/>
					<h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mt-6 leading-snug">
						DD-214 Upload & Auto-Population
					</h1>
				</Link>

				{/* Narrative Card */}
				<Link
					to="/narrative"
					className="bg-[#0A3161] flex flex-col items-center justify-start text-center w-full md:w-[45%] lg:w-2/6 rounded-lg shadow-md p-6 md:p-8 lg:p-10"
				>
					<img
						src={narrationImg}
						alt="Auto Generated Claim"
						className="w-[180px] md:w-[200px] lg:w-[250px] h-auto"
					/>
					<h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mt-6 leading-snug">
						Auto Generated Claim Narrative
					</h1>
				</Link>
			</div>

			{/* Video Section */}
			<div className="container mx-auto mt-10 px-2">
				<div className="rounded-xl overflow-hidden shadow-lg ">
					<video
						className="w-full h-auto"
						controls
						autoPlay
						muted
						playsInline
					>
						<source src={valr_intro} type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				</div>
			</div>
		</div>
	);
};

export default FeaturesCard;
