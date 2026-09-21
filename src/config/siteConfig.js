// ============================================================
//  CENTRAL SITE CONFIGURATION
//  Edit everything here — one place for all site-wide values.
// ============================================================

export const siteConfig = {
  // ── Branding ───────────────────────────────────────────────
  companyName: "VAJRANIC GLOBAL TRADE LLP",
  tagline: "Global Exporter | Agriculture Export | Connecting 50+ Countries ✈️",

  // ── Hero copy ──────────────────────────────────────────────
  heading: "Something Amazing Is Coming",
  description:
    "Global Exporter | Agriculture Export | Connecting 50+ Countries ✈️ | Sourcing & Delivering Excellence Worldwide.",

  // ── Countdown ─────────────────────────────────────────────
  // Duration in hours from first page load. Change this value
  // to adjust the countdown length. Uses localStorage so the
  // timer persists across page refreshes.
  countdownHours: 48,

  // ── Contact Information ─────────────────────────────────
  contactEmail: "sales@vajranicglobal.com",
  whatsappNumber: "+918888353586", // Used exclusively for product inquiry links
  phoneNumbers: [
    "+91 88883 53586",
    "+91 95459 29791",
    "+91 98903 08098"
  ],

  // ── Email subscription ────────────────────────────────────
  subscribeSuccessMessage: "Thanks! We'll notify you when we launch.",

  // ── Social links ──────────────────────────────────────────
  socialLinks: {
    linkedin: "#",
    instagram: "https://www.instagram.com/vajranicglobaltrade?stkn=MTA3NWJ5bzBsbTV1NQ%3D%3D&utm_source=qr",
    facebook: "#", // Add official Facebook URL when available
    twitter: "#",
  },

  // ── Navigation ────────────────────────────────────────────
  navLinks: [
    { label: "Home", href: "/" },
    { 
      label: "Products", 
      href: "/products",
      dropdown: [
        { label: "All Products", href: "/products" },
        { label: "Fresh Fruits", href: "/products?category=fresh-fruits" },
        { label: "Fresh Vegetables", href: "/products?category=fresh-vegetables" },
        { label: "Dehydrated Products", href: "/products?category=dehydrated-products" },
        { label: "Pulp & Processed", href: "/products?category=pulp-&-processed" },
        { label: "Grains & Pulses", href: "/products?category=grains-&-pulses" },
        { label: "Frozen Fruits", href: "/products?category=frozen-fruits" }
      ]
    },
    { label: "Quality", href: "/#quality" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  // ── SEO ───────────────────────────────────────────────────
  seoTitle: "Vajranic Global Trade | Coming Soon",
  seoDescription:
    "Something exciting is coming soon. Stay tuned for our launch.",

  // ── Footer ────────────────────────────────────────────────
  footerYear: "2026",
};
