export type ProjectCategory =
  | "Machine Learning"
  | "Deep Learning"
  | "Analytics"
  | "Research"
  | "Time Series"
  | "Visualization"
  | "Streamlit"
  | "Algorithms";

export interface ResourceLink {
  label: string;
  /** Omit or use with `disabled` for placeholder actions */
  href?: string;
  disabled?: boolean;
}

export interface Metric {
  label: string;
  value: string;
}

export interface GalleryItem {
  alt: string;
  src?: string;
  caption?: string;
}

export type ContentSectionRenderMode =
  | "markdown"
  | "metrics-grid"
  | "live-demo-cta"
  | "visual-walkthrough"
  | "technical-figure"
  | "impact-highlights"
  | "research-questions";

export interface TechnicalFigureBlock {
  galleryIndex: number;
  caption: string;
  /** Omitted or empty = no “Key insight” callout below the caption */
  keyInsight?: string;
  /** `diagram`: narrow schematics; `research`: wide case-study charts (lightbox, strong shadow) */
  variant?: "default" | "diagram" | "research";
}

export interface VisualWalkthroughStep {
  title: string;
  explanation: string;
  figureCaption: string;
  /** Index into `project.gallery` for the screenshot paired with this step */
  galleryIndex: number;
}

export interface VisualWalkthroughConfig {
  subsectionTitle: string;
  /** Optional intro below the subsection heading */
  leadIn?: string;
  steps: VisualWalkthroughStep[];
  /** Shown in the Key takeaways block below the walkthrough figures */
  keyTakeawaysSummary?: string;
}

export interface ResearchQuestionLink {
  label: string;
  /** Must match `anchorId` on a later `ContentSection` for in-page navigation */
  anchorId: string;
}

export interface ResearchQuestionItem {
  /** Display badge, e.g. "RQ1" */
  code: string;
  title: string;
  purpose: string;
  /** Bullets with jump links to analysis sections / figures */
  relatedAnalysis: ResearchQuestionLink[];
}

export interface ResearchQuestionsBlock {
  intro: string;
  questions: ResearchQuestionItem[];
}

export interface ContentSection {
  title: string;
  /** GitHub-flavored Markdown (optional when using `renderMode`) */
  body: string;
  /** Optional DOM id for in-page links (e.g. from research question cards) */
  anchorId?: string;
  /** Indices into `project.gallery` — rendered below this section */
  galleryIndices?: number[];
  /** Custom block instead of/in addition to Markdown */
  renderMode?: ContentSectionRenderMode;
  /** Used with `renderMode: "visual-walkthrough"` */
  walkthrough?: VisualWalkthroughConfig;
  /** Used with `renderMode: "technical-figure"` */
  technicalFigure?: TechnicalFigureBlock;
  /** Used with `renderMode: "research-questions"` */
  researchQuestions?: ResearchQuestionsBlock;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  seoDescription: string;
  categories: ProjectCategory[];
  tags: string[];
  technologies: string[];
  /** Primary period label, e.g. "2025 – 2026" */
  date: string;
  duration: string;
  featured: boolean;
  /** Short label for cards (e.g. home / gallery) */
  keyMetric: string;
  /** Optional hero image URL; gradient placeholder is used when omitted */
  heroImage?: string;
  metrics?: Metric[];
  impactHighlights?: string[];
  gallery: GalleryItem[];
  links: ResourceLink[];
  /** Long-form case study sections */
  contentSections?: ContentSection[];
  /** Optional trailing Markdown block */
  content?: string;
  /** When true, narrative sections render before the default impact/metrics/tools bands */
  leadWithContent?: boolean;
  /** Hide the chips row on the detail page (e.g. when a section lists the full stack) */
  hideToolsOnDetail?: boolean;
  /** Used with a "Live demo" section (`renderMode: live-demo-cta`) */
  liveDemoPromo?: {
    callout: string;
    buttonLabel: string;
    href: string;
  };
  /** When true, the bottom Gallery grid is omitted (figures only appear inline) */
  hideDetailGallery?: boolean;
  /** Larger hero and emphasis on the project detail page (flagship case study) */
  flagship?: boolean;
}

