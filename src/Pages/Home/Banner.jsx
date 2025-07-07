import { Link } from "react-router-dom";


const HeroSection = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dpi0t9wfn/image/upload/v1750426678/Screenshot_2025-06-20_193709_lxyqnc.png')",
      }}
    >

      <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"></div>


      <div className="relative z-10 container mx-auto md:px-6 px-3 py-20 flex flex-col md:flex-row gap-10 items-center justify-center min-h-screen text-white">

        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-8xl text-[#0B2A52] font-bold">
            VA Benefits <br /> <span className="md:text-7xl">Made Simple</span>
          </h1>
          <p className="text-lg md:text-xl space-y-10 text-black font-bold">
            Veterans, don't wait—there's finally an app built just for you. VALR makes applying for your VA benefits
            faster, simpler, and less stressful. You've earned this. Get started today.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link
            to="/plan"
            className="px-6 bg-red-600 hover:bg-red-700 rounded-xl text-white font-semibold transition py-5 text-2xl md:text-4xl text-center">
              CLAIM YOUR <br /> BENEFITS NOW
            </Link>
          </div>
        </div>


        <div className="md:w-1/2 w-full mt-8 md:mt-0 flex justify-center relative">
          <img
            src="https://res.cloudinary.com/dpi0t9wfn/image/upload/v1750427954/Untitled_design_4_mgcob5.png"
            alt="VALR Hero"
            className="rounded-2xl shadow-lg md:w-[650px] object-cover md:h-[700px]"
          />

          <div className="absolute -bottom-6 md:-bottom-20 md:-right-5 -right-2 md:left-[560px] flex items-center justify-end">
            <img
              src="https://res.cloudinary.com/dpi0t9wfn/image/upload/v1750428531/Untitled_design_6_fbjvbd.png"
              alt="VALR Logo"
              className="w-24 h-24 md:w-44 md:h-44 rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
