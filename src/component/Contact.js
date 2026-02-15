import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_738i6de",     // replace
        "template_m3nnl5w",    // replace
        form.current,
        "W6j2mf7NEbaH4uOdJ"      // replace
      )
      .then(
        () => {
          alert("Message Sent Successfully ✅");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message ❌");
        }
      );
  };

  return (
    <section
      style={{
        background: "#161b22",
        minHeight: "100vh",
        padding: "80px 20px",
        color: "white"
      }}
    >
      <div className="container">

        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 style={{ fontWeight: "700" }}>Contact Me</h2>

          <div
            style={{
              width: "80px",
              height: "3px",
              backgroundColor: "#00ff88",
              margin: "15px auto",
              boxShadow: "0 0 12px #00ff88"
            }}
          ></div>

          <p style={{ color: "#cbd5e1" }}>
            Let’s connect and build something impactful together.
          </p>
        </div>

        <div className="row">

          {/* LEFT SIDE */}
          <div className="col-md-5 mb-4">
            <h4 style={{ color: "#00ff88" }}>Get in Touch</h4>

            <p style={{ color: "#cbd5e1", marginTop: "15px" }}>
              I’m open to internship opportunities, collaboration, and
              software development roles.
            </p>

            <p style={{ marginTop: "20px" }}>
              <strong>Email:</strong><br />
              <span style={{ color: "#00ff88" }}>
                suryanshgupta233@gmail.com
              </span>
            </p>

            <p style={{ marginTop: "15px" }}>
              <strong>Location:</strong><br />
              <span style={{ color: "#cbd5e1" }}>
                India
              </span>
            </p>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="col-md-7">
            <div
              style={{
                backgroundColor: "#0d1117",
                padding: "30px",
                borderRadius: "15px",
                boxShadow: "0 0 20px rgba(0,255,136,0.15)"
              }}
            >
              <form ref={form} onSubmit={sendEmail}>

                <div className="mb-3">
                  <input
                    type="text"
                    name="name"   // IMPORTANT
                    placeholder="Your Name"
                    required
                    style={{
                      width: "100%",
                      padding: "12px",
                      borderRadius: "8px",
                      border: "1px solid #1f2937",
                      backgroundColor: "#161b22",
                      color: "white"
                    }}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    name="email"  // IMPORTANT
                    placeholder="Your Email"
                    required
                    style={{
                      width: "100%",
                      padding: "12px",
                      borderRadius: "8px",
                      border: "1px solid #1f2937",
                      backgroundColor: "#161b22",
                      color: "white"
                    }}
                  />
                </div>

                <div className="mb-3">
                  <textarea
                    rows="4"
                    name="message"   // IMPORTANT
                    placeholder="Your Message"
                    required
                    style={{
                      width: "100%",
                      padding: "12px",
                      borderRadius: "8px",
                      border: "1px solid #1f2937",
                      backgroundColor: "#161b22",
                      color: "white",
                      resize: "none"
                    }}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  style={{
                    padding: "10px 25px",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: "#00ff88",
                    fontWeight: "600"
                  }}
                >
                  Send Message
                </button>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;
