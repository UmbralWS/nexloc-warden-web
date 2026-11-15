import React from "react";

export const Navbar: React.FC = () => {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#top" className="brand-link">
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

        <nav className="nav-links">
          <a href="#capacidades">Capacidades</a>
          <a href="#planes">Planes</a>
          <a href="#cotizar">Cotizar Flota</a>
        </nav>

        <div className="nav-actions">
          <a href="#planes" className="btn btn-outline">
            Ver Planes
          </a>
          <a href="#cotizar" className="btn btn-primary">
            Solicitar Demo
          </a>
        </div>
      </div>
    </header>
  );
};

