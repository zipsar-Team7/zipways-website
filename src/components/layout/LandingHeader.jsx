import React from "react";
import "./Header.css";

const LandingHeader = () => {
  const scrollToForm = (e) => {
    e.preventDefault();
    const formSection = document.getElementById("lead-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header" style={{ position: "fixed", backgroundColor: "#fff", borderBottom: "1px solid #edf2f7", padding: "15px 0", right: 0, left: 0, top: 0, zIndex: 1000, transition: "none" }}>
      <div className="container" style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          {/* Logo */}
          <div className="logo" style={{ cursor: "pointer", margin: 0 }}>
            <span className="logo-text" style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#000" }}>NPathways</span>
            <span className="logo-subtitle" style={{ fontSize: "0.8rem", color: "#666" }}>Global</span>
          </div>

          {/* Actions */}
          <div className="header-actions" style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <button 
              onClick={scrollToForm}
              style={{
                backgroundColor: "#000",
                color: "#fff",
                padding: "10px 24px",
                borderRadius: "30px",
                fontWeight: "600",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#333")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#000")}
            >
              Book a Consultation
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default LandingHeader;
