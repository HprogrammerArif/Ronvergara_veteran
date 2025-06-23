// import { useEffect, useState } from "react";

// const slides = [
//   {
//     title: "Fast and Easy",
//     problem:
//       "Veterans often face long, confusing, outdated processes when applying for benefits, sometimes giving up halfway.",
//     solution:
//       "VALR walks you through each step with simple instructions and smart forms. You don’t need to be tech-savvy or know VA jargon. It’s like having a personal guide right in your pocket.",
//     image:
//       "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1749636080/Image_2_xc75ty.jpg",
//   },
//   {
//     title: "All-In-One",
//     problem:
//       "Veterans often don’t know who to talk to, where their paperwork went, or what the next step is.",
//     solution:
//       "Everything is in one place. You can track your progress, see what’s coming next, and get real-time help when you need it.",
//     image:
//       "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1749636147/Image_3_jhhvx0.jpg",
//   },
//   {
//     title: "Less Stress",
//     problem:
//       "Paperwork piles up. Many vets feel anxious or frustrated when figuring out what forms to fill, what evidence to submit, and how to word things.",
//     solution:
//       "VALR breaks the process down into smaller steps, eliminating guesswork. You get reminders, encouragement, and support all along the way, reducing anxiety and overwhelm.",
//     image:
//       "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1750421893/Image_13_pry9co.jpg",
//   },
//   {
//     title: "Veteran-Focused",
//     problem:
//       "General benefit tools are not designed with veterans in mind. They don’t understand your military history or the unique challenges vets face.",
//     solution:
//       "VALR is built for veterans, by people who support veterans. It understands VA language, discharge codes, and service-connected issues, and gives guidance that’s relevant to your experience.",
//     image:
//       "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1749636156/Image_4_jzmp6h.jpg",
//   },
//   {
//     title: "Success Rate",
//     problem:
//       "Many vets get denied because of incomplete or incorrect applications. Some never reapply because they feel defeated.",
//     solution:
//       "VALR improves your chances by making sure you provide complete, accurate, and compelling claims the first time. It helps you avoid the common mistakes that lead to denials.",
//     image:
//       "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1750423964/Image_15_aceerv.jpg",
//   },
//   {
//     title: "Stay Updated",
//     problem:
//       "The VA process can be slow, and veterans are often left in the dark.",
//     solution:
//       "VALR keeps you updated with alerts and reminders. You’ll always know where your claim stands, and what action (if any) is needed from you.",
//     image:
//       "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1749636147/Image_3_jhhvx0.jpg",
//   },
//   {
//     title: "Safe and Secure",
//     problem:
//       "Veterans are understandably protective of their personal and service information.",
//     solution:
//       "VALR uses encrypted technology and secure systems to ensure your data is always protected. Your trust is our top priority.",
//     image:
//       "https://www.eventmarketer.com/wp-content/uploads/2018/01/event-safety_data_digital_stock-1280x879.jpg",
//   },
// ];

// const quotes = [
 
//   {
//     author: "CHRIS FRENCH",
//     role: "Founder VALR",
//     bio: "US Navy Veteran and VA Benefits Expert",
//     avatar:
//       "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1750419703/Image_8_z0ma2d.jpg",
//     quote:
//       "With VALR, you’re never left wondering what comes next. It’s clarity and confidence at every step.",
//   },
//   {
//     author: "Major Murray KIm",
//     role: "US ARMY VETERAN 32 YEARS SErved",
//     bio: " VA Benefits Expert",
//     avatar:
//       "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1750419736/Image_7_toa5qv.jpg",
//     quote:
//       "I sleep better now knowing that my Father and six Uncles who all served over two decades each in the Army and Marine Corps are now receiving 100% VA disability benefits.  Filing a disability claim is not a selfish act, but a necessary duty you owe to yourself. You did your part, now let us do ours",
//   },

