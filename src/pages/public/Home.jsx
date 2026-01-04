import { Link } from 'react-router-dom';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import { consultancyServices, supportServices } from '../../data/services';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content fade-in">
            <h1 className="hero-title">
              Study Abroad with <span className="text-primary">Clarity & Confidence</span>
            </h1>
            <p className="hero-description">
              From career discovery to visa success — NPathways Global guides students and families at every step of their journey.
            </p>
            <div className="hero-actions">
              <Button variant="primary" size="large" onClick={() => window.location.href='/shop'}>
                Free Fitment Test
              </Button>
              <Button variant="outline" size="large" onClick={() => window.location.href='/services'}>
                Explore Services
              </Button>
            </div>
            <div className="hero-trust">
              <span>Trusted by students from 15+ countries</span>
            </div>
          </div>
          <div className="hero-image slide-up">
            {/* Placeholder for hero image */}
            <div className="hero-image-placeholder">
              <img src="https://placehold.co/600x600/00C194/FFFFFF?text=Student+Success" alt="Student Success" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-primary text-white">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Students Placed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">98%</span>
              <span className="stat-label">Visa Success Rate</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">University Partners</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Countries Covered</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section bg-gray">
        <div className="container">
          <div className="section-header text-center mb-8">
            <h2 className="section-title">Comprehensive Support</h2>
            <p className="section-subtitle">Everything you need for your study abroad journey</p>
          </div>

          <div className="services-grid">
            {/* Main Consultancy Services */}
            {consultancyServices.map((service) => (
              <Card key={service.id} hoverable className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.name}</h3>
                <p className="service-description">{service.shortDescription}</p>
                <Link to={service.link} className="service-link">Learn More →</Link>
              </Card>
            ))}

            {/* Support Services */}
            {supportServices.slice(0, 3).map((service) => (
              <Card key={service.id} hoverable className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.name}</h3>
                <p className="service-description">{service.description.substring(0, 80)}...</p>
                <Link to={service.link} className="service-link">Learn More →</Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section">
        <div className="container">
          <div className="about-preview">
            <div className="about-content">
              <h2 className="section-title">About NPathways Global</h2>
              <p className="mb-4">
                We differ from traditional consultancies. We don't just "process applications"; we build careers. 
                Our team acts as mentors, not just agents.
              </p>
              <ul className="feature-list mb-8">
                <li>✅ Clarity Compass™ Assessments</li>
                <li>✅ Failing Forward™ Framework</li>
                <li>✅ Elite Yet Accessible</li>
                <li>✅ Parent-Student Partnership</li>
              </ul>
              <Button variant="secondary" onClick={() => window.location.href='/about'}>
                Read Our Story
              </Button>
            </div>
            <div className="about-image">
               <img src="https://placehold.co/600x400/1E3A8A/FFFFFF?text=About+Us" alt="About NPathways" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gray">
        <div className="container text-center">
          <h2 className="mb-4">Ready to start your journey?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Book a consultation today or try our free fitment test to see where you stand.
          </p>
          <div className="cta-actions">
            <Button variant="primary" size="large" onClick={() => window.location.href='/contact'}>
              Book Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
