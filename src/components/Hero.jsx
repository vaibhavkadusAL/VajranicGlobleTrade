import { siteConfig } from '../config/siteConfig'
import Countdown from './Countdown'
import Subscribe from './Subscribe'
import SocialLinks from './SocialLinks'
import symbolImg from '../assets/symbol.png'
import './Hero.css'

export default function Hero() {
  return (
    <main className="hero" id="main-content">
      {/* Brand symbol / hero banner image */}
      <img
        src={symbolImg}
        alt="Vajranic Global Trade — brand symbol"
        className="hero__symbol"
      />

      {/* Eyebrow badge */}
      <p className="hero__eyebrow" aria-label="Coming Soon">
        {siteConfig.tagline}
      </p>

      {/* Main heading */}
      <h1 className="hero__heading">
        {siteConfig.heading}
      </h1>

      {/* Description */}
      <p className="hero__desc">
        {siteConfig.description}
      </p>

      {/* Contact email */}
      <p className="hero__contact">
        <span>For enquiries:</span>
        <a
          href={`mailto:${siteConfig.contactEmail}`}
          className="hero__contact-link"
          aria-label={`Email us at ${siteConfig.contactEmail}`}
        >
          {siteConfig.contactEmail}
        </a>
      </p>

      {/* Divider */}
      <hr className="hero__divider" aria-hidden="true" />

      {/* Countdown timer */}
      <div className="hero__countdown">
        <Countdown />
      </div>

      {/* Divider */}
      <hr className="hero__divider" aria-hidden="true" />

      {/* Email subscription */}
      <Subscribe />

      {/* Social links */}
      <SocialLinks />
    </main>
  )
}
