import { useState } from 'react';
import { products } from '../../data/products';
import ProductCard from '../../components/ecommerce/ProductCard';
import Button from '../../components/common/Button';
import './Shop.css';

const Shop = () => {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(product => {
    const matchesCategory = filter === 'all' || product.category === filter;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="shop-page fade-in">
      {/* Shop Header */}
      <section className="section bg-gray shop-header">
        <div className="container text-center">
          <h1>Product <span className="text-primary">Shop</span></h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Digital tools and kits designed to accelerate your study abroad process.
          </p>
        </div>
      </section>

      {/* Shop Content */}
      <section className="section">
        <div className="container">
          {/* Controls */}
          <div className="shop-controls">
            <div className="search-bar">
              <input 
                type="text" 
                placeholder="Search products..." 
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <span className="search-icon">🔍</span>
            </div>
            
            <div className="category-filters">
              <button 
                className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                onClick={() => setFilter('all')}
              >
                All
              </button>
              <button 
                className={`filter-btn ${filter === 'Digital Products' ? 'active' : ''}`}
                onClick={() => setFilter('Digital Products')}
              >
                Digital Products
              </button>
              <button 
                className={`filter-btn ${filter === 'Services' ? 'active' : ''}`}
                onClick={() => setFilter('Services')}
              >
                Services
              </button>
            </div>
          </div>

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="product-grid">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="no-results text-center py-12">
              <h3>No products found</h3>
              <p>Try adjusting your search or filter settings.</p>
              <Button variant="outline" onClick={() => {setFilter('all'); setSearchQuery('');}}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Shop;
