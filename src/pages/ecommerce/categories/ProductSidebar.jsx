import React from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../../../components/common/Button";

const ProductSidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const categories = [
    { name: "Assessments", link: "/products/assessments" },
    { name: "Bootcamps", link: "/products/bootcamps" },
    { name: "Programs", link: "/products/programs" },
    { name: "Full Pathways", link: "/products/pathways" },
  ];

  return (
    <aside className="product-sidebar">
      {/* Category Navigation */}
      <div className="sidebar-widget bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-8">
        <h3 className="text-xl font-bold mb-6">All Services</h3>
        <ul className="sidebar-nav space-y-3">
          {categories.map((cat) => (
            <li key={cat.name}>
              <Link
                to={cat.link}
                className={`sidebar-link ${
                  currentPath === cat.link ? "active" : ""
                }`}
              >
                {cat.name} <span>→</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Brochure / Help Widget */}
      <div className="sidebar-widget bg-black text-white p-8 rounded-3xl text-center">
        <div className="text-4xl mb-4">📄</div>
        <h3 className="text-white text-xl font-bold mb-4">Need Help?</h3>
        <p className="text-gray-400 text-sm mb-6">
          Not sure which program fits your profile? Download our complete
          brochure or talk to an expert.
        </p>
        <Button
          variant="premium-outline"
          fullWidth
          className="bg-white text-black border-white hover:bg-gray-200"
        >
          Contact Us
        </Button>
      </div>
    </aside>
  );
};

export default ProductSidebar;
