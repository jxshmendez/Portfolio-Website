import React, { useState, useEffect } from 'react'
import axios from 'axios'

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  github: string
  live: string
  image: string
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    // In a real app, we would fetch from the API
    // axios.get('/api/projects')
    //   .then(response => {
    //     setProjects(response.data)
    //     setLoading(false)
    //   })
    //   .catch(error => {
    //     console.error('Error fetching projects:', error)
    //     setLoading(false)
    //   })
    
    // For now, hardcode some sample projects
    setTimeout(() => {
      setProjects([
        {
          id: 1,
          title: 'Football Fatigue Tracker With Computer Vision',
          description: 'A Football Fatigue Tracker that uses only Computer Vision to detect the player\'s fatigue leveraging the YOLO (You Only Look Once) algorithm and ByteTrack algorithm.',
          technologies: ['YOLO', 'ByteTrack', 'OpenCV', 'Python'],
          github: 'https://github.com/joshmendez/ecommerce-platform',
          live: 'https://ecommerce-demo.example.com',
          image: 'ecommerce.jpg'
        },
        {
          id: 2,
          title: 'Empty',
          description: 'Empty',
          technologies: [],
          github: 'https://github.com/joshmendez/task-manager',
          live: 'https://task-app.example.com',
          image: 'task-app.jpg'
        },
        {
          id: 3,
          title: 'Empty',
          description: 'Empty',
          technologies: [],
          github: 'https://github.com/joshmendez/health-dashboard',
          live: 'https://health.example.com',
          image: 'health-dashboard.jpg'
        },
        {
          id: 4,
          title: 'Empty',
          description: 'Empty',
          technologies: [],
          github: 'https://github.com/joshmendez/weather-app',
          live: 'https://weather.example.com',
          image: 'weather-app.jpg'
        }
      ])
      setLoading(false)
    }, 600)
  }, [])
  
  return (
    <div className="bg-[#F3F3F3] min-h-screen">
      {/* Header Section */}
      <section className="pt-32 pb-12">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-medium mb-6 leading-tight">
              My Projects
            </h1>
            <p className="text-xl mb-6 text-primary-700">
              Here are some of the projects I've worked on. Each project represents my skills, 
              problem-solving approach, and passion for creating useful applications.
            </p>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section className="py-12">
        <div className="container">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin h-8 w-8 border-t-2 border-b-2 border-accent-500 rounded-full"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
              {projects.map((project) => (
                <div key={project.id} className="border-b border-primary-200 pb-8">
                  <div className="h-48 bg-primary-50 mb-6 flex items-center justify-center">
                    <span className="text-primary-500">{project.title}</span>
                  </div>
                  <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                  <p className="text-primary-700 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map(tech => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 bg-primary-50 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-6">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-500 hover:underline"
                    >
                      GitHub
                    </a>
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-500 hover:underline"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Projects 