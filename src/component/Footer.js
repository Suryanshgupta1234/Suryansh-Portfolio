import React, { Component } from 'react';

export class Footer extends Component {
  render() {
    return (
      <footer
        style={{
          backgroundColor: "#0d1117",
          padding: "30px 20px",
          textAlign: "center",
          color: "#cbd5e1",
          borderTop: "1px solid #1f2937"
        }}
      >
        <div style={{ marginBottom: "10px" }}>
          <span style={{ color: "#00ff88", fontWeight: "600" }}>
            BuildWithSuryansh
          </span>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <a
            href="https://github.com/Suryanshgupta1234"
            style={{ color: "#00ff88", margin: "0 10px", textDecoration: "none" }}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/suryansh-gupta-17b2422b0/"
            style={{ color: "#00ff88", margin: "0 10px", textDecoration: "none" }}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <div style={{ fontSize: "0.9rem" }}>
          © {new Date().getFullYear()} Suryansh. All rights reserved.
        </div>
      </footer>
    );
  }
}

export default Footer;
