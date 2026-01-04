import { formatCurrency } from '../../data/products';
import { useCart } from '../../context/CartContext';
import Button from '../common/Button';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = () => {
    addToCart(product);
    // Optional: Show toast notification
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img 
          src={`https://placehold.co/400x300/00C194/FFFFFF?text=${product.name.split(' ').join('+')}`} 
          alt={product.name} 
        />
        <div className="product-category-tag">{product.category}</div>
      </div>
      
      <div className="product-details">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-price">{formatCurrency(product.price)}</p>
        <p className="product-description">{product.description}</p>
        
        <ul className="product-features">
          {product.features.slice(0, 2).map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        
        <div className="product-actions">
          <Button variant="primary" fullWidth onClick={handleAddToCart}>
            Add to Cart
          </Button>
          <Button variant="outline" fullWidth onClick={() => window.location.href=`/product/${product.id}`}>
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
