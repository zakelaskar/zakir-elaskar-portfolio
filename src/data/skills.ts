/**
 * Categorized skills for About (full) and Home (featured cloud subset).
 * Edit categories here — UI renders from this file only.
 */

export type SkillCategoryIconId =
  | "code"
  | "brain"
  | "chart"
  | "palette"
  | "health"
  | "map"
  | "clipboard"
  | "gears"
  | "toolbox";

export interface SkillCategory {
  id: string;
  title: string;
  description?: string;
  iconId: SkillCategoryIconId;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "programming-data",
    title: "Programming & Data Analysis",
    description: "Languages, notebooks, and core analytics workflows.",
    iconId: "code",
    skills: [
      "Python",
      "R",
      "SQL",
      "Pandas",
      "NumPy",
      "Jupyter Notebook",
      "Data Cleaning",
      "Data Validation",
      "Data Wrangling",
      "Exploratory Data Analysis (EDA)",
    ],
  },
  {
    id: "ml-ai",
    title: "Machine Learning & AI",
    description: "Modeling, deep learning, and classical ML stacks.",
    iconId: "brain",
    skills: [
      "Deep Learning",
      "AutoML",
      "Feature Engineering",
      "Feature Selection (RFE)",
      "Dimensionality Reduction (PCA)",
      "Model Evaluation",
      "Neural Networks",
      "Convolutional Neural Networks (CNN)",
      "Recurrent Neural Networks (RNN)",
      "Scikit-Learn",
      "TensorFlow",
      "Keras",
    ],
  },
  {
    id: "stats-forecasting",
    title: "Statistical Modeling & Forecasting",
    description: "Regression, inference, and time-series methods.",
    iconId: "chart",
    skills: [
      "Regression Analysis",
      "OLS Regression",
      "Poisson Regression",
      "Time Series Analysis",
      "ARMA Modeling",
      "GLSAR Modeling",
      "Forecasting",
      "Statistical Inference",
      "Hypothesis Testing",
    ],
  },
  {
    id: "viz-storytelling",
    title: "Data Visualization & Storytelling",
    description: "Charts, dashboards, and narrative for stakeholders.",
    iconId: "palette",
    skills: [
      "Data Visualization",
      "Data Storytelling",
      "ggplot2",
      "Matplotlib",
      "Seaborn",
      "Dashboard Design",
      "Streamlit",
      "Reporting",
      "Presentation Development",
    ],
  },
  {
    id: "public-health",
    title: "Public Health & Healthcare Analytics",
    description: "Program analytics, registry work, and compliance contexts.",
    iconId: "health",
    skills: [
      "Public Health Analytics",
      "Epidemiological Data Analysis",
      "Cancer Registry Analytics",
      "Healthcare Analytics",
      "Compliance Data Analysis",
      "Public Health Research",
      "Childhood Lead Poisoning Prevention Analytics",
    ],
  },
  {
    id: "gis-spatial",
    title: "GIS & Spatial Analytics",
    description: "Maps, tracts, and spatial statistics.",
    iconId: "map",
    skills: [
      "ArcGIS Pro",
      "Census Tract Analysis",
      "Choropleth Mapping",
      "Spatial Data Analysis",
    ],
  },
  {
    id: "survey-qualitative",
    title: "Survey & Qualitative Research",
    description: "Mixed methods, evaluation, and stakeholder-ready synthesis.",
    iconId: "clipboard",
    skills: [
      "Survey Analytics",
      "Program Evaluation",
      "Educational Research",
      "Thematic Analysis",
      "Mixed-Methods Research",
      "Qualitative Data Analysis",
      "Stakeholder Reporting",
    ],
  },
  {
    id: "data-engineering",
    title: "Data Engineering & Automation",
    description: "Pipelines, QA, and workflow modernization.",
    iconId: "gears",
    skills: [
      "Workflow Automation",
      "Microsoft Power Automate",
      "Data Pipelines",
      "Process Modernization",
      "Data Quality Assurance",
      "Reproducible Workflows",
      "Database Modernization",
      "Apache Airflow",
    ],
  },
  {
    id: "tools-platforms",
    title: "Tools & Platforms",
    description: "Collaboration, version control, and productivity (deduped from specialized categories).",
    iconId: "toolbox",
    skills: [
      "Git",
      "GitHub",
      "Power BI",
      "Canva",
      "Microsoft PowerPoint",
      "Microsoft Excel",
      "Google Slides",
      "Zoom",
      "Microsoft Teams",
    ],
  },
];

/**
 * Compact cloud on Home — breadth across domains without repeating long category lists.
 */
export const featuredSkillsCloud: readonly string[] = [
  "Python",
  "R",
  "SQL",
  "Power BI",
  "Time Series Analysis",
  "ArcGIS Pro",
  "Streamlit",
  "Data Storytelling",
  "Apache Airflow",
  "Git",
  "Jupyter Notebook",
  "Hypothesis Testing",
  "Model Evaluation",
  "EDA",
  "Workflow Automation",
  "Stakeholder Reporting",
];

/** Accent chips on Home “Skills at a glance” — must match strings in `featuredSkillsCloud`. */
export const featuredSkillsCloudHighlights: readonly string[] = [
  "Python",
  "R",
  "SQL",
  "Apache Airflow",
  "EDA",
  "Streamlit",
  "Power BI",
];
