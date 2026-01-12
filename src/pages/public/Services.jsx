import { Link } from 'react-router-dom';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import { consultancyServices, supportServices } from '../../data/services';
// We also need products for the preview section, let's fix the import
import { products as digitalProducts } from '../../data/products';
import './Services.css';

const Services = () => {
  return (
    <div className="services-page fade-in">
      {/* Hero */}
      <section className="section bg-gray services-hero">
        <div className="container text-center">
          <h1>Our <span className="text-primary">Services</span></h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Comprehensive support for your global education journey, from initial counseling to post-arrival assistance.
          </p>
        </div>
      </section>

      {/* Consultancy Services - Journey Timeline */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center mb-12">
            <h2 className="section-title">Your Journey With Us</h2>
            <p className="section-subtitle">Follow the path to your global education success</p>
          </div>
          
          <div className="journey-timeline">
            {consultancyServices.map((service, index) => (
              <div key={service.id} className={`journey-step ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="step-number">
                  <span>Step {index + 1}</span>
                </div>
                
                <div className="step-content">
                  <div className="step-icon">{service.icon}</div>
                  <h3 className="step-title">{service.name}</h3>
                  <p className="step-description">{service.description}</p>
                  
                  <div className="features-list">
                    <h4>What's Included:</h4>
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="feature-item">
                        <span className="checkmark">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="primary" onClick={() => window.location.href='/contact'}>
                    Book Consultation
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="section bg-gray">
        <div className="container">
          <h2 className="text-center mb-12">Student Success Services</h2>
          <div className="support-grid">
            {supportServices.map((service) => (
              <Card key={service.id} className="support-card">
                <div className="support-icon">{service.icon}</div>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Products Preview */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center mb-12">
            <h2 className="section-title">Digital Products</h2>
            <p className="section-subtitle">Automated tools and kits to speed up your process</p>
          </div>
          
          <div className="products-preview-grid">
            {digitalProducts.slice(0, 3).map((product) => (
              <Card key={product.id} hoverable className="product-preview-card">
                <div className="product-image-container">
                   <img src={`https://placehold.co/400x300/00C194/FFFFFF?text=${product.name.split(' ').join('+')}`} alt={product.name} />
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <Button variant="outline" fullWidth onClick={() => window.location.href='/shop'}>
                    View in Shop
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/shop">
              <Button variant="secondary">View All Digital Products</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
