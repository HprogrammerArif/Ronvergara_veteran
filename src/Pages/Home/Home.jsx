import Banner from "./Banner"
import ContactForm from "./ContactForm"
import DisabilityCalculator from "./DisabilityCalculator"
import FAQ from "./Faq"
import FeaturesCard from "./Features"
import Pricing_Plan from "./Pricing_Plan"
import Review from "./Review"
import Services from "./Services"
import StatsSection from "./StatsSection"
import Testimonials from "./Testimonials"
import VAC_Trust from "./VAC_Trust"
import VeteransSlider from "./VeteransSlider"

const Home = () => {
  return (
    <div className=" ">
        
          <Banner />
          <StatsSection/>
         
          {/* <DisabilityCalculator/> */}
          <FeaturesCard/>
          <Pricing_Plan/>
          <Review/>
          <VAC_Trust/>
          <Services/>
          <VeteransSlider/>
          <Testimonials/> 
          <FAQ/> 
          <ContactForm/>   
    </div>
  )
}

export default Home
