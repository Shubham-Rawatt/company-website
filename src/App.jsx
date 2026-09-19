import DigitalGrowth from "./components/DigitalGrowth/digitalgrowth"
import Hero from "./components/Hero/hero"
import Navbar from "./components/navbar/navbar"
import StatsCard from "./components/Stats/stats"
import WhatWeDo from "./components/WhatWeDo/whatwedo"
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
    </main>
  )
}

export default App
