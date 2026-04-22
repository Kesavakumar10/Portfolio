import { Link } from "react-scroll";
import { FaUserCircle, FaUser, FaCode, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  return (
      <nav className="navbar">

      <h2 className="logo">PORTFOLIO</h2>

      <div className="nav-links">

        <Link to="profile" smooth={true} className="nav-btn">
          <FaUserCircle /> Profile
        </Link>
        
        <Link to="about" smooth={true} className="nav-btn">
          <FaUser /> About
        </Link>

        <Link to="projects" smooth={true} className="nav-btn">
          <FaProjectDiagram /> Projects
        </Link>

        <Link to="skills" smooth={true} className="nav-btn">
          <FaCode /> Skills
        </Link>

        <Link to="contact" smooth={true} className="nav-btn">
          <FaEnvelope /> Contact
        </Link>

      </div>

    </nav>
  );
}