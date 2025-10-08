import NavBar from './components/NavBar'
import BusinessAutomation from './components/BusinessAutomation'
import HowItWorks from './components/HowItWorks'
import ResultsAutomation from './components/ResultsAutomation'

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <NavBar />
      <BusinessAutomation />
      <HowItWorks />
      <ResultsAutomation />
      {/* Add more components here as needed */}
    </div>
  )
}

export default App
