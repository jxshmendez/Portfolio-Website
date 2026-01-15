import React from 'react'

const About = () => {
  return (
    <div className="bg-[#F3F3F3] min-h-screen">

      {/* Header Section */}
      <section className="pt-32 pb-12 bg-[#7E7F9A]">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-medium mb-6 leading-tight">
              About Me
            </h1>
            <p className="text-xl mb-6 text-primary-700">
              BEng Software Engineering graduate with a passion for building efficient, user-friendly tools that reduce barriers to access.
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-12">
        <div className="container ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              
              <div className="space-y-4 text-primary-700">
                <p>
                  Hey! I'm a Software Engineering graduate who enjoys building things that are useful,
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
                  I am currently developing an app that allows rock climbers to connect with other climbers, track
                    progress and share achievements. This will be a full stack project that will include a website and a
                    mobile app. I have put a big focus on good project management by using tools such as Jira and Github
                    issues, I have also adopted an Agile-like workflow to help me iterate through features and fix issues more
                    efficiently. The main goal of this passion project is to sharpen my programming skills, I love learning
                    about new technologies and how to navigate through bugs effectively.
                </p>
                <p>
                  Thank you for visiting, check out my projects or get in touch if you'd like to connect!
                </p>

                  <p>
                      Josh
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
            
            {/* Skills */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-medium mb-6">Skills</h2>
                <div className="space-y-6">

                {/* Programming Languages */}
                  <div>
                    <h3 className="text-sm uppercase font-medium mb-3 text-primary-600">Programming Languages</h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                          { name: 'C#', color: '#FED134' },
                          { name: 'Java', color: '#FED134' },
                          { name: 'Python', color: '#FED134' },
                          { name: 'JavaScript', color: '#FED134' },
                          { name: 'TypeScript', color: '#FED134' }


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

                    {/* Frontend */}
                    <div>
                        <h3 className="text-sm uppercase font-medium mb-3 text-primary-600">Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                            {[
                                { name: 'React', color: '#00D2BE' },
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

                    {/* Backend */}
                    <div>
                        <h3 className="text-sm uppercase font-medium mb-3 text-primary-600">Backend</h3>
                        <div className="flex flex-wrap gap-2">
                            {[
                                { name: 'Spring Boot', color: '#FF8389' },
                                { name: 'Node.js', color: '#FF8389' },
                                { name: '.NET', color: '#FF8389' },
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
                    <h3 className="text-sm uppercase font-medium mb-3 text-primary-600">Data</h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                          { name: 'PostgreSQL', color: '#FAF0CA' },
                          { name: 'MongoDB', color: '#FAF0CA' },
                          { name: 'pandas', color: '#FAF0CA' },
                          { name: 'matplotlib', color: '#FAF0CA' },

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

                  {/* Tools */}
                  <div>
                    <h3 className="text-sm uppercase font-medium mb-3 text-primary-600">Tools</h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { name: 'Docker', color: '#7E7F9A' },
                        { name: 'Git', color: '#7E7F9A' },
                        { name: 'Linux (Fedora, RHEL)', color: '#7E7F9A' },
                        { name: 'Postman', color: '#7E7F9A' },
                          { name: 'Apache Kafka', color: '#7E7F9A' },
                          { name: 'RabbitMQ', color: '#7E7F9A' },
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
                    {/*Testing & Monitoring*/}
                    <div>
                        <h3 className="text-sm uppercase font-medium mb-3 text-primary-600">Testing & Monitoring</h3>
                        <div className="flex flex-wrap gap-2">
                            {[
                                { name: 'JUnit', color: '#EB6534' },
                                { name: 'Jest', color: '#EB6534' },
                                { name: 'Mockito', color: '#EB6534'},
                                { name: 'Sentry', color: '#EB6534'},
                                { name: 'Prometheus', color: '#EB6534'},
                                { name: 'Grafana', color: '#EB6534'}
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
                  {/* Methodologies */}
                  <div>
                    <h3 className="text-sm uppercase font-medium mb-3 text-primary-600">Methodologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { name: 'Agile Methodologies', color: '#779BE7' },
                        { name: 'Test-Driven Development', color: '#779BE7' },
                          { name: 'Domain-Driven Design', color: '#779BE7' },
                          { name: "CI/CD (GitHub Actions & Jenkins)", color: "#779BE7" },
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
                  <li>Rock Climbing</li>
                  <li>Cooking</li>
                  <li>Guitar</li>
                  <li>Music Production</li>
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