//   {
//     author: "Wayne Schomburg ",
//     // role: "Founder VALR",
//     bio: "USaf 25 year VEteran and VA Benefits Expert",
//     avatar:
//       "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1750419999/Image_11_m5oz4g.jpg",
//     quote:
//       "The VA filing process can be very intimidating once a vet has been denied. Let the experts at VALR educate and guide you to a successful disability claim. We know how to navigate the claim process.”",
//   },
//   {
//     author: "BRYAN BLAIN",
//     role: "",
//     bio: "US MARINE VEteran and VA Benefits Expert",
//     avatar:
//       "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1750419754/Image_9_kyztfd.jpg",
//     quote:
//       "VALR is doing everything right to make sure veterans like you get the rating and recognition you truly deserve. We understand the struggles, the long waits, the frustration. That’s why we built VALR — to fight for you, to simplify the process, and to deliver real results. ",
//   },
//   {
//     author: "Stacey Michelon",
//     role: "founder VALR",
//     bio: "US ARMY VEteran and VA Benefits Expert",
//     avatar:
//       "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1750420023/Image_12_cweddt.jpg",
//     quote:
//       "One of the biggest frustrations veterans face is being left in the dark during the VA claims process. With VALR, we put an end to that. Veterans deserve clarity, not confusion—so we built a system that keeps you updated every step of the way, with real-time alerts, reminders, and guidance on what to do next.",
//   },
// ];

// export default function SliderWithQuotes() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [quoteIndex, setQuoteIndex] = useState(0);


//   useEffect(() => {
//     const slideInterval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % slides.length);
//     }, 5000);

//     return () => clearInterval(slideInterval);
//   }, []);


//   useEffect(() => {
//     const quoteInterval = setInterval(() => {
//       setQuoteIndex((prev) => (prev + 1) % quotes.length);
//     }, 5000);

//     return () => clearInterval(quoteInterval);
//   }, []);

//   const currentSlide = slides[currentIndex];
//   const currentQuote = quotes[quoteIndex];

//   return (
//     <div>

//       <div className="container mx-auto pt-24">
//         <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-md overflow-hidden min-h-[400px] md:h-[500px]">
     
//           <div
//             className="md:w-1/2 p-8 relative flex flex-col justify-center h-[500px] md:h-full bg-center bg-[length:120%]"
//             style={{
//               backgroundImage:
//                 "url('https://res.cloudinary.com/dpi0t9wfn/image/upload/v1749639487/Dark_Modern_Elegant_Singer_New_Song_YouTube_Thumbnail_skmw5p.png')",
//             }}
//           >
     
//             <div className="absolute inset-0 bg-white bg-opacity-10 backdrop-blur-[1px] z-0" />

//             <div className="relative z-10">
//               <h2 className="text-3xl font-extrabold text-blue-900 mb-4">
//                 {currentSlide.title}
//               </h2>

//               <div>
//                 <p className="font-semibold text-gray-800 mb-2">The Problem:</p>
//                 <p className="text-gray-600 mb-4">{currentSlide.problem}</p>

//                 <p className="font-semibold text-gray-800 mb-2">VALR Solution:</p>
//                 <p className="text-gray-600">{currentSlide.solution}</p>
//               </div>
//             </div>
//           </div>

         
//           <div className="md:w-1/2 h-[200px] md:h-full relative">
//             <div className="w-full h-full clip-diagonal overflow-hidden">
//               <img
//                 src={currentSlide.image}
//                 alt="Slide Visual"
//                 className="w-full h-full object-cover object-center"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

 
//       <div className="my-10 rounded-xl container mx-auto overflow-hidden shadow-md bg-gradient-to-r from-[#000000] via-[#201172] to-[#3533cd] text-white">
//         <div className="flex flex-col md:flex-row items-center p-6 gap-6 container mx-auto">
//           {/* Left: Centered Image */}
//           <div className="mt-3">
//             <h3 className="text-xl font-extrabold">{currentQuote.author}</h3>
//             <p className="text-sm font-semibold uppercase text-gray-300 tracking-wide">
//               {currentQuote.role}
//             </p>
//             <p className="text-xs text-gray-400">{currentQuote.bio}</p>
//           </div>

//           <div className="flex justify-center items-center md:w-1/2">
//             <img
//               src={currentQuote.avatar}
//               alt={currentQuote.author}
//               className="w-40 h-40 object-cover rounded-full border-4 border-white"
//             />
//           </div>

//           {/* Right: Quote Left-Aligned */}
//           <div className="md:w-1/2 text-sm text-gray-100 text-left">
//             <p className="italic">"{currentQuote.quote}"</p>
//           </div>
//         </div>
//       </div>


