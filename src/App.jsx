import DigitalGrowth from "./components/DigitalGrowth/digitalgrowth"
import Footer from "./components/Footer/footer"
import Hero from "./components/Hero/hero"
import Navbar from "./components/navbar/navbar"
import StatsCard from "./components/Stats/stats"
import WhatWeDo from "./components/WhatWeDo/whatwedo"
import Contact from "./pages/Contact/contact"
import FAQ from "./pages/Faq/faq"
import Testimonials from "./pages/Testimonials/testimonials"

function App() {

  return (
    <main>
      <Navbar />
      <Hero />
      <WhatWeDo />
      <StatsCard /> 
      <DigitalGrowth />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
