import { useState, useEffect } from "react";

function AboutSection() {
  const roles = [
    "B.Tech Student",
    "Full-Stack Developer",
    "DSA Enthusiast",
    "Problem Solver"
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = roles[roleIndex];
    let speed = isDeleting ? 25 : 60;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(currentText.slice(0, displayed.length + 1));
        if (displayed.length === currentText.length) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setDisplayed(currentText.slice(0, displayed.length - 1));
        if (displayed.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0d1117, #161b22)",
        display: "flex",
        alignItems: "center",
        padding: "60px 20px"
      }}
    >
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT TERMINAL */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div
              style={{
                backgroundColor: "#161b22",
                borderRadius: "15px",
                padding: "30px",
                boxShadow: "0 0 40px rgba(0,255,136,0.25)"
              }}
            >
              {/* Terminal Dots */}
              <div style={{ display: "flex", gap: "8px", marginBottom: "20px" }}>
                <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#ff5f56" }}></div>
                <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#ffbd2e" }}></div>
                <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#27c93f" }}></div>
              </div>

              {/* Typewriter */}
              <h3
                style={{
                  color: "#00ff88",
                  fontFamily: "monospace",
                  fontWeight: "700",
                  fontSize: "1.8rem",
                  borderRight: "3px solid #00ff88",
                  paddingRight: "6px",
                  animation: "blink 1s step-end infinite"
                }}
              >
                {displayed}
              </h3>

              <style>
                {`
                  @keyframes blink {
                    50% { border-color: transparent; }
                  }
                `}
              </style>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-lg-6 text-light">

            <h2 style={{ fontWeight: "700", marginBottom: "10px" }}>
              About Me
            </h2>

            <div
              style={{
                width: "60px",
                height: "3px",
                backgroundColor: "#00ff88",
                marginBottom: "20px",
                boxShadow: "0 0 10px #00ff88"
              }}
            ></div>

            <p style={{ color: "#cbd5e1", lineHeight: "1.7" }}>
              I focus on building scalable web applications while strengthening
              my foundation in Data Structures and Algorithms. My approach
              emphasizes clean architecture, performance optimization, and
              maintainable code.
            </p>

            {/* Skills Badges */}
            <h5 style={{ marginTop: "25px", color: "#00ff88" }}>
              Technical Skills
            </h5>

            <div style={{ marginTop: "10px" }}>
              {["Java", "JavaScript", "React", "Bootstrap", "DSA", "Git"].map(
                (skill, i) => (
                  <span
                    key={i}
                    style={{
                      display: "inline-block",
                      margin: "6px",
                      padding: "6px 14px",
                      borderRadius: "20px",
                      backgroundColor: "#0d1117",
                      color: "#00ff88",
                      border: "1px solid #00ff88",
                      fontSize: "0.85rem"
                    }}
                  >
                    {skill}
                  </span>
                )
              )}
            </div>

            {/* Stats */}
            <div style={{ display: "flex", gap: "40px", marginTop: "30px" }}>
              <div>
                <h4 style={{ color: "#00ff88" }}>150+</h4>
                <p style={{ color: "#cbd5e1", margin: 0 }}>DSA Problems</p>
              </div>

              <div>
                <h4 style={{ color: "#00ff88" }}>5+</h4>
                <p style={{ color: "#cbd5e1", margin: 0 }}>Projects Built</p>
              </div>
            </div>

            {/* Career Objective */}
            <h5 style={{ marginTop: "30px", color: "#00ff88" }}>
              Career Objective
            </h5>

            <p style={{ color: "#cbd5e1", lineHeight: "1.6" }}>
              Seeking an opportunity as a Software Developer where I can
              contribute to impactful projects while continuously improving my
              problem-solving and system design skills.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutSection;
