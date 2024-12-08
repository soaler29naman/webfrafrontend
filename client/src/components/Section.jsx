import React from "react";
import "./Section.css";
import couchimage from "../images/sofa.jpeg"

const Section = () => {
  return (
    <div className="section-container">
      {/* Top Section: Icons and Text */}
      <div className="services">
        <h2>
          On s'occupe de <span className="highlight">tout</span>
        </h2>
        <p>Office ipsum you must be muted. It meeting commitment busy pain.</p>
        <div className="service-items">
          <div className="service-item">
            <img src="delivery-icon.png" alt="Livraison & Reprise" /> {/* Replace with icon */}
            <p>Livraison & Reprise</p>
            <span>Selon vos besoins</span>
          </div>
          <div className="service-item">
            <img src="cleaning-icon.png" alt="Nettoyage" /> {/* Replace with icon */}
            <p>Nettoyage</p>
            <span>Selon vos besoins</span>
          </div>
          <div className="service-item">
            <img src="infinity-icon.png" alt="Commande Illimitée" /> {/* Replace with icon */}
            <p>Commande Illimitée</p>
            <span>Tout est possible</span>
          </div>
          <div className="service-item">
            <img src="transport-icon.png" alt="Transport & Enlèvement" /> {/* Replace with icon */}
            <p>Transport & Enlèvement</p>
            <span>On s’occupe de tout.</span>
          </div>
        </div>
      </div>

      {/* Bottom Section: Image and Signup */}
      <div className="promotion">
        <div className="promo-image">
          <img src={couchimage} alt="Promo" /> {/* Replace with your image */}
        </div>
        <div className="promo-signup">
          <h3>
            S'inscrire & économiser <span className="highlight">10%</span>
          </h3>
          <p>
            Office ipsum you must be muted. Synergize helicopter prioritize anyway idea.
          </p>
          <div className="signup-form">
            <input type="email" placeholder="john@doe.com" />
            <button>S’INSCRIRE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
