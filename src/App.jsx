import CraftedFromTheGround from "./components/About"
import ContactBanner from "./components/ContactBanner"
import ExpertiseSection from "./components/ExpertiseSection"
import FeaturesSection from "./components/FeaturesSection"
import Footer from "./components/Footer"
import HeroSection from "./components/Hero"
import LatestSection from "./components/LatestSection"
import Navbar from "./components/Navbar"

function App() {
  
  return (
    <>
     <Navbar />
     <HeroSection />
     <FeaturesSection />
     <CraftedFromTheGround />
     <ExpertiseSection />
     <LatestSection />
     <ContactBanner />
     <Footer />
    </>
  )
}

export default App
