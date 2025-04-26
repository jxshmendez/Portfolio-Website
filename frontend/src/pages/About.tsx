import React from 'react'

const About = () => {
  return (
    <div className="bg-[#F3F3F3] min-h-screen">
      {/* Header Section */}
      <section className="pt-32 pb-12 bg-[#EBF0DC]">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-medium mb-6 leading-tight">
              About Me
            </h1>
            <p className="text-xl mb-6 text-primary-700">
              Software engineer with a passion for creating innovative and accessible applications.
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-medium mb-6">My Journey</h2>
              <div className="space-y-4 text-primary-700">
                <p>
                  I'm a recent BEng Software Engineering graduate with a passion for creating
                  applications that are both powerful and accessible. My journey in software
                  development began during my university studies where I discovered my love for
                  problem-solving and creating digital solutions.
                </p>
                <p>
                  Throughout my academic career, I focused on developing a strong foundation in
                  computer science principles while also gaining practical experience through
                  self-learning and personal projects. This balanced approach has allowed me to
                  work effectively with both front-end and back-end technologies.
                </p>
                <p>
                  I enjoy working with modern web technologies like React, Node.js, and Flask
                  to build responsive, efficient, and scalable applications. I'm particularly 
                  interested in clean architecture, responsive UI design, and optimising for 
                  performance.
                </p>
              </div>
              
              <h2 className="text-2xl font-medium mt-12 mb-6">Education</h2>
              <div className="border-b border-primary-200 pb-6 mb-6">
                <div className="flex justify-between mb-2">
                  <h3 className="font-medium">BEng Software Engineering</h3>
                  <p className="text-primary-600">2022 - 2025</p>
                </div>
                <p className="text-primary-600 mb-2">Edinburgh Napier University</p>
                <p>Graduated with First Class Honours. Specialised in Web Development and Machine Learning.</p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-medium mb-6">Skills</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm uppercase font-medium mb-3 text-primary-600">Programming Languages</h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { name: 'JavaScript', color: '#FED134' },
                        { name: 'Python', color: '#FED134' },
                        { name: 'SQL', color: '#FED134' }
                      ].map(skill => (
                        <span
                          key={skill.name}
                          className="px-3 py-1 text-sm text-black"
                          style={{ backgroundColor: skill.color }}
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm uppercase font-medium mb-3 text-primary-600">Frontend</h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { name: 'React', color: '#00D2BE' },
                        { name: 'Vue.js', color: '#00D2BE' },
                        { name: 'Tailwind CSS', color: '#00D2BE' }
                      ].map(skill => (
                        <span
                          key={skill.name}
                          className="px-3 py-1 text-sm text-black"
                          style={{ backgroundColor: skill.color }}
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm uppercase font-medium mb-3 text-primary-600">Backend</h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { name: 'Node.js', color: '#FF8389' },
                        { name: 'Flask', color: '#FF8389' },
                        { name: 'Django', color: '#FF8389' }
                      ].map(skill => (
                        <span
                          key={skill.name}
                          className="px-3 py-1 text-sm text-black"
                          style={{ backgroundColor: skill.color }}
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-medium mb-6">Interests</h2>
                <ul className="space-y-2 text-primary-700">
                  <li>Web Development</li>
                  <li>User Experience Design</li>
                  <li>Machine Learning</li>
                  <li>Open Source Contributing</li>
                  <li>Cloud Computing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About 