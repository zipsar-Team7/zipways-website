import React from "react";
import { getProductsByCategory, formatCurrency } from "../../../data/products";
import Button from "../../../components/common/Button";
import ProductSidebar from "./ProductSidebar";
import "./CategoryPages.css";

const BootcampList = () => {
  const bootcamps = getProductsByCategory("Bootcamps");

  return (
    <div className="product-category-page fade-in">
      <section className="bg-gray-50 py-20 text-center border-b border-gray-100">
        <div className="container">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 block">
            Phase 2
          </span>
          <h1 className="text-5xl font-bold mb-4">Bootcamps</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Short-term intensives to build specific profile dimensions.
          </p>
        </div>
      </section>

      <section className="service-single-layout">
        <div className="container">
          <div className="service-single-grid">
            <ProductSidebar />

            <div className="category-content">
              <img
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop"
                alt="Bootcamp Overview"
                className="category-hero-image"
              />

              <h2>Accelerate Your Profile</h2>
              <p className="lead">
                Global universities look for more than just grades. Our
                bootcamps are intensive, 4-week accelerators designed to help
                you add a specific "spike" to your application profile—whether
                it's research, leadership, or community impact.
              </p>

              {/* Stats */}
              <div className="stats-row">
                <div className="stat-box">
                  <span className="number">4</span>
                  <span className="label">Weeks Duration</span>
                </div>
                <div className="stat-box">
                  <span className="number">95%</span>
                  <span className="label">Completion Rate</span>
                </div>
                <div className="stat-box">
                  <span className="number">100+</span>
                  <span className="label">Students Enrolled</span>
                </div>
              </div>

              {/* Our Benefits */}
              <h3 className="text-2xl font-bold mb-6 mt-12">What You Get</h3>
              <ul className="benefits-list">
                <li>
                  <div className="icon">✓</div>
                  <div className="text">
                    <h5>Portfolio-Ready Deliverables</h5>
                    <p>
                      Complete tangible projects you can showcase in your
                      university applications.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">✓</div>
                  <div className="text">
                    <h5>Industry Mentor Access</h5>
                    <p>
                      Work directly with professionals from your target field
                      for real-world insights.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">✓</div>
                  <div className="text">
                    <h5>Skill Certifications</h5>
                    <p>
                      Earn verifiable certificates upon completion that
                      strengthen your CV.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">✓</div>
                  <div className="text">
                    <h5>Peer Collaboration</h5>
                    <p>
                      Network with like-minded students pursuing similar
                      academic goals.
                    </p>
                  </div>
                </li>
              </ul>

              {/* Process */}
              <h3 className="text-2xl font-bold mb-6 mt-12">
                Bootcamp Structure
              </h3>
              <div className="process-steps">
                <div className="process-step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>Week 1: Foundation</h4>
                    <p>
                      Introduction to core concepts, skill assessment, and goal
                      setting.
                    </p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Week 2-3: Execution</h4>
                    <p>
                      Intensive project work, mentor feedback sessions, and
                      skill-building workshops.
                    </p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>Week 4: Presentation</h4>
                    <p>
                      Final project submission, peer review, and certification
                      ceremony.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="mb-8 font-bold text-2xl mt-12">
                Upcoming Bootcamps
              </h3>

              <div className="content-product-list">
                {bootcamps.map((item) => (
                  <div key={item.id} className="product-list-item">
                    <div>
                      <h3>{item.name}</h3>
                      <p className="text-gray-600 mb-4 text-sm">
                        {item.description}
                      </p>
                      <div className="product-meta-row">
                        <span>📅 {item.duration}</span>
                        <span>🎓 {item.mode}</span>
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
                        Enroll Now
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact CTA */}
              <div className="contact-cta-box">
                <h3>Ready to Fast-Track Your Profile?</h3>
                <p>
                  Join hundreds of students who have transformed their
                  applications in just 4 weeks.
                </p>
                <Button
                  variant="premium-outline"
                  size="large"
                  onClick={() => (window.location.href = "/contact")}
                  className="bg-white text-black border-2 border-white hover:bg-gray-200"
                >
                  Get Started Today
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BootcampList;
