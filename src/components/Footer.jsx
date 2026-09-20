import { siteConfig } from '../config/siteConfig'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <p className="footer__copy">
        &copy; {siteConfig.footerYear} {siteConfig.companyName}. All Rights Reserved.
      </p>
      <p className="footer__love">
        Made with <span aria-label="love">❤️</span>
      </p>
    </footer>
  )
}
