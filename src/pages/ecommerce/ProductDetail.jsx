import { useParams, useNavigate } from "react-router-dom";
import { getProductById, formatCurrency } from "../../data/products";
import { useCart } from "../../context/CartContext";
import Button from "../../components/common/Button";
import ProductSidebar from "./categories/ProductSidebar";
import "./ProductDetail.css";
import "./categories/CategoryPages.css";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = getProductById(id);

  if (!product) {
    return (
      <div className="section text-center">
        <h2>Product not found</h2>
        <Button onClick={() => navigate("/products")}>Back to Products</Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product-detail-page fade-in">
      {/* Short Hero */}
      <section className="bg-gray-50 py-20 text-center border-b border-gray-100">
        <div className="container">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 block">
            {product.category}
          </span>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
        </div>
      </section>

      <section className="service-single-layout">
        <div className="container">
          <div className="service-single-grid">
            <ProductSidebar />

            <div className="product-main-content">
              {/* Product Header Card */}
              <div className="bg-white p-8 border border-gray-100 rounded-3xl mb-12 shadow-sm flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/3 aspect-square bg-gray-100 rounded-2xl overflow-hidden grayscale">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  <div className="text-3xl font-bold mb-6">
                    {formatCurrency(product.price)}
                  </div>
                  <div className="flex gap-4">
                    <Button
                      variant="premium"
                      size="large"
                      onClick={handleAddToCart}
                    >
                      {product.category === "Assessments"
                        ? "Take Assessment"
                        : "Register Interest"}
                    </Button>
                  </div>
                </div>
              </div>

              {/* Details Tabs/Sections */}
              <div className="space-y-12">
                <div>
                  <h3 className="text-xl font-bold mb-4 border-b pb-2">
                    Overview
                  </h3>
                  <div className="grid grid-2 gap-8 text-sm">
                    <div className="bg-gray-50 p-6 rounded-2xl">
                      <span className="block text-gray-400 mb-1 font-bold uppercase text-xs">
                        Who it's for
                      </span>
                      <p>{product.whoItIsFor}</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-2xl">
                      <span className="block text-gray-400 mb-1 font-bold uppercase text-xs">
                        Outcome
                      </span>
                      <p>{product.outcome || product.whatItUnlocks}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 border-b pb-2">
                    Key Features
                  </h3>
                  <ul className="space-y-4">
                    {product.features &&
                      product.features.map((feature, i) => (
                        <li key={i} className="flex gap-3 items-start">
                          <span className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center text-xs flex-shrink-0 mt-1">
                            ✓
                          </span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
