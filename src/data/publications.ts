export interface Publication {
  title: string;
  venue: string;
  year: string;
  href: string;
  note?: string;
}

/** Curated list used by /research and home “publications” claims. */
export const publications: Publication[] = [
  {
    title: "Depression Detection System (research paper)",
    venue: "IJNRD",
    year: "2024",
    href: "https://www.ijnrd.org/papers/IJNRD2405665.pdf",
    note: "Multimodal deep learning pipeline; see Projects for implementation context.",
  },
  {
    title: "B-Line Public Transit: A Data-Driven Analysis for Service Optimization",
    venue: "Master’s culminating project · CSU Chico",
    year: "2026",
    href: "/projects/b-line-public-transit-optimization",
    note: "134K+ ridership records, Poisson/OLS/GLSAR and ARMA-style modeling, forecasting (R² ≈ 0.89), and route-level optimization visuals: flagship portfolio case study.",
  },
];
