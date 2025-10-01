import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import logo from "@/assets/devoptics-logo.png"

function NavBar() {
  return (
    <div className="w-full px-12 py-2">
      <nav className="w-full max-w-none mx-auto bg-white shadow-md border border-gray-200 mt-3">
        <div className="px-8 py-3">
          <div className="flex items-center justify-between">
            {/* Logo Section - placeholder for now */}
            <div className="flex items-center">
              <img src={logo} alt="devoptics" className="h-12 w-auto" />
            </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#solutions"
              className="flex items-center text-gray-700 hover:text-gray-900 text-sm font-bold transition-colors"
            >
              Solutions
              <ChevronDown className="ml-1 h-4 w-4" />
            </a>
            <a
              href="#case-studies"
              className="text-gray-700 hover:text-gray-900 text-sm font-bold transition-colors"
            >
              Case Studies
            </a>
            <a
              href="#process"
              className="text-gray-700 hover:text-gray-900 text-sm font-bold transition-colors"
            >
              Process
            </a>
            <a
              href="#pricing"
              className="text-gray-700 hover:text-gray-900 text-sm font-bold transition-colors"
            >
              Pricing
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-gray-900 text-sm font-bold transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-gray-900 text-sm font-bold transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Get Started Button */}
          <div className="flex items-center">
            <Button 
              className="bg-[#C8E652] hover:bg-[#b8d642] text-gray-900 font-bold rounded-full px-6"
            >
              Get Started
            </Button>
          </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar

