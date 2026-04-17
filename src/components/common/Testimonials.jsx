import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const reviews = [
    {
      name: "Rahul M.",
      location: "Stanford University, Class of '28",
      quote: "NPathways transformed my confusing application journey into a structured roadmap. Their psychometric mapping was spot on, and I'm thrilled to be at my dream school.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
    },
    {
      name: "Sneha P.",
      location: "Parent of Oxford Student",
      quote: "As a parent, the visa process and university shortlisting seemed daunting. The constant support and 98% success rate was not just numbers, they delivered on every promise.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop"
    },
    {
      name: "Aditya S.",
      location: "University of Toronto, Class of '27",
      quote: "From career discovery to arriving in Canada, the mentorship was unparalleled. They helped me find my Ikigai and matched it with the perfect university program.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop"
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header-premium" style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="badge">Success Stories</span>
          <h2>Don't Just Take Our Word For It</h2>
        </div>
        
        <div className="testimonials-grid">
          {reviews.map((review, i) => (
            <div key={i} className="testimonial-card">
              <div className="quote-icon">"</div>
              <p className="testimonial-quote">{review.quote}</p>
              <div className="testimonial-author">
                <img src={review.avatar} alt={review.name} className="author-avatar" />
                <div className="author-info">
                  <h4 className="author-name">{review.name}</h4>
                  <span className="author-location">{review.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
