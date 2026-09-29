import { NavLink, type NavLinkRenderProps } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import logo from "../../../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navClass = ({ isActive }: NavLinkRenderProps) =>
    isActive ? "active" : "";

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <div className="navbar-logo">
          <img src={logo} alt="Art School Logo" />
        </div>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <NavLink to="/" className={navClass}>
            Home
          </NavLink>

          <NavLink to="/classes" className={navClass}>
            Classes
          </NavLink>

          <NavLink to="/news" className={navClass}>
            News
          </NavLink>

          <NavLink to="/artists" className={navClass}>
            Artists
          </NavLink>

          <NavLink to="/students" className={navClass}>
            Students
          </NavLink>

          <NavLink to="/events" className={navClass}>
            Events & Parties
          </NavLink>

          <NavLink to="/shop" className={navClass}>
            Online Shop
          </NavLink>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;