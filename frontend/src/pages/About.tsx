import React from 'react'

const About = () => {
  return (
    <div className="bg-[#F3F3F3] min-h-screen">
      {/* Header Section */}
      <section className="pt-32 pb-12 bg-[#9FB8AD]">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-medium mb-6 leading-tight">
              About Me
            </h1>
            <p className="text-xl mb-6 text-primary-700">
              BEng Software Engineering graduate with a passion for creating accessible,
              user-focused applications that solve real-world problems.
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              
              <div className="space-y-4 text-primary-700">
                <p>
                  Hi! I'm a Software Engineering graduate who enjoys building things that are useful,
                  efficient and accessible.
                </p>
                <p>
                  I've explored a lot through personal and university projects, especially in machine learning and
                  computer vision. One of my main projects was a football fatigue tracker that I built for
                  my dissertation. It uses computer vision to track players, measure distance covered and
                  estimate fatigue based on movement patterns. The pipeline successfully achieves 94.3% accuracy in player detection.
                  A custom tracking algorithm was implemented to improve performance, the algorithm improved the ByteTrack tracking by 33%. 
                  The project was designed with smaller teams in mind, aiming to make sports analysis more affordable and accessible without the need for expensive
                  hardware.
                </p>
                <p>
                  Another project I really enjoyed was building an autonomous rover using a Jetson Nano. I trained
                  it to follow objects in real time, which gave me hands on experience applying AI in a physical
                  environment.
                </p>
                <p>
                  I care deeply about accessibility. Not just in terms of design, but also making sure the tools I
                  build work well on lower-end devices. Good software should be efficient, lightweight, and usable by
                  everyone, regardless of what kind of tech they have.
                </p>
                <p>
                  Thank you for visiting, check out my projects or get in touch if you'd like to connect!
                </p>
              </div>
              
              <h2 className="text-2xl font-medium mt-12 mb-6">Education</h2>
              <div className="border-b border-primary-200 pb-6 mb-6">
                <div className="flex justify-between mb-2">
                  <h3 className="font-medium">BEng Software Engineering</h3>
                  <p className="text-primary-600">2022 - 2025</p>
                </div>
                <p className="text-primary-600 mb-2">Edinburgh Napier University</p>
                <p>Graduated with First Class Honours.</p>

              </div>

              <div className="border-b border-primary-200 pb-6 mb-6">
                <div className="flex justify-between mb-2">
                  <h3 className="font-medium">HNC Software Engineering</h3>
                  <p className="text-primary-600">2021 - 2022</p>
                </div>
                <p className="text-primary-600 mb-2">City of Glasgow College</p>
                <p>Distinction</p>
              </div>

              <div className="border-b border-primary-200 pb-6 mb-6">
                <div className="flex justify-between mb-2">
                  <h3 className="font-medium">NC Audio Visual Technology</h3>
                  <p className="text-primary-600">2020 - 2021</p>
                </div>
                <p className="text-primary-600 mb-2">Edinburgh College</p>
                <p>Pass - A</p>
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
                  <li>Computer Hardware</li>
                  <li>Web Development</li>
                  <li>Machine Learning</li>
                  <li>Rock Climbing</li>
                  <li>Cooking</li>
                  <li>Guitar</li>
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