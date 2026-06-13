/** Central branding & links */
export const siteBaseUrl =
  import.meta.env.VITE_SITE_URL ?? "https://zakirelaskar.com";

export const profile = {
  fullName: "Zakir Sajid Elaskar",
  shortTitle: "Data Scientist | Data Analyst",
  degreeLine1: "Master of Science in Data Science and Analytics",
  degreeLine2: "California State University, Chico",
  heroIntro: "Hi, I'm",
  availability: "MS Data Science & Analytics · Recent graduate (May 2026)",
  heroDescription: `I build data-driven solutions that combine analytics, machine learning, and visualization to solve real-world problems. From optimizing public transportation systems and automating machine learning workflows to applying analytics in healthcare and public health, I enjoy turning data into meaningful impact.`,
  /** Used on About / meta fallbacks */
  bio: `Data scientist focused on reproducible analytics, applied machine learning, and clear communication for technical and non-technical stakeholders.`,
  email: "elaskarzakir@gmail.com",
  linkedin: "https://www.linkedin.com/in/zakir-sajid-elaskar-1a1a84263/",
  github: "https://github.com/zakelaskar",
  resumePath: "/Zakir_Elaskar_Data_Scientist_Resume.pdf",
  /** Suggested filename when visitors use “Download PDF” on /resume */
  resumeDownloadFileName: "Zakir_Elaskar_Data_Scientist_Resume.pdf",
  defaultOgImage: "/og-default.svg",
} as const;

export const featuredAchievements = [
  "MS Data Science & Analytics Graduate",
  "2 Research Publications",
  "3 Data Science Internships",
  "134K+ Transit Records Analyzed",
  "Analyzed 7,900+ Colon Cancer Cases Using California Cancer Registry Data",
  "Public Health Compliance Data Modernization",
] as const;

export const education = [
  {
    school: "California State University, Chico",
    degree: "MS Data Science and Analytics",
    detail: "Graduated May 2026",
  },
  {
    school: "Savitribai Phule Pune University",
    degree: "Bachelor's in Artificial Intelligence and Data Science",
    detail: "Graduated June 2024",
  },
] as const;
