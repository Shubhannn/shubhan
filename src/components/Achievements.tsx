import "./styles/Achievements.css";

const Achievements = () => {
  return (
    <div className="achievements-section">
      <div className="achievements-container">
        <h2>
          Key <span>Achievements</span>
        </h2>
        <div className="achievements-grid">
          <div className="achievement-card">
            <h3>🏆 National Hackathon Winner</h3>
            <p className="achievement-title">Mini Mansion Ideathon 2026</p>
            <p className="achievement-desc">
              Solo-won by analyzing housing satisfaction data (500+ rows, 30+ columns). Identified privacy and utility quality as top satisfaction drivers and designed a data-driven, pod-based micro-housing solution.
            </p>
            <a href="https://minimansionpods.vercel.app" target="_blank" rel="noreferrer">
              View Project →
            </a>
          </div>

          <div className="achievement-card">
            <h3>Best Outgoing Undergraduate</h3>
            <p className="achievement-title">St Joseph's University, 2025</p>
            <p className="achievement-desc">
              Recognized as the top undergraduate across the institution for academic excellence and overall contribution.
            </p>
          </div>

          <div className="achievement-card">
            <h3>National-Level Data Science Competition Wins</h3>
            <p className="achievement-title">DataMaze 2023 & 2024</p>
            <p className="achievement-desc">
              Winner of Shark Tank (DataMaze 2023) and Adam's Pitch (DataMaze 2024) at CHRIST University's national Statistics & Data Science fest.
            </p>
          </div>

          <div className="achievement-card">
            <h3>MSME Founder</h3>
            <p className="achievement-title">SHUP - Advertising & Digital Marketing</p>
            <p className="achievement-desc">
              Founded and operate a registered advertising and digital marketing venture (UDYAM-GJ-09-0045700), managing financial planning and an educator-led skills vertical.
            </p>
            <a href="https://shup-skillup.base44.app" target="_blank" rel="noreferrer">
              Visit SHUP →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
