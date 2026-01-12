import React from "react";
import { getProductsByCategory, formatCurrency } from "../../../data/products";
import Button from "../../../components/common/Button";
import ProductSidebar from "./ProductSidebar";
import "./CategoryPages.css";

const AssessmentList = () => {
  const assessments = getProductsByCategory("Assessments");

  return (
    <div className="product-category-page fade-in">
      {/* Short Hero */}
      <section className="bg-gray-50 py-20 text-center border-b border-gray-100">
        <div className="container">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 block">
            Phase 1
          </span>
          <h1 className="text-5xl font-bold mb-4">Assessments</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Scientific profiling to identify your natural strengths.
          </p>
        </div>
      </section>

      <section className="service-single-layout">
        <div className="container">
          <div className="service-single-grid">
            {/* Sidebar */}
            <ProductSidebar />

            {/* Main Content */}
            <div className="category-content">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
                alt="Assessment Overview"
                className="category-hero-image"
              />

              <h2>Scientific Clarity First</h2>
              <p className="lead">
                Before you choose a degree, a country, or a university, you must
                choose yourself. Our psychological and psychometric assessments
                are designed to remove ambiguity from the decision-making
                process.
              </p>

              {/* Our Benefits */}
              <h3 className="text-2xl font-bold mb-6 mt-12">Our Benefits</h3>
              <ul className="benefits-list">
                <li>
                  <div className="icon">✓</div>
                  <div className="text">
                    <h5>Data-Backed Career Mapping</h5>
                    <p>
                      Match your cognitive strengths to over 500+ global career
                      paths with scientific precision.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">✓</div>
                  <div className="text">
                    <h5>Personalized Readiness Reports</h5>
                    <p>
                      Get detailed analysis of your strengths, weaknesses, and
                      ideal university profiles.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">✓</div>
                  <div className="text">
                    <h5>Expert Debrief Sessions</h5>
                    <p>
                      60-minute one-on-one consultation to interpret your
                      results and next steps.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">✓</div>
                  <div className="text">
                    <h5>Lifetime Access to Results</h5>
                    <p>
                      Your assessment data is saved and accessible anytime
                      through your portal.
                    </p>
                  </div>
                </li>
              </ul>

              {/* Process Steps */}
              <h3 className="text-2xl font-bold mb-6 mt-12">How It Works</h3>
              <div className="process-steps">
                <div className="process-step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>Complete the Assessment</h4>
                    <p>
                      Answer a series of psychometric and interest-based
                      questions. Takes approximately 45-60 minutes.
                    </p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Automated Analysis</h4>
                    <p>
                      Our AI-powered system cross-references your responses with
                      global university admission data.
                    </p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>Receive Your Report</h4>
                    <p>
                      Get a comprehensive PDF report outlining your career
                      readiness, strengths, and recommended paths.
                    </p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h4>Expert Consultation</h4>
                    <p>
                      Schedule a 1:1 session with our advisors to discuss your
                      results and create an action plan.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="mb-8 font-bold text-2xl mt-12">
                Available Assessments
              </h3>

              <div className="content-product-list">
                {assessments.map((item) => (
                  <div key={item.id} className="product-list-item">
                    <div>
                      <h3>{item.name}</h3>
                      <p className="text-gray-600 mb-4 text-sm">
                        {item.description}
                      </p>
                      <div className="product-meta-row">
                        <span>⏱️ {item.timeRequired}</span>
                        <span>👥 {item.whoItIsFor}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-between min-w-[140px]">
                      <span className="text-xl font-bold">
                        {formatCurrency(item.price)}
                      </span>
                      <Button
                        variant="premium"
                        size="medium"
                        onClick={() =>
                          (window.location.href = `/products/${item.id}`)
                        }
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              {/* FAQ */}
              <h3 className="text-2xl font-bold mb-6 mt-12">
                Frequently Asked Questions
              </h3>
              <div className="faq-section">
                <div className="faq-item">
                  <h5>How accurate are these assessments?</h5>
                  <p>
                    Our assessments are based on validated psychometric
                    frameworks used by Fortune 500 companies and top
                    universities worldwide. They have a 92% accuracy rate in
                    predicting career satisfaction.
                  </p>
                </div>
                <div className="faq-item">
                  <h5>Can I retake the assessment?</h5>
                  <p>
                    Yes, but we recommend waiting at least 6 months between
                    assessments to allow for personal growth and changing
                    interests.
                  </p>
                </div>
                <div className="faq-item">
                  <h5>What happens after I complete the assessment?</h5>
                  <p>
                    Within 48 hours, you'll receive a detailed PDF report and an
                    invitation to schedule your expert consultation session.
                  </p>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="contact-cta-box">
                <h3>Have Questions or Need More Information?</h3>
                <p>
                  Our admissions counselors are here to help you make the right
                  choice.
                </p>
                <Button
                  variant="premium-outline"
                  size="large"
                  onClick={() => (window.location.href = "/contact")}
                  className="bg-white text-black border-2 border-white hover:bg-gray-200"
                >
                  Contact Us Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AssessmentList;
