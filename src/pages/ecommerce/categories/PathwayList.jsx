import React from "react";
import { getProductsByCategory, formatCurrency } from "../../../data/products";
import Button from "../../../components/common/Button";
import ProductSidebar from "./ProductSidebar";
import "./CategoryPages.css";

const PathwayList = () => {
  const pathways = getProductsByCategory("Pathways");

  return (
    <div className="product-category-page fade-in">
      <section className="bg-gray-50 py-20 text-center border-b border-gray-100">
        <div className="container">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 block">
            Phase 4
          </span>
          <h1 className="text-5xl font-bold mb-4">Full Pathways</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            End-to-end guidance from today until your first day on campus.
          </p>
        </div>
      </section>

      <section className="service-single-layout">
        <div className="container">
          <div className="service-single-grid">
            <ProductSidebar />

            <div className="category-content">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b955?q=80&w=2070&auto=format&fit=crop"
                alt="Pathways Overview"
                className="category-hero-image"
              />

              <h2>Complete Peace of Mind</h2>
              <p className="lead">
                Our flagship offering. We take complete ownership of your
                journey—from selecting the right subjects in school to writing
                your essays, filing your visa, and finding accommodation. We are
                with you every step of the way until you land on campus.
              </p>

              {/* Stats */}
              <div className="stats-row">
                <div className="stat-box">
                  <span className="number">98%</span>
                  <span className="label">Admission Success Rate</span>
                </div>
                <div className="stat-box">
                  <span className="number">$2M+</span>
                  <span className="label">Scholarships Secured</span>
                </div>
                <div className="stat-box">
                  <span className="number">24/7</span>
                  <span className="label">Support Access</span>
                </div>
              </div>

              {/* Our Benefits */}
              <h3 className="text-2xl font-bold mb-6 mt-12">What's Included</h3>
              <ul className="benefits-list">
                <li>
                  <div className="icon">✓</div>
                  <div className="text">
                    <h5>Unlimited Support Hours</h5>
                    <p>
                      No caps on sessions or hours. We work until you're
                      admitted and ready to depart.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">✓</div>
                  <div className="text">
                    <h5>All Assessments & Bootcamps Included</h5>
                    <p>
                      Full access to our entire product suite—assessments,
                      bootcamps, and programs—at no extra cost.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">✓</div>
                  <div className="text">
                    <h5>Application Management</h5>
                    <p>
                      From shortlisting universities to submitting final
                      applications, we handle every detail.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">✓</div>
                  <div className="text">
                    <h5>Visa & Pre-Departure Support</h5>
                    <p>
                      Assistance with visa documentation, travel arrangements,
                      and settling into your new country.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">✓</div>
                  <div className="text">
                    <h5>Dedicated Advisor Team</h5>
                    <p>
                      A team of 3+ advisors (academic, visa, and career)
                      supporting you simultaneously.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">✓</div>
                  <div className="text">
                    <h5>Scholarship Hunting</h5>
                    <p>
                      Personalized scholarship research and application
                      assistance to reduce your financial burden.
                    </p>
                  </div>
                </li>
              </ul>

              {/* Process */}
              <h3 className="text-2xl font-bold mb-6 mt-12">
                The Full Pathway Journey
              </h3>
              <div className="process-steps">
                <div className="process-step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>Discovery & Assessment (Month 1-2)</h4>
                    <p>
                      Complete all readiness assessments, discover your
                      strengths, and finalize your target universities.
                    </p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Profile Building (Month 3-8)</h4>
                    <p>
                      Enroll in relevant bootcamps and programs to strengthen
                      your resume and build standout projects.
                    </p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>Application Execution (Month 9-12)</h4>
                    <p>
                      Craft compelling essays, prepare for interviews, and
                      submit polished applications to your shortlisted
                      universities.
                    </p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h4>Admission & Visa (Month 13-15)</h4>
                    <p>
                      Receive offers, negotiate scholarships, and complete visa
                      formalities with expert guidance.
                    </p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="step-number">5</div>
                  <div className="step-content">
                    <h4>Pre-Departure & Onboarding (Month 16+)</h4>
                    <p>
                      Arrange accommodation, book travel, and prepare for your
                      first day with our pre-departure checklist.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="mb-8 font-bold text-2xl mt-12">
                Pathway Packages
              </h3>

              <div className="content-product-list">
                {pathways.map((item) => (
                  <div key={item.id} className="product-list-item">
                    <div>
                      <h3>{item.name}</h3>
                      <p className="text-gray-600 mb-4 text-sm">
                        {item.description}
                      </p>
                      <div className="product-meta-row">
                        <span>📅 {item.duration}</span>
                        <span>⭐ {item.advisorInvolvement}</span>
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
                  <h5>When should I start my Full Pathway?</h5>
                  <p>
                    Ideally 12-18 months before your target application
                    deadlines. This gives us enough time to build a competitive
                    profile.
                  </p>
                </div>
                <div className="faq-item">
                  <h5>What if I don't get admitted anywhere?</h5>
                  <p>
                    We offer a satisfaction guarantee. If you don't receive an
                    offer from at least one of your target universities, we
                    continue working with you for free until you do.
                  </p>
                </div>
                <div className="faq-item">
                  <h5>Can I pause my pathway if needed?</h5>
                  <p>
                    Yes, life happens. You can pause your pathway for up to 6
                    months without penalty.
                  </p>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="contact-cta-box">
                <h3>Ready to Begin Your Journey?</h3>
                <p>
                  Schedule a free consultation to discuss your goals and see if
                  our Full Pathway is right for you.
                </p>
                <Button
                  variant="premium-outline"
                  size="large"
                  onClick={() => (window.location.href = "/contact")}
                  className="bg-white text-black border-2 border-white hover:bg-gray-200"
                >
                  Book Your Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PathwayList;
