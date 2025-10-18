import logo from '../assets/devoptics-logo.png'

function Footer() {
  return (
    <footer className="relative z-10 bg-white text-gray-900 py-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div>
            <img
              src={logo}
              alt="DevOptics Logo"
              className="h-10"
            />
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#solutions" className="text-gray-600 hover:text-gray-900 transition-colors font-semibold">
              Solutions
            </a>
            <a href="#case-studies" className="text-gray-600 hover:text-gray-900 transition-colors font-semibold">
              Case Studies
            </a>
            <a href="#process" className="text-gray-600 hover:text-gray-900 transition-colors font-semibold">
              Process
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors font-semibold">
              Pricing
            </a>
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors font-semibold">
              About
            </a>
          </div>

          {/* Copyright */}
          <div className="text-gray-600 text-sm font-semibold">
            © {new Date().getFullYear()} DevOptics
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

