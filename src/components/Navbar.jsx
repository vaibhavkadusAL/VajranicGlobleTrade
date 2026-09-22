import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { siteConfig } from '../config/siteConfig'
import logoImg from '../assets/Navbar image.webp'
import './Navbar.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const location = useLocation()

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false)
        setOpenDropdown(null)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setMenuOpen(false)
    setOpenDropdown(null)
  }, [location.pathname])

  // Scroll shadow effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setMenuOpen((prev) => !prev)
  const closeMenu = () => {
    setMenuOpen(false)
    setOpenDropdown(null)
  }

  const handleMobileDropdownClick = (e, label) => {
    e.preventDefault()
    setOpenDropdown(prev => prev === label ? null : label)
  }

  return (
    <>
      <header className={`navbar${scrolled ? ' scrolled' : ''}`} role="banner">
        {/* Logo */}
        <Link to="/" className="navbar__logo" aria-label={`${siteConfig.companyName} — home`}>
          <img
            src={logoImg}
            alt={`${siteConfig.companyName} logo`}
            className="navbar__logo-img"
            width="210"
            height="168"
            fetchpriority="high"
          />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation">
          <ul className="navbar__nav">
            {siteConfig.navLinks.map((link) => (
              <li key={link.label} className={link.dropdown ? 'has-dropdown' : ''}>
                <Link to={link.href}>{link.label}</Link>
                {link.dropdown && (
                  <ul className="navbar__dropdown">
                    {link.dropdown.map(dropLink => (
                      <li key={dropLink.label}>
                        <Link to={dropLink.href}>{dropLink.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger${menuOpen ? ' open' : ''}`}
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
        className={`navbar__mobile-nav${menuOpen ? ' open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        <ul>
          {siteConfig.navLinks.map((link) => (
            <li key={link.label} className={link.dropdown ? 'mobile-has-dropdown' : ''}>
              {link.dropdown ? (
                <a 
                  href="#" 
                  onClick={(e) => handleMobileDropdownClick(e, link.label)}
                  className="mobile-dropdown-toggle"
                >
                  {link.label} {openDropdown === link.label ? '▴' : '▾'}
                </a>
              ) : (
                <Link to={link.href} onClick={closeMenu}>
                  {link.label}
                </Link>
              )}
              {link.dropdown && openDropdown === link.label && (
                <ul className="mobile-dropdown">
                  {link.dropdown.map(dropLink => (
                    <li key={dropLink.label}>
                      <Link to={dropLink.href} onClick={closeMenu}>
                        {dropLink.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
