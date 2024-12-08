import React, { useState } from "react";
import "./Hero.css";
import product1 from "../images/product1.jpeg";
import product2 from "../images/tableround.jpeg";
const Hero = () => {
  const [selectedImage, setSelectedImage] = useState(product1); // Placeholder for selected image
  const [expandedSection, setExpandedSection] = useState(null); // To handle expandable sections

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="hero">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <span>Home</span> <span className="separator">›</span> <span>Art de la Table</span>
      </div>

      {/* Main Content */}
      <div className="hero-content">
        {/* Left Section: Image Gallery */}
        <div className="image-gallery">
          <div className="thumbnails">
            {[product2, product2, product2].map((image, index) => (
              <img
                key={index}
                src={image} // Replace with actual image paths
                alt={`Thumbnail ${index + 1}`}
                onClick={() => setSelectedImage(image)}
                className={selectedImage === image ? "active-thumbnail" : ""}
              />
            ))}
          </div>
          <div className="main-image">
            <img src={selectedImage} alt="Selected Product" />
          </div>
        </div>

        {/* Right Section: Product Details */}
        <div className="product-details">
          <h1>Cheese – appareil à raclette 1/2 roue</h1>
          <p className="price">39,50€ / piece</p>
          <p className="description">
            Location appareil à raclette - Tranche traditionnelle 1/2 roue
            <br />
            Réglable en hauteur. Appareil à raclette professionnel. Boîtier de
            chauffe horizontal réglable en hauteur.
          </p>
          <div className="product-options">
            <span>20°</span>
            <span>50°</span>
          </div>
          <div className="add-to-cart">
            <input type="number" defaultValue="1" min="1" />
            <button>Ajouter au panier</button>
          </div>
        </div>
      </div>

      {/* Description and Expandable Sections */}
      <div className="product-extra">
        <h2>Description produit</h2>
        <p>
          Festi vous propose la location d’une "Jewel – grande coutellée/Top"
          pour votre événement...
        </p>
        <div className="expandable-section">
          <div
            className={`expandable-item ${
              expandedSection === "livraisons" ? "expanded" : ""
            }`}
            onClick={() => toggleSection("livraisons")}
          >
            <span>LIVRAISONS</span>
            {expandedSection === "livraisons" && (
              <div className="expandable-content">
                Livraison details go here.
              </div>
            )}
          </div>
          <div
            className={`expandable-item ${
              expandedSection === "questions" ? "expanded" : ""
            }`}
            onClick={() => toggleSection("questions")}
          >
            <span>QUESTIONS</span>
            {expandedSection === "questions" && (
              <div className="expandable-content">
                Questions details go here.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
