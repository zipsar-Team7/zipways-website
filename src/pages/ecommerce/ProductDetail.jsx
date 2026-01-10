import { useParams, useNavigate } from 'react-router-dom';
import { getProductById, formatCurrency, getRecommendedProducts } from '../../data/products';
import { useCart } from '../../context/CartContext';
import Button from '../../components/common/Button';
import ProductCard from '../../components/ecommerce/ProductCard';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = getProductById(id);
  const recommendedProducts = product ? getRecommendedProducts(id, 3) : [];

  if (!product) {
    return (
      <div className="container section text-center">
        <h2>Product not found</h2>
        <Button variant="primary" onClick={() => navigate('/shop')}>Back to Shop</Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product-detail-page fade-in">
      <div className="container section">
        <Button variant="ghost" onClick={() => navigate('/shop')} className="mb-4">
          ← Back to Shop
        </Button>
        
        <div className="product-layout">
          {/* Image Section */}
          <div className="product-gallery">
            <div className="main-image">
              <img 
                src={`https://placehold.co/600x400/00C194/FFFFFF?text=${product.name.split(' ').join('+')}`} 
                alt={product.name} 
              />
            </div>
          </div>

          {/* Info Section */}
          <div className="product-info-column">
            <div className="product-header">
              <span className="category-badge">{product.category}</span>
              <h1>{product.name}</h1>
              <p className="price">{formatCurrency(product.price)}</p>
            </div>

            <div className="product-description-section">
              <h3>Description</h3>
              <p>{product.description}</p>
            </div>

            <div className="product-features-section">
              <h3>What's Included</h3>
              <ul className="feature-list-detailed">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="product-meta">
              <div className="meta-item">
                <span className="meta-label">Delivery:</span>
                <span className="meta-value">{product.deliveryTime} (Email)</span>
              </div>
            </div>

            <div className="purchase-actions">
              <Button variant="primary" size="large" fullWidth onClick={handleAddToCart}>
                Add to Cart
              </Button>
              <p className="guarantee-text">
                ✓ Secure Payment • Instant Delivery • 24/7 Support
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Recommendations Section */}
      {recommendedProducts.length > 0 && (
        <div className="recommendations-section">
          <div className="container">
            <h2 className="recommendations-title">You May Also Like</h2>
            <div className="recommendations-grid">
              {recommendedProducts.map((recommendedProduct) => (
                <ProductCard key={recommendedProduct.id} product={recommendedProduct} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
