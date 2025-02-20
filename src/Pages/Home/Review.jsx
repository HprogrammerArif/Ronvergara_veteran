// "use client"

// import React from "react"
// import { useKeenSlider } from "keen-slider/react"
// import "keen-slider/keen-slider.min.css"
// import { ChevronLeft, ChevronRight, Medal, Shield, Star } from 'lucide-react'

// const Review = () => {
//   const [currentSlide, setCurrentSlide] = React.useState(0)
//   const [loaded, setLoaded] = React.useState(false)
//   const [sliderRef, instanceRef] = useKeenSlider({
//     loop: true,
//     mode: "free",
//     slides: { perView: 1.2, spacing: 15 },
//     breakpoints: {
//       "(min-width: 640px)": { slides: { perView: 2, spacing: 15 } },
//       "(min-width: 1024px)": { slides: { perView: 3, spacing: 20 } },
//     },
//     initial: 0,
//     slideChanged(slider) {
//       setCurrentSlide(slider.track.details.rel)
//     },
//     created() {
//       setLoaded(true)
//     },
//   })

//   const videos = [
//     {
//       id: 1,
//       src: "https://www.w3schools.com/html/mov_bbb.mp4",
//       name: "General (Ret.) John Doe",
//       branch: "United States Army",
//       period: "January 15, 1985 – March 20, 2015",
//       service: "30 Years",
//       icon: Shield,
//     },
//     {
//       id: 2,
//       src: "https://www.w3schools.com/html/movie.mp4",
//       name: "General (Ret.) John Smith",
//       branch: "United States Navy",
//       period: "February 10, 1980 – December 1, 2010",
//       service: "30 Years",
//       icon: Medal,
//     },
//     {
//       id: 3,
//       src: "https://www.w3schools.com/html/mov_bbb.mp4",
//       name: "General (Ret.) Jane Doe",
//       branch: "United States Air Force",
//       period: "March 25, 1990 – April 5, 2020",
//       service: "30 Years",
//       icon: Star,
//     },
//   ]

//   return (
//     <section className=" bg-gray-200">
//       <div className="md:py-16 py-8 px-5 md:px-8 container mx-auto relative">
//         {/* Decorative Background Elements */}
      
//         {/* Section Header */}
//         <div className="text-center md:mb-16 mb-8 relative">
        
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             SEE HOW WE HAVE HELPED{" "} <br />
//             <span className="text-gray-900">VETERANS LIKE YOU</span>
//           </h2>
//           <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
//             Discover the profound impact we've had in transforming the lives of veterans like you,
//             ensuring they receive the benefits, resources, and unwavering support they rightfully deserve.
//           </p>
//         </div>

//         {/* Video Slider */}
//         <div className="relative px-4 md:px-12">
//           <div ref={sliderRef} className="keen-slider md:min-h-[500px]">
//             {videos.map((video) => (
//               <div key={video.id} className="keen-slider__slide p-4">
//                 <div className="bg-white shadow-xl rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl group">
//                   <div className="relative">
//                     <video
//                       controls
//                       className="w-full h-64 md:h-72 object-cover"
//                       poster="/placeholder.svg"
//                     >
//                       <source src={video.src} type="video/mp4" />
//                       Your browser does not support the video tag.
//                     </video>
//                     <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full transform transition-transform group-hover:scale-110">
//                       <video.icon className="w-6 h-6 text-blue-700" />
//                     </div>
//                   </div>
//                   <div className="p-6 space-y-4 transform transition-all duration-300 group-hover:bg-gray-50">
//                     <h3 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2 group-hover:text-blue-700">
//                       {video.name}
//                     </h3>
//                     <div className="space-y-3">
//                       <p className="text-gray-700 flex items-center gap-2 transform transition-all hover:translate-x-1">
//                         <Shield className="w-5 h-5 text-blue-700" />
//                         <span className="font-medium">{video.branch}</span>
//                       </p>
//                       <p className="text-gray-600 flex items-center gap-2 transform transition-all hover:translate-x-1">
//                         <Star className="w-5 h-5 text-red-600" />
//                         <span>{video.period}</span>
//                       </p>
//                       <p className="text-gray-600 flex items-center gap-2 transform transition-all hover:translate-x-1">
//                         <Medal className="w-5 h-5 text-green-600" />
//                         <span className="font-medium">{video.service}</span>
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Navigation Arrows */}
//           {loaded && instanceRef.current && (
//             <>
//               <button
//                 onClick={() => instanceRef.current?.prev()}
//                 className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               >
//                 <ChevronLeft className="w-6 h-6 text-gray-700" />
//               </button>
//               <button
//                 onClick={() => instanceRef.current?.next()}
//                 className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               >
//                 <ChevronRight className="w-6 h-6 text-gray-700" />
//               </button>
//             </>
//           )}
//         </div>

