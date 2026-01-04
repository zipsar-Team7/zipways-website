import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* About Section */}
          <div className="footer-section">
            <h4 className="footer-heading">NPathways Global</h4>
            <p className="footer-text">
              Empowering Global Ambitions. We guide students at every stage of their study abroad journey.
            </p>
            <p className="footer-legal">
              NPathways Global is a brand of <strong>Skillinum Falcon LLP</strong>.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4 className="footer-heading">Our Services</h4>
            <ul className="footer-links">
              <li><Link to="/services">Global Education Consulting</Link></li>
              <li><Link to="/services">Career Guidance</Link></li>
              <li><Link to="/services">Visa Assistance</Link></li>
              <li><Link to="/shop">Digital Products</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="footer-section">
            <h4 className="footer-heading">Legal</h4>
            <ul className="footer-links">
              <li><Link to="/terms">Terms & Conditions</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/refund">Refund Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h4 className="footer-heading">Get in Touch</h4>
            <ul className="footer-contact">
              <li>📧 info@npathways.global</li>
              <li>📞 +91 XXX XXX XXXX</li>
              <li>📍 Location Details</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} NPathways Global. All rights reserved. Operated by Skillinum Falcon LLP.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