//       <style>{`
//         .clip-diagonal {
//           clip-path: polygon(15% 0, 100% 0%, 100% 100%, 0% 100%);
//         }
//       `}</style>
//     </div>
//   );
// }






import { useEffect, useState } from "react";

const slides = [
  {
    title: "Fast and Easy",
    problem:
      "Veterans often face long, confusing, outdated processes when applying for benefits, sometimes giving up halfway.",
    solution:
      "VALR walks you through each step with simple instructions and smart forms. You don’t need to be tech-savvy or know VA jargon. It’s like having a personal guide right in your pocket.",
    image:
      "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1749636080/Image_2_xc75ty.jpg",
  },
  {
    title: "All-In-One",
    problem:
      "Veterans often don’t know who to talk to, where their paperwork went, or what the next step is.",
    solution:
      "Everything is in one place. You can track your progress, see what’s coming next, and get real-time help when you need it.",
    image:
      "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1749636147/Image_3_jhhvx0.jpg",
  },
  {
    title: "Less Stress",
    problem:
      "Paperwork piles up. Many vets feel anxious or frustrated when figuring out what forms to fill, what evidence to submit, and how to word things.",
    solution:
      "VALR breaks the process down into smaller steps, eliminating guesswork. You get reminders, encouragement, and support all along the way, reducing anxiety and overwhelm.",
    image:
      "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1750421893/Image_13_pry9co.jpg",
  },
  {
    title: "Veteran-Focused",
    problem:
      "General benefit tools are not designed with veterans in mind. They don’t understand your military history or the unique challenges vets face.",
    solution:
      "VALR is built for veterans, by people who support veterans. It understands VA language, discharge codes, and service-connected issues, and gives guidance that’s relevant to your experience.",
    image:
      "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1749636156/Image_4_jzmp6h.jpg",
  },
  {
    title: "Success Rate",
    problem:
      "Many vets get denied because of incomplete or incorrect applications. Some never reapply because they feel defeated.",
    solution:
      "VALR improves your chances by making sure you provide complete, accurate, and compelling claims the first time. It helps you avoid the common mistakes that lead to denials.",
    image:
      "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1750423964/Image_15_aceerv.jpg",
  },
  {
    title: "Stay Updated",
    problem:
      "The VA process can be slow, and veterans are often left in the dark.",
    solution:
      "VALR keeps you updated with alerts and reminders. You’ll always know where your claim stands, and what action (if any) is needed from you.",
    image:
      "https://img.freepik.com/free-photo/happy-male-entrepreneur-working-computer-office_637285-6738.jpg?semt=ais_hybrid&w=740",
  },
  {
    title: "Safe and Secure",
    problem:
      "Veterans are understandably protective of their personal and service information.",
    solution:
      "VALR uses encrypted technology and secure systems to ensure your data is always protected. Your trust is our top priority.",
    image:
      "https://www.eventmarketer.com/wp-content/uploads/2018/01/event-safety_data_digital_stock-1280x879.jpg",
  },
];

