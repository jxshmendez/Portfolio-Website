import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled])

  const toggleMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    setIsMenuOpen(!isMenuOpen)
  }
  
  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled ? 'bg-white border-b border-primary-200' : 'bg-white'
        }`}
      >
        <div className="container h-16 flex items-center justify-between">
          <NavLink to="/" className="group relative text-xl font-medium overflow-hidden">
            <span className="relative z-10">Josh Mendez</span>
            <span className="absolute inset-0 h-full w-0 bg-gradient-to-r from-[#FCAB10] via-[#FCAB10]/80 to-[#FCAB10]/30 transition-all duration-500 group-hover:w-full"></span>
          </NavLink>
          
          {/* Hamburger Menu Button (visible on mobile) */}
          <button 
            className="block lg:hidden p-2 hover:bg-gray-100 rounded-lg"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`h-0.5 w-6 bg-gray-600 transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`h-0.5 w-6 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`h-0.5 w-6 bg-gray-600 transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center space-x-8">
              <li>
                <NavLink to="/" 
                  className={({ isActive }) => 
                    `nav-link h-16 flex items-center px-4 transition-colors duration-200 ${
                      isActive ? 'bg-[#FF5154] text-white' : 'hover:bg-gray-100'
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" 
                  className={({ isActive }) => 
                    `nav-link h-16 flex items-center px-4 transition-colors duration-200 ${
                      isActive ? 'bg-[#FF5154] text-white' : 'hover:bg-gray-100'
                    }`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" 
                  className={({ isActive }) => 
                    `nav-link h-16 flex items-center px-4 transition-colors duration-200 ${
                      isActive ? 'bg-[#FF5154] text-white' : 'hover:bg-gray-100'
                    }`
                  }
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" 
                  className={({ isActive }) => 
                    `nav-link h-16 flex items-center px-4 transition-colors duration-200 ${
                      isActive ? 'bg-[#FF5154] text-white' : 'hover:bg-gray-100'
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <div 
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? 'translate-y-[64px]' : '-translate-y-full'
        } lg:hidden`}
      >
        <nav className="container py-6">
          <ul className="flex flex-col space-y-6">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `block px-4 py-2 text-xl ${isActive ? 'text-primary-600 font-medium' : 'text-gray-800'}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  `block px-4 py-2 text-xl ${isActive ? 'text-primary-600 font-medium' : 'text-gray-800'}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/projects" 
                className={({ isActive }) => 
                  `block px-4 py-2 text-xl ${isActive ? 'text-primary-600 font-medium' : 'text-gray-800'}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  `block px-4 py-2 text-xl ${isActive ? 'text-primary-600 font-medium' : 'text-gray-800'}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Navbar 