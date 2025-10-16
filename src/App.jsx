import NavBar from './components/NavBar'
import BusinessAutomation from './components/BusinessAutomation'
import HowItWorks from './components/HowItWorks'
import Solutions from './components/Solutions'
import ResultsAutomation from './components/ResultsAutomation'
import WhatIsDifferent from './components/WhatIsDifferent'
import CanvasBlobs from './components/CanvasBlobs'

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
      </div>
    </div>
  )
}

export default App