const quotes = [
  {
    author: "CHRIS FRENCH",
    role: "Founder VALR",
    bio: "US Navy Veteran and VA Benefits Expert",
    avatar:
      "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1750419703/Image_8_z0ma2d.jpg",
    quote:
      "Real talk, veterans — filing for your benefits doesn’t have to be a battle. Valr simplifies the process, cuts the stress, and increases your chances of success. Get what you’ve earned, without the headache.",
  },
  {
    author: "Stacey Michelon",
    role: "founder VALR",
    bio: "US ARMY Veteran and VA Benefits Expert",
    avatar:
      "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1750420023/Image_12_cweddt.jpg",
    quote:
      "VALRapp: Your all-in-one tool to stay updated, stay connected, and stay in control—because veterans deserve answers without the red tape.",
  },
  {
    author: "Wayne Schomburg",
    bio: "USaf 25 year Veteran and VA Benefits Expert",
    avatar:
      "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1750419999/Image_11_m5oz4g.jpg",
    quote:
      "The VA filing process can be very intimidating once a vet has been denied. Let the experts at VALR educate and guide you to a successful disability claim. We know how to navigate the claim process.",
  },
  {
    author: "Major Murray Kim",
    role: "US ARMY VETERAN 32 YEARS SERVED",
    bio: "VA Benefits Expert",
    avatar:
      "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1750419736/Image_7_toa5qv.jpg",
    quote:
      "I sleep better now knowing that my Father and six Uncles who all served over two decades each in the Army and Marine Corps are now receiving 100% VA disability benefits. Filing a disability claim is not a selfish act, but a necessary duty you owe to yourself. You did your part, now let us do ours",
  },
  {
    author: "BRYAN BLAIN",
    bio: "US MARINE Veteran and VA Benefits Expert",
    avatar:
      "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1750419754/Image_9_kyztfd.jpg",
    quote:
      "VALR is doing everything right to make sure veterans like you get the rating and recognition you truly deserve. We understand the struggles, the long waits, the frustration. That’s why we built VALR — to fight for you, to simplify the process, and to deliver real results.",
  },
  {
    author: "Robert Bailey",
    role: "Veteran and VA Benefits Expert",
    bio: "US Military Veteran",
    avatar:
      "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1750419501/Image_6_jqzrgb.jpg",
    quote:
      "One of the biggest frustrations veterans face is being left in the dark during the VA claims process. With VALR, we put an end to that. Veterans deserve clarity, not confusion—so we built a system that keeps you updated every step of the way, with real-time alerts, reminders, and guidance on what to do next",
  },
  {
    author: "CHRIS FRENCH",
    role: "Founder VALR",
    bio: "US Navy Veteran and VA Benefits Expert",
    avatar:
      "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1750419703/Image_8_z0ma2d.jpg",
    quote:
      "At VALR, your trust is our mission. That’s why we use encrypted technology and secure systems to protect what matters most—your service and your story.",
  },
];

export default function SliderWithQuotes() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(quoteInterval);
  }, []);

  const currentSlide = slides[currentIndex];
  const currentQuote = quotes[currentIndex]; // Matching quotes to the slide

  return (
    <div>
      <div className="container mx-auto pt-24">
        <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-md overflow-hidden min-h-[400px] md:h-[500px]">
          <div
            className="md:w-1/2 p-8 relative flex flex-col justify-center h-[500px] md:h-full bg-center bg-[length:120%]"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dpi0t9wfn/image/upload/v1749639487/Dark_Modern_Elegant_Singer_New_Song_YouTube_Thumbnail_skmw5p.png')",
            }}
          >
            <div className="absolute inset-0 bg-white bg-opacity-10 backdrop-blur-[1px] z-0" />
            <div className="relative z-10">
              <h2 className="text-3xl font-extrabold text-blue-900 mb-4">
                {currentSlide.title}
              </h2>
              <div>
                <p className="font-semibold text-gray-800 mb-2">The Problem:</p>
                <p className="text-gray-600 mb-4">{currentSlide.problem}</p>
                <p className="font-semibold text-gray-800 mb-2">VALR Solution:</p>
                <p className="text-gray-600">{currentSlide.solution}</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 h-[200px] md:h-full relative">
            <div className="w-full h-full clip-diagonal overflow-hidden">
              <img
                src={currentSlide.image}
                alt="Slide Visual"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="my-10 rounded-xl container mx-auto overflow-hidden shadow-md bg-gradient-to-r from-[#000000] via-[#201172] to-[#3533cd] text-white">
        <div className="flex flex-col md:flex-row items-center p-6 gap-6 container mx-auto">
          <div className="mt-3">
            <h3 className="text-xl font-extrabold">{currentQuote.author}</h3>
            <p className="text-sm font-semibold uppercase text-gray-300 tracking-wide">
              {currentQuote.role}
            </p>
            <p className="text-xs text-gray-400">{currentQuote.bio}</p>
          </div>

          <div className="flex justify-center items-center md:w-1/2">
            <img
              src={currentQuote.avatar}
              alt={currentQuote.author}
              className="w-40 h-40 object-cover rounded-full border-4 border-white"
            />
          </div>

          <div className="md:w-1/2 text-sm text-gray-100 text-left">
            <p className="italic">"{currentQuote.quote}"</p>
          </div>
        </div>
      </div>

      <style>{`
        .clip-diagonal {
          clip-path: polygon(15% 0, 100% 0%, 100% 100%, 0% 100%);
        }
      `}</style>
    </div>
  );
}
