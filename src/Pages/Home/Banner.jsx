// import banner from '../../assets/bannerIMG.png';
// import banner_img from '../../assets/Banner_large.jpg';


// const Banner = () => {
//   return (
//     <>
//       <div
//         className="hidden md:flex relative bg-cover bg-center bg-no-repeat h-screen items-center"
//         style={{ backgroundImage: `url(${banner_img})` }}
//       >
//         <div className="container mx-auto">
//           <div className="max-w-3xl bg-opacity-90 mt-5 flex flex-col justify-center">
//             <h1 className="text-7xl lg:text-7xl font-bold text-blue-900 leading-tight">
//               TURNING <br />
//               <span className="py-5 block">DISABILITIES INTO</span> 
//               POSSIBILITIES
//             </h1>
//             <p className="mt-4 text-gray-700 text-xl capitalize max-w-2xl">
//               AC is a veteran-owned organization dedicated to simplifying <br /> 
//               the VA process. Whether you've been denied before or never 
//               applied, we're here to fight for you.
//             </p>
//             <button className="mt-6 bg-[#B31942] text-white w-1/3 px-10 py-3 rounded-md text-lg font-semibold hover:bg-red-700 transition duration-300">
//               Book Now
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="md:hidden min-h-screen  text-center pt-24 bg-gray-100">
//         <h1 className="text-4xl font-bold text-blue-900">
//           Welcome to Our Platform!
//         </h1>
//         <p className="mt-3 text-gray-700 text-lg px-5">
//           We help you navigate the VA process. Let's get started.
//         </p>
//         <button className="mt-6 bg-[#B31942] text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-red-700 transition duration-300">
//           Get Started
//         </button>

//         <img src={banner} alt="" className='mt-10 h-[52vh]'/>
//       </div>
//     </>
//   );
// };

// export default Banner;

import banner from '../../assets/bannerIMG.png';
import banner_img from '../../assets/Banner_large.jpg';

const Banner = () => {
  return (
    <>
      {/* Desktop view (lg and above) */}
      <div
        className="hidden lg:flex relative bg-cover bg-center bg-no-repeat h-screen w-full items-center"
        style={{ backgroundImage: `url(${banner_img})` }}
      >
        <div className="container mx-auto">
          <div className="max-w-3xl bg-opacity-90 mt-5 flex flex-col justify-center">
            <h1 className="text-7xl font-bold text-blue-900 leading-tight">
              TURNING <br />
              <span className="py-5 block">DISABILITIES INTO</span> 
              POSSIBILITIES
            </h1>
            <p className="mt-4 text-gray-700 text-xl capitalize max-w-2xl">
              AC is a veteran-owned organization dedicated to simplifying <br />
              the VA process. Whether you've been denied before or never 
              applied, we're here to fight for you.
            </p>
            <button className="mt-6 bg-[#B31942] text-white w-1/3 px-10 py-3 rounded-md text-lg font-semibold hover:bg-red-700 transition duration-300">
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Tablet view only (md only) */}
      <div
        className="hidden md:flex lg:hidden h-screen w-full bg-cover bg-center bg-no-repeat items-center justify-center"
        style={{ backgroundImage: `url(${banner_img})` }}
      >
        {/* <div className="bg-white bg-opacity-80 p-6 rounded-md text-center max-w-7xl mx-4">
          <h1 className="text-4xl font-bold text-blue-900 leading-snug">
            TURNING <br />
            <span className="block py-2">DISABILITIES INTO</span>
            POSSIBILITIES
          </h1>
          <p className="mt-4 text-gray-700 text-lg">
            AC is a veteran-owned organization simplifying the VA process.
            Whether you've been denied or never applied, we’re here to help.
          </p>
          <button className="mt-6 bg-[#B31942] text-white px-10 py-3 rounded-md text-lg font-semibold hover:bg-red-700 transition duration-300">
            Book Now
          </button>
        </div> */}

        <div className="bg-white bg-opacity-50 backdrop-blur-md p-6 rounded-md text-center max-w-7xl mx-4">
  <h1 className="text-4xl font-bold text-blue-900 leading-snug">
    TURNING <br />
    <span className="block py-2">DISABILITIES INTO</span>
    POSSIBILITIES
  </h1>
  <p className="mt-4 text-gray-700 text-lg">
    AC is a veteran-owned organization simplifying the VA process.
    Whether you've been denied or never applied, we’re here to help.
  </p>
  <button className="mt-6 bg-[#B31942] text-white px-10 py-3 rounded-md text-lg font-semibold hover:bg-red-700 transition duration-300">
    Book Now
  </button>
</div>

      </div>

      {/* Mobile view (below md) */}
      <div className="md:hidden min-h-screen text-center pt-24 bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-900">
          Welcome to Our Platform!
        </h1>
        <p className="mt-3 text-gray-700 text-lg px-5">
          We help you navigate the VA process. Let's get started.
        </p>
        <button className="mt-6 bg-[#B31942] text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-red-700 transition duration-300">
          Get Started
        </button>
        <img src={banner} alt="VA support" className="mt-10 h-[52vh]" />
      </div>
    </>
  );
};

export default Banner;




