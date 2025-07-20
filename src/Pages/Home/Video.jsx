import React from 'react';

const Video = () => {
  return (
    <section className="md:pt-20 pt-6 md:px-4 px-2 bg-[#16437e] md:pb-20 dark:bg-gray-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-5 dark:text-blue-900">
          Discover How VALR Works
        </h2>
        <p className="md:text-lg text-md text-white dark:text-blue-900 text-center mb-8">
          A quick walkthrough showing how our tools help you get
          things done faster and easier.
        </p>
        <div className="w-full mx-auto aspect-video  relative group">
          <div className="absolute inset-0 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none
            md:bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-pink-400/30
            animate-glow">
          </div>
          <iframe
            className="md:w-[1150px] md:rounded-r-[50px] md:rounded-bl-[50px] rounded-r-[20px] rounded-bl-[20px] rounded-tl-none md:h-[630px] w-full h-[250px] rounded relative z-10"
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