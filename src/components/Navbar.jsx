import { useState } from "react";
import { Link } from "react-scroll";
import {
  FaBars,
  FaCode,
  FaEnvelope,
  FaProjectDiagram,
  FaTimes,
  FaUser,
  FaUserCircle,
} from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { to: "profile", icon: <FaUserCircle />, label: "Profile" },
    { to: "about", icon: <FaUser />, label: "About" },
    { to: "projects", icon: <FaProjectDiagram />, label: "Projects" },
    { to: "skills", icon: <FaCode />, label: "Skills" },
    { to: "contact", icon: <FaEnvelope />, label: "Contact" },
  ];

  return (
    <nav className="navbar">
      <h2 className="logo">PORTFOLIO</h2>

      <button
        type="button"
        className="nav-toggle"
        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div className={`nav-links ${isMenuOpen ? "nav-links-open" : ""}`}>
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            smooth={true}
            offset={-90}
            duration={500}
            className="nav-btn"
            onClick={() => setIsMenuOpen(false)}
          >
            {item.icon} {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
