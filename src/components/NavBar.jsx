import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X } from "lucide-react"
import logo from "@/assets/devoptics-logo.png"
import { useState } from "react"

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="w-full px-4 sm:px-6 lg:px-12 py-2">
      <nav className="w-full max-w-none mx-auto bg-white shadow-md border border-gray-200 mt-3">
        <div className="px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center">
              <img src={logo} alt="devoptics" className="h-10 sm:h-12 w-auto" />
            </div>

          {/* Desktop Navigation Links */}
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

          {/* Get Started Button - Desktop */}
          <div className="hidden md:flex items-center">
            <Button 
              className="bg-[#C8E652] hover:bg-[#b8d642] text-gray-900 font-bold rounded-full px-6"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden pt-4 pb-3 border-t border-gray-200 mt-3">
              <div className="flex flex-col space-y-3">
                <a
                  href="#solutions"
                  className="flex items-center text-gray-700 hover:text-gray-900 text-sm font-bold py-2 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Solutions
                  <ChevronDown className="ml-1 h-4 w-4" />
                </a>
                <a
                  href="#case-studies"
                  className="text-gray-700 hover:text-gray-900 text-sm font-bold py-2 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Case Studies
                </a>
                <a
                  href="#process"
                  className="text-gray-700 hover:text-gray-900 text-sm font-bold py-2 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Process
                </a>
                <a
                  href="#pricing"
                  className="text-gray-700 hover:text-gray-900 text-sm font-bold py-2 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Pricing
                </a>
                <a
                  href="#about"
                  className="text-gray-700 hover:text-gray-900 text-sm font-bold py-2 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-gray-900 text-sm font-bold py-2 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
                <Button 
                  className="bg-[#C8E652] hover:bg-[#b8d642] text-gray-900 font-bold rounded-full px-6 w-full mt-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}

export default NavBar

