
// import { useKeenSlider } from "keen-slider/react"
// import "keen-slider/keen-slider.css"
// import { useCallback } from "react"
// import quote from '../../assets/quote.png'

// const testimonials = [
//   {
//     name: "John Smith",
//     role: "CEO, Tech Corp",
//     text: "We Take Pride In Fostering A Compassionate And Supportive Environment, And Their Testimonials Reflect The Positive Impact Of Our Services From Personalized Treatments To A Friendly And Professional Team",
//     image: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png?height=60&width=60",
//     stars: 5,
//   },
//   {
//     name: "Sarah Johnson",
//     role: "Director, Innovation Labs",
//     text: "We Take Pride In Fostering A Compassionate And Supportive Environment, And Their Testimonials Reflect The Positive Impact Of Our Services From Personalized Treatments To A Friendly And Professional Team",
//     image: "https://cdn-icons-png.freepik.com/512/219/219990.png?height=60&width=60",
//     stars: 5,
//   },
//   {
//     name: "Michael Brown",
//     role: "Founder, StartUp Inc",
//     text: "We Take Pride In Fostering A Compassionate And Supportive Environment, And Their Testimonials Reflect The Positive Impact Of Our Services From Personalized Treatments To A Friendly And Professional Team",
//     image: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp?height=60&width=60 ",
//     stars: 5,
//   },
// ]

// export default function TestimonialSlider() {
//   const [sliderRef, instanceRef] = useKeenSlider({
//     initial: 0,
//     slides: {
//       perView: () => {
//         if (typeof window !== "undefined") {
//           if (window.innerWidth < 768) return 1
//           return 3
//         }
//         return 3
//       },
//       spacing: 16,
//     },
//   })

//   const handlePrevious = useCallback(() => {
//     instanceRef.current?.prev()
//   }, [instanceRef])

//   const handleNext = useCallback(() => {
//     instanceRef.current?.next()
//   }, [instanceRef])

//   return (
//     <div className="relative px-4 py-8  container mx-auto">
//       <div ref={sliderRef} className="keen-slider">
//         {testimonials.map((testimonial, index) => (
//           <div key={index} className="keen-slider__slide">
//             <div className="bg-gray-200 rounded-lg shadow-lg shadow-black p-6 relative border">
//               {/* Star Rating */} 
//               <div className="flex gap-1 mb-4">
//                 {[...Array(testimonial.stars)].map((_, i) => (
//                   <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
//                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                   </svg>
//                 ))}
//               </div>

//               {/* Testimonial Text */}
//               <p className="text-gray-600 mb-6">{testimonial.text}</p>

//               {/* Profile Section */}
//               <div className="flex items-start mt-10 justify-between">
               
//                  <div>
//                    <img
//                   src={testimonial.image || "/placeholder.svg"}
//                   alt={testimonial.name}
//                   className="w-12 h-12 rounded-full object-cover"
//                 />
//                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
//                   <p className="text-gray-500 text-sm">{testimonial.role}</p>
//                  </div>
//                      <img src={quote} alt="" className="h-[50px]"/>
//               </div>

//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Navigation Buttons */}
//       <button
//         onClick={handlePrevious}
//         className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
//       >
//         <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//         </svg>
//       </button>
//       <button
//         onClick={handleNext}
//         className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
//       >
//         <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//         </svg>
//       </button>
//     </div>
//   )
// }


import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.css"
import { useCallback } from "react"
import quote from '../../assets/quote.png'

const testimonials = [
  {
    name: "John Smith",
    role: "CEO, Tech Corp",
    text: "We Take Pride In Fostering A Compassionate And Supportive Environment, And Their Testimonials Reflect The Positive Impact Of Our Services From Personalized Treatments To A Friendly And Professional Team",
    image: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png?height=60&width=60",
    stars: 5,
  },
  {
    name: "Sarah Johnson",
    role: "Director, Innovation Labs",
    text: "We Take Pride In Fostering A Compassionate And Supportive Environment, And Their Testimonials Reflect The Positive Impact Of Our Services From Personalized Treatments To A Friendly And Professional Team",
    image: "https://cdn-icons-png.freepik.com/512/219/219990.png?height=60&width=60",
    stars: 5,
  },
  {
    name: "Michael Brown",
    role: "Founder, StartUp Inc",
    text: "We Take Pride In Fostering A Compassionate And Supportive Environment, And Their Testimonials Reflect The Positive Impact Of Our Services From Personalized Treatments To A Friendly And Professional Team",
    image: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp?height=60&width=60 ",
    stars: 5,
  },
]

export default function TestimonialSlider() {
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slides: {
      perView: () => {
        if (typeof window !== "undefined") {
          if (window.innerWidth < 768) return 1
          return 3
        }
        return 3
      },
      spacing: 16,
    },
  })

  const handlePrevious = useCallback(() => {
    instanceRef.current?.prev()
  }, [instanceRef])

  const handleNext = useCallback(() => {
    instanceRef.current?.next()
  }, [instanceRef])

  return (
    <section className="bg-gray-200 py-10">
<div className="relative px-4 py-8 container mx-auto">
      {/* Testimonial Slider */}
      <div ref={sliderRef} className="keen-slider">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="keen-slider__slide px-2">
            <div className="bg-white rounded-lg p-6 relative border">
              {/* Star Rating */} 
              

              {/* Testimonial Text */}
              <p className="text-gray-600 mb-6">{testimonial.text}</p>

              {/* Profile Section */}
              <div className="flex items-start mt-10 justify-between">
                <div>
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
                <img src={quote} alt="quote" className="h-[50px]" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons outside the slider */}
      <button
        onClick={handlePrevious}
        className="absolute left-0 top-1/2 -translate-y-1/2 border border-gray-200 shadow-md bg-white  rounded-full p-2 hover:bg-gray-50 transition-colors z-10"
      >
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border border-gray-200 shadow-md rounded-full p-2 hover:bg-gray-50 transition-colors z-10"
      >
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
    </section>
  )
}
