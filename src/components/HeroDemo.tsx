import React, { useEffect, useState } from "react";

type RelayState = "NORMAL" | "PENDIENTE" | "CORTADO";

const SAFE_CUT_SPEED = 15;

export const HeroDemo: React.FC = () => {
  const [speed, setSpeed] = useState<number>(64);
  const [relayState, setRelayState] = useState<RelayState>("NORMAL");

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSpeed((prev) => {
        if (relayState === "CORTADO") {
          return 0;
        }
        if (relayState === "PENDIENTE") {
          const next = Math.max(0, prev - 7);
          if (next <= SAFE_CUT_SPEED) {
            setRelayState("CORTADO");
            return 0;
          }
          return next;
        }
        // Oscilación realista de velocidad en ruta (60 - 68 km/h)
        const delta = Math.round((Math.random() - 0.5) * 4);
        return Math.min(72, Math.max(58, prev + delta));
      });
    }, 450);

    return () => window.clearInterval(timer);
  }, [relayState]);

  const handleCut = () => {
    if (relayState === "NORMAL") {
      if (speed <= SAFE_CUT_SPEED) {
        setRelayState("CORTADO");
        setSpeed(0);
      } else {
        setRelayState("PENDIENTE");
      }
    }
  };

  const handleRestore = () => {
    setRelayState("NORMAL");
    setSpeed(62);
  };

  const statusLabel =
    relayState === "NORMAL"
      ? "RELÉ HABILITADO"
      : relayState === "PENDIENTE"
      ? "CORTE PENDIENTE (≤15 km/h)"
      : "MOTOR INMOVILIZADO";

  const statusClass =
    relayState === "NORMAL"
      ? "normal"
      : relayState === "PENDIENTE"
      ? "pending"
      : "cut";

  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div>
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            PLATAFORMA GPS DE GRADO TÁCTICO
          </div>

          <h1 className="hero-title">
            Protección inteligente para tu vehículo y{" "}
            <span className="highlight">tu flota completa.</span>
          </h1>

          <p className="hero-subtitle">
            <strong>Nexloc - Warden</strong> combina rastreo satelital de alta
            precisión, caja negra 4G anti-zonas ciegas y{" "}
            <strong>corte remoto seguro por debajo de 15 km/h</strong> para
            proteger tu patrimonio sin poner en riesgo la conducción.
          </p>

          <div className="hero-cta-row">
            <a href="#cotizar" className="btn btn-primary">
              Solicitar Demo en Vivo
            </a>
            <a href="#planes" className="btn btn-outline">
              Explorar Planes y Precios
            </a>
          </div>

          <div className="hero-metrics">
            <div className="metric-item">
              <strong>&le; 15 km/h</strong>
              <span>Umbral de corte seguro</span>
            </div>
            <div className="metric-item">
              <strong>99.95%</strong>
              <span>Uptime en servidores TCP</span>
            </div>
            <div className="metric-item">
              <strong>100% FIFO</strong>
              <span>Recuperación Blackbox 4G</span>
            </div>
          </div>
        </div>

        {/* Interactive Showcase Card */}
        <div className="warden-showcase">
          <div className="showcase-header">
            <div className="showcase-logo-wrap">
              <div className="showcase-emblem">
                <img src="/logo-warden.png" alt="Escudo Nexloc Warden" />
              </div>
              <div>
                <div className="showcase-title">WARDEN GUARD &bull; DEMO EN VIVO</div>
                <div className="showcase-sub mono">Unidad #AR-409 &bull; TK103/TK303</div>
              </div>
            </div>

            <span className={`status-chip ${statusClass}`}>{statusLabel}</span>
          </div>

          <div className="telemetry-panel">
            <div className="telemetry-row">
              <div className="tel-box">
                <span className="tel-label">Velocidad Actual</span>
                <span className="tel-value mono">{speed} km/h</span>
              </div>
              <div className="tel-box">
                <span className="tel-label">Ignición / Señal</span>
                <span className="tel-value mono">
                  {relayState === "CORTADO" ? "ACC OFF" : "ACC ON"} &bull; 4G
                </span>
              </div>
            </div>

            <div className="speed-bar-wrap">
              <div
                className="speed-bar-fill"
                style={{ width: `${Math.min(100, (speed / 80) * 100)}%` }}
              />
            </div>

            <div className="threshold-note">
              <span>0 km/h</span>
              <span>Zona segura de corte: &le; 15 km/h</span>
              <span>80 km/h</span>
            </div>
          </div>

          <div className="showcase-actions">
            <button
              type="button"
              className="btn btn-danger-outline"
              onClick={handleCut}
              disabled={relayState !== "NORMAL"}
            >
              {relayState === "PENDIENTE"
                ? "Desacelerando..."
                : "Simular Corte Remoto (J)"}
            </button>
            <button
              type="button"
              className="btn btn-outline"
              onClick={handleRestore}
              disabled={relayState === "NORMAL"}
            >
              Restaurar Motor (K)
            </button>
          </div>

          <p className="showcase-footnote">
            Prueba el protocolo de seguridad vial: el relé espera a que el
            vehículo baje a &le; 15 km/h antes de cortar.
          </p>
        </div>
      </div>
    </section>
  );
};