//         {/* Dots */}
//         {loaded && instanceRef.current && (
//           <div className="flex justify-center gap-2 mt-8">
//             {[...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => (
//               <button
//                 key={idx}
//                 onClick={() => instanceRef.current?.moveToIdx(idx)}
//                 className={`h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
//                   currentSlide === idx 
//                     ? "w-8 bg-blue-700" 
//                     : "w-3 bg-gray-300 hover:bg-gray-400"
//                 }`}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   )
// }

// export default Review
// // 

"use client"

import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { ChevronLeft, ChevronRight, Medal, Shield, Star } from 'lucide-react'

const Review = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [loaded, setLoaded] = React.useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: { perView: 1, spacing: 10 }, // Single video on mobile
    breakpoints: {
      "(min-width: 640px)": { slides: { perView: 2, spacing: 15 } },
      "(min-width: 1024px)": { slides: { perView: 3, spacing: 20 } },
    },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  const videos = [
    {
      id: 1,
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      name: "General (Ret.) John Doe",
      branch: "United States Army",
      period: "January 15, 1985 – March 20, 2015",
      service: "30 Years",
      icon: Shield,
    },
    {
      id: 2,
      src: "https://www.w3schools.com/html/movie.mp4",
      name: "General (Ret.) John Smith",
      branch: "United States Navy",
      period: "February 10, 1980 – December 1, 2010",
      service: "30 Years",
      icon: Medal,
    },
    {
      id: 3,
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      name: "General (Ret.) Jane Doe",
      branch: "United States Air Force",
      period: "March 25, 1990 – April 5, 2020",
      service: "30 Years",
      icon: Star,
    },
  ]

  return (
    <section className="bg-gray-200">
      <div className="py-8 px-4 md:py-16 md:px-8 container mx-auto relative">
        
        {/* Section Header */}
        <div className="text-center md:mb-16 mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            SEE HOW WE HAVE HELPED{" "} <br />
            <span className="text-gray-900">VETERANS LIKE YOU</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Discover the profound impact we've had in transforming the lives of veterans like you,
            ensuring they receive the benefits, resources, and unwavering support they rightfully deserve.
          </p>
        </div>

        {/* Video Slider */}
        <div className="relative px-2 sm:px-4 md:px-12">
          <div ref={sliderRef} className="keen-slider md:min-h-[500px] min-h-[400px]">
            {videos.map((video) => (
              <div key={video.id} className="keen-slider__slide p-3">
                <div className="bg-white shadow-lg rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl group">
                  <div className="relative">
                    <video
                      controls
                      className="w-full h-56 sm:h-64 md:h-72 object-cover"
                      poster="/placeholder.svg"
                    >
                      <source src={video.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full transform transition-transform group-hover:scale-110">
                      <video.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-700" />
                    </div>
                  </div>
                  <div className="p-4 sm:p-6 space-y-3 transform transition-all duration-300 group-hover:bg-gray-50">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 border-b border-gray-200 pb-2 group-hover:text-blue-700">
                      {video.name}
                    </h3>
                    <div className="space-y-2">
                      <p className="text-gray-700 flex items-center gap-2 transform transition-all hover:translate-x-1 text-sm sm:text-base">
                        <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-blue-700" />
                        <span className="font-medium">{video.branch}</span>
                      </p>
                      <p className="text-gray-600 flex items-center gap-2 transform transition-all hover:translate-x-1 text-sm sm:text-base">
                        <Star className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
                        <span>{video.period}</span>
                      </p>
                      <p className="text-gray-600 flex items-center gap-2 transform transition-all hover:translate-x-1 text-sm sm:text-base">
                        <Medal className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                        <span className="font-medium">{video.service}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {loaded && instanceRef.current && (
            <>
              <button
                onClick={() => instanceRef.current?.prev()}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
              </button>
              <button
                onClick={() => instanceRef.current?.next()}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
              </button>
            </>
          )}
        </div>

      </div>
    </section>
  )
}

export default Review
