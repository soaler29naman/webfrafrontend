import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-logo">
          <img src="logo.png" alt="Logo" /> 
        </div>


        <div className="footer-sections">
          <div className="footer-section">
            <h4>INFOS PRATIQUES</h4>
            <ul>
              <li>A propos</li>
              <li>Livraisons & Retraits</li>
              <li>Mode d'emploi</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>LÉGAL</h4>
            <ul>
              <li>Mentions légales</li>
              <li>CGU</li>
              <li>CGV</li>
              <li>Politique de confidentialité</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>MON COMPTE</h4>
            <ul>
              <li>Accéder à mon compte</li>
              <li>Ma liste d'envie</li>
              <li>Créer un compte</li>
              <li>Mot de passe oublié</li>
            </ul>
          </div>

          <div className="footer-section social">
            <h4>NOUS SUIVRE</h4>
            <div className="social-icons">
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
