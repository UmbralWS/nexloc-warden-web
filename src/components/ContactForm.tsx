import React, { useEffect, useState } from "react";

interface ContactFormProps {
  selectedPlan: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ selectedPlan }) => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [vehicles, setVehicles] = useState("5");
  const [plan, setPlan] = useState(selectedPlan || "Warden Flotas");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedPlan) {
      setPlan(selectedPlan);
    }
  }, [selectedPlan]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section" id="cotizar">
      <div className="container">
        <div className="contact-box">
          <div className="contact-info">
            <div className="section-kicker">EMPIEZA HOY MISMO</div>
            <h3>Solicita tu demo personalizada de Nexloc - Warden</h3>
            <p>
              Déjanos tus datos y un especialista técnico configurará una cuenta
              de prueba con acceso completo al panel de monitoreo y simulador en
              vivo.
            </p>

            <div className="contact-perks">
              <div>&#10003; Activación en menos de 24 horas</div>
              <div>&#10003; Asesoramiento en hardware GPS (TK103/TK303)</div>
              <div>&#10003; Migración sin costo si ya tienes equipos instalados</div>
            </div>
          </div>

          {submitted ? (
            <div className="success-card">
              <h4>¡Solicitud recibida con éxito!</h4>
              <p>
                Gracias <strong>{name}</strong>. Preparamos tu cotización para{" "}
                <strong>{vehicles} unidad(es)</strong> en el plan{" "}
                <strong>{plan}</strong>. Te contactaremos a la brevedad a{" "}
                <span className="mono">{email}</span>.
              </p>
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => setSubmitted(false)}
              >
                Enviar otra consulta
              </button>
            </div>
          ) : (
            <form className="quote-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="q-name">Nombre y Apellido</label>
                <input
                  id="q-name"
                  type="text"
                  placeholder="Ej. Martín Gómez"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="q-company">Empresa / Flota (opcional)</label>
                <input
                  id="q-company"
                  type="text"
                  placeholder="Ej. Logística Sur S.A."
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="q-email">Correo electrónico</label>
                <input
                  id="q-email"
                  type="email"
                  placeholder="nombre@empresa.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="q-phone">WhatsApp / Teléfono</label>
                <input
                  id="q-phone"
                  type="tel"
                  placeholder="+54 9 11 5555-0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="q-plan">Plan de interés</label>
                <select
                  id="q-plan"
                  value={plan}
                  onChange={(e) => setPlan(e.target.value)}
                >
                  <option value="Warden Personal">Warden Personal</option>
                  <option value="Warden Flotas">Warden Flotas</option>
                  <option value="Warden Enterprise">Warden Enterprise</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="q-vehicles">Cantidad de vehículos</label>
                <input
                  id="q-vehicles"
                  type="number"
                  min={1}
                  max={10000}
                  value={vehicles}
                  onChange={(e) => setVehicles(e.target.value)}
                  required
                />
              </div>

              <div className="form-group full">
                <label htmlFor="q-notes">Detalles adicionales</label>
                <textarea
                  id="q-notes"
                  rows={3}
                  placeholder="Cuéntanos qué tipo de vehículos manejas o si ya cuentas con rastreadores..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>

              <div className="form-group full">
                <button type="submit" className="btn btn-primary">
                  Solicitar Demo y Cotización
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

