import React from 'react'
import { Link } from 'react-router-dom'
import { siteConfig } from '../config/siteConfig'
import logoImg from '../assets/Navbar image.PNG'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        
        {/* Brand Section */}
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <img src={logoImg} alt={siteConfig.companyName} />
          </Link>
          <p className="footer__desc">
            Global Exporter | Agriculture Export | Connecting 50+ Countries ✈️ | Sourcing & Delivering Excellence Worldwide.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer__links">
          <h3 className="footer__title">Quick Links</h3>
          <ul>
            {siteConfig.navLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer__contact">
          <h3 className="footer__title">Contact Us</h3>
          <ul>
            <li>
              <strong>Email:</strong><br />
              <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
            </li>
            <li>
              <strong>Phone:</strong><br />
              {siteConfig.phoneNumbers.map((num, i) => (
                <React.Fragment key={i}>
                  <a href={`tel:${num.replace(/[^0-9+]/g, '')}`}>{num}</a>
                  {i < siteConfig.phoneNumbers.length - 1 && <br />}
                </React.Fragment>
              ))}
            </li>
            <li>
              <strong>Address:</strong><br />
              A/P-Natepute, Tal-Malshiras, Dist-Solapur - 413109
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>&copy; {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved.</p>
          <div className="footer__socials">
            {siteConfig.socialLinks.facebook !== '#' && (
              <a href={siteConfig.socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7h-2.54V12h2.54V9.79c0-2.5 1.5-3.89 3.77-3.89 1.1 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.94h-2.33v7C18.34 21.19 22 17.04 22 12.06c0-5.53-4.5-10.02-10-10.02z" />
                </svg>
              </a>
            )}
            {siteConfig.socialLinks.instagram !== '#' && (
              <a href={siteConfig.socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.4 5.6 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.6 18.4 4 16.4 4H7.6zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25zM12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}
