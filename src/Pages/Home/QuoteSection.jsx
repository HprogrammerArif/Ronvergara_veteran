

import { useEffect, useState } from "react"

const slides = [
  {
    title: "Fast and Easy",
    problem:
      "Veterans often face long, confusing, outdated processes when applying for benefits, sometimes giving up halfway.",
    solution:
      "VALR walks you through each step with simple instructions and smart forms. You don’t need to be tech-savvy or know VA jargon. It’s like having a personal guide right in your pocket.",
    image: "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1749636080/Image_2_xc75ty.jpg",
  },
  {
    title: "All-In-One",
    problem: "Veterans often don’t know who to talk to, where their paperwork went, or what the next step is.",
    solution:
      "Everything is in one place. You can track your progress, see what’s coming next, and get real-time help when you need it.",
    image: "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1749636147/Image_3_jhhvx0.jpg",
  },
  {
    title: "Less Stress",
    problem:
      "Paperwork piles up. Many vets feel anxious or frustrated when figuring out what forms to fill, what evidence to submit, and how to word things.",
    solution:
      "VALR breaks the process down into smaller steps, eliminating guesswork. You get reminders, encouragement, and support all along the way, reducing anxiety and overwhelm.",
    image: "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1750421893/Image_13_pry9co.jpg",
  },
  {
    title: "Veteran-Focused",
    problem:
      "General benefit tools are not designed with veterans in mind. They don’t understand your military history or the unique challenges vets face.",
    solution:
      "VALR is built for veterans, by people who support veterans. It understands VA language, discharge codes, and service-connected issues, and gives guidance that’s relevant to your experience.",
    image: "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1749636156/Image_4_jzmp6h.jpg",
  },
  {
    title: "Success Rate",
    problem:
      "Many vets get denied because of incomplete or incorrect applications. Some never reapply because they feel defeated.",
    solution:
      "VALR improves your chances by making sure you provide complete, accurate, and compelling claims the first time. It helps you avoid the common mistakes that lead to denials.",
    image: "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1750423964/Image_15_aceerv.jpg",
  },
  {
    title: "Stay Updated",
    problem: "The VA process can be slow, and veterans are often left in the dark.",
    solution:
      "VALR keeps you updated with alerts and reminders. You’ll always know where your claim stands, and what action (if any) is needed from you.",
    image:
      "https://img.freepik.com/free-photo/happy-male-entrepreneur-working-computer-office_637285-6738.jpg?semt=ais_hybrid&w=740",
  },
  {
    title: "Safe and Secure",
    problem: "Veterans are understandably protective of their personal and service information.",
    solution:
      "VALR uses encrypted technology and secure systems to ensure your data is always protected. Your trust is our top priority.",
    image: "https://www.eventmarketer.com/wp-content/uploads/2018/01/event-safety_data_digital_stock-1280x879.jpg",
  },
]

const quotes = [
  {
    author: "CHRIS FRENCH",
    role: "Founder VALR",
    bio: "US Navy Veteran and VA Benefits Expert",
    avatar: "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1750419703/Image_8_z0ma2d.jpg",
    quote:
      "Real talk, veterans — filing for your benefits doesn’t have to be a battle. Valr simplifies the process, cuts the stress, and increases your chances of success. Get what you’ve earned, without the headache.",
  },
  {
    author: "ROBERT BAILEY",
    role: "founder VALR",
    bio: "US ARMY Veteran and VA Benefits Expert",
    avatar: "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1750420023/Image_12_cweddt.jpg",
    quote:
      "One of the biggest frustrations veterans face is being left in the dark during the VA claims process. With VALR, we put an end to that. Veterans deserve clarity, not confusion—so we built a system that keeps you updated every step of the way, with real-time alerts, reminders, and guidance on what to do next.",
  },
  {
    author: "Wayne Schomburg",
    bio: "USaf 25 year Veteran and VA Benefits Expert",
    avatar: "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1750419999/Image_11_m5oz4g.jpg",
    quote:
      "The VA filing process can be very intimidating once a vet has been denied. Let the experts at VALR educate and guide you to a successful disability claim. We know how to navigate the claim process.",
  },
  {
    author: "Major Murray Kim",
    role: "US ARMY VETERAN 32 YEARS SERVED",
    bio: "VA Benefits Expert",
    avatar: "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1750419736/Image_7_toa5qv.jpg",
    quote:
      "I sleep better now knowing that my Father and six Uncles who all served over two decades each in the Army and Marine Corps are now receiving 100% VA disability benefits. Filing a disability claim is not a selfish act, but a necessary duty you owe to yourself. You did your part, now let us do ours",
  },
  {
    author: "BRYAN BLAIN",
    bio: "US MARINE Veteran and VA Benefits Expert",
    avatar: "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1750419754/Image_9_kyztfd.jpg",
    quote:
      "VALR is doing everything right to make sure veterans like you get the rating and recognition you truly deserve. We understand the struggles, the long waits, the frustration. That’s why we built VALR — to fight for you, to simplify the process, and to deliver real results.",
  },
  {
    author: "Stacey Michelon",
    role: "Founder VALR",
    bio: "HOST of YOU SERVE YOU DESERVE veterans benefits expert",
    avatar: "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1750426685/Image_10_ycehfv.jpg",
    quote:
      "One of the biggest frustrations veterans face is being left in the dark during the VA claims process. With VALR, we put an end to that. Veterans deserve clarity, not confusion—so we built a system that keeps you updated every step of the way, with real-time alerts, reminders, and guidance on what to do next",
  },
  {
    author: "CHRIS FRENCH",
    role: "Founder VALR",
    bio: "US Navy Veteran and VA Benefits Expert",
    avatar: "https://res.cloudinary.com/dpi0t9wfn/image/upload/v1750419703/Image_8_z0ma2d.jpg",
    quote:
      "At VALR, your trust is our mission. That’s why we use encrypted technology and secure systems to protect what matters most—your service and your story.",
  },
]

