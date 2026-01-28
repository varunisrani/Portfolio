import { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Project", to: "/project" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand">
          B&amp;W Portfolio
        </Link>

        <div className="navbar-links">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className="nav-link">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="navbar-actions">
          <Link to="/contact" className="bw-button bw-button--ghost">
            Ok
          </Link>
        </div>

        <button onClick={toggleMenu} className="nav-toggler">
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>

      {isOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className="nav-link"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="bw-button bw-button--ghost"
          >
            Ok
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
