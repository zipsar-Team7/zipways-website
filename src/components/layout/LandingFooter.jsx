import React from "react";
import "./LandingFooter.css";

const LandingFooter = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById("lead-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="landing-footer">
      <div className="container" style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 20px" }}>
        {/* Top Section */}
        <div className="landing-footer-top">
          <h4>Speak to one of our expert advisors</h4>
          <button className="footer-cta-button" onClick={scrollToForm}>
            Book a Consultation
          </button>
        </div>

        <hr className="footer-divider" />

        {/* Bottom Section */}
        <div className="landing-footer-bottom">
          <div className="footer-bottom-left">
            <button className="language-selector">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '8px' }}>
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              English (India)
            </button>
          </div>
          
          <div className="footer-bottom-right">
            <div className="footer-legal-links">
              <a href="#">Terms Of Use</a>
              <span className="separator">|</span>
              <a href="#">Cookie Preferences</a>
              <span className="separator">|</span>
              <a href="#">Privacy Policy</a>
            </div>
            <p className="footer-copyright">
              © {new Date().getFullYear()} NPathways Global. All rights reserved.<br/>
              <span className="disclaimer">NPathways Global is an independent admissions consultancy and is not sponsored by, affiliated, or associated with any university, college, or educational institution mentioned on this website. Operated by Skillinum Falcon LLP.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
