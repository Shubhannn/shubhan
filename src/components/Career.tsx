import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Research Data Analyst Intern</h4>
                <h5>Glaucoma Epidemiology</h5>
              </div>
              <h3 className="career-duration">11/2025 - Present</h3>
            </div>
            <p>
              Ramaiah University of Applied Sciences, Bengaluru (Remote). 
              Contributed to multi-author epidemiological study integrating glaucoma data from 30+ 
              South Asian studies (100k+ rows); led systematic screening for meta-analysis inclusion.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Public Relations Intern</h4>
                <h5>St Joseph's University, Bengaluru</h5>
              </div>
              <h3 className="career-duration">08/2024 - 04/2025</h3>
            </div>
            <p>
              Coordinated logistics and stakeholder communication for six flagship university events, 
              including international institutional visits and high-profile commemorative lectures.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Marketing Intern</h4>
                <h5>OPPO Mobile Telecommunications</h5>
              </div>
              <h3 className="career-duration">05/2024 - 07/2024</h3>
            </div>
            <p>
              Managed on-ground distribution-channel marketing for OPPO's promotional campaigns,
              coordinating logistics, scheduling, and customer engagement.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Contingent Lead / Captain</h4>
                <h5>DataMaze National Fest</h5>
              </div>
              <h3 className="career-duration">2023–2025</h3>
            </div>
            <p>
              Captained university contingents to 2 Overall Championships and 1 Overall Runners-up 
              at national-level fests; led outreach for Statistics and Data Science competitions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
