const Video = () => {

	return (
		<section className="pt-20 pb-8  md:px-4 px-2 bg-[#16437e] dark:bg-gray-200">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-6  dark:text-blue-900">
					Discover How VALR Works
				</h2>

				<p className="text-lg text-white  dark:text-blue-900 text-center mb-8">
					A quick walkthrough showing how our tools help you get
					things done faster and easier.
				</p>

				<div className="w-full  mx-auto aspect-video pb-5">
					<iframe
					className="w-[1150px] h-[630px] rounded"
					src="https://www.youtube.com/embed/q4cFBVU0r7Q?si=ztT5O7d5lnFZantP"           
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

export default Video;


