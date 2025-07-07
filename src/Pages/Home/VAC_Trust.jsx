import vetern from "../../assets/vetern.png";
import client from "../../assets/client.png";
import confidence from "../../assets/confidence.png";
import bar from "../../assets/bar.png";

const VAC_Trust = () => {
  return (
    <section className="bg-gray-200 md:pt-32 py-10 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center md:gap-12 lg:gap-32">


          <div className="w-full md:w-5/12 mb-8 md:mb-0 flex justify-center">
            <img src={vetern} alt="Veteran" className="w-2/3 md:w-full" />
          </div>


          <div className="w-full lg:w-7/12">
            <h1 className="text-2xl text-center lg:text-left uppercase md:text-4xl font-bold text-gray-900 mb-10 md:mb-16">
              Why Veterans Trust VAC
            </h1>

            <div className="space-y-8 lg:space-y-10">

  
              <div className="flex items-start gap-4 lg:gap-8">
                <div className="bg-[#0A3161] p-3 rounded-md">
                  <img src={client} alt="" className="w-[40px] md:w-[75px] md:h-[67px]" />
                </div>
                <div className="w-full">
                  <h2 className="uppercase text-lg md:text-2xl font-semibold text-gray-900 mb-1">
                    Unmatched Experience
                  </h2>
                  <p className="text-sm md:text-base dark:text-gray-800">
                    With decades of experience, we’ve helped thousands of veterans secure their benefits. No case is too complex for our team.
                  </p>
                </div>
              </div>

      
              <div className="flex items-start gap-4 lg:gap-8">
                <div className="bg-[#0A3161] p-3 rounded-md">
                  <img src={confidence} alt="" className="w-[40px] md:w-[75px] md:h-[67px]" />
                </div>
                <div className="w-full">
                  <h2 className="uppercase text-lg md:text-2xl font-semibold text-gray-900 mb-1">
                    Turn Your Disabilities Into Possibilities
                  </h2>
                  <p className="text-sm md:text-base dark:text-gray-800">
                    We transform the challenges of navigating the VA system into a clear path toward the benefits you deserve.
                  </p>
                </div>
              </div>

   
              <div className="flex items-start gap-4 lg:gap-8">
                <div className="bg-[#0A3161] p-3 rounded-md">
                  <img src={bar} alt="" className="w-[40px] md:w-[75px] md:h-[67px]" />
                </div>
                <div className="w-full">
                  <h2 className="uppercase text-lg md:text-2xl font-semibold text-gray-900 mb-1">
                    100% Success Rate
                  </h2>
                  <p className="text-sm  md:text-base dark:text-gray-800">
                    We’ve never failed to achieve our clients’ goals. Every veteran we’ve worked with has seen results.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VAC_Trust;
