// components/Footer.jsx
"use client";
import React, { useState } from 'react';
import { subscribeEmail } from '../utils/subscribeEmail';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await subscribeEmail(email);
      setSubscribed(true);
      setEmail('');
    } catch (error) {
      setError('Échec de l\'inscription à la newsletter. Veuillez réessayer.');
    }
  };

  return (
    <footer id="footer" className="gradient-border-footer">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-5 mb-3">
          <a className="navbar-brand" id="footer-heading" href="/">
            <img
              className="d-xs-block d-sm-block d-md-none d-lg-none"
              src="/assets/logo-brekor-small.svg"
              alt="Petit logo Brekor"
            />
            <img
              className="d-none d-xs-none d-sm-none d-md-block d-lg-block"
              src="/assets/logo-brekor.svg"
              alt="Logo Brekor"
            />
          </a>
          {/* Form Newsletter */}
          <form onSubmit={handleSubmit}>
            <h5>Recevoir nos nouveautés</h5>
            <p>En soumettant votre adresse email, vous acceptez son enregistrement et votre inscription à notre newsletter.</p>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
              <div className="input-group">
                <input
                  id="newsletter1"
                  type="email"
                  className="form-control"
                  placeholder="Entrez votre mail"
                  aria-label="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button className="btn" type="submit">
                  <img src="/assets/icon-arrow.svg" alt="Icon arrow" />
                </button>
              </div>
            </div>
            {error && <p className="text-danger mt-2">{error}</p>}
            {subscribed && <p className="text-success mt-2">Vous êtes inscrit à notre newsletter!</p>}
        </form>
          {/* End Form newsletter */}
        </div>
        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 offset-lg-1 mb-3">
          <h5>Accéder</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="/conditions-generales-utilisation" className="nav-link p-0" target="_blank" aria-label="Lien vers les conditions générales d'utilisation">
                CGU
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/mentions-legales" className="nav-link p-0" target="_blank" aria-label="Lien vers les mentions légales">
                Mentions légales
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/politique-de-confidentialite" className="nav-link p-0" target="_blank" aria-label="Lien vers la politique confidentialité">
                Politique de confidentialité
              </a>
            </li>
          </ul>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 mb-3">
          <h5>Réseaux sociaux</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="https://www.facebook.com/people/Brekor/61560302835954/" className="nav-link p-0" target="_blank" aria-label="Lien vers Facebook">
                Facebook
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="https://www.instagram.com/brekoroff/" className="nav-link p-0" target="_blank" aria-label="Lien vers Instagram">
                Instagram
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="https://www.linkedin.com/company/brekoroff/" className="nav-link p-0" target="_blank" aria-label="Lien vers LinkedIn">
                LinkedIn
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="https://www.tiktok.com/@brekoroff" className="nav-link p-0" target="_blank" aria-label="Lien vers TikTok">
                TikTok
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="d-flex flex-column flex-sm-row justify-content-center text-center py-4 border-top">
        <p>&copy; 2024 Brekor All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;