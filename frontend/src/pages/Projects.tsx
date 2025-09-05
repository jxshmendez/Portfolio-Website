import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  github: string
  image?: string
  video?: string
  hasVideo?: boolean
  website?: string
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    setTimeout(() => {
      setProjects([
        {
          id: 1,
          title: 'Football Fatigue Tracker With Computer Vision',
          description: 'A Football Fatigue Tracker that uses only Computer Vision to detect the player\'s fatigue leveraging the YOLO (You Only Look Once) algorithm and ByteTrack algorithm.',
          technologies: ['YOLO', 'ByteTrack', 'OpenCV', 'Python'],
          github: 'https://github.com/jxshmendez/Football_Fatigue_Analysis',
          video: '/football.webm',
          hasVideo: true
        },
        {
          id: 2,
          title: 'Distributed Medical System',
          description: 'Distibuted emergency response system designed to improve coordination between ambulance crews, regional hospitals, and headquarters. It uses client-server architecture to enable real-time sharing of emergency call data and patient medical records.',
          technologies: ['React', 'Node.js', 'SwiftUI', 'SQLite'],
          github: '#TODO',
          image: '/MedicalSystem.png'
        },
        {
          id: 3,
          title: 'Console First-Person Maze',
          description: 'A simple first-person maze navigation game built using C++ with console-based rendering. This project demonstrates ray-casting techniques to render a 3D-like environment in a text-based console.',
          technologies: ['C++'],
          github: '#TODO',
          image: '/consolemaze.png'
        },
        {
          id: 4,
          title: 'Group Project: Machine Learning On Board an Autonomous Robot',
          description: 'A group project implementing machine learning on an autonomous robot using computer vision for navigation and object detection.',
          technologies: ['Python', 'YOLO', 'ByteTrack', 'OpenCV'],
          github: 'https://github.com/jxshmendez/Machine-Learning-On-board-an-Autonomous-Robot/tree/main',
          video: '/Robot.mp4',
          hasVideo: true
        },
        {
          id: 5,
          title: 'Flix Movie App',
          description: 'A website for searching movies using The Movie Database, users can search and favourite movies that will be saved within the browsers local storage.',
          technologies: ['React', 'JavaScript'],
          image: '/Flix.png',
          github: 'https://github.com/jxshmendez/FlixMovieApp',
          website:'https://flix-movies-nsli.vercel.app/',
        }
      ])
      setLoading(false)
    }, 600)
  }, [])
  
  return (
    <div className="bg-[#F3F3F3] min-h-screen">
      {/* Header Section */}
      <section className="pt-32 pb-12 bg-[#D0DCD7]">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-medium mb-6 leading-tight">
              My Projects
            </h1>
            <p className="text-xl mb-6 text-primary-700">
              Here are some of the projects I've worked on.
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="h-48 overflow-hidden">
                    {project.hasVideo ? (
                      <div className="relative w-full h-full">
                        <video 
                          src={project.video}
                          className="w-full h-full object-cover transition-transform duration-500"
                          autoPlay 
                          loop
                          muted
                          playsInline
                          controls
                          onError={(e) => {
                            console.error('Error loading video:', e);
                            const videoElement = e.target as HTMLVideoElement;
                            videoElement.style.display = 'none';
                            const fallback = document.createElement('div');
                            fallback.className = 'w-full h-full bg-gray-200 flex items-center justify-center';
                            fallback.textContent = 'Video failed to load. View on GitHub.';
                            videoElement.parentNode?.insertBefore(fallback, videoElement.nextSibling);
                          }}
                        >
                          Your browser does not support the video tag.
                        </video>
                        {project.image && (
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="absolute inset-0 w-full h-full object-cover"
                            style={{ display: 'none' }}
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = 'none';
                            }}
                          />
                        )}
                      </div>
                    ) : project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-r from-primary-100 to-primary-200 flex items-center justify-center">
                        <span className="text-primary-500 text-center px-4">{project.title}</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-medium mb-2 text-gray-800">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map(tech => (
                        <span 
                          key={tech} 
                          className="px-3 py-1 bg-primary-50 text-sm rounded-full"
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
                        className="text-accent-500 hover:underline flex items-center"
                      >
                        <span>View on GitHub</span>
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>

                      {project.website && (
                        <a 
                          href={project.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent-500 hover:underline flex items-center"
                        >
                          <span>View Website</span>
                          <svg 
                            className="w-4 h-4 ml-1" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24" 
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M10 6H6a2 2 0 00-2 2v10a2 
                                2 0 002 2h10a2 2 0 002-2v-4M14 
                                4h6m0 0v6m0-6L10 14" 
                            />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;