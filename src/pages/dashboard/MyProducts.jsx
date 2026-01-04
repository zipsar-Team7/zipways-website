import Button from '../../components/common/Button';
import Card from '../../components/common/Card';
import { products } from '../../data/products';

const MyProducts = () => {
  // Mock purchased products (first two products)
  const purchasedProducts = products.slice(0, 2);

  return (
    <div className="my-products-page fade-in">
      <h1 className="mb-6">My Products</h1>
      
      {purchasedProducts.length > 0 ? (
        <div className="purchased-products-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
          {purchasedProducts.map(product => (
            <Card key={product.id} className="purchased-product-card">
              <div className="product-header-mini mb-4" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{product.name}</span>
                <span className="status-badge" style={{ backgroundColor: '#DEF7EC', color: '#03543F', padding: '2px 8px', borderRadius: '12px', fontSize: '0.8rem' }}>Sent</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">{product.description.substring(0, 80)}...</p>
              
              <div className="download-section">
                <Button variant="outline" fullWidth size="small">
                  Download / Access
                </Button>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Link sent to registered email
                </p>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-xl">
          <h3>No products yet</h3>
          <p className="mb-6">Explore our shop to start your journey.</p>
          <Button variant="primary" onClick={() => window.location.href='/shop'}>Go to Shop</Button>
        </div>
      )}
    </div>
  );
};

export default MyProducts;
