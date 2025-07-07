// "use client"

// import { useRef } from "react"
// import { ChevronLeft, ChevronRight } from "lucide-react"
// import reviewOne from "../../assets/review_1.png"
// import reviewTwo from "../../assets/review_2.png"
// import reviewThree from "../../assets/review_3.png"

// export default function EmpoweringVeteransSlider() {
//   const scrollRef = useRef(null)

//   const scroll = (direction) => {
//     if (scrollRef.current) {
//       const scrollAmount = direction === "left" ? -400 : 400
//       console.log("Scrolling", direction, scrollAmount) // Debug log
//       scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
//     } else {
//       console.log("scrollRef is null") // Debug log
//     }
//   }

//   return (
//     <section className="py-12 px-4 bg-gray-200 ">
//       <div className="container mx-auto">
//         <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">EMPOWERING VETERANS THROUGH EDUCATION</h2>
//         <p className="text-lg text-gray-600 text-center mb-12 max-w-4xl mx-auto">
//           Education transforms lives, and we're committed to empowering veterans with opportunities to learn, grow, and
//           succeed. From skill-building to career advancement, we provide the resources and support needed to unlock your
//           potential and shape a brighter future.
//         </p>

//         <div className="relative">
//           <button
//             onClick={() => scroll("left")}
//             className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors md:-translate-x-16"
//             aria-label="Scroll left"
//           >
//             <ChevronLeft className="h-6 w-6 text-gray-600" />
//           </button>

//           <div
//             ref={scrollRef}
//             className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
//             style={{
//               scrollbarWidth: "none",
//               msOverflowStyle: "none",
//             }}
//           >
//             {cards.map((card, index) => (
//               <div key={index} className="min-w-[320px] md:min-w-[380px] snap-start snap-always">
//                 <div className="bg-white p-6 rounded-lg shadow-lg h-full">
//                   <img
//                     src={card.img || "/placeholder.svg"}
//                     alt={card.title}
//                     className="w-full h-60 object-cover rounded mb-4"
//                   />
//                   <h3 className="text-xl font-semibold text-gray-800 mb-2">{card.title}</h3>
//                   <p className="text-gray-600 mb-4">{card.description}</p>
//                   <button className="text-blue-600 hover:underline inline-flex items-center">
//                     LEARN MORE
//                     <span className="ml-1">→</span>
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <button
//             onClick={() => scroll("right")}
//             className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors md:translate-x-16"
//             aria-label="Scroll right"
//           >
//             <ChevronRight className="h-6 w-6 text-gray-600" />
//           </button>
//         </div>
//       </div>
//     </section>
//   )
// }

// const cards = [
//   {
//     title: "TIPS FOR SUCCESSFULLY TRANSITIONING FROM MILITARY TO CIVILIAN LIFE",
//     description:
//       "Transitioning from military to civilian life requires planning, networking, and leveraging available resources to ensure a smooth and successful adjustment.",
//     img: reviewOne,
//   },
//   {
//     title: "HOW TO APPEAL A DENIED CLAIM",
//     description:
//       "If your claim has been denied, don't worry—appealing is your right. Start by reviewing the denial letter to understand the reasons, gather any missing documents or evidence.",
//     img: reviewTwo,
//   },
//   {
//     title: "COMMON MISTAKES VETERANS MAKE WHEN APPLYING FOR BENEFITS",
//     description:
//       "Transitioning from military to civilian life requires planning, networking, and leveraging available resources to ensure a smooth and successful adjustment.",
//     img: reviewThree,
//   },
//   {
//     title: "COMMON MISTAKES VETERANS MAKE WHEN APPLYING FOR BENEFITS",
//     description:
//       "Transitioning from military to civilian life requires planning, networking, and leveraging available resources to ensure a smooth and successful adjustment.",
//     img: reviewThree,
//   },
// ]


import React from 'react';
import reviewOne from "../../assets/review_1.png"
import reviewTwo from "../../assets/review_2.png"
import reviewThree from "../../assets/review_3.png"

const EmpoweringVeterans = () => {
  const cards = [
    {
      title: 'TIPS FOR SUCCESSFULLY TRANSITIONING FROM MILITARY TO CIVILIAN LIFE',
      description:
        'Transitioning from military to civilian life requires planning, networking, and leveraging available resources to ensure a smooth and successful adjustment.',
      imgSrc: reviewOne,
      alt: 'Military to civilian transition',
    },
    {
      title: 'HOW TO APPEAL A DENIED CLAIM',
      description:
        "If your claim has been denied, don’t worry—appealing is your right. Start by reviewing the denial letter to understand the reasons, gather any missing documents or evidence.",
      imgSrc: reviewTwo,
      alt: 'Appeal denied claim',
    },
    {
      title: 'COMMON MISTAKES VETERANS MAKE WHEN APPLYING FOR BENEFITS',
      description:
        'Transitioning from military to civilian life requires planning, networking, and leveraging available resources to ensure a smooth and successful adjustment.',
      imgSrc: reviewThree,
      alt: 'Mistakes when applying for benefits',
    },
  ];

  return (
    <section className="bg-gray-200 md:pt-32 pt-10 pb-10 px-2 md:px-0">
      <div className="container mx-auto text-center">
        <h2 className="md:text-4xl md:text-start text-2xl  font-bold text-gray-800 mb-8">
          EMPOWERING VETERANS <br /> THROUGH EDUCATION
        </h2>
        <p className="md:text-lg text-gray-600 mb-8 lg:w-2/3 md:text-start">
          Education transforms lives, and we're committed to empowering veterans with opportunities to learn, grow, and succeed. From skill-building to career advancement, we provide the resources and support needed to unlock your potential and shape a brighter future.
        </p>

       <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 gap-4">
  {cards.map((card, index) => (
    <div key={index} className="bg-white rounded-t-lg shadow-lg overflow-hidden flex flex-col">
      <img className="w-full h-62 object-cover rounded-none" src={card.imgSrc} alt={card.alt} />
      <div className="flex-1 md:p-6 p-3">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4 text-start">{card.title}</h3>
          <p className="text-gray-600 text-start text-[16px]  md:text-base">{card.description}</p>
        </div>
      </div>
      {/* <div className="p-6">
        <button
          href="#"
          className="text-white font-semibold  bg-[#B31942] px-10 py-3 rounded-md block text-center"
        >
          LEARN MORE &rarr;
        </button>
      </div> */}
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default EmpoweringVeterans;
