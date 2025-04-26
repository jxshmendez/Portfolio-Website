import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  
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
        
        <nav>
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
      </div>
    </header>
  )
}

export default Navbar 