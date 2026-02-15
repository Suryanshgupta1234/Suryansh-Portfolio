import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ background: "#0d1117", color: "white" }}>

      {/* HERO SECTION */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "40px"
        }}
      >
        <h1 style={{ fontSize: "3rem", fontWeight: "700" }}>
          Hi, I'm <span style={{ color: "#00ff88" }}>Suryansh</span>
        </h1>

        <p style={{ fontSize: "1.3rem", color: "#cbd5e1", marginTop: "15px" }}>
          Building Scalable & Efficient Software Solutions
        </p>

        <p style={{ color: "#00ff88", marginTop: "10px" }}>
          Full-Stack Developer | DSA Enthusiast | Problem Solver
        </p>

        <div style={{ marginTop: "30px" }}>

          {/* View Projects Button */}
          <Link
            to="/projects"
            style={{
              padding: "10px 25px",
              marginRight: "15px",
              borderRadius: "8px",
              backgroundColor: "#00ff88",
              fontWeight: "600",
              color: "#000",
              textDecoration: "none",
              display: "inline-block"
            }}
          >
            View Projects
          </Link>

          {/* Download Resume Button */}
          <a
            href="/Suryansh_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            style={{
              padding: "10px 25px",
              borderRadius: "8px",
              border: "1px solid #00ff88",
              backgroundColor: "transparent",
              color: "#00ff88",
              fontWeight: "600",
              textDecoration: "none",
              display: "inline-block"
            }}
          >
            Download Resume
          </a>

        </div>
      </section>

      {/* WHAT I DO */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2 style={{ marginBottom: "40px" }}>What I Do</h2>

        <div className="container">
          <div className="row">

            {[
              { title: "Web Development", desc: "Building responsive and scalable web applications." },
              { title: "Problem Solving", desc: "Solving DSA problems with optimized solutions." },
              { title: "Clean Architecture", desc: "Writing structured and maintainable code." }
            ].map((item, i) => (
              <div key={i} className="col-md-4 mb-4">
                <div
                  style={{
                    backgroundColor: "#161b22",
                    padding: "30px",
                    borderRadius: "12px",
                    boxShadow: "0 0 15px rgba(0,255,136,0.15)"
                  }}
                >
                  <h4 style={{ color: "#00ff88" }}>{item.title}</h4>
                  <p style={{ color: "#cbd5e1" }}>{item.desc}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section style={{ padding: "60px 20px", background: "#161b22" }}>
        <div className="container text-center">
          <h2 style={{ marginBottom: "40px" }}>Featured Projects</h2>

          <div className="row">
            {[
              { name: "GlobalPlus News", tech: "React, Bootstrap" },
              { name: "CodeConnect", tech: "Java, Algorithms" },
              { name: "TextUtils", tech: "MERN Stack" }
            ].map((project, i) => (
              <div key={i} className="col-md-4 mb-4">
                <div
                  style={{
                    backgroundColor: "#0d1117",
                    padding: "25px",
                    borderRadius: "12px",
                    border: "1px solid #00ff88"
                  }}
                >
                  <h5 style={{ color: "#00ff88" }}>{project.name}</h5>
                  <p style={{ color: "#cbd5e1" }}>{project.tech}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* STATS */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <div className="container">
          <div className="row">

            {[
              { num: "150+", label: "DSA Problems" },
              { num: "5+", label: "Projects Built" },
              { num: "1+", label: "Hackathons" }
            ].map((stat, i) => (
              <div key={i} className="col-md-4 mb-4">
                <h2 style={{ color: "#00ff88" }}>{stat.num}</h2>
                <p style={{ color: "#cbd5e1" }}>{stat.label}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section
        style={{
          padding: "80px 20px",
          background: "#161b22",
          textAlign: "center"
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>
          Let’s Build Something Meaningful Together
        </h2>

        <Link
          to="/contact"
          style={{
            padding: "12px 30px",
            borderRadius: "8px",
            backgroundColor: "#00ff88",
            fontWeight: "600",
            color: "#000",
            textDecoration: "none",
            display: "inline-block"
          }}
        >
          Contact Me
        </Link>
      </section>

    </div>
  );
}

export default Home;
