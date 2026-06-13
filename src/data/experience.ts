export interface ResourceLink {
  label: string;
  href: string;
}

export interface Metric {
  label: string;
  value: string;
}

export interface ContentSection {
  title: string;
  body: string;
}

export interface Experience {
  slug: string;
  role: string;
  organization: string;
  location?: string;
  duration: string;
  seoDescription: string;
  summary: string;
  technologies: string[];
  tags: string[];
  metrics?: Metric[];
  impactHighlights?: string[];
  /** Short bullets for the timeline list page */
  timelineBullets: string[];
  heroImage?: string;
  links?: ResourceLink[];
  contentSections?: ContentSection[];
  content?: string;
  /** Reorders detail sections and enables case-study framing (e.g. icon tool badges). */
  detailLayout?: "default" | "case-study";
  /** Shown under tags on the detail page for case-study layout entries. */
  caseStudyLabel?: string;
  /** Optional normal-case line after the case-study label (e.g. program focus). */
  caseStudySubcaption?: string;
  /** Additional badges after tools (e.g. skills demonstrated). */
  skillsDemonstrated?: string[];
}

export const experienceEntries: Experience[] = [
  {
    slug: "butte-county-department-of-public-health",
    role: "Data Science Intern",
    organization: "Butte County Department of Public Health",
    location: "Butte County, California, USA",
    duration: "Jan 2026 – May 2026",
    detailLayout: "case-study",
    caseStudyLabel: "Public health analytics case study",
    caseStudySubcaption: "Cancer registry & spatial analytics",
    heroImage: "/images/experience/butte-county-hero.svg",
    seoDescription:
      "Colon cancer registry analytics for Butte County using California Cancer Registry data (2018–2022): 7,900+ cases, stage recoding, treatment delays, age patterns, and GIS choropleths with Census tracts.",
    summary:
      "California Cancer Registry analysis of 7,900+ colon cancer cases (2018–2022) to surface demographic, clinical, temporal, and geographic patterns for public health research and decision support—combining rigorous R workflows with GIS mapping across Butte County.",
    technologies: [
      "R",
      "dplyr",
      "ggplot2",
      "leaflet",
      "sf",
      "tigris",
      "Census tract data",
      "GIS mapping",
      "Statistical analysis",
    ],
    skillsDemonstrated: [
      "Epidemiological data analysis",
      "Healthcare analytics",
      "Cancer registry data processing",
      "Geographic information systems (GIS)",
      "Statistical programming in R",
      "Data visualization",
      "Public health research",
      "Spatial data analysis",
    ],
    tags: [
      "Public health analytics",
      "Cancer registry",
      "GIS",
      "Epidemiology",
      "Healthcare",
    ],
    metrics: [
      { label: "Cases analyzed", value: "7,900+ colon cancer cases" },
      { label: "Data source", value: "California Cancer Registry" },
      { label: "Study window", value: "2018–2022 public health datasets" },
      { label: "Spatial analysis", value: "GIS-based (Census tracts & boundaries)" },
      { label: "Research focus", value: "Epidemiological" },
      { label: "Domain", value: "Healthcare analytics" },
    ],
    timelineBullets: [
      "Analyzed 7,900+ colon cancer cases (CCR 2018–2022) with R.",
      "Stage recoding, treatment timing, age patterns, and Census tract choropleths.",
      "Linked registry data with geographic boundaries for spatial disparities work.",
    ],
    contentSections: [
      {
        title: "Cancer registry analysis",
        body: `During my internship at the **Butte County Department of Public Health**, I worked with **California Cancer Registry** data to better understand patterns in **colon cancer incidence, diagnosis, and treatment** across Butte County. The project focused on identifying **demographic, clinical, temporal, and geographic** trends that could support public health research and future decision-making.

Using **R** and public health datasets spanning **2018–2022**, I analyzed more than **7,900** colon cancer cases to examine how cancer burden varied across **age groups, diagnosis stages, and geographic regions**. The analysis involved **cleaning and preparing registry data**, performing **exploratory data analysis**, and creating **visualizations** to communicate findings effectively.

A key component of the project involved **recoding detailed cancer stages** into clinically meaningful categories, allowing for comparisons between **early-stage and late-stage** diagnoses. I also analyzed the **time between diagnosis and treatment initiation** to identify potential delays in care and examined **age-specific patterns**, including the proportion of cases diagnosed **before age 45** and comparisons between patients aged **45–49** and those **50 and older**.

To explore **geographic variation**, I integrated **Census tract data** and **geographic boundary files** to create **choropleth maps** visualizing cancer incidence across Butte County. By linking registry data with **U.S. Census geographic information**, I was able to identify **spatial patterns** that may warrant further public health investigation.

This project strengthened my experience in **healthcare analytics**, **epidemiological research**, **GIS mapping**, **statistical programming**, and **data visualization** while demonstrating how data science can be applied to address meaningful public health challenges.`,
      },
      {
        title: "Key contributions",
        body: `- Analyzed **7,900+** colon cancer cases using California Cancer Registry data from **2018–2022**.
- Filtered and processed cases using **ICD-10 codes C180–C189**.
- Conducted exploratory analysis of **patient demographics**, **tumor characteristics**, **age groups**, and **stage at diagnosis**.
- Recoded detailed cancer stages into **Early Stage (I–II)** and **Late Stage (III–IV)** categories for comparative analysis.
- Evaluated **time from diagnosis to treatment initiation** to identify potential treatment delays.
- Investigated **age-specific cancer burden**, including early-onset colon cancer cases.
- Developed **publication-quality visualizations** and trend analyses.
- Integrated **Census tract** and **geographic boundary** data to create spatial visualizations of cancer incidence.
- Built **choropleth maps** to examine geographic variation across Butte County.
- Generated insights into **late-stage diagnosis patterns**, **treatment timelines**, and **regional disparities**.`,
      },
    ],
  },
  {
    slug: "first-year-experience-csu-chico",
    role: "Research & Engagement Coordinator",
    organization: "First Year Experience, CSU Chico",
    location: "Chico, California, USA",
    duration: "Jan 2026 – May 2026",
    detailLayout: "case-study",
    caseStudyLabel: "Higher education analytics case study",
    caseStudySubcaption: "FYE · Town Hall & Sense of Place (Public Sphere Pedagogy)",
    heroImage: "/images/experience/first-year-experience-hero.svg",
    seoDescription:
      "First Year Experience at CSU Chico: mixed-methods survey analytics across 10 datasets (Town Hall & Sense of Place / PSP), Fall 2022–Fall 2025—Python, Pandas, Jupyter, thematic analysis, and stakeholder reporting.",
    summary:
      "Research & Engagement Coordinator for FYE, analyzing 10 survey datasets from Town Hall and Sense of Place / Public Sphere Pedagogy (Fall 2022–Fall 2025). Combined Likert-scale responses with open-ended reflections in Python to evaluate engagement, surface themes, and deliver visualizations and reporting that supported program improvement and stakeholder decisions.",
    technologies: [
      "Python",
      "Jupyter Notebook",
      "Pandas",
      "NumPy",
      "Data visualization",
      "Survey analytics",
      "Thematic analysis",
      "Canva",
    ],
    skillsDemonstrated: [
      "Exploratory data analysis",
      "Survey data analytics",
      "Educational research",
      "Qualitative analysis",
      "Data storytelling",
      "Stakeholder reporting",
      "Program evaluation",
      "Visualization & communication",
    ],
    tags: [
      "Higher education",
      "First Year Experience",
      "Survey analytics",
      "Mixed methods",
      "Student success",
      "Python",
    ],
    metrics: [
      { label: "Datasets analyzed", value: "10 engagement surveys (7 Town Hall · 3 Sense of Place)" },
      { label: "Survey window", value: "Fall 2022 through Fall 2025" },
      { label: "Methods", value: "Quantitative & qualitative (mixed methods)" },
      { label: "Focus", value: "Student engagement & learning outcomes" },
      { label: "Deliverables", value: "Program evaluation, reporting & recommendations" },
      { label: "Outcomes", value: "Data-driven insights for FYE planning" },
    ],
    timelineBullets: [
      "10 FYE survey datasets (Town Hall & Sense of Place / PSP), Fall 2022–Fall 2025.",
      "Python & Jupyter: cleaning, EDA, thematic analysis, and visualization.",
      "Mixed-method reporting for stakeholders and program improvement.",
    ],
    contentSections: [
      {
        title: "Overview",
        body: `The first year of college can be both **exciting** and **overwhelming**. Students are adjusting to a new environment, discovering **campus resources**, and navigating **academic expectations**—often for the first time. At **California State University, Chico**, the **First Year Experience (FYE)** program supports that transition with opportunities to engage resources, join meaningful discussions, strengthen **communication skills**, and build **belonging**.

As **Research & Engagement Coordinator**, I analyzed student **feedback and engagement data** from FYE initiatives, including **Town Hall** and **Sense of Place** (now known as **Public Sphere Pedagogy**). These programs invite students into **discussions**, **public speaking**, **presentations**, and related experiences aimed at **student success**.

My work centered on **survey data collected after events** to understand student experiences and highlight **program improvement** opportunities. Datasets blended **quantitative and qualitative** information—**Likert-scale** responses alongside **open-ended reflections**.

Across the project, I analyzed **10 survey datasets** (**7** Town Hall and **3** Sense of Place) spanning **Fall 2022** through **Fall 2025**. Using **Python**, **Pandas**, and **Jupyter Notebook**, I led **data cleaning**, **exploratory analysis**, **thematic analysis**, and **visualization** to surface patterns in **engagement** and **learning outcomes**.

A rewarding dimension was working with **mixed-method survey data** for the first time. Combining approaches helped me identify **recurring themes**, assess **program effectiveness**, and build **visualizations** that communicated insights to **stakeholders** and informed **future program planning**.

The role deepened my skills in **educational research**, **survey analytics**, **data storytelling**, and **stakeholder communication**—showing how data can strengthen **student experiences** and **institutional programs**.`,
      },
    ],
  },
  {
    slug: "california-department-of-public-health",
    role: "Data Scientist Intern",
    organization: "California Department of Public Health",
    location: "California, USA",
    duration: "Sep 2025 – Jan 2026",
    detailLayout: "case-study",
    caseStudyLabel: "State public health programs case study",
    caseStudySubcaption: "CLPPB · Lead poisoning prevention · Compliance & automation",
    heroImage: "/images/experience/california-dph-hero.svg",
    seoDescription:
      "CDPH Fall 2025 internship with the Childhood Lead Poisoning Prevention Branch (CLPPB): compliance database modernization, SAS-to-Python pipelines, Power Automate, ArcGIS Pro, and data validation at scale.",
    summary:
      "Data Scientist Intern with CDPH’s Childhood Lead Poisoning Prevention Branch (CLPPB), modernizing enforcement and compliance data—from thousands of historical forms through validated Python pipelines, workflow automation, and GIS—so programs that protect children’s health can rely on cleaner, faster analytics.",
    technologies: [
      "Python",
      "ArcGIS Pro",
      "Microsoft Power Automate",
      "Data validation",
      "Workflow automation",
      "Public health analytics",
      "Data quality assurance",
    ],
    skillsDemonstrated: [
      "Data engineering",
      "Workflow automation",
      "Public health analytics",
      "GIS & spatial analysis",
      "Data cleaning & validation",
      "Process modernization",
      "Cross-functional collaboration",
    ],
    tags: [
      "Public health",
      "CLPPB",
      "Lead poisoning prevention",
      "Automation",
      "GIS",
      "Python",
    ],
    metrics: [
      { label: "Compliance scale", value: "Thousands of compliance forms (history to ~2016)" },
      { label: "Modernization", value: "Legacy SAS workflows translated to Python" },
      { label: "Data quality", value: "Cleaning, validation & QA across enforcement databases" },
      { label: "GIS", value: "ArcGIS Pro for spatial analysis and visualization" },
      { label: "Workflows", value: "Microsoft Power Automate for repetitive tasks" },
      { label: "Program focus", value: "Childhood Lead Poisoning Prevention Branch (CLPPB)" },
    ],
    timelineBullets: [
      "CLPPB internship: enforcement & compliance database modernization.",
      "SAS → Python pipelines plus automated cleaning and validation.",
      "Power Automate and ArcGIS Pro for monitoring and spatial public health work.",
    ],
    contentSections: [
      {
        title: "Overview",
        body: `I completed the **Fall 2025 Internship Program** with the **California Department of Public Health (CDPH)** as a **Data Scientist Intern** in the **Childhood Lead Poisoning Prevention Branch (CLPPB)**. The role showed how public health data, analytics, and technology can support programs that protect **children’s health** and improve **community outcomes**.

A primary focus was supporting modernization of **Enforcement & Compliance** databases by processing and validating data from **thousands of compliance forms** dating to roughly **2016**. Historical records demanded careful **cleaning**, **validation**, and **quality assurance** so datasets stayed consistent and reliable.

I helped **translate legacy SAS workflows into Python**, improving **maintainability**, **reproducibility**, and long-term sustainability. I built **automated data cleaning and validation pipelines** that reduced manual work and standardized processing.

I also used **Microsoft Power Automate** to streamline repetitive workflows and support **compliance monitoring**, and **ArcGIS Pro** for **spatial analysis and visualization**—strengthening the link between public health analytics and **geospatial** insight.

Working with **cross-functional teams** on **data quality**, **automation**, and **decision-ready outputs**, I deepened skills in **Python**, **workflow automation**, **data engineering**, **GIS**, and **public health analytics**, with work tied to programs that directly affect **community well-being**.`,
      },
    ],
  },
];

export function getExperienceBySlug(slug: string): Experience | undefined {
  return experienceEntries.find((e) => e.slug === slug);
}

export function getAdjacentExperience(slug: string): {
  prev?: Experience;
  next?: Experience;
} {
  const idx = experienceEntries.findIndex((e) => e.slug === slug);
  if (idx === -1) return {};
  return {
    prev: idx > 0 ? experienceEntries[idx - 1] : undefined,
    next: idx < experienceEntries.length - 1 ? experienceEntries[idx + 1] : undefined,
  };
}
