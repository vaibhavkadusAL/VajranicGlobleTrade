import { useState, useEffect } from 'react'
import { siteConfig } from '../config/siteConfig'
import logoImg from '../assets/fevicon-removebg-preview.png'
import './Header.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Scroll shadow effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setMenuOpen((prev) => !prev)
  const closeMenu  = () => setMenuOpen(false)

  return (
    <>
      <header className={`header${scrolled ? ' scrolled' : ''}`} role="banner">
        {/* Logo */}
        <a href="#" className="header__logo" aria-label={`${siteConfig.companyName} — home`}>
          <img
            src={logoImg}
            alt={`${siteConfig.companyName} logo`}
            className="header__logo-img"
            width="44"
            height="44"
          />
          <span className="header__logo-text">
            Vajranic
            <span className="header__logo-sub">Global Trade</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav aria-label="Main navigation">
          <ul className="header__nav">
            {siteConfig.navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hamburger */}
        <button
          className={`header__hamburger${menuOpen ? ' open' : ''}`}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={toggleMenu}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {/* Mobile nav drawer */}
      <nav
        id="mobile-nav"
        className={`header__mobile-nav${menuOpen ? ' open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        <ul>
          {siteConfig.navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
