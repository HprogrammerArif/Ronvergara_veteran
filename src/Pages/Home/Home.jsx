import Banner from "./Banner"
import ContactForm from "./ContactForm"
import DisabilityCalculator from "./DisabilityCalculator"
import FeaturesCard from "./Features"
import Pricing_Plan from "./Pricing_Plan"
import Review from "./Review"

const Home = () => {
  return (
    <div className=" mx-auto">
        
          <Banner />
          <ContactForm/>
          <DisabilityCalculator/>
          <FeaturesCard/>
          <Pricing_Plan/>
          <Review/>
     
    </div>
  )
}

export default Home
