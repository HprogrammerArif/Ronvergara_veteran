// import { Link } from "react-router-dom";

// const Banner = () => {
//   return (
//     <section
//       className="bg-cover bg-center bg-no-repeat min-h-screen relative flex items-center  justify-between  pt-24"
//       style={{
//         backgroundImage: "url('https://i.ibb.co/y9PChVN/Group-2147226363-1.png')",
//       }}
//     >
      
//       <div className="relative md:flex items-center  justify-between   mx-auto">
//         <div className="relative z-10 basis-8/12">
//        <div className="bg-[#FFFFFF] rounded-tr-[50px] shadow-lg border border-gray-200 ">
//          <div className="py-3">
//           <h1 className="text-[#003794] ps-44 text-center md:text-start pt-56 md:pt-0 text-4xl md:text-6xl font-bold  leading-relaxed md:leading-[5rem]">
//           Submit your VA Disability claim <br /> today with  VALR Form
//         </h1>
//     </div>
       
//        </div>
//           <div className="bg-[#B31942] py-6 rounded-br-[20px]">
//           <h1 className="ps-44 text-white font-bold text-8xl">For only $195*</h1>
//         </div>
        
//         <div className="container ms-44 py-10"><p className="text-[#0B2A52] text-lg md:text-xl font-medium w-10/12 leading-relaxed md:leading-[2rem]">
//         Congratulations! Finally, you’re one step closer to receiving the benefits you’ve rightfully earned. Get the support you deserve, with no more confusion and no more waiting. It’s time to take control of your claim with confidence and clarity
//         </p></div>

//         <div className="uppercase font-semibold mt-3 ps-44">
//           <Link to="/plan" className="uppercase  bg-[#003794] text-[#FFFFFF] p-4 px-10  rounded-md">get started</Link>
//         </div>
//       </div>

//       <div className="relative z-10 basis-6/12 flex items-center justify-end">
//         <img
//           src="https://i.ibb.co/23fFSDqr/Group-2147226361.png"
//           className="w-[550px] h-[600px] max-w-full"
//           alt="Banner Graphic"
//         />
//       </div>
//       </div>
//     </section>
//   );
// };

// export default Banner;


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
                  Submit your VA Disability claim <br /> today with VALR Form
                </h1>
              </div>
            </div>
            <div className="bg-[#B31942] py-6 rounded-br-[20px]">
              <h1 className="ps-44 text-white font-bold text-8xl">For only $195*</h1>
            </div>
            <div className="container ms-44 py-10">
              <p className="text-[#0B2A52] text-lg md:text-xl font-medium w-10/12 leading-relaxed md:leading-[2rem]">
                Congratulations! Finally, you're one step closer to receiving the benefits you've rightfully earned. Get
                the support you deserve, with no more confusion and no more waiting. It's time to take control of your
                claim with confidence and clarity
              </p>
            </div>
            <div className="uppercase font-semibold mt-3 ps-44">
              <Link to="/plan" className="uppercase bg-[#003794] text-[#FFFFFF] p-4 px-10 rounded-md">
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
      <div className="block min-h-screen pt-32 md:hidden bg-gradient-to-b from-blue-50 to-blue-100 text-center px-6 relative overflow-hidden">
      
        <p className="text-orange-500 text-lg font-semibold tracking-wider uppercase mb-4">welcome to <span className="font-bold text-[#0B2A52]">VALR</span></p>

        {/* Main heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2 leading-tight">Fast & Reliable</h1>
        <h1 className="text-3xl font-bold mb-6 leading-tight">
          <span className="text-[#003794]">VA Disability</span> Claims
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-base leading-relaxed mb-8 px-2">
          Get the support you deserve with no more confusion and no more waiting. Take control of your claim with
          confidence and clarity.
        </p>

        {/* Buttons */}
        <div className="space-y-4 mb-12">
          <Link
            to="/plan"
            className="inline-block bg-[#003794] text-white px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-wide shadow-lg"
          >
            GET STARTED
          </Link>

          <div className="flex items-center justify-center space-x-2">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </div>
            <span className="text-gray-700 font-medium text-sm">Watch Success Stories</span>
          </div>
        </div>

        {/* Main image with decorative elements */}
        <div className="relative flex justify-center">
          {/* Background circle */}
          <div className="absolute w-80 h-80 bg-[#003794] rounded-full opacity-10 -z-10"></div>

          {/* Main image */}
          <div className="relative">
            <img
              src="https://i.ibb.co/23fFSDqr/Group-2147226361.png"
              className="w-64 h-72 object-cover rounded-2xl shadow-xl"
              alt="VA Disability Expert"
            />

            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 bg-white rounded-full p-3 shadow-lg">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-3 shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">★</span>
                </div>
                <div className="text-left">
                  <p className="text-xs font-semibold text-gray-800">Expert Help</p>
                  <p className="text-xs text-gray-600">95% Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Price highlight */}
        <div className="mt-8 bg-[#B31942] text-white py-4 px-6 rounded-2xl mx-4">
          <p className="text-2xl font-bold">Only $195*</p>
          <p className="text-sm opacity-90">Complete VA Disability Support</p>
        </div>
      </div>
    </section>
  )
}

export default Banner

