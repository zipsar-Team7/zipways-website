import React from "react";
import "./UniversitiesGrid.css";

const UniversitiesGrid = () => {
  const universities = [
    {
      name: "Harvard University",
      location: "USA",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Sanders_theater_2009y.JPG",
      size: "large",
    },
    {
      name: "Oxford University",
      location: "UK",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Radcliffe_Camera,_Oxford_-_Oct_2006.jpg?width=1000",
      size: "medium",
    },
    {
      name: "Stanford University",
      location: "USA",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Stanford_Oval_May_2011_panorama.jpg?width=1000",
      size: "small",
    },
    {
      name: "MIT",
      location: "USA",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/MIT_Building_10_and_the_Great_Dome,_Cambridge_MA.jpg?width=1000",
      size: "small",
    },
    {
      name: "University of Toronto",
      location: "Canada",
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Toronto_Metropolitan_University_2023.jpg",
      size: "medium",
    },
    {
      name: "National University of Singapore",
      location: "Singapore",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2000",
      size: "small",
    }
  ];

  return (
    <section className="universities-section">
      <div className="container">
        <div className="section-header-premium" style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="badge">Destinations</span>
          <h2>Top Universities We Offer</h2>
          <p style={{ marginTop: "1rem", color: "var(--text-secondary)", maxWidth: "600px", margin: "1rem auto 0 auto" }}>
            Unlock pathways to the world's most prestigious institutions and build a globally recognized career.
          </p>
        </div>
        
        <div className="uni-grid-creative">
          {universities.map((uni, index) => (
            <div key={index} className={`uni-card ${uni.size}`}>
              <div className="uni-img-wrapper">
                <img src={uni.image} alt={uni.name} />
                <div className="uni-overlay"></div>
              </div>
              <div className="uni-content">
                <span className="uni-location">{uni.location}</span>
                <h3 className="uni-name">{uni.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniversitiesGrid;
