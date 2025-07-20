


import { useState } from "react";
import ContactForm from "./ContactForm";
import FAQ from "./Faq";
import Pricing_Plan from "./Pricing_Plan";
import QuoteSection from "./QuoteSection";
import Banner from "./Banner"
import Services from "./Services";

import VeteransSlider from "./VeteransSlider";
import Video from "./Video";
import MessaageIcon from "../../../public/message.png"

const Home = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const isLoggedIn = !!localStorage.getItem("access_token"); 

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="relative">
       <Banner/>
       <Video />
      <Services />
      <Pricing_Plan />
      <VeteransSlider />
      <FAQ />
      <ContactForm />

      {isLoggedIn && (
        <>
          <button
            className="fixed bottom-6 right-6 rounded-full border-gray-900 p-2 animate-pulse-custom z-50"
            onClick={toggleChat}
          >
            <img src={MessaageIcon} alt="Chat Support" className="w-[50px] h-[50px]" />
          </button>

          {/* {isChatOpen && (
            <div className="fixed bottom-24 right-6 z-50 ">
              <SupportChat onClose={toggleChat} />
              
            </div>
          )} */}
        </>
      )}

      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.7;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-pulse-custom {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;