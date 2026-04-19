import React, { useState } from "react";
import "./LeadFormSection.css";
import Button from "./Button";

const LeadFormSection = ({ onSubmitSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    occupation: "",
    email: "",
    phone: "",
    schoolName: "",
    leavingYear: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call to save lead data
    // In actual implementation, data goes to backend or Formspree
    localStorage.setItem("npathways_unlocked", "true");
    if (onSubmitSuccess) {
      onSubmitSuccess();
    }
  };

  return (
    <section id="lead-form" className="lead-form-section">
      <div className="container">
        <div className="form-wrapper">
          <div className="form-content-left">
            <h2>Take the First Step Toward Your Global Future</h2>
            <p>
              Join thousands of students who have successfully navigated their
              study abroad journey with NPathways Global. Fill out this quick
              form to unlock full access to our platform, resources, and to book
              your free consultation.
            </p>
            <div className="form-benefits">
              <div className="benefit-item">
                <div className="benefit-check">✓</div>
                <span>Free personalized consultation</span>
              </div>
              <div className="benefit-item">
                <div className="benefit-check">✓</div>
                <span>Access to exclusive pathway programs</span>
              </div>
              <div className="benefit-item">
                <div className="benefit-check">✓</div>
                <span>Discover top university matches</span>
              </div>
            </div>
            {/* Visual element or image could go here */}
          </div>

          <div className="form-card">
            <h3>Start Your Journey</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="occupation">I am a *</label>
                <select
                  id="occupation"
                  name="occupation"
                  required
                  value={formData.occupation}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select your occupation
                  </option>
                  <option value="student">Student</option>
                  <option value="parent">Parent</option>
                  <option value="working_professional">
                    Working Professional
                  </option>
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="+91 90000 00000"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="schoolName">
                  Current School / College Name *
                </label>
                <input
                  type="text"
                  id="schoolName"
                  name="schoolName"
                  required
                  placeholder="e.g. Delhi Public School"
                  value={formData.schoolName}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="leavingYear">
                  School Leaving / Graduation Year *
                </label>
                <input
                  type="number"
                  id="leavingYear"
                  name="leavingYear"
                  required
                  placeholder="e.g. 2025"
                  min="2000"
                  max="2035"
                  value={formData.leavingYear}
                  onChange={handleChange}
                />
              </div>

              <Button
                type="submit"
                variant="premium"
                style={{ width: "100%", marginTop: "1rem" }}
              >
                Submit
              </Button>
            </form>
            <p className="privacy-note">
              By submitting this form, you agree to our Terms of Use and Privacy
              Policy. We will never share your personal information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadFormSection;
