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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? 'bg-white border-b border-primary-200' : 'bg-white'
      }`}
    >
      <div className="container py-4 flex items-center justify-between">
        <NavLink to="/" className="text-xl font-medium">
          Josh Mendez
        </NavLink>
        
        {/* Hamburger Menu Button (visible on mobile) */}
        <button 
          className="lg:hidden p-2 focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex items-center space-x-8">
            <li>
              <NavLink to="/" 
                className={({ isActive }) => 
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" 
                className={({ isActive }) => 
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" 
                className={({ isActive }) => 
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" 
                className={({ isActive }) => 
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <div 
          className={`fixed lg:hidden top-[64px] left-0 right-0 bg-white border-b border-primary-200 transition-transform duration-300 transform ${
            isMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <nav className="container py-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <NavLink 
                  to="/" 
                  className={({ isActive }) => 
                    `nav-link block py-2 ${isActive ? 'active' : ''}`
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
                    `nav-link block py-2 ${isActive ? 'active' : ''}`
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
                    `nav-link block py-2 ${isActive ? 'active' : ''}`
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
                    `nav-link block py-2 ${isActive ? 'active' : ''}`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar 