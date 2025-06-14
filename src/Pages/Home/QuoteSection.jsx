

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
//    {
//     title: "Less Stress",
//     problem:
//       "Paperwork piles up. Many vets feel anxious or frustrated when figuring out what forms to fill, what evidence to submit, and how to word things.",
//     solution:
//       "VALR breaks the process down into smaller steps, eliminating guesswork. You get reminders, encouragement, and support all along the way, reducing anxiety and overwhelm.",
//     image:
//       "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1749636147/Image_3_jhhvx0.jpg",
//   },
//    {
//     title: "Veteran-Focused",
//     problem:
//       " General benefit tools are not designed with veterans in mind. They don’t understand your military history or the unique challenges vets face.",
//     solution:
//       "VALR is built for veterans, by people who support veterans. It understands VA language, discharge codes, and service-connected issues, and gives guidance that’s relevant to your experience.",
//     image:
//       "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1749636147/Image_3_jhhvx0.jpg",
//   },
//    {
//     title: "Success Rate",
//     problem:
//       "Many vets get denied because of incomplete or incorrect applications. Some never reapply because they feel defeated.",
//     solution:
//       "VALR improves your chances by making sure you provide complete, accurate, and compelling claims the first time. It helps you avoid the common mistakes that lead to denials.",
//     image:
//       "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1749636147/Image_3_jhhvx0.jpg",
//   },
//    {
//     title: "Stay Updated",
//     problem:
//       "The VA process can be slow, and veterans are often left in the dark.",
//     solution:
//       "VALR keeps you updated with alerts and reminders. You’ll always know where your claim stands, and what action (if any) is needed from you.",
//     image:
//       "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1749636147/Image_3_jhhvx0.jpg",
//   },
//    {
//     title: "Safe and Secure",
//     problem:
//       "Veterans are understandably protective of their personal and service information.",
//     solution:
//       "VALR uses encrypted technology and secure systems to ensure your data is always protected. Your trust is our top priority.",
//     image:
//       "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1749636147/Image_3_jhhvx0.jpg",
//   },
// ];

// export default function QuoteSection() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const currentSlide = slides[currentIndex];

//   return (
//     <div className="container mx-auto p-4 py-20">
//       <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-md overflow-hidden min-h-[400px] md:h-[500px]">
//         {/* Left Side (40%) */}
//         <div
//   className="md:w-2/5 p-8 relative flex flex-col justify-center h-[500px] md:h-full bg-center bg-[length:120%]"
//   style={{
//     backgroundImage:
//       "url('https://res.cloudinary.com/dpi0t9wfn/image/upload/v1749639487/Dark_Modern_Elegant_Singer_New_Song_YouTube_Thumbnail_skmw5p.png')",
//   }}
// >
//           {/* Overlay */}
//           <div className="absolute inset-0 bg-white bg-opacity-10 backdrop-blur-[1px] z-0" />

//           <div className="relative z-10">
//             <h2 className="text-3xl font-extrabold text-blue-900 mb-4">
//               {currentSlide.title}
//             </h2>

//             <div>
//               <p className="font-semibold text-gray-800 mb-2">The Problem:</p>
//               <p className="text-gray-600 mb-4">{currentSlide.problem}</p>

//               <p className="font-semibold text-gray-800 mb-2">VALR Solution:</p>
//               <p className="text-gray-600">{currentSlide.solution}</p>
//             </div>
//           </div>

//           {/* Watermark */}
          
//         </div>

