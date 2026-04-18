import React, { Component } from 'react'

function Projects() {
  const projects = [
    {
      title: "AntiGravity Interview Simulator",
      desc: "This is the full-stack project build with the use of AI to enhance my placement skills.",
      tech: ["React", "Node.js","Python"],
      github: "https://github.com/Suryanshgupta1234/interview-simulator",
      live: "https://suryanshgupta1234.github.io/interview-simulator/"
    },
    {
      title: "Amazon Clone",
      desc: "This is a Landing page of the Amazone web page",
      tech: ["HTML", "CSS"],
      github: "https://github.com/Suryanshgupta1234/Amazon_Clone",
      live: "https://amazon-clone-jet-nine.vercel.app/"
    },
    {
      title: "Live School-api",
      desc: "This is the School-api that trace the record of the ID, Address, Name, Longitude and Latitude",
      tech: ["Node.js", "Express", "MySQL","Render","Postman"],
      github: "https://github.com/Suryanshgupta1234/school-api",
      live: "https://school-api-rq27.onrender.com/api/listSchools?latitude=28.7&longitude=77.1"
    },
    {
      title: "Leetcode Questions Solutions",
      desc: "Here you can get the solutions of the Leetcode Problems.",
      tech: ["Java", "DSA"],
      github: "https://github.com/Suryanshgupta1234/Leetcode_Solutions",
      
    },
    {
      title: "TextUtils",
      desc: "Full-stack task management application with authentication and CRUD operations.",
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/Suryanshgupta1234/react-app",
      live: "https://suryanshgupta1234.github.io/react-app/"
    }
  ];

  return (
    <section
      style={{
        background: "#0d1117",
        minHeight: "100vh",
        padding: "80px 20px",
        color: "white"
      }}
    >
      <div className="container">

        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 style={{ fontWeight: "700" }}>Featured Projects</h2>

          <div
            style={{
              width: "80px",
              height: "3px",
              backgroundColor: "#00ff88",
              margin: "15px auto",
              boxShadow: "0 0 12px #00ff88"
            }}
          ></div>
        </div>

        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div
                style={{
                  backgroundColor: "#161b22",
                  padding: "25px",
                  borderRadius: "15px",
                  height: "100%",
                  border: "1px solid #1f2937",
                  transition: "0.3s",
                  boxShadow: "0 0 15px rgba(0,255,136,0.1)"
                }}
              >
                <h4 style={{ color: "#00ff88" }}>{project.title}</h4>

                <p style={{ color: "#cbd5e1", marginTop: "10px" }}>
                  {project.desc}
                </p>

                {/* Tech Stack */}
                <div style={{ marginTop: "15px" }}>
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      style={{
                        display: "inline-block",
                        margin: "5px",
                        padding: "5px 12px",
                        borderRadius: "20px",
                        backgroundColor: "#0d1117",
                        color: "#00ff88",
                        border: "1px solid #00ff88",
                        fontSize: "0.8rem"
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div style={{ marginTop: "20px" }}>
                  <a
                    href={project.github}
                    style={{
                      textDecoration: "none",
                      marginRight: "10px"
                    }}
                  >
                    <button
                      style={{
                        padding: "8px 16px",
                        borderRadius: "6px",
                        border: "1px solid #00ff88",
                        backgroundColor: "transparent",
                        color: "#00ff88",
                        fontSize: "0.85rem"
                      }}
                    >
                      GitHub
                    </button>
                  </a>

                  <a href={project.live} style={{ textDecoration: "none" }}>
                    <button
                      style={{
                        padding: "8px 16px",
                        borderRadius: "6px",
                        border: "none",
                        backgroundColor: "#00ff88",
                        color: "#000",
                        fontSize: "0.85rem",
                        fontWeight: "600"
                      }}
                    >
                      Live Demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;

