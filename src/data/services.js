// Services data for NPathways Global
export const consultancyServices = [
  {
    id: 'global-education-consulting',
    name: 'Global Education Consulting',
    icon: '🎓',
    shortDescription: 'University shortlisting and admission support',
    description: 'We guide students at every stage of their study abroad journey — from selecting the right universities to preparing standout SOPs and LORs, coaching for exams like IELTS, SAT, GRE, and TOEFL, helping secure scholarships, and managing visa applications.',
    features: [
      'University shortlisting based on profile',
      'Application strategy and planning',
      'SOP and LOR preparation',
      'Exam coaching (IELTS, SAT, GRE, TOEFL)',
      'Scholarship guidance',
      'Visa application support'
    ],
    pricing: 'Custom',
    link: '/contact'
  },
  {
    id: 'career-guidance',
    name: 'Career Guidance',
    icon: '💼',
    shortDescription: '1-on-1 personalized strategy sessions',
    description: 'Personalized career counseling to help you discover your strengths, clarify your goals, and create an actionable roadmap for studying abroad.',
    features: [
      'One-on-one counseling sessions',
      'Career pathway analysis',
      'Goal setting and planning',
      'Profile evaluation',
      'Course and university recommendations'
    ],
    pricing: 'Custom',
    link: '/contact'
  },
  {
    id: 'visa-assistance',
    name: 'Visa Assistance',
    icon: '✈️',
    shortDescription: 'End-to-end documentation and filing support',
    description: 'Complete visa support including documentation review, application filing, interview preparation, and follow-up assistance.',
    features: [
      'Visa eligibility assessment',
      'Document preparation and review',
      'Application filing assistance',
      'Interview preparation',
      'Follow-up and tracking'
    ],
    pricing: 'Custom',
    link: '/contact'
  }
];

export const supportServices = [
  {
    id: 'profile-building',
    name: 'Profile Building & Skill Readiness',
    icon: '📊',
    description: 'Admissions look beyond academics. We help students build strong portfolios, gain leadership and extracurricular experiences, and develop skills in communication, collaboration, and cultural adaptability.',
    link: '/services'
  },
  {
    id: 'departure-support',
    name: 'Departure & Arrival Support',
    icon: '🛫',
    description: 'Our support continues even after admission letters are received. We assist with pre-departure planning, forex and SIM solutions, accommodation arrangements, and on-ground guidance.',
    link: '/services'
  },
  {
    id: 'flagship-programs',
    name: 'Flagship Programs',
    icon: '🌟',
    description: 'Junior Business Program, Junior Tech Wiz Program, Failing Forward Framework, Clarity Compass Psychometric Assessments, Languages and Cultural Integrations.',
    link: '/services'
  }
];

// Get service by ID
export const getServiceById = (id) => {
  return consultancyServices.find(service => service.id === id) || 
         supportServices.find(service => service.id === id);
};