//         {/* Right Side (60%) */}
//         <div className="md:w-3/5 h-[200px] md:h-full relative">
//           <div className="w-full h-full clip-diagonal overflow-hidden">
//             <img
//               src={currentSlide.image}
//               alt="Slide Visual"
//               className="w-full h-full object-cover object-center"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Tailwind custom clip-path */}
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
    quote:
      "Fast doesn’t mean careless. We guide you through quickly without skipping the important stuff.",
    author: "CHRIS FRENCH",
    role: "Founder VALR",
    bio: "US Navy Veteran and VA Benefits Expert",
    avatar:
      "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1749642034/chris_french_example.png",
  },
  {
    title: "All-In-One",
    problem:
      "Veterans often don’t know who to talk to, where their paperwork went, or what the next step is.",
    solution:
      "Everything is in one place. You can track your progress, see what’s coming next, and get real-time help when you need it.",
    image:
      "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1749636147/Image_3_jhhvx0.jpg",
    quote:
      "With VALR, you’re never left wondering what comes next. It’s clarity and confidence at every step.",
    author: "CHRIS FRENCH",
    role: "Founder VALR",
    bio: "US Navy Veteran and VA Benefits Expert",
    avatar:
      "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1749642034/chris_french_example.png",
  },
  {
    title: "Less Stress",
    problem:
      "Paperwork piles up. Many vets feel anxious or frustrated when figuring out what forms to fill, what evidence to submit, and how to word things.",
    solution:
      "VALR breaks the process down into smaller steps, eliminating guesswork. You get reminders, encouragement, and support all along the way, reducing anxiety and overwhelm.",
    image:
      "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1749636147/Image_3_jhhvx0.jpg",
    quote:
      "You served with strength—now let us help you through this with ease. We reduce the burden so you can focus on healing.",
    author: "CHRIS FRENCH",
    role: "Founder VALR",
    bio: "US Navy Veteran and VA Benefits Expert",
    avatar:
      "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1749642034/chris_french_example.png",
  },
  {
    title: "Veteran-Focused",
    problem:
      "General benefit tools are not designed with veterans in mind. They don’t understand your military history or the unique challenges vets face.",
    solution:
      "VALR is built for veterans, by people who support veterans. It understands VA language, discharge codes, and service-connected issues, and gives guidance that’s relevant to your experience.",
    image:
      "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1749636147/Image_3_jhhvx0.jpg",
    quote:
      "VALR isn’t just for anyone—it’s for you. Designed by veterans, for veterans.",
    author: "CHRIS FRENCH",
    role: "Founder VALR",
    bio: "US Navy Veteran and VA Benefits Expert",
    avatar:
      "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1749642034/chris_french_example.png",
  },
  {
    title: "Success Rate",
    problem:
      "Many vets get denied because of incomplete or incorrect applications. Some never reapply because they feel defeated.",
    solution:
      "VALR improves your chances by making sure you provide complete, accurate, and compelling claims the first time. It helps you avoid the common mistakes that lead to denials.",
    image:
      "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1749636147/Image_3_jhhvx0.jpg",
    quote:
      "Accuracy and presentation matter. We make sure your application is rock-solid from the start.",
    author: "CHRIS FRENCH",
    role: "Founder VALR",
    bio: "US Navy Veteran and VA Benefits Expert",
    avatar:
      "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1749642034/chris_french_example.png",
  },
  {
    title: "Stay Updated",
    problem:
      "The VA process can be slow, and veterans are often left in the dark.",
    solution:
      "VALR keeps you updated with alerts and reminders. You’ll always know where your claim stands, and what action (if any) is needed from you.",
    image:
      "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1749636147/Image_3_jhhvx0.jpg",
    quote:
      "We believe in transparency. You’ll never feel lost in the process again.",
    author: "CHRIS FRENCH",
    role: "Founder VALR",
    bio: "US Navy Veteran and VA Benefits Expert",
    avatar:
      "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1749642034/chris_french_example.png",
  },
  {
    title: "Safe and Secure",
    problem:
      "Veterans are understandably protective of their personal and service information.",
    solution:
      "VALR uses encrypted technology and secure systems to ensure your data is always protected. Your trust is our top priority.",
    image:
      "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1749636147/Image_3_jhhvx0.jpg",
    quote:
      "Security isn’t optional—it’s a promise. Your data stays private and protected with us.",
    author: "CHRIS FRENCH",
    role: "Founder VALR",
    bio: "US Navy Veteran and VA Benefits Expert",
    avatar:
      "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1749642034/chris_french_example.png",
  },
];


export default function QuoteSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <div className="container mx-auto py-20">
      {/* Top Content Slide */}
      <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-md overflow-hidden min-h-[400px] md:h-[500px]">
        {/* Left Side (40%) */}
        <div
          className="md:w-1/2 p-8 relative flex flex-col justify-center h-[500px] md:h-full bg-center bg-[length:120%]"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dpi0t9wfn/image/upload/v1749639487/Dark_Modern_Elegant_Singer_New_Song_YouTube_Thumbnail_skmw5p.png')",
          }}
        >
          {/* Overlay */}
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

        {/* Right Side (60%) */}
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

      {/* Founder Quote Section */}
      <div className="mt-10 rounded-xl overflow-hidden shadow-md bg-gradient-to-r from-[#000000] via-[#201172]  to-[#3533cd] text-white">
  <div className="flex flex-col md:flex-row items-center p-6 gap-6 container mx-auto">
    {/* Left: Centered Image */}

  <div className="mt-3">
        <h3 className="text-xl font-extrabold">{currentSlide.author}</h3>
        <p className="text-sm font-semibold uppercase text-gray-300 tracking-wide">
          {currentSlide.role}
        </p>
        <p className="text-xs text-gray-400">{currentSlide.bio}</p>
      </div>

    <div className="flex justify-center items-center md:w-1/2">
      <img
        src={currentSlide.avatar}
        alt={currentSlide.author}
        className="w-32 h-32 object-cover rounded-full border-4 border-white"
      />
    </div>

    {/* Right: Quote Left-Aligned */}
    <div className="md:w-1/2 text-sm text-gray-100 text-left">
      <p className="italic">"{currentSlide.quote}"</p>
    
    </div>
  </div>
</div>


      {/* Tailwind custom clip-path */}
      <style>{`
        .clip-diagonal {
          clip-path: polygon(15% 0, 100% 0%, 100% 100%, 0% 100%);
        }
      `}</style>
    </div>
  );
}


