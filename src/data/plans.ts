export interface PricingPlan {
  id: string;
  name: string;
  subtitle: string;
  monthlyPriceUsd: number;
  popular?: boolean;
  ctaLabel: string;
  features: string[];
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "personal",
    name: "Warden Personal",
    subtitle: "Ideal para autos particulares, motos y utilitarios.",
    monthlyPriceUsd: 12,
    ctaLabel: "Elegir Personal",
    features: [
      "Rastreo GPS en tiempo real cada 5s",
      "Corte de motor seguro (≤ 15 km/h)",
      "Alertas de Ignición ACC ON/OFF",
      "Botón de pánico SOS inmediato",
      "Historial de recorridos 90 días",
    ],
  },
  {
    id: "flotas",
    name: "Warden Flotas",
    subtitle: "Control operativo completo para pymes y logística.",
    monthlyPriceUsd: 19,
    popular: true,
    ctaLabel: "Elegir Flotas",
    features: [
      "Todo lo incluido en Warden Personal",
      "Caja Negra 4G con descarga FIFO",
      "Filtro inteligente anti-deriva (GPS Drift)",
      "Geocercas, odómetro y exceso de velocidad",
      "Soporte prioritario 24/7 + App móvil",
    ],
  },
  {
    id: "enterprise",
    name: "Warden Enterprise",
    subtitle: "Flotas corporativas +50 unidades e integraciones.",
    monthlyPriceUsd: 29,
    ctaLabel: "Solicitar Cotización",
    features: [
      "Servidor TCP dedicado de baja latencia",
      "API REST / Webhooks en tiempo real",
      "Marca blanca (White-Label) con tu logo",
      "Reglas de seguridad personalizadas",
      "SLA garantizado 99.95% + Onboarding",
    ],
  },
];

