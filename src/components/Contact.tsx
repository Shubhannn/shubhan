import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/shubhan-cholin/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — shubhan-cholin
              </a>
            </p>
            <p>
              <a
                href="mailto:shubhancholin@gmail.com"
                data-cursor="disable"
              >
                Email — shubhancholin@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>
              M.Sc. Data Sciences and Analytics, Ramaiah University of Applied Sciences — Exp. 2027 (Current CGPA: 9.5/10)
            </p>
            <p>
              B.Sc. Statistics and Computer Science, St Joseph's University — 2022–2025 (CGPA: 7.5/10)
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/Shubhannn"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/shubhan-cholin/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Developed <br /> by <span>Shubhan Cholin</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
