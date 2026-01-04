import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import './About.css';

const About = () => {
  const team = [
    { name: "Principal Consultant", role: "Overseas Education Expert", image: "https://placehold.co/150x150/00C194/FFFFFF?text=PC" },
    { name: "Senior Counselor", role: "Visa Specialist", image: "https://placehold.co/150x150/1E3A8A/FFFFFF?text=SC" },
    { name: "Student Success Lead", role: "Post-Arrival Support", image: "https://placehold.co/150x150/FCD34D/333333?text=SSL" }
  ];

  return (
    <div className="about-page fade-in">
      {/* Hero */}
      <section className="section bg-gray about-hero">
        <div className="container text-center">
          <h1 className="mb-4">Empowering <span className="text-primary">Global Ambitions</span></h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            We are more than just education consultants. We are career architects helping students build their future across borders.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-content">
              <h2>Our Mission</h2>
              <p>
                To provide transparent, ethical, and personalized guidance to students aspiring for global education, ensuring they not only get admitted but thrive in their new environment.
              </p>
              <div className="methodology-box mt-4">
                <h3>Our Methodology</h3>
                <ul className="feature-list">
                  <li><strong>Clarity Compass™:</strong> Scientific psychometric assessments to find the right career fit.</li>
                  <li><strong>Failing Forward™:</strong> Building resilience and growth mindset in students.</li>
                  <li><strong>Kaizen Culture:</strong> Continuous improvement in our processes and support.</li>
                </ul>
              </div>
            </div>
            <div className="mission-image">
              <img src="https://placehold.co/600x400/00C194/FFFFFF?text=Our+Mission" alt="Mission" className="rounded-xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section bg-gray">
        <div className="container">
          <h2 className="text-center mb-12">Meet Our Team</h2>
          <div className="team-grid">
            {team.map((member, index) => (
              <Card key={index} className="team-card text-center">
                <img src={member.image} alt={member.name} className="team-image" />
                <h3>{member.name}</h3>
                <p className="text-primary font-medium">{member.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary text-white text-center">
        <div className="container">
          <h2 className="text-white mb-4">Join the Success Story</h2>
          <p className="max-w-2xl mx-auto mb-8 text-white opacity-90">
            With over 98% visa success rate and 500+ successful placements, your global career starts here.
          </p>
          <Button variant="secondary" size="large" onClick={() => window.location.href='/contact'}>
            Talk to an Expert
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
