


import { Link } from "react-router-dom"

const Banner = () => {
  return (
    <section className="relative">
      {/* ===== Desktop & Tablet View ===== */}
      <div
        className="hidden md:flex bg-cover bg-center bg-no-repeat min-h-screen items-center justify-between pt-24"
        style={{
          backgroundImage: "url('https://i.ibb.co/y9PChVN/Group-2147226363-1.png')",
        }}
      >
        <div className="relative md:flex items-center justify-between mx-auto w-full">
          {/* Left Content */}
          <div className="relative z-10 basis-8/12">
            <div className="bg-[#FFFFFF] rounded-tr-[50px] shadow-lg border border-gray-200">
              <div className="py-3">
                <h1 className="text-[#003794] ps-44 text-center md:text-start pt-56 md:pt-0 text-4xl md:text-6xl font-bold leading-relaxed md:leading-[5rem]">
                  Submit your VA Disability claim <br /> today with <span className="font-extrabold text-7xl">VALR</span> 
                </h1>
              </div>
            </div>
            <div className="bg-[#B31942] py-6 rounded-br-[20px]">
              <h1 className="ps-44 text-white font-bold text-8xl">For only $195*</h1>
            </div>
            <div className="container ms-44 py-10">
              <p className="text-[#25456F] text-lg md:text-xl font-medium w-10/12 leading-relaxed md:leading-[2rem]">
               Tired of delays, paperwork, and confusion? VALR makes filing your VA claim fast and stress-free. Our system is built to help you get every dollar and benefit you deserve—quickly, clearly, and without the usual hassle. No stress. No confusion. Just results.
              </p>

              <p className="text-[#25456F] mt-5 font-extrabold text-lg md:text-xl w-10/12 leading-relaxed md:leading-[2rem]">
              no stress. NO CONFUSION. JUST RESULTS.
              </p>
            </div>
            <div className="uppercase font-semibold mt-3 ps-44">
              <Link to="/plan" className="uppercase text-3xl bg-[#003794] text-[#FFFFFF] p-4 px-10 rounded-md">
                get started
              </Link>
            </div>
          </div>
          {/* Right Image */}
          <div className="relative z-10 basis-6/12 flex items-center justify-end">
            <img
              src="https://i.ibb.co/23fFSDqr/Group-2147226361.png"
              className="w-[550px] h-[600px] max-w-full"
              alt="Banner Graphic"
            />
          </div>
        </div>
      </div>

      {/* ===== Mobile View ===== */}
      <div className="block min-h-screen pb-10 pt-32 md:hidden bg-gradient-to-b from-blue-50 to-blue-100 text-center  relative overflow-hidden">
      
        <p className="text-orange-500 px-2 text-lg text-start font-semibold tracking-wider uppercase mb-4">welcome to <span className="font-bold text-[#003794]">VALR</span></p>

        {/* Main heading */}
        <h1 className="text-3xl font-bold text-[#003794] leading-tight px-2 text-start">Submit your va</h1>
        <h1 className="text-3xl font-bold mb-4 px-2 text-[#003794] leading-tight text-start">
          <span className="text-[#003794] ">disability claim</span> today with <span className="text-4xl font-extrabold">valr</span>
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-base leading-relaxed mb-5 text-start px-2">
          Tired of delays, paperwork, and confusion? VALR makes filing your VA claim fast and stress-free. Our system is built to help you get every dollar and benefit you deserve—quickly, clearly, and without the usual hassle. No stress. No confusion. Just results.
        </p>

         <div className=" text-center bg-[#B31942] text-white py-4 px-6 ">
          <p className="text-2xl font-bold">Only $195*</p>
          <p className="text-md opacity-90 font-semibold">Complete VA Disability Support</p>
        </div>

        <p className="text-[#25456F] mt-3 font-extrabold text-lg md:text-xl text-center mb-3">no stress. NO CONFUSION. just RESULTS.</p>

        {/* Buttons */}
        <div className="space-y-4 mb-12 space-x-5">
          <Link
            to="/plan"
            className="inline-block bg-[#003794] text-white px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-wide shadow-lg"
          >
            GET STARTED
          </Link>

           <Link
            to="/contact"
            className="inline-block bg-[#B31942] text-white px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-wide shadow-lg"
          >
            Contact us
          </Link>

      
        </div>

        {/* Main image with decorative elements */}
        <div className="relative flex justify-center">
         
          
          {/* Main image */}
          <div className="relative">
            <img
              src="https://i.ibb.co/23fFSDqr/Group-2147226361.png"
              className="object-cover rounded-2xl px-5"
              alt="VA Disability Expert"
            />


          </div>
        </div>

        {/* Price highlight */}
       
      </div>
    </section>
  )
}

export default Banner

