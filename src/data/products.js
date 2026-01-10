// Product catalog data for NPathways Global
export const products = [
  {
    id: 'global-career-fitment',
    name: 'Global Career Fitment Map',
    category: 'Digital Products',
    price: 2999,
    currency: 'INR',
    description: 'Proprietary assessment generating an automated PDF with personalized career recommendations for studying abroad.',
    features: [
      'Comprehensive career assessment',
      'Personalized study abroad recommendations',
      'Automated PDF report',
      'Suitable universities matching your profile'
    ],
    deliveryTime: 'Instant',
    image: '/images/career-fitment.jpg'
  },
  {
    id: 'psychometric-profiling',
    name: 'Psychometric Profiling',
    category: 'Digital Products',
    price: 1999,
    currency: 'INR',
    description: 'Digital strength-assessment tool to identify your core competencies and ideal career paths.',
    features: [
      'In-depth personality analysis',
      'Strength and weakness mapping',
      'Career pathway suggestions',
      'Downloadable detailed report'
    ],
    deliveryTime: 'Instant',
    image: '/images/psychometric.jpg'
  },
  {
    id: 'sop-masterclass-kit',
    name: 'SOP Masterclass Kit',
    category: 'Digital Products',
    price: 3499,
    currency: 'INR',
    description: 'Downloadable templates and video guides to craft compelling Statements of Purpose.',
    features: [
      'Professional SOP templates',
      'Step-by-step video tutorials',
      'Examples from successful applications',
      'Writing tips and best practices'
    ],
    deliveryTime: 'Instant',
    image: '/images/sop-kit.jpg'
  },
  {
    id: 'visa-dossier-kit',
    name: 'Visa Dossier Kit',
    category: 'Digital Products',
    price: 2499,
    currency: 'INR',
    description: 'Mandatory checklist and template package for visa applications to multiple countries.',
    features: [
      'Country-specific checklists',
      'Document templates',
      'Visa interview preparation guide',
      'Common mistakes to avoid'
    ],
    deliveryTime: 'Instant',
    image: '/images/visa-kit.jpg'
  }
];

// Helper function to get product by ID
export const getProductById = (id) => {
  return products.find(product => product.id === id);
};

// Helper function to format currency
export const formatCurrency = (amount, currency = 'INR') => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: currency,
  }).format(amount);
};

// Helper function to get recommended products
export const getRecommendedProducts = (currentProductId, count = 3) => {
  const otherProducts = products.filter(product => product.id !== currentProductId);
  // Shuffle and return the requested count
  return otherProducts.sort(() => Math.random() - 0.5).slice(0, count);
};

