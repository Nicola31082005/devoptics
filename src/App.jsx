import NavBar from './components/NavBar'
import BusinessAutomation from './components/BusinessAutomation'
import HowItWorks from './components/HowItWorks'
import Solutions from './components/Solutions'
import ResultsAutomation from './components/ResultsAutomation'
import WhatIsDifferent from './components/WhatIsDifferent'
import CaseStudies from './components/CaseStudies'
import CanvasBlobs from './components/CanvasBlobs'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <CanvasBlobs />
      <div className="relative z-10">
        <NavBar />
        <BusinessAutomation />
        <HowItWorks />
        <ResultsAutomation />
        <Solutions />
        <WhatIsDifferent />
        <CaseStudies />
        <Footer />
      </div>
    </div>
  )
}

export default App
