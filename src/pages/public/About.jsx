import React from 'react';
import './About.css';

const About = () => {
  const values = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Transparency First",
      description: "Clear, honest guidance at every step of your journey"
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: "Student-Centric",
      description: "Your success is our only metric"
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Excellence in Service",
      description: "World-class support from application to arrival"
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M12 2V22M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Continuous Innovation",
      description: "Evolving with technology and education trends"
    }
  ];

  const studyAbroadProcess = [
    {
      step: "01",
      title: "Career Discovery & Psychometric Assessment",
      description: "Complete our Clarity Compass™ assessment to identify your strengths, passions, and ideal career path aligned with global opportunities."
    },
    {
      step: "02",
      title: "Goal Setting & Country Selection",
      description: "Define your academic and career goals. We help you choose the right countries and universities that match your aspirations and budget."
    },
    {
      step: "03",
      title: "Profile Building & Skill Development",
      description: "Strengthen your profile with relevant certifications, projects, and extracurriculars through our flagship programs."
    },
    {
      step: "04",
      title: "University Shortlisting",
      description: "Get personalized university recommendations from our network of 50+ partner institutions across 15+ countries."
    },
    {
      step: "05",
      title: "Application Preparation",
      description: "Receive expert guidance on crafting compelling SOPs, LORs, and other application documents that stand out."
    },
    {
      step: "06",
      title: "Test Preparation (IELTS/TOEFL/GRE/GMAT)",
      description: "Access our test prep resources and courses to achieve competitive scores for your target universities."
    },
    {
      step: "07",
      title: "Application Submission & Tracking",
      description: "We handle your applications professionally and keep you updated at every stage with complete transparency."
    },
    {
      step: "08",
      title: "Visa Documentation & Filing",
      description: "End-to-end visa support with 98% success rate. We prepare all documentation and guide you through interviews."
    },
    {
      step: "09",
      title: "Pre-Departure Briefing",
      description: "Comprehensive orientation covering travel, accommodation, banking, SIM cards, and cultural adaptation."
    },
    {
      step: "10",
      title: "Post-Arrival Support",
      description: "Continued support after you land - from airport pickup coordination to settling in and academic success guidance."
    }
  ];

  const differentiators = [
    {
      title: "Clarity Compass™ Assessments",
      description: "Unique blend of psychometrics, EQ, and Ikigai mapping"
    },
    {
      title: "Failing Forward™ Framework",
      description: "Builds resilience & adaptability abroad"
    },
    {
      title: "Elite Yet Accessible",
      description: "Premium services tailored for Tier 2 & Tier 3 dreamers"
    },
    {
      title: "Parent-Student Partnership",
      description: "Transparent updates and family support kits"
    },
    {
      title: "Kaizen Culture",
      description: "Small daily improvements for lasting clarity"
    },
    {
      title: "End-to-End Ecosystem",
      description: "Discovery, Skills, Applications, Arrival, Parent Support"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      program: "MS in Computer Science",
      university: "University of Toronto",
      quote: "NPathways didn't just help me get admitted - they prepared me for life in Canada. The post-arrival support was invaluable!",
      avatar: "PS"
    },
    {
      name: "Rahul Verma",
      program: "MBA",
      university: "University of Melbourne",
      quote: "The Clarity Compass assessment helped me discover my true potential. I'm now thriving in Australia thanks to their guidance.",
      avatar: "RV"
    },
    {
      name: "Ananya Reddy",
      program: "Public Health",
      university: "King's College London",
      quote: "From visa filing to finding accommodation in London, NPathways was with me every step. Their 24/7 support is real!",
      avatar: "AR"
    }
  ];

  const stats = [
    { number: "500+", label: "Students Placed" },
    { number: "98%", label: "Visa Success Rate" },
    { number: "50+", label: "University Partners" },
    { number: "15+", label: "Countries Covered" },
    { number: "24/7", label: "Support Available" },
    { number: "95%", label: "Satisfaction Rate" }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content fade-in">
            <span className="hero-badge">
              <span className="hero-badge-icon"></span>
              Your Partner in Global Education
            </span>
            <h1 className="about-hero-title">
              Empowering <span className="accent">Global Ambitions</span>
            </h1>
            <p className="about-hero-description">
              We are more than education consultants. We are career architects, helping students build their future across borders with clarity, confidence, and continuous support.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="who-we-are-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Our Story</span>
            <h2>Who We Are</h2>
          </div>
          <div className="who-content">
            <p className="lead-text">
              <strong>NPathways Global</strong> is a premium study abroad consultancy operated by <strong>Skillinum Falcon LLP</strong>. We specialize in guiding ambitious students through every phase of their international education journey.
            </p>
            <p>
              Unlike traditional consultants who focus solely on admissions, we provide end-to-end support - from career discovery and university selection to visa success and post-arrival assistance. Our scientific approach combines psychometric assessments, personalized counseling, and continuous mentorship to ensure you don't just get admitted, but thrive in your new environment.
            </p>
          </div>
        </div>
      </section>

      {/* Vision, Mission & Values */}
      <section className="vision-mission-section">
        <div className="container">
          <div className="vision-mission-grid">
            <div className="vision-card glass-card">
              <div className="card-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Our Vision</h3>
              <p>Making global education accessible and achievable for every aspiring student, regardless of their background or' starting point.</p>
            </div>

            <div className="mission-card glass-card">
              <div className="card-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Our Mission</h3>
              <p>Transforming dreams into actionable study abroad plans through transparent, ethical guidance and continuous support at every step.</p>
            </div>
          </div>

          <div className="values-section">
            <h3 className="values-title">Our Core Values</h3>
            <div className="values-grid">
              {values.map((value, index) => (
                <div key={index} className="value-card glass-card fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="value-icon">{value.icon}</div>
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10-Step Study Abroad Process */}
      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Our Process</span>
            <h2>Your 10-Step Journey to Study Abroad Success</h2>
            <p className="section-description">A clear, proven roadmap from discovery to departure and beyond</p>
          </div>
          <div className="process-timeline">
            {studyAbroadProcess.map((item, index) => (
              <div key={index} className="process-item fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="process-step">{item.step}</div>
                <div className="process-content glass-card">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="impact-stats-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Our Impact</span>
            <h2>Success by Numbers</h2>
          </div>
          <div className="stats-grid-large">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card-large glass-card fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="stat-number-large">{stat.number}</div>
                <div className="stat-label-large">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="drives-us-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Our Approach</span>
            <h2>What Makes Us Different</h2>
          </div>
          <div className="methodology-grid">
            {differentiators.map((item, index) => (
              <div key={index} className="method-card glass-card fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Success Stories</span>
            <h2>Hear From Our Students</h2>
            <p className="section-description">Real stories from students who transformed their lives with NPathways</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card glass-card fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="testimonial-avatar">{testimonial.avatar}</div>
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <div className="testimonial-author">
                  <h4>{testimonial.name}</h4>
                  <p className="testimonial-program">{testimonial.program}</p>
                  <p className="testimonial-university">{testimonial.university}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Start Your Global Journey Today</h2>
          <p className="cta-description">
            Join hundreds of successful students who trusted NPathways to guide them toward their international education dreams
          </p>
          <button className="btn-primary">
            Book A Free Consultation
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
