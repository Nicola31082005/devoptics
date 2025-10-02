import NavBar from './components/NavBar'
import BusinessAutomation from './components/BusinessAutomation'
import HowItWorks from './components/HowItWorks'
import ResultsAutomation from './components/ResultsAutomation'
import OrganicBlobs from './components/OrganicBlobs'

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Background blobs that span the entire page */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
        <OrganicBlobs className="w-full h-full opacity-80" />
      </div>
      
      {/* Main content */}
      <div className="relative z-10">
        <NavBar />
        <BusinessAutomation />
        <HowItWorks />
        <ResultsAutomation />
        {/* Add more components here as needed */}
      </div>
    </div>
  )
}

export default App
