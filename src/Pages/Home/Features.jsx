// import uploadImg from "../../assets/DD_upload.png";
// import narrationImg from "../../assets/narration.png";
// import { Link } from "react-router-dom";



// const FeaturesCard = () => {


//   return (
//     <div className="bg-gray-200 py-8 px-2 md:px-10">
//       <div className="flex flex-col md:flex-row md:justify-center md:items-stretch md:gap-8">
        
//         {/* First Card */}
//         <Link
//           to="/dd_214_info"
//           className="bg-[#0A3161] flex flex-col items-center justify-start text-center w-full md:w-[45%] lg:w-2/6 rounded-lg shadow-md p-6 md:p-8 lg:p-10 mb-6 md:mb-0"
//         >
//           <img
//             src={uploadImg}
//             alt="DD-214 Upload"
//             className="w-[180px] md:w-[200px] lg:w-[250px] h-auto"
//           />
//           <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mt-6 leading-snug">
//             DD-214 Upload & Auto-Population
//           </h1>
//         </Link>

//         {/* Second Card */}
//         <Link
//           to="/narrative"
//           className="bg-[#0A3161] flex flex-col items-center justify-start text-center w-full md:w-[45%] lg:w-2/6 rounded-lg shadow-md p-6 md:p-8 lg:p-10"
//         >
//           <img
//             src={narrationImg}
//             alt="Auto Generated Claim"
//             className="w-[180px] md:w-[200px] lg:w-[250px] h-auto"
//           />
//           <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mt-6 leading-snug">
//             Auto Generated Claim Narrative
//           </h1>
//         </Link>

//       </div>
//     </div>
//   );
// };

// export default FeaturesCard;

import uploadImg from "../../assets/DD_upload.png";
import narrationImg from "../../assets/narration.png";
import { Link } from "react-router-dom";
import { useGetLoggedUserQuery } from "../../redux/features/baseApi";

const FeaturesCard = () => {
  const { data: loggedInUser, isLoading } = useGetLoggedUserQuery();

  // Hide the component if user is not logged in or still loading
  if (isLoading || !loggedInUser) {
    return null;
  }

  return (
    <div className="bg-gray-200 py-8 px-2 md:px-10">
      <div className="flex flex-col md:flex-row md:justify-center md:items-stretch md:gap-8">
        {/* First Card */}
        <Link
          to="/dd_214_info"
          className="bg-[#0A3161] flex flex-col items-center justify-start text-center w-full md:w-[45%] lg:w-2/6 rounded-lg shadow-md p-6 md:p-8 lg:p-10 mb-6 md:mb-0"
        >
          <img
            src={uploadImg}
            alt="DD-214 Upload"
            className="w-[180px] md:w-[200px] lg:w-[250px] h-auto"
          />
          <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mt-6 leading-snug">
            DD-214 Upload & Auto-Population
          </h1>
        </Link>

        {/* Second Card */}
        <Link
          to="/narrative"
          className="bg-[#0A3161] flex flex-col items-center justify-start text-center w-full md:w-[45%] lg:w-2/6 rounded-lg shadow-md p-6 md:p-8 lg:p-10"
        >
          <img
            src={narrationImg}
            alt="Auto Generated Claim"
            className="w-[180px] md:w-[200px] lg:w-[250px] h-auto"
          />
          <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mt-6 leading-snug">
            Auto Generated Claim Narrative
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default FeaturesCard;
