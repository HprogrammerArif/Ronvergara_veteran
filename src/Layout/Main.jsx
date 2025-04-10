import { Outlet } from "react-router-dom"
import Navbar from "../Pages/Shared/Navbar/Navbar"
import Footer from "../Pages/Shared/Footer/Footer"

const Main = () => {
  return (
    <div>
      <div className="mb-20">
      <Navbar />
      </div>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Main
