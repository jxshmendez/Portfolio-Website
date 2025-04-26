import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="bg-[#F3F3F3] min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-medium mb-8 leading-tight">
              Software Engineer
            </h1>
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
        </div>
      </section>

      {/* Project Showcase */}
      <section className="py-16 bg-primary-50">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-6 border border-primary-200">
              <div className="h-48 bg-primary-100 mb-6 flex items-center justify-center">
                <span className="text-primary-500">Football Fatigue Tracker: Using Only Computer Vision</span>
              </div>
              <h3 className="text-xl font-medium mb-2">Football Fatigue Tracker With Computer Vision</h3>
              <p className="text-primary-700 mb-4">
                A Football Fatigue Tracker that uses only Computer Vision to detect the player's fatigue.
              </p>
              <Link to="/projects" className="text-accent-500 hover:underline">View details →</Link>
            </div>
            
            <div className="bg-white p-6 border border-primary-200">
              <div className="h-48 bg-primary-100 mb-6 flex items-center justify-center">
                <span className="text-primary-500">Empty</span>
              </div>
              <h3 className="text-xl font-medium mb-2">Empty</h3>
              <p className="text-primary-700 mb-4">Empty</p>
              <Link to="/projects" className="text-accent-500 hover:underline">View details →</Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-6">
            {['JavaScript', 'React', 'TypeScript', 'Python', 'Flask', 'Node.js', 'SQL', 'Git'].map((skill) => (
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