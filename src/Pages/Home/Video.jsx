const Video = () => {
	const videoUrl = "../../../public/VIDEO-2025-06-27-09-19-10.mp4.mp4";

	return (
		<section className="pt-20 md:px-4 px-2 bg-white dark:bg-white">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-2xl md:text-4xl font-bold text-center mb-6 text-blue-900  dark:text-blue-900">
					Discover How Our Website Works
				</h2>

				<p className="text-lg text-blue-900  dark:text-blue-900 text-center mb-8">
					A quick walkthrough showing how our tools help you get
					things done faster and easier.
				</p>

				<div className="overflow-hidden shadow-lg">
					<video
						className="w-full h-auto"
						controls
						autoPlay
						muted
						playsInline
					>
						<source src={videoUrl} type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				</div>
			</div>
		</section>
	);
};

export default Video;
