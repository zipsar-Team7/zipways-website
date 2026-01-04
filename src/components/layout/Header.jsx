import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, user } = useAuth();
  const { getCartCount, toggleCart } = useCart();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="logo">
            <span className="logo-text">NPathways</span>
            <span className="logo-subtitle">Global</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link to="/services" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
            <Link to="/shop" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Shop
            </Link>
            <Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </nav>

          {/* Actions */}
          <div className="header-actions">
            {/* Cart Icon */}
            <button className="cart-button" onClick={toggleCart}>
              <span className="cart-icon">🛒</span>
              {getCartCount() > 0 && (
                <span className="cart-badge">{getCartCount()}</span>
              )}
            </button>

            {/* User/Login */}
            {isAuthenticated ? (
              <Link to="/dashboard" className="user-button">
                <span className="user-icon">👤</span>
                <span className="user-name">{user?.name}</span>
              </Link>
            ) : (
              <Link to="/login" className="login-button">
                Login
              </Link>
            )}

            {/* Mobile Menu Toggle */}
            <button className="menu-toggle" onClick={toggleMenu}>
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
