import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{
        backgroundColor: "#0d1117",
        position: "sticky",
        top: 0,
        zIndex: 1000
      }}
    >
      <div className="container">

        {/* Brand Left */}
        <Link
          className="navbar-brand fw-bold"
          to="/"
          style={{ color: "#00ff88" }}
        >
          BuildWithSuryansh
        </Link>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links Right */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link text-light" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-light" to="/about">About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-light" to="/projects">Projects</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-light" to="/contact">Contact</Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
