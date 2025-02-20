import Banner from "./Banner"
import ContactForm from "./ContactForm"
import DisabilityCalculator from "./DisabilityCalculator"
import FeaturesCard from "./Features"
import Pricing_Plan from "./Pricing_Plan"
import Review from "./Review"
import Services from "./Services"
import VAC_Trust from "./VAC_Trust"
import VeteransSlider from "./VeteransSlider"

const Home = () => {
  return (
    <div className=" mx-auto">
        
          <Banner />
          <ContactForm/>
          <DisabilityCalculator/>
          <FeaturesCard/>
          <Pricing_Plan/>
          <Review/>
          <VAC_Trust/>
          <Services/>
          <VeteransSlider/>
     
    </div>
  )
}

export default Home
