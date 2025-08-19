import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  github: string
  image: string
}

const Home = () => {
  const [featuredProjects, setFeaturedProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    // Simulate API call with timeout
    setTimeout(() => {
      setFeaturedProjects([
        {
          id: 1,
          title: 'Football Fatigue Tracker With Computer Vision',
          description: 'A Football Fatigue Tracker that uses only Computer Vision to detect the player\'s fatigue leveraging the YOLO (You Only Look Once) algorithm and ByteTrack algorithm.',
          technologies: ['YOLO', 'ByteTrack', 'OpenCV', 'Python'],
          github: 'https://github.com/jxshmendez/Football_Fatigue_Analysis',
          image: '/footballFatigue.png'
        },
        {
          id: 2,
          title: 'Distributed Medical System',
          description: 'Distributed emergency response system designed to improve coordination between ambulance crews, regional hospitals, and headquarters.',
          technologies: ['React', 'Node.js', 'SwiftUI', 'SQLite'],
          github: 'https://github.com/joshmendez/task-manager',
          image: '/MedicalSystem.png'
        }
      ])
      setLoading(false)
    }, 300)
  }, [])
  return (
    <div className="bg-[#F3F3F3] min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[#EFF8E2]">
        <div className="container">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl mt-8 md:mt-0">
              <h1 className="text-4xl md:text-5xl font-medium mb-2 leading-tight">
                Software Engineer
              </h1>
              <p className="text-gray-600 mb-8 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Edinburgh, UK
              </p>
            <p className="text-xl mb-10 leading-relaxed text-primary-700">
              BEng Software Engineering graduate with a passion for creating accessible, 
              user-focused applications that solve real-world problems.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/projects">
                <button className="btn-primary">
                  View Projects
                </button>
              </Link>
              <Link to="/contact">
                <button className="btn-outline">
                  Contact Me
                </button>
              </Link>
            </div>
          </div>
            
          {/* Profile Picture */}
            <div className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src="/profilepic_HighRes.jpeg" 
                  alt="Josh Mendez"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="py-16 bg-primary-50">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin h-8 w-8 border-t-2 border-b-2 border-accent-500 rounded-full"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="h-48 overflow-hidden">
                    {project.image ? (
                      <Link to="/projects">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
                        />
                      </Link>
                    ) : (
                      <div className="w-full h-full bg-gradient-to-r from-primary-100 to-primary-200 flex items-center justify-center">
                        <span className="text-primary-500 text-center px-4">{project.title}</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-medium mb-2 text-gray-800">{project.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span key={index} className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Link 
                      to={`/projects#project-${project.id}`} 
                      className="inline-flex items-center text-accent-500 hover:text-accent-600 font-medium transition-colors"
                    >
                      View Project <span className="ml-1">→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-6">
            {['JavaScript', 'Python', 'Flask', 'Django', 'Node.js', 'SQL', 'Git'].map((skill) => (
              <div key={skill} className="py-2 border-b border-primary-200">
                <span className="font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 