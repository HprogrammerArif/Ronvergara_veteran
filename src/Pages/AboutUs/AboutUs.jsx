// import VAC_Trust from '../Home/VAC_Trust'


// const AboutUs = () => {
//   return (
//    <section>
//      <div className="relative w-full">

//     <div 
//       className="absolute inset-0 bg-cover bg-center "
//       style={{
//         backgroundImage: `url('https://i.ibb.co.com/4gdCfshT/male-soldier-pressing-index-finger-invisible-screen.png')`,
//       }}
//     >

//       <div className="absolute inset-0 bg-black/60"></div>
//     </div>


//     <div className="relative z-10 flex items-center min-h-screen p-6 md:p-12">
//       <div 
//         className="container mx-auto rounded-2xl "
//       >

//         <div className="text-4xl md:text-5xl font-bold text-white">
// <h1 className='w-2/3 md:3/4'>        Dedicated to Simplifying <br /> the VA Process for <br /> Veterans
// </h1>
//         </div>

//         {/* Description */}
//         <p className="text-white/90 text-md mt-10 leading-relaxed w-2/3 md:w-full">
//         At VA, your privacy is our priority. We collect only the necessary personal information you provide and use it solely to fulfill your requests. This page outlines our website’s privacy policy, detailing how we collect, store, use, and share your data. You’ll also find important information about your rights and our compliance with federal regulations and user agreements."
//         </p>
//       </div>
//     </div>
//   </div>

//   <div className='container mx-auto md:py-32'>
//            <div className='md:flex items-center md:gap-32'>


//               <VAC_Trust/>
            
//            </div>
//         </div>
//    </section>
//   )
// }

// export default AboutUs


import VAC_Trust from '../Home/VAC_Trust'

const AboutUs = () => {
  return (
    <section>
      {/* Hero Section */}
      <div className="relative w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://i.ibb.co.com/4gdCfshT/male-soldier-pressing-index-finger-invisible-screen.png')`,
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 flex items-center py-16 px-4 sm:px-6 md:px-12">
          <div className="container mx-auto">
            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white w-full sm:w-2/3 md:w-3/4 leading-snug">
              Dedicated to Simplifying <br /> the VA Process for <br /> Veterans
            </h1>

            {/* Description */}
            <p className="text-white/90 text-sm sm:text-base mt-6 sm:mt-10 leading-relaxed w-full sm:w-2/3 md:w-3/4">
              At VA, your privacy is our priority. We collect only the necessary personal
              information you provide and use it solely to fulfill your requests. This page outlines
              our website’s privacy policy, detailing how we collect, store, use, and share your
              data. You’ll also find important information about your rights and our compliance with
              federal regulations and user agreements.
            </p>
          </div>
        </div>
      </div>

      {/* VAC Trust Section */}
      <div className="px-4 sm:px-6 lg:px-12 py-12 sm:py-16 md:py-32">
        <VAC_Trust />
      </div>
    </section>
  )
}

export default AboutUs
