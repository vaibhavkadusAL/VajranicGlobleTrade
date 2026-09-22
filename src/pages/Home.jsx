import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Hero from '../components/Hero'
import Canvas3D from '../components/Canvas3D'
import ProductCard from '../components/ProductCard'
import SEO from '../components/SEO'
import { products } from '../data/products'
import { siteConfig } from '../config/siteConfig'
import './Home.css'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const journeyRef = useRef(null)
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.fade-up', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.fade-up',
          start: 'top 80%',
        }
      })
    }, journeyRef)
    
    return () => ctx.revert()
  }, [])

  // Show only first 3 products as featured
  const featuredProducts = products.slice(0, 3)

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteConfig.companyName,
    "url": "https://vajranicglobal.com",
    "description": "Premium Indian agricultural products exporter."
  }

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteConfig.companyName,
    "url": "https://vajranicglobal.com",
    "logo": "https://vajranicglobal.com/favicon.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": siteConfig.phoneNumbers[0],
      "contactType": "sales",
      "email": siteConfig.contactEmail
    }
  }

  return (
    <div className="home-page">
      <SEO 
        title="Vajranic Global Trade | Agricultural Products & Fresh Produce Exporter India"
        description="Premium Indian agricultural products, fresh fruits, vegetables, and grains exported globally by Vajranic Global Trade."
        canonical="/"
        schema={[websiteSchema, orgSchema]}
      />
      <Hero />
      
      <main className="page-content" ref={journeyRef}>
        {/* Agriculture Journey Section */}
        <section id="journey" className="home-section">
          <div className="container text-center">
            <h2 className="section-title fade-up">Our Agriculture Journey</h2>
            <p className="section-subtitle fade-up">
              From the fertile soils of India to the global market, Vajranic Global Trade 
              is committed to delivering premium agricultural products with a 100% integrated supply chain.
            </p>
            <div className="journey-grid fade-up">
              <div className="journey-card">
                <h3>Sourcing</h3>
                <p>Partnering with certified sustainable farms across India.</p>
              </div>
              <div className="journey-card">
                <h3>Processing</h3>
                <p>State-of-the-art facilities ensuring purity and nutritional value.</p>
              </div>
              <div className="journey-card">
                <h3>Global Export</h3>
                <p>Efficient logistics delivering freshness worldwide.</p>
              </div>
            </div>
          </div>
          <Canvas3D />
        </section>
        
        {/* Featured Products */}
        <section id="products" className="home-section alternate">
          <div className="container">
            <div className="section-header fade-up">
              <h2 className="section-title">Featured Products</h2>
              <Link to="/products" className="view-all-link">View All Products &rarr;</Link>
            </div>
            
            <div className="products-grid fade-up">
              {featuredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Quality Commitment */}
        <section id="quality" className="home-section">
          <div className="container quality-container fade-up">
            <div className="quality-content">
              <h2 className="section-title">Uncompromising Quality</h2>
              <p className="section-subtitle text-left">
                We believe that premium quality is not an act, but a habit. Our dedicated quality control teams 
                monitor every step of the process—from harvesting and sorting to packaging and shipment.
              </p>
              <ul className="quality-list">
                <li>✓ Strict pesticide residue compliance</li>
                <li>✓ Temperature-controlled cold chain logistics</li>
                <li>✓ Aflatoxin-free grains and cereals</li>
                <li>✓ Advanced sorting and grading technology</li>
              </ul>
            </div>
            <div className="quality-image">
              <img src={products[0].image} alt="Quality Checking" />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
