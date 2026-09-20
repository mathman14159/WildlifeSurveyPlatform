 import { useState } from "react";
import { NavLink } from "react-router-dom";


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="header">
      <div className="header-bar">
        <NavLink to="/" className="logo" onClick={closeMenu}>
          <img src="/images/logo.png" alt="Trail Tracker" />
        </NavLink>

        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" onClick={closeMenu} end>
          Report a Sighting
        </NavLink>
        <NavLink to="/logs" onClick={closeMenu}>
          View Sighting Logs
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;