import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt,FaFacebook, FaTwitter, FaInstagram  } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h1>CLOSET</h1>
        </div>
        <div className="footer-section about">
          <h3>Contact</h3>
          <p>
            <FaMapMarkerAlt /> Lahore, Pakistan
          </p>
          <p>
            <FaPhoneAlt /> +0900 786 01
          </p>
        </div>

        <div className="footer-section links">
          <h3> Get Help </h3>
          <ul>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/faqs">FAQs</a></li>
            <li><a href="/return-policy">Renters Policy</a></li>
          </ul>
        </div>

        <div className="footer-section social-media">
  <h3>Follow Us</h3>
  <div className="social-icons">
    <a href="https://facebook.com" target="_blank" rel="noreferrer">
      <FaFacebook />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noreferrer">
      <FaTwitter />
    </a>
    <a href="https://instagram.com" target="_blank" rel="noreferrer">
      <FaInstagram />
    </a>
  </div>
</div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Closet. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
