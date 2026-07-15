import { useState, useCallback } from "react";
import "./styles/Work.css";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "State-wise Disparities in Child Health",
    category: "Epidemiological Analysis (NFHS-4 to NFHS-5)",
    date: "03/2026–Present",
    tools: "Python, ANOVA, β-convergence, K-means, PCA, OLS Regression",
    description: [
      "Applied paired t-tests, ANOVA, and β-convergence regression: found strong convergence in vaccination (R² = 0.63) and institutional births (R² = 0.74)", 
      "None in anaemia (P = 0.458) despite a national rise from 48.7% to 51.4%.",
      "Built an OLS model explaining 86.2% of inter-state variance in stunting", 
      "Used K-means clustering and PCA to construct a composite health-burden index (Spearman ρ = 0.83–0.98 across 4 weighting schemes)", 
      "Flagging a persistent high-burden belt in Bihar, Jharkhand, UP, MP, Chhattisgarh, and Odisha.",
    ],
  },
  {
    title: "NykaaNudge",
    category: "Chrome Extension for Automated Sentiment Analysis",
    date: "03/2026–05/2026",
    tools: "Python, FastAPI, React, TF-IDF, Logistic Regression, Plotly",
    description: [
      "Built a Chrome extension and Python ML pipeline for automated review scraping, aspect-based sentiment scoring, and sentiment classification.",
      "Achieved over 90% extraction success and 70 - 72% model accuracy, with results visualized in an interactive Plotly dashboard.",
    ],
  },
  {
    title: "Real AI Guardrails",
    category: "LLM Reliability & Hallucination Detection",
    date: "01/2026–02/2026",
    tools: "Python, FastAPI, FAISS, Azure, Docker",
    description: [
      "Co-developed an LLM reliability application for hallucination detection and context-degradation prevention in multi-turn AI conversations.",
      "Designed hallucination detection logic using FAISS-based vector retrieval to verify outputs against grounded context; built and deployed the FastAPI service layer.",
    ],
  },
  {
    title: "Shubhi's Casino",
    category: "Synthetic-Money Gambling Simulator",
    date: "10/2025–12/2025",
    tools: "Python, Flask, OOP Architecture, Probability Modeling",
    description: [
      "Built a risk-free gambling simulator (Rock-Paper-Scissors, Coin Flip, Dice Even/Odd) modeling probability and loss dynamics with synthetic currency.",
      "Designed an OOP architecture with each game implemented as a class behind a Flask controller with timestamped logging.",
    ],
    link: "https://rock-paper-scissors-zeta-gray.vercel.app",
  },
  {
    title: "Mini Mansion Pods",
    category: "Data Hackathon Winner - Housing Solution",
    tools: "Data Analysis, Python, Visualization",
    description: [
      "Solo-won by analyzing a raw dataset (30+ columns, 500+ rows) on student housing satisfaction; identified privacy and utility quality as top satisfaction drivers.",
      "Designed a data-driven pod-based micro-housing solution.",
    ],
    link: "https://minimansionpods.vercel.app",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
               <div className="carousel-slide" key={index}>
                 <div className="carousel-content">
                   <div className="carousel-info">
                     <div className="carousel-number">
                       <h3>0{index + 1}</h3>
                     </div>
                     <div className="carousel-details">
                       <h4>{project.title}</h4>
                       <p className="carousel-category">
                         {project.category}
                       </p>
                       {project.date && (
                         <p className="carousel-date">{project.date}</p>
                       )}
                       <ul className="carousel-description">
                         {project.description.map((line, idx) => (
                           <li key={idx}>{line}</li>
                         ))}
                       </ul>
                       <div className="carousel-tools">
                         <span className="tools-label">Tech Stack</span>
                         <p>{project.tools}</p>
                       </div>
                       {project.link && (
                         <a
                           className="project-link"
                           href={project.link}
                           target="_blank"
                           rel="noreferrer"
                         >
                           View Project
                         </a>
                       )}
                     </div>
                   </div>
                 </div>
               </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;

