import React from "react";

interface FeatureItem {
  title: string;
  description: string;
  accent: "red" | "violet";
  icon: string;
}

const FEATURES: FeatureItem[] = [
  {
    title: "Corte Seguro Inteligente (≤ 15 km/h)",
    description:
      "Nunca apaga el motor en autopista. Si la unidad supera los 15 km/h, Warden mantiene el comando en espera y ejecuta el corte apenas reduce la marcha.",
    accent: "red",
    icon: "⚡",
  },
  {
    title: "Caja Negra 4G (Blackbox FIFO)",
    description:
      "Si el vehículo entra a cocheras subterráneas o zonas sin cobertura, guarda cada coordenada y las descarga en orden cronológico exacto al reconectar.",
    accent: "violet",
    icon: "📡",
  },
  {
    title: "Filtro Anti-Deriva (GPS Drift)",
    description:
      "Algoritmos de depuración que eliminan micro-saltos satelitales cuando el vehículo está estacionado, garantizando odómetros y rutas 100% reales.",
    accent: "violet",
    icon: "🧭",
  },
  {
    title: "Botón de Pánico SOS Instantáneo",
    description:
      "Alertas prioritarias con ubicación exacta ante emergencias, apertura de puertas no autorizada o desconexión de batería principal.",
    accent: "red",
    icon: "🚨",
  },
  {
    title: "Telemetría de Ignición ACC",
    description:
      "Control exacto de encendido y apagado del motor, horas de uso productivo, tiempos en ralentí y reportes automáticos por jornada.",
    accent: "violet",
    icon: "🔑",
  },
  {
    title: "Compatible con Hardware Industrial",
    description:
      "Integración nativa con equipos Coban TK103/TK303 y dispositivos TCP de alta confiabilidad con persistencia de estado ante cortes eléctricos.",
    accent: "red",
    icon: "🛡️",
  },
];

export const Features: React.FC = () => {
  return (
    <section className="section" id="capacidades">
      <div className="container">
        <div className="section-header">
          <div className="section-kicker">ARQUITECTURA NEXLOC - WARDEN</div>
          <h2 className="section-title">
            Diseñado para proteger activos reales en tiempo real
          </h2>
          <p className="section-desc">
            Cada módulo fue pensado para responder en condiciones críticas de
            calle, túneles sin señal y operación de flotas exigentes.
          </p>
        </div>

        <div className="features-grid">
          {FEATURES.map((feat) => (
            <article
              key={feat.title}
              className={`feature-card accent-${feat.accent}`}
            >
              <div className={`feature-icon ${feat.accent}`}>{feat.icon}</div>
              <h3>{feat.title}</h3>
              <p>{feat.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

