import React, { useState } from "react";
import { PRICING_PLANS, PricingPlan } from "../data/plans";

interface PricingProps {
  onSelectPlan: (planName: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const [annual, setAnnual] = useState<boolean>(true);

  const computePrice = (plan: PricingPlan): number => {
    if (!annual) return plan.monthlyPriceUsd;
    return Math.round(plan.monthlyPriceUsd * 0.8);
  };

  return (
    <section className="section" id="planes">
      <div className="container">
        <div className="section-header">
          <div className="section-kicker">PLANES COMERCIALES</div>
          <h2 className="section-title">Escala desde un vehículo hasta toda tu flota</h2>
          <p className="section-desc">
            Precios transparentes por unidad activa. Sin costos ocultos ni
            contratos abusivos.
          </p>

          <div className="billing-toggle">
            <button
              type="button"
              className={`billing-btn ${!annual ? "active" : ""}`}
              onClick={() => setAnnual(false)}
            >
              Mensual
            </button>
            <button
              type="button"
              className={`billing-btn ${annual ? "active" : ""}`}
              onClick={() => setAnnual(true)}
            >
              Anual <span className="discount-pill">-20%</span>
            </button>
          </div>
        </div>

        <div className="pricing-grid">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`plan-card ${plan.popular ? "popular" : ""}`}
            >
              {plan.popular && (
                <span className="popular-badge">MÁS ELEGIDO</span>
              )}
              <h3 className="plan-name">{plan.name}</h3>
              <p className="plan-subtitle">{plan.subtitle}</p>

              <div className="plan-price">
                <span className="amount">${computePrice(plan)}</span>
                <span className="period">USD / unidad / mes</span>
              </div>

              <ul className="plan-features">
                {plan.features.map((item) => (
                  <li key={item}>
                    <span className="check-dot">&#10003;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#cotizar"
                className={`btn ${plan.popular ? "btn-primary" : "btn-outline"}`}
                onClick={() => onSelectPlan(plan.name)}
              >
                {plan.ctaLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

