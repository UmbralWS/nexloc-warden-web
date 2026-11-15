import React, { useState } from "react";

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#top" className="brand-link" onClick={closeMenu}>
          <div className="logo-frame">
            <img src="/logo-warden.png" alt="Logo Nexloc - Warden" />
          </div>
          <div className="brand-text">
            <span className="brand-name">
              NEXLOC <span>WARDEN</span>
            </span>
            <span className="brand-tag">TELEMETRÍA &amp; SEGURIDAD VEHICULAR</span>
          </div>
        </a>

        <nav className="nav-links" aria-label="Navegación principal">
          <a href="#capacidades">Capacidades</a>
          <a href="#planes">Planes</a>
          <a href="#cotizar">Cotizar Flota</a>
        </nav>

        <div className="nav-actions">
          <a href="#planes" className="btn btn-outline nav-hide-mobile">
            Ver Planes
          </a>
          <a href="#cotizar" className="btn btn-primary nav-cta-desktop">
            Solicitar Demo
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className={`hamburger ${menuOpen ? "open" : ""}`} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-drawer">
          <div className="container mobile-drawer-inner">
            <a href="#capacidades" onClick={closeMenu}>
              Capacidades
            </a>
            <a href="#planes" onClick={closeMenu}>
              Planes y Precios
            </a>
            <a href="#cotizar" onClick={closeMenu}>
              Cotizar Flota
            </a>
            <div className="mobile-drawer-actions">
              <a href="#planes" className="btn btn-outline" onClick={closeMenu}>
                Ver Planes
              </a>
              <a href="#cotizar" className="btn btn-primary" onClick={closeMenu}>
                Solicitar Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