export const projects: Project[] = [
  {
    slug: "b-line-public-transit-optimization",
    title: "B-Line Public Transit: A Data-Driven Analysis for Service Optimization",
    summary:
      "Flagship master's analysis: 134,548 ridership records and 351,178 fare transactions across 23 B-Line routes—EDA, regression, ARMA-style time series, forecasting, and optimization-oriented recommendations for Butte Regional Transit.",
    seoDescription:
      "B-Line (Butte Regional Transit) optimization case study: Python analytics on 134K+ ridership records, time series forecasting (R² ≈ 0.89), route utilization, Poisson/OLS/GLSAR modeling, and evidence-based service planning.",
    categories: ["Analytics", "Research", "Time Series", "Visualization"],
    tags: ["Python", "Transit", "Forecasting", "Statsmodels", "Jupyter"],
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Statsmodels",
      "Matplotlib",
      "Seaborn",
      "Jupyter",
      "GitHub",
    ],
    date: "2025 – 2026",
    duration: "Master's culminating project · CSU Chico",
    featured: true,
    flagship: true,
    keyMetric: "134,548 records · R² ≈ 0.89",
    heroImage: "/images/projects/b-line-hero.jpg",
    leadWithContent: true,
    hideToolsOnDetail: true,
    hideDetailGallery: true,
    metrics: [
      { label: "Ridership records analyzed", value: "134,548" },
      { label: "Fare transactions processed", value: "351,178" },
      { label: "Transit routes evaluated", value: "23" },
      { label: "Model fit (R²)", value: "≈ 0.89" },
    ],
    impactHighlights: [
      "Master's Culminating Project",
      "134,548 Ridership Records Analyzed",
      "351,178 Fare Transactions Processed",
      "23 Transit Routes Evaluated",
      "R² ≈ 0.89",
      "Underperforming Routes Identified",
      "Time Series Forecasting",
      "Transit Service Optimization",
    ],
    gallery: [
      {
        alt: "Hourly rider demand line chart with morning and afternoon peaks for B-Line transit",
        src: "/images/projects/b-line-figure-1.png",
        caption: "Figure 1. Hourly rider demand.",
      },
      {
        alt: "Bar chart of mean daily ridership by route, sorted descending for B-Line",
        src: "/images/projects/b-line-figure-2.png",
        caption: "Figure 2. Mean daily ridership by route.",
      },
      {
        alt: "Daily ridership over time line chart showing weekly cycles for B-Line",
        src: "/images/projects/b-line-figure-3.png",
        caption: "Figure 3. Daily ridership over time.",
      },
      {
        alt: "Median boardings per trip by route bar chart for B-Line",
        src: "/images/projects/b-line-figure-4.png",
        caption: "Figure 4. Median boardings per trip by route.",
      },
      {
        alt: "Heatmap of median boardings per trip by route and day of week for B-Line",
        src: "/images/projects/b-line-figure-5.png",
        caption: "Figure 5. Route-by-day heatmap.",
      },
      {
        alt: "Bar chart of total B-Line boardings by day of week from Monday through Sunday",
        src: "/images/projects/b-line-ridership-day-of-week.png",
        caption: "Ridership by day of week.",
      },
      {
        alt: "Bar chart of B-Line boardings by season Winter Spring Summer Fall",
        src: "/images/projects/b-line-ridership-by-season.png",
        caption: "Seasonal ridership patterns.",
      },
      {
        alt: "Statsmodels Poisson GLM regression table for boardings per trip by day and hour",
        src: "/images/projects/b-line-poisson-regression-results.png",
        caption: "Poisson modeling (GLM output excerpt).",
      },
      {
        alt: "Table of route utilization ratios observed vs expected riders per trip for selected B-Line routes",
        src: "/images/projects/b-line-route-utilization-ratios.png",
        caption: "Route utilization ratios (O/E).",
      },
    ],
    links: [
      {
        label: "View Source Code",
        href: "https://github.com/zakelaskar/B-Line-Transit-Service-Optimization",
      },
    ],
    contentSections: [
      {
        title: "Executive summary",
        body: `Public transportation plays a vital role in connecting communities, supporting local economies, and providing accessible mobility. But have you ever wondered how a public transit system operates behind the scenes? How many people ride the bus each day? Which routes are the busiest, and which are underutilized? Does ridership change with seasons, weekdays, or special events?

These are the questions I set out to answer in this project.

The **B-Line (Butte Regional Transit)** system connects Chico with the cities of Oroville, Paradise, Gridley, Biggs, and Magalia throughout Butte County. My interest in this project was personal as well as academic. As a graduate student at **California State University, Chico**, I relied on B-Line buses almost every day. Over time, I noticed patterns that sparked my curiosity: some buses were consistently crowded, others often ran nearly empty, and delays seemed to occur on certain routes more frequently than others.

Rather than relying on assumptions, I decided to explore the data.

Using more than **two and a half years** of real-world transit data, I conducted a comprehensive analysis of ridership patterns, route utilization, demand fluctuations, and operational efficiency. The project combines **exploratory data analysis**, **statistical modeling**, and **time-series forecasting** to uncover actionable insights that could support data-driven transit planning and service optimization.

Throughout this project, I analyzed over **134,000 ridership records** and **351,000 fare transactions** across **23 routes**. The findings revealed seasonal trends, route-level performance differences, and opportunities to improve service allocation. Some routes were operating at as little as **38%** of their expected demand, while others consistently attracted high ridership.

Below, you can explore some of the key insights, visualizations, and findings from this analysis. The complete code notebooks, project paper, and supporting materials are available through the **GitHub repository** linked at the end of this page.`,
      },
      {
        title: "Research questions",
        body: "",
        renderMode: "research-questions",
        researchQuestions: {
          intro:
            "The primary objective of this project was to evaluate the B-Line public transit system through a data-driven lens and identify opportunities for service optimization. To guide the analysis, three research questions were developed.",
          questions: [
            {
              code: "RQ1",
              title:
                "How does rider demand fluctuate across different times of the day, days of the week, and seasons?",
              purpose:
                "Understand temporal demand patterns and identify when ridership is highest and lowest across the transit network.",
              relatedAnalysis: [
                { label: "Hourly Rider Demand", anchorId: "figure-1-hourly-rider-demand" },
                { label: "Ridership by Day of Week", anchorId: "b-line-ridership-day-of-week" },
                { label: "Seasonal Ridership Patterns", anchorId: "b-line-ridership-by-season" },
                { label: "Time Series Analysis", anchorId: "time-series-modeling" },
              ],
            },
            {
              code: "RQ2",
              title:
                "How does service utilization, measured as ridership per trip, vary across different times of day in B-Line's current service?",
              purpose:
                "Evaluate how effectively scheduled service is being utilized throughout the day and identify peak and off-peak operating periods.",
              relatedAnalysis: [
                { label: "OLS Regression", anchorId: "ols-regression-analysis" },
                { label: "Utilization by Hour", anchorId: "figure-1-hourly-rider-demand" },
                { label: "Utilization by Day of Week", anchorId: "b-line-ridership-day-of-week" },
              ],
            },
            {
              code: "RQ3",
              title:
                "Which routes and stops are underutilized, and how can this be identified using ridership data?",
              purpose:
                "Identify routes operating below expected demand levels and uncover opportunities for route optimization and resource reallocation.",
              relatedAnalysis: [
                { label: "Route Utilization Ratios", anchorId: "b-line-route-utilization-ratios" },
                { label: "Poisson Modeling", anchorId: "b-line-poisson-regression-results" },
                { label: "Route-Level Comparisons", anchorId: "figure-2-mean-daily-ridership-by-route" },
                {
                  label: "Underperforming Route Identification",
                  anchorId: "transit-optimization-insights",
                },
              ],
            },
          ],
        },
      },
      {
        title: "Key metrics at a glance",
        body: "",
        renderMode: "metrics-grid",
      },
      {
        title: "Impact highlights",
        body: "",
        renderMode: "impact-highlights",
      },
      {
        title: "Technology stack",
        body: `**Languages**

- Python

**Libraries**

- Pandas  
- NumPy  
- Statsmodels  
- Matplotlib  
- Seaborn  

**Methods**

- ARMA(1,1)  
- GLSAR  
- OLS regression  
- Poisson regression  
- Time series analysis  
- Forecasting  
- Transit analytics  

**Tools**

- Jupyter Notebook  
- GitHub`,
      },
      {
        title: "Problem statement",
        body: `Transit agencies must balance **fixed capacity** with **volatile demand**. In practice, planners often lack a single, reproducible view of how ridership varies by time of day, by route, and by week—making it difficult to distinguish structural underperformance from temporary noise.

For B-Line, the core problem was to translate raw operational data into **clear, defensible evidence** about where demand concentrates, where utilization lags, and where schedule or resource changes could improve efficiency without guesswork.`,
      },
      {
        title: "Why this project matters",
        body: `When service decisions are informed by data, agencies can improve reliability, reduce waste, and better serve riders who depend on transit for work, school, and health access. This project demonstrates how **end-to-end analytics**—from data cleaning through modeling to interpretation—can support **evidence-based** planning conversations.

Because the analysis is reproducible in notebooks, stakeholders can revisit assumptions, extend the forecasting horizon, and stress-test scenarios as new data arrives.`,
      },
      {
        title: "Data collection & sources",
        anchorId: "data-collection-sources",
        body: `The study draws on **B-Line** operational datasets spanning ridership and fare transactions over an extended multi-year window. Records were aligned at the route and trip level so that daily, hourly, and weekly patterns could be compared consistently.

Data preparation emphasized **validation**, **missingness review**, and **consistent definitions** for boardings, routes, and time buckets—critical steps before any modeling or visualization.`,
      },
      {
        title: "Exploratory data analysis",
        anchorId: "exploratory-data-analysis",
        body: `Exploratory analysis focused on demand shape: how ridership varies across hours, weekdays, and routes. These views inform whether models should emphasize seasonality, trend, or route-specific effects—and help stakeholders build intuition before interpreting coefficients or forecasts.`,
      },
      {
        title: "Ridership by Day of Week",
        anchorId: "b-line-ridership-day-of-week",
        body: "",
        renderMode: "technical-figure",
        technicalFigure: {
          galleryIndex: 5,
          caption:
            "Total boardings by day of week show a commuter-heavy network: demand peaks mid-week and falls sharply on weekends—especially Sunday.",
          keyInsight:
            "Weekday concentration versus weekend softness informs span, frequency, and coverage tradeoffs without over-cutting service where riders still depend on it.",
          variant: "research",
        },
      },
      {
        title: "Seasonal Ridership Patterns",
        anchorId: "b-line-ridership-by-season",
        body: "",
        renderMode: "technical-figure",
        technicalFigure: {
          galleryIndex: 6,
          caption:
            "Seasonal totals highlight higher demand in winter and spring and a dip through summer and fall—patterns often aligned with academic calendars and seasonal travel.",
          keyInsight:
            "Predictable seasonal lifts and troughs support budget cycles, maintenance windows, and proactive capacity planning.",
          variant: "research",
        },
      },
      {
        title: "Hourly Rider Demand",
        anchorId: "figure-1-hourly-rider-demand",
        body: "",
        renderMode: "technical-figure",
        technicalFigure: {
          galleryIndex: 0,
          caption:
            "Ridership follows a strong commuter-driven pattern, with peak demand occurring during morning and afternoon travel periods. The highest ridership occurs around 7 AM and again during afternoon commuting hours.",
          keyInsight:
            "B-Line demand is highly concentrated during commuting windows, suggesting opportunities for targeted service allocation during peak periods.",
          variant: "research",
        },
      },
      {
        title: "Time Series Analysis",
        anchorId: "time-series-modeling",
        body: `To capture temporal structure, the project applies **time series** techniques appropriate for count-like demand and serial dependence—including **ARMA(1,1)**-style structures and **GLSAR** considerations where residual autocorrelation matters. Models were evaluated for explanatory power and stability, with **R² ≈ 0.89** indicating strong fit for the selected specifications.

Forecasting outputs support **short-horizon planning** scenarios: where peaks are likely, when demand softens, and how weekly cycles repeat.`,
      },
      {
        title: "OLS Regression",
        anchorId: "ols-regression-analysis",
        body: `To understand how effectively B-Line services are being utilized, I developed a multivariable **Ordinary Least Squares (OLS)** regression model that analyzed ridership at the individual trip level while accounting for **hour of operation**, **day of the week**, and **route** differences.

The analysis revealed clear **commuter-driven demand patterns**. Trips operating during the early morning hours (**6–7 AM**) carried significantly more riders than average, while evening services consistently experienced lower utilization. Route-level results also showed substantial variation in ridership, with some routes attracting significantly higher passenger volumes and others operating well below the system average.

These findings highlight opportunities to better align **service frequency** and **resource allocation** with actual rider demand across the network.

### Key findings

- Morning trips (**6–7 AM**) experienced the highest ridership per trip.
- Early afternoon services showed a secondary increase in utilization.
- Evening services consistently carried fewer riders.
- Significant differences existed across routes even after controlling for time-of-day and day-of-week effects.
- Several routes operated substantially below the system average, indicating opportunities for service optimization.`,
      },
      {
        title: "Figure 3 – Daily ridership over time",
        anchorId: "figure-3-daily-ridership-over-time",
        body: "",
        renderMode: "technical-figure",
        technicalFigure: {
          galleryIndex: 2,
          caption:
            "Daily ridership exhibits recurring weekly cycles, with strong weekday demand and substantial reductions during weekends.",
          keyInsight:
            "The cyclical pattern suggests predictable rider behavior that can be leveraged for forecasting and service planning.",
          variant: "research",
        },
      },
      {
        title: "Route utilization analysis",
        anchorId: "route-utilization-analysis",
        body: `Route-level analytics compare **mean** and **median** utilization patterns to avoid being misled by a few extreme days. Sorting routes by typical demand highlights corridors that carry the network and routes that may warrant schedule consolidation, span changes, or further operational review.

The **heatmap** view adds a day-of-week lens: not every route follows the same weekly profile, which matters for targeted planning.

For **count-style utilization** outcomes, a **Poisson GLM** summarizes hour-of-day and day-of-week effects on boardings per trip; **route-level O/E ratios** complement the charts by naming corridors that sit farthest below expected demand (see the figures following this section).`,
      },
      {
        title: "Route-Level Comparisons",
        anchorId: "figure-2-mean-daily-ridership-by-route",
        body: "",
        renderMode: "technical-figure",
        technicalFigure: {
          galleryIndex: 1,
          caption:
            "Average ridership varies substantially across routes. While some routes consistently attract high rider volumes, others experience relatively low utilization.",
          keyInsight:
            "Route-level demand is highly uneven, indicating opportunities to optimize resource allocation and scheduling.",
          variant: "research",
        },
      },
      {
        title: "Figure 4 – Median boardings per trip by route",
        anchorId: "figure-4-median-boardings-per-trip-by-route",
        body: "",
        renderMode: "technical-figure",
        technicalFigure: {
          galleryIndex: 3,
          caption:
            "Median boardings per trip reveal differences in route utilization and highlight routes that consistently experience higher or lower passenger volumes.",
          keyInsight:
            "Several routes operate with significantly lower median ridership, suggesting opportunities for schedule adjustments or route redesign.",
          variant: "research",
        },
      },
      {
        title: "Figure 5 – Route-by-day heatmap",
        anchorId: "figure-5-route-by-day-heatmap",
        body: "",
        renderMode: "technical-figure",
        technicalFigure: {
          galleryIndex: 4,
          caption:
            "The heatmap illustrates how route utilization changes throughout the week, revealing route-specific demand patterns and operational variability.",
          keyInsight:
            "Not all routes follow the same weekly demand profile, emphasizing the need for route-specific planning strategies.",
          variant: "research",
        },
      },
      {
        title: "Poisson Modeling",
        anchorId: "b-line-poisson-regression-results",
        body: "",
        renderMode: "technical-figure",
        technicalFigure: {
          galleryIndex: 7,
          caption:
            "A Poisson-family GLM for boardings per trip with day-of-week and hour-of-day terms summarizes how utilization shifts across the week and across the service day (Statsmodels output excerpt).",
          keyInsight:
            "Strong global fit and structured hour/dow effects translate into actionable targets: where to protect peak capacity and where off-peak service is structurally lighter.",
          variant: "research",
        },
      },
      {
        title: "Route Utilization Ratios",
        anchorId: "b-line-route-utilization-ratios",
        body: "",
        renderMode: "technical-figure",
        technicalFigure: {
          galleryIndex: 8,
          caption:
            "Observed versus expected riders per trip and O/E utilization ratios for selected corridors—values materially below 1.0 indicate routes running well under expected demand.",
          keyInsight:
            "These ratios prioritize follow-up with operations: validate schedule design, coverage obligations, and rider-facing impacts before reallocating vehicles or span.",
          variant: "research",
        },
      },
      {
        title: "Underperforming Route Identification",
        anchorId: "transit-optimization-insights",
        body: `Taken together, the results point to a few practical themes:

- **Peak-focused capacity** matters because demand is concentrated in identifiable commuting windows.  
- **Route heterogeneity** is large: a one-size-fits-all schedule can over-serve some corridors while under-serving others.  
- **Weekly cycles** are stable enough to support forecasting and proactive adjustments (e.g., weekend span, headway changes).

Where observed utilization falls meaningfully below expected demand, the system may be carrying excess scheduled service relative to realized need—an optimization lever worth validating with operations staff and rider-facing constraints.`,
      },
      {
        title: "Recommendations",
        body: `1. **Prioritize peak-period reliability** on corridors with the strongest commuter peaks.  
2. **Review low-median routes** for potential schedule consolidation, interlining, or span changes—paired with equity and coverage checks.  
3. **Adopt route-day planning** using heatmap-style profiles rather than network-wide weekend/weekday assumptions.  
4. **Institutionalize refreshable reporting** (notebooks + version control) so models and charts update as new months of data arrive.  
5. **Pair statistical findings with operations reality**: maintenance, driver availability, and passenger accessibility requirements should gate any service change.`,
      },
      {
        title: "Key takeaways",
        body: `This case study shows how **large-scale transit data** can be turned into **actionable planning intelligence**: strong model fit (**R² ≈ 0.89**), clear route-level disparities, and interpretable visuals that support decision making.

If you are hiring for roles that blend **data science**, **forecasting**, **regression modeling**, and **operational analytics**, this project is representative of how I approach messy real-world datasets: disciplined methodology, careful communication, and recommendations grounded in evidence.`,
      },
      {
        title: "Resources",
        body: `The **GitHub repository** contains notebooks, supporting code, and project materials. Use the button below to open the repository in a new tab.`,
      },
    ],
  },
  {
    slug: "automl-pipeline-for-tabular-data",
    title: "AutoML Pipeline for Tabular Data",
    summary:
      "Team-built Streamlit AutoML pipeline that automates preprocessing, RFE/PCA feature work, multi-model training, and evaluation—CSV upload to compared baselines with minimal manual setup.",
    seoDescription:
      "Course team project: Python, scikit-learn, and Streamlit AutoML for tabular data—RFE, PCA, multi-model training, AUC ≈ 0.98, live demo, and GitHub source.",
    categories: ["Machine Learning", "Streamlit", "Analytics"],
    tags: ["AutoML", "Scikit-Learn", "Streamlit", "Education"],
    technologies: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Streamlit"],
    date: "2025",
    duration: "Data Science course project (team)",
    featured: true,
    keyMetric: "AUC ≈ 0.98",
    heroImage: "/images/projects/automl-hero.jpg",
    metrics: [
      { label: "AUC", value: "≈ 0.98" },
      { label: "Accuracy", value: "≈ 99%" },
      { label: "ML workflow", value: "Automated end-to-end" },
      { label: "Model comparison", value: "Multiple models" },
      { label: "Application", value: "Interactive Streamlit" },
      { label: "Feature optimization", value: "RFE & PCA" },
    ],
    gallery: [
      {
        alt: "AutoML overview tab with six-step pipeline workflow",
        src: "/images/projects/automl-gallery-1.png",
        caption:
          "Figure 1. AutoML overview showing the complete workflow from data preparation to model evaluation.",
      },
      {
        alt: "Streamlit Run Pipeline tab with CSV upload and pipeline configuration",
        src: "/images/projects/automl-gallery-3.png",
        caption:
          "Figure 2. Pipeline execution interface for uploading datasets and configuring model training options.",
      },
      {
        alt: "Make Predictions tab in the Streamlit AutoML application",
        src: "/images/projects/automl-gallery-2.png",
        caption:
          "Figure 3. Prediction interface for applying the trained model to new inputs.",
      },
    ],
    links: [
      { label: "View Source Code", href: "https://github.com/zakelaskar/Math485-Project" },
      { label: "Launch AutoML Dashboard", href: "https://automl-pipeline.streamlit.app/" },
      { label: "Project report", disabled: true },
    ],
    leadWithContent: true,
    hideToolsOnDetail: true,
    liveDemoPromo: {
      callout:
        "Try the live AutoML application to upload your own dataset, compare machine learning models, and explore automated preprocessing and feature engineering workflows.",
      buttonLabel: "Launch AutoML Dashboard",
      href: "https://automl-pipeline.streamlit.app/",
    },
    contentSections: [
      {
        title: "Executive summary",
        body: `Selecting the right preprocessing techniques and machine learning models is often one of the most time-consuming aspects of working with structured data. Questions such as which encoding method to use, whether scaling is necessary, or which feature selection technique will perform best can significantly impact model performance and require extensive experimentation.

To simplify this process, my teammates and I developed an **Automated Machine Learning (AutoML) Pipeline** designed specifically for tabular datasets.

The objective of the project was to streamline the machine learning workflow by automating many of the repetitive tasks involved in model development. Users can upload a structured dataset, and the system automatically performs data preprocessing steps such as missing value imputation, feature scaling, and categorical encoding.

The pipeline also supports advanced techniques including **Recursive Feature Elimination (RFE)** for feature selection and **Principal Component Analysis (PCA)** for dimensionality reduction. Multiple machine learning models, including Decision Trees, Support Vector Machines (SVM), Random Forests, and Neural Networks, are trained and evaluated automatically.

The platform compares different combinations of preprocessing techniques, feature engineering strategies, and model architectures to identify the most effective approach for a given dataset. Results, evaluation metrics, and model comparisons are exported to CSV files, while an interactive **Streamlit** dashboard provides users with visual insights into model performance and feature importance.

Through this project, we aimed to reduce the time and effort required to build effective machine learning models while making experimentation more accessible and reproducible. The pipeline allows users to focus more on interpreting results and solving business problems rather than repeatedly performing manual preprocessing tasks.`,
      },
      {
        title: "Impact highlights",
        body: "",
        renderMode: "metrics-grid",
      },
      {
        title: "Live demo",
        body: "",
        renderMode: "live-demo-cta",
      },
      {
        title: "Methodology",
        body: `### Data preprocessing

- Missing value imputation
- Feature scaling
- Categorical encoding

### Feature engineering

- Recursive Feature Elimination (RFE)
- Principal Component Analysis (PCA)

### Model training

- Decision Trees
- Random Forests
- Support Vector Machines
- Neural Networks

### Model evaluation

- Performance comparison
- Hyperparameter tuning
- Automated model selection`,
      },
      {
        title: "Visual walkthrough",
        body: "",
        renderMode: "visual-walkthrough",
        walkthrough: {
          subsectionTitle: "From Data Upload to Predictions",
          leadIn:
            "This section visually demonstrates the complete lifecycle of the AutoML application, from dataset upload to model deployment.",
          keyTakeawaysSummary:
            "By combining our skills and perspectives, we were able to create a comprehensive AutoML platform that simplifies the machine learning workflow while maintaining strong predictive performance and usability for end users.",
          steps: [
            {
              title: "Step 1 – Understand the Workflow",
              explanation:
                "Users can explore how the AutoML pipeline automates preprocessing, feature engineering, model selection, hyperparameter tuning, and evaluation.",
              figureCaption:
                "Figure 1. AutoML overview showing the complete workflow from data preparation to model evaluation.",
              galleryIndex: 0,
            },
            {
              title: "Step 2 – Upload and Train",
              explanation:
                "Users can upload a structured CSV dataset, configure feature engineering options, select machine learning models, and run the automated training pipeline.",
              figureCaption:
                "Figure 2. Pipeline execution interface for uploading datasets and configuring model training options.",
              galleryIndex: 1,
            },
            {
              title: "Step 3 – Generate Predictions",
              explanation:
                "After a model is trained, users can use the prediction interface to generate outputs on new data.",
              figureCaption:
                "Figure 3. Prediction interface for applying the trained model to new inputs.",
              galleryIndex: 2,
            },
          ],
        },
      },
      {
        title: "Technology stack",
        body: `**Languages**

- Python

**Libraries**

- Pandas
- NumPy
- Scikit-Learn

**Machine learning**

- Decision Tree
- Random Forest
- Support Vector Machine (SVM)
- Neural Network

**Feature engineering**

- Recursive Feature Elimination (RFE)
- Principal Component Analysis (PCA)

**Frameworks**

- Streamlit`,
      },
      {
        title: "Team & collaboration",
        body: `This project was developed collaboratively as part of a Data Science course project focused on building an automated machine learning solution for structured datasets.

Working as a team allowed us to combine expertise across data preprocessing, machine learning, feature engineering, model evaluation, and application development. Throughout the project, we collaborated on designing the pipeline architecture, evaluating different machine learning approaches, implementing automation workflows, and developing the interactive Streamlit application.

### Team members

- Zakir Sajid Elaskar
- Khushi Choudhary
- Snehitha Gorantla`,
      },
    ],
  },
  {
    slug: "depression-detection-system",
    title: "Depression Detection System",
    summary:
      "Published multimodal AI healthcare research: facial, speech, and text signals combined with CNN/RNN models for early depression screening—28K+ facial samples, peer-reviewed IJNRD paper, and an interactive Flask prototype.",
    seoDescription:
      "IJNRD-published depression detection system: multimodal CNN/RNN pipeline, OpenCV + TensorFlow, 28K+ facial expression samples, audio/text analysis, and open source on GitHub.",
    categories: ["Deep Learning", "Machine Learning", "Research"],
    tags: ["Healthcare AI", "Multimodal", "Computer Vision", "NLP", "Publication"],
    technologies: [
      "Python",
      "TensorFlow",
      "Keras",
      "OpenCV",
      "Haar Cascade",
      "CNN",
      "RNN",
      "Deep Learning",
      "Computer Vision",
      "Natural Language Processing",
      "Speech/Text Analysis",
    ],
    date: "2024 – 2025",
    duration: "Published research · multimodal AI prototype",
    featured: true,
    keyMetric: "28K+ · IJNRD",
    heroImage: "/images/projects/depression-hero.png",
    impactHighlights: [
      "Published research paper",
      "28K+ facial expression samples",
      "Multimodal AI system",
      "CNN + RNN architecture",
      "Real-time emotion recognition",
      "Video, audio, and text analysis",
    ],
    gallery: [
      {
        alt: "Block diagram of multimodal depression detection system architecture",
        src: "/images/projects/depression-figure-1.png",
        caption:
          "Figure 1. System architecture showing how video, audio, and textual inputs flow through recognition models to detect emotional patterns and support depression assessment.",
      },
      {
        alt: "Depression Detection System homepage with video, audio, and text interview modules",
        src: "/images/projects/depression-figure-2.png",
        caption: "Figure 2. Depression Detection System homepage.",
      },
      {
        alt: "Audio interview screen with prompt and start recording control",
        src: "/images/projects/depression-figure-3.png",
        caption:
          "Figure 3. Audio interview interface where users provide speech input for emotional and depression-related analysis.",
      },
      {
        alt: "Text interview results with Big Five trait chart and narrative analysis",
        src: "/images/projects/depression-figure-4.png",
        caption:
          "Figure 4. Textual interview interface showing psychological trait analysis and text-based emotional interpretation.",
      },
      {
        alt: "Video interview with live face detection and emotion probability readout",
        src: "/images/projects/depression-figure-5.png",
        caption:
          "Figure 5. Video interview interface using facial emotion recognition to analyze real-time visual cues.",
      },
      {
        alt: "Analytical dashboard with emotion bar chart and personality trait summaries",
        src: "/images/projects/depression-figure-6.png",
        caption:
          "Figure 6. Generated analytical report comparing detected emotional patterns and presenting visual summaries of the system output.",
      },
      {
        alt: "Six-step model pipeline from data acquisition to depression recognition",
        src: "/images/projects/depression-figure-7.png",
        caption:
          "Figure 7. Model workflow showing data acquisition, preprocessing, model building, training, prediction, and depression recognition.",
      },
    ],
    links: [
      { label: "Published research paper (PDF)", href: "https://www.ijnrd.org/papers/IJNRD2405665.pdf" },
      { label: "GitHub repository", href: "https://github.com/zakelaskar/depression-detection-system" },
    ],
    leadWithContent: true,
    hideToolsOnDetail: true,
    hideDetailGallery: true,
    contentSections: [
      {
        title: "Executive summary",
        body: `Depression is one of the most serious yet often overlooked mental health challenges affecting society today. According to global health estimates, **more than 280 million people worldwide** experience depression, impacting individuals across all age groups, backgrounds, and cultures.

One of the most challenging aspects of depression is that it is often difficult to identify. Many individuals experiencing depression may not openly display symptoms, making early detection and intervention difficult. Researchers continue to study the causes of depression, with factors such as genetics, environmental influences, and potential chemical imbalances in the brain all playing important roles.

This challenge motivated me to work on a **Depression Detection System** that leverages artificial intelligence to support early identification of depressive symptoms.

The goal of the project was to develop a **multimodal** system capable of analyzing **facial expressions**, **speech patterns**, and **textual inputs** to assess whether an individual may be experiencing signs of depression. By combining multiple sources of information, the system aims to provide a more comprehensive understanding than any single modality alone.

To achieve this, we utilized **deep learning** techniques, including **Convolutional Neural Networks (CNNs)** for image and facial expression analysis and **Recurrent Neural Networks (RNNs)** for processing sequential voice and text data. The system was designed to process real-time inputs and provide recommendations for seeking professional mental health support when potential indicators of depression were detected.

As part of this research, we processed **more than 28,000 facial expression samples** alongside audio and text-based information to build and evaluate the detection framework. The project demonstrates how machine learning and artificial intelligence can be applied to address meaningful healthcare challenges and support early intervention efforts.

The **source code** and **published research paper** can be accessed through the links in the **Resources** section at the end of this page.`,
      },
      {
        title: "Impact Highlights",
        body: "",
        renderMode: "impact-highlights",
      },
      {
        title: "Problem statement",
        body: `Screening tools must balance **sensitivity to subtle behavioral cues** with **practical deployment** in research and triage settings. Unimodal signals can be ambiguous: facial affect alone may not reflect internal state, while text or prosody may be sparse or context-dependent.

The engineering challenge is to build **stable representations** from heterogeneous inputs while controlling for noise, lighting, transcription error, and dataset bias—and to communicate **limitations** clearly so the system supports research and education rather than replacing clinical judgment.`,
      },
      {
        title: "Research motivation",
        body: `Multimodal fusion aligns with how clinicians gather cues across appearance, speech, and self-report—while remaining careful about **false positives** and **ethical deployment**.

This project explores whether a reproducible deep learning stack can **surface patterns** that warrant follow-up with a professional, especially in contexts where early signal detection could shorten time-to-care.`,
      },
      {
        title: "System architecture",
        body: `The architecture routes each modality through dedicated recognition pathways, aggregates emotion-related representations, and frames outputs as **decision support** rather than a standalone diagnosis.

Figure 1 summarizes the high-level flow from user interaction through multimodal analysis to assessment-oriented outputs.`,
        renderMode: "technical-figure",
        technicalFigure: {
          galleryIndex: 0,
          caption:
            "Figure 1. System architecture showing how video, audio, and textual inputs flow through recognition models to detect emotional patterns and support depression assessment.",
          keyInsight:
            "Multimodal branching allows each signal type to be processed with modality-appropriate models before fusion, reducing single-channel blind spots in screening workflows.",
          variant: "diagram",
        },
      },
      {
        title: "Depression Detection System homepage",
        body: `Users begin their journey through a centralized interface that provides access to **Video**, **Audio**, and **Text**-based assessment modules.`,
        renderMode: "technical-figure",
        technicalFigure: {
          galleryIndex: 1,
          caption: "Figure 2. Depression Detection System homepage.",
          keyInsight:
            "A single entry point improves discoverability and keeps evaluation protocols consistent across modalities.",
        },
      },
      {
        title: "Methodology",
        body: `The methodology combined **dataset curation**, **feature extraction**, and **deep model training** with a lightweight **Flask** web layer for interactive demos.

- **Vision:** OpenCV preprocessing, face localization, and CNN-style models for expression-related features.  
- **Audio:** Time-series features paired with RNN-capable sequence models for prosody and emotion patterns.  
- **Text:** NLP preprocessing with classifiers or sequence models suited to short self-report-style responses.  
- **Evaluation:** Held-out validation, qualitative review of failure cases, and explicit discussion of **generalization limits**.

All outputs were framed as **screening aids** aligned with peer-reviewed reporting in the IJNRD publication.`,
      },
      {
        title: "Multimodal analysis",
        body: `The system evaluates **three complementary channels**:

- **Video analysis** — facial landmarks and expression probabilities from live or recorded frames.  
- **Audio analysis** — spoken responses captured under timed prompts to standardize signal length.  
- **Textual analysis** — trait-oriented NLP summaries (e.g., Big Five–style dimensions) alongside lexical cues.

The following sections show representative interfaces for each modality.`,
      },
      {
        title: "Video analysis",
        body: `The video pathway emphasizes **stable face tracking**, **emotion probability readouts**, and a UI that keeps the participant oriented to what the model is measuring in real time.`,
        renderMode: "technical-figure",
        technicalFigure: {
          galleryIndex: 4,
          caption:
            "Figure 5. Video interview interface using facial emotion recognition to analyze real-time visual cues.",
          keyInsight:
            "Live overlays connect model outputs to the participant’s face, making the pipeline inspectable rather than a black box.",
        },
      },
      {
        title: "Audio analysis",
        body: `The audio pathway uses **prompted questions** and **timed recording windows** so samples are comparable across sessions.`,
        renderMode: "technical-figure",
        technicalFigure: {
          galleryIndex: 2,
          caption:
            "Figure 3. Audio interview interface where users provide speech input for emotional and depression-related analysis.",
          keyInsight:
            "Clear prompts and fixed recording windows improve consistency of speech segments fed to the emotion model.",
        },
      },
      {
        title: "Textual analysis",
        body: `The text pathway translates free-form responses into **structured trait summaries** and visualizations that support interpretation without over-claiming precision.`,
        renderMode: "technical-figure",
        technicalFigure: {
          galleryIndex: 3,
          caption:
            "Figure 4. Textual interview interface showing psychological trait analysis and text-based emotional interpretation.",
          keyInsight:
            "Pairing charts with narrative explanations helps reviewers connect quantitative scores to qualitative language patterns.",
        },
      },
      {
        title: "Model implementation",
        body: `Figure 7 documents the end-to-end ML lifecycle implemented in code: acquisition through preprocessing, model construction, training, inference, and depression-oriented recognition outputs.`,
        renderMode: "technical-figure",
        technicalFigure: {
          galleryIndex: 6,
          caption:
            "Figure 7. Model workflow showing data acquisition, preprocessing, model building, training, prediction, and depression recognition.",
          keyInsight:
            "Explicit pipeline stages make it easier to audit where errors may enter the system and where human review should intervene.",
          variant: "diagram",
        },
      },
      {
        title: "Results & interface",
        body: `The reporting layer aggregates emotion frequencies, temporal trends where applicable, and textual trait summaries into a **single review-oriented layout** suitable for research walkthroughs.`,
        renderMode: "technical-figure",
        technicalFigure: {
          galleryIndex: 5,
          caption:
            "Figure 6. Generated analytical report comparing detected emotional patterns and presenting visual summaries of the system output.",
          keyInsight:
            "Dashboard-style summaries help stakeholders compare modalities side-by-side when judging whether follow-up is warranted.",
        },
      },
      {
        title: "Research paper",
        body: `The full methodology, experimental framing, and discussion of limitations appear in the **IJNRD** peer-reviewed article.

- **[Read the published paper (PDF)](https://www.ijnrd.org/papers/IJNRD2405665.pdf)**`,
      },
      {
        title: "Technology stack",
        body: `**Languages & frameworks**

- Python  
- TensorFlow / Keras  
- Flask (interactive prototype)

**Computer vision & signal processing**

- OpenCV  
- Haar Cascade  

**Modeling**

- CNN  
- RNN  
- Deep learning pipelines for image, audio, and text

**NLP & speech/text**

- Natural language processing  
- Speech and text analysis for emotional and trait-oriented features`,
      },
      {
        title: "Key takeaways",
        body: `- Multimodal design **reduces single-modality ambiguity** while increasing engineering complexity—fusion must be justified, not assumed.  
- **28K+** facial samples supported robust vision-side training, but **deployment ethics** remain central: the system is a **research and triage aid**, not a replacement for clinicians.  
- **Published research** and **open source** artifacts together support reproducibility and recruiter-friendly verification of claims.  
- Use the **Published research paper (PDF)** and **GitHub repository** buttons at the end of this page for the paper and full code.`,
      },
    ],
  },
  {
    slug: "python-3-11-timsort-to-powersort",
    title: "Python 3.11: From TimSort to PowerSort",
    summary:
      "A technical exploration of algorithm design and performance analysis, examining the transition from TimSort to PowerSort in Python 3.11 through simulations, performance comparisons, and visual explanations.",
    seoDescription:
      "Case study: Python 3.11 TimSort vs PowerSort—worst-case behavior, merge strategies, benchmarks, and technical figures from an algorithms & performance engineering deep dive.",
    categories: ["Algorithms", "Research", "Analytics"],
    tags: ["Python 3.11", "TimSort", "PowerSort", "Algorithms"],
    technologies: ["Python", "CPython 3.11", "Algorithms", "Performance analysis", "Benchmarking"],
    date: "2024 – 2026",
    duration: "Independent study · technical presentation & research",
    featured: true,
    keyMetric: "CPython 3.11+",
    heroImage: "/images/projects/powersort-hero.jpg",
    impactHighlights: [
      "Python 3.11 Algorithm Analysis",
      "TimSort vs PowerSort Comparison",
      "Worst-Case Performance Evaluation",
      "Algorithm Visualization & Simulation",
      "Sorting Strategy Deep Dive",
      "Technical Presentation & Research",
    ],
    gallery: [
      {
        alt: "Slide comparing TimSort edge cases with PowerSort advantages and a performance chart",
        src: "/images/projects/powersort-figure-1.png",
        caption:
          "Figure 1. Why Python 3.11 adopted PowerSort—limitations in TimSort’s galloping mode, irregular patterns, and comparative performance behavior.",
      },
      {
        alt: "Dashboard comparing TimSort and PowerSort on common and worst-case datasets with charts",
        src: "/images/projects/powersort-figure-2.png",
        caption:
          "Figure 2. Empirical comparison of TimSort vs PowerSort on nearly sorted and highly disordered inputs.",
      },
    ],
    links: [
      {
        label: "View Source Code & Presentation",
        href: "https://github.com/zakelaskar/Math608-DataScienceProject",
      },
      {
        label: "View Presentation",
        href: "https://github.com/zakelaskar/Math608-DataScienceProject",
      },
    ],
    leadWithContent: true,
    hideDetailGallery: true,
    contentSections: [
      {
        title: "Executive summary",
        body: `Sorting algorithms are fundamental to computer science, powering everything from databases and search engines to machine learning workflows. While Python relied on **TimSort** for many years due to its efficiency and stability, **Python 3.11** introduced **PowerSort** as a new merge strategy designed to improve worst-case performance and provide more predictable behavior across diverse datasets.

In this project, I conducted an analytical deep dive into the transition from TimSort to PowerSort, exploring the design decisions that motivated the change. Through step-by-step simulations, algorithm visualizations, and performance comparisons, I examined how both algorithms identify runs, perform merges, and handle challenging input patterns.

The project focuses on understanding the strengths and limitations of each approach, particularly how PowerSort addresses edge cases that can impact TimSort’s efficiency. By breaking down concepts such as run detection, merge strategies, power calculations, and worst-case scenarios, the analysis provides an accessible explanation of a complex algorithmic improvement introduced in modern Python.

This work strengthened my understanding of algorithm design, computational efficiency, and the practical engineering decisions that influence the performance of widely used programming languages.`,
      },
      {
        title: "Impact Highlights",
        body: "",
        renderMode: "impact-highlights",
      },
      {
        title: "Project positioning",
        body: `> A technical exploration of algorithm design and performance analysis, examining the transition from TimSort to PowerSort in Python 3.11 through simulations, performance comparisons, and visual explanations.`,
      },
      {
        title: "Methodology",
        body: `## Background

Sorting is a primitive operation in nearly every layer of software: query planners, indexing structures, ETL pipelines, and in-memory analytics all depend on fast, predictable ordering. Small differences in asymptotic constants, memory traffic, or merge policy can surface as tail latency or unpredictable batch times—especially when data is **partially ordered**, highly repetitive, or adversarially structured.

## TimSort overview

**TimSort** is a **hybrid** algorithm that combines **merge sort** with **insertion sort** on small segments. It is **stable**, which preserves the relative order of equal keys—critical for user-facing sorts and many database semantics. TimSort excels on real-world data that contains natural **runs** (monotonic subsequences). Its main limitations show up in edge cases: galloping heuristics can mispredict structure, and some irregular patterns can trigger suboptimal merge costs compared to tighter theoretical guarantees.

## PowerSort overview

**PowerSort** is an **adaptive stable** sorting approach aimed at improving **merge strategy** decisions in CPython’s internal sort. The emphasis is on **tighter worst-case behavior**, reduced overhead in merge bookkeeping, and **more predictable** performance when run lengths and merge trees become irregular. The goal is not to discard TimSort’s strengths on typical inputs, but to harden the runtime against pathological merge patterns while keeping stability guarantees aligned with Python’s expectations.

## Experimental setup

The evaluation contrasts **nearly sorted** sequences (where adaptive algorithms shine) with **highly disordered** sequences designed to stress merge decisions. Timings were collected with careful warm-up and repeated trials, comparing **execution time** distributions rather than single-point anecdotes. The methodology emphasizes transparent dataset definitions and conservative interpretation: micro-benchmarks reflect laboratory conditions and should always be validated on your own workloads.`,
      },
      {
        title: "Why Python 3.11 switched to PowerSort",
        body: "",
        renderMode: "technical-figure",
        technicalFigure: {
          galleryIndex: 0,
          caption:
            "Python 3.11 adopted PowerSort to address several limitations observed in TimSort, particularly in worst-case scenarios and datasets with irregular patterns. The algorithm offers tighter performance guarantees, reduced memory overhead, and more predictable behavior across diverse input distributions.",
          keyInsight:
            "Although TimSort remains highly effective for most real-world datasets, PowerSort improves consistency and worst-case performance, aligning with Python’s ongoing focus on reliability and efficiency.",
        },
      },
      {
        title: "Results & findings",
        body: `## Results & findings

- **Common dataset performance:** On nearly sorted inputs, both algorithms behave efficiently; the comparison highlights where differences are negligible versus where constant factors matter.
- **Worst-case dataset performance:** Highly disordered patterns expose merge-strategy sensitivity; PowerSort’s design targets the instability and spikes that can appear in TimSort under challenging merges.
- **Algorithm reliability:** Stability is preserved while improving predictability of merge costs—an important combination for a general-purpose language runtime.
- **Computational tradeoffs:** There is no free lunch—adaptive sorting must balance bookkeeping overhead, cache behavior, and merge tree shape; the analysis documents where each approach wins.`,
      },
      {
        title: "Experimental results",
        body: "",
        renderMode: "technical-figure",
        technicalFigure: {
          galleryIndex: 1,
          caption:
            "Performance comparison between TimSort and PowerSort using both nearly sorted and highly disordered datasets. The analysis evaluates execution times across common and worst-case scenarios to better understand the strengths and limitations of each algorithm.",
          keyInsight:
            "The results demonstrate that PowerSort maintains competitive performance while offering advantages in challenging input patterns that can negatively impact TimSort’s behavior.",
        },
      },
    ],
  },
];

export const projectCategoryFilters: Array<ProjectCategory | "All"> = [
  "All",
  "Machine Learning",
  "Deep Learning",
  "Analytics",
  "Research",
  "Time Series",
  "Visualization",
  "Streamlit",
  "Algorithms",
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  prev?: Project;
  next?: Project;
} {
  const idx = projects.findIndex((p) => p.slug === slug);
  if (idx === -1) return {};
  return {
    prev: idx > 0 ? projects[idx - 1] : undefined,
    next: idx < projects.length - 1 ? projects[idx + 1] : undefined,
  };
}
