import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <div className="navbar-container">
      {/* Top Section */}
      <div className="navbar-top">
        <div className="navbar-logo">
          <img src="your-logo-url-here" alt="Logo" />
        </div>
        <div className="navbar-search">
          <input type="text" placeholder="Rechercher un produit" />
          <button>🔍</button>
        </div>
        <div className="navbar-actions">
          <span>Inspirations</span>
          <span>Mes favoris</span>
          <span className="cart">Panier</span>
          <span className="profile">FR</span>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="navbar-links">
        <span>ART DE LA TABLE</span>
        <span>MOBILIER</span>
        <span>NAPPAGE</span>
        <span>MATÉRIEL DE SALLE</span>
        <span>CUISINE</span>
        <span>BARBECUE</span>
        <span>TENTE</span>
        <span>CHAUFFAGE</span>
        <span>PODIUM – PISTE DE DANSE</span>
        <span>SON ET LUMIÈRE</span>
        <span>PACKS</span>
        <span>CONSOMMABLES</span>
      </div>
    </div>
  );
};

export default Navbar;