export default function SliderWithQuotes() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [quoteIndex, setQuoteIndex] = useState(0)

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(slideInterval)
  }, [])

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length)
    }, 5000)

    return () => clearInterval(quoteInterval)
  }, [])

  const currentSlide = slides[currentIndex]
  const currentQuote = quotes[currentIndex] // Matching quotes to the slide

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
              <h2 className="text-3xl font-extrabold text-blue-900 mb-4">{currentSlide.title}</h2>
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
                src={currentSlide.image || "/placeholder.svg"}
                alt="Slide Visual"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="my-16 container mx-auto px-4">
        <div className="relative bg-gradient-to-r from-[#152A45] via-[#1a3052] to-[#152A45] rounded-3xl overflow-hidden shadow-2xl">

          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(21,42,69,0.3),transparent_50%)]"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_25%,rgba(255,255,255,0.05)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.05)_75%)] bg-[length:60px_60px]"></div>
          </div>

          <div className="relative flex flex-col lg:flex-row h-[500px]">
 
            <div className="lg:w-2/5 h-full p-8 lg:p-12 flex flex-col justify-center relative">
             
              <div className="absolute top-8 left-8 w-20 h-20 bg-gradient-to-br from-[#152A45] to-[#2a4a6b] rounded-full opacity-40 blur-xl"></div>

              <div className="relative z-10 h-full flex flex-col justify-center">
                <div className="mb-6">
                  <img
                    src={currentQuote.avatar || "/placeholder.svg"}
                    alt={currentQuote.author}
                    className="w-[300px] h-[250px] object-cover rounded-2xl border-3 border-white/20 shadow-xl mb-4"
                  />
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight">{currentQuote.author}</h3>

                {currentQuote.role && (
                  <div className="inline-block bg-gradient-to-r from-[#152A45] to-[#2a4a6b] text-white px-4 py-2 rounded-full text-sm font-semibold mb-3 shadow-lg">
                    {currentQuote.role}
                  </div>
                )}

                <p className="text-gray-300 text-sm leading-relaxed font-medium">{currentQuote.bio}</p>

 
                <div className="w-16 h-1 bg-gradient-to-r from-[#152A45] to-[#4a6a8b] rounded-full mt-6"></div>
              </div>
            </div>


            <div className="lg:w-3/5 h-full p-8 lg:p-12 flex flex-col justify-center bg-white/5 backdrop-blur-sm relative">
 
              <div className="absolute top-8 right-8 text-6xl text-white/10 font-serif">"</div>

              <div className="relative z-10 h-full flex flex-col justify-center">

                <div className="text-7xl lg:text-8xl text-[#152A45]/30 font-serif leading-none mb-4">"</div>

              
                <div className="flex-1 flex items-center">
                  <blockquote className="text-white text-lg lg:text-xl leading-relaxed font-medium relative">
                    <p className="relative z-10">{currentQuote.quote}</p>
                  </blockquote>
                </div>

      
                <div className="flex items-end justify-between mt-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-0.5 bg-gradient-to-r from-[#152A45] to-[#4a6a8b]"></div>
                    <span className="text-[#8bb4d8] font-semibold text-sm">{currentQuote.author}</span>
                  </div>
                  <div className="text-5xl text-[#152A45]/30 font-serif rotate-180">"</div>
                </div>
              </div>


              <div className="absolute bottom-8 right-12 w-16 h-16 bg-gradient-to-br from-[#152A45]/20 to-[#2a4a6b]/20 rounded-full blur-lg"></div>
              <div className="absolute top-1/2 right-4 w-8 h-8 bg-gradient-to-br from-[#152A45]/30 to-[#4a6a8b]/30 rounded-full blur-sm"></div>
            </div>
          </div>


          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#152A45] to-transparent"></div>
        </div>
      </div>

      <style>{`
        .clip-diagonal {
          clip-path: polygon(15% 0, 100% 0%, 100% 100%, 0% 100%);
        }
      `}</style>
    </div>
  )
}
