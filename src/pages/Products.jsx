import React, { useState, useEffect, useRef } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import gsap from 'gsap'
import BackgroundVideo from '../components/BackgroundVideo'
import { products } from '../data/products'
import { siteConfig } from '../config/siteConfig'
import './Products.css'

const CATEGORIES = [
  'All',
  'Fresh Fruits',
  'Fresh Vegetables',
  'Dehydrated Products',
  'Pulp & Processed',
  'Grains & Pulses',
  'Frozen Fruits'
]

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams()
  const categoryQuery = searchParams.get('category')
  
  // Default to 'All' if no query, otherwise try to match it
  const initialCategory = CATEGORIES.find(c => c.toLowerCase().replace(/\s+/g, '-') === categoryQuery) || 'All'
  const [activeCategory, setActiveCategory] = useState(initialCategory)
  
  const contentRef = useRef(null)

  // Update URL and state when category changes
  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    if (category === 'All') {
      setSearchParams({})
    } else {
      setSearchParams({ category: category.toLowerCase().replace(/\s+/g, '-') })
    }
  }

  // Update state if URL changes externally (e.g., from Navbar)
  useEffect(() => {
    if (categoryQuery) {
      const matched = CATEGORIES.find(c => c.toLowerCase().replace(/\s+/g, '-') === categoryQuery)
      if (matched) {
        setActiveCategory(matched)
        // Scroll to product grid section
        setTimeout(() => {
          if (contentRef.current) {
            const headerOffset = 80 // Navbar height
            const elementPosition = contentRef.current.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
          }
        }, 300) // Slight delay to let render finish
      }
    } else {
      setActiveCategory('All')
    }
  }, [categoryQuery])

  // Filter products based on active category
  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory || (activeCategory === 'Pulp & Processed' && p.category === 'Pulp & Processed Mango Products'))

  // Animate cards when category changes
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.product-card', 
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.6, 
          stagger: 0.05, 
          ease: 'power2.out',
          clearProps: 'all' // prevents transform conflicts after animation
        }
      )
    }, contentRef)
    
    return () => ctx.revert()
  }, [activeCategory])

  const generateWhatsAppLink = (product) => {
    const phone = siteConfig.whatsappNumber.replace(/[^0-9]/g, '')
    const message = `Hello ${siteConfig.companyName}, I am interested in ${product.name}. Please share the available varieties, quality, packaging options, MOQ and quotation.`
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
  }

  return (
    <div className="products-page">
      <BackgroundVideo videoSrc="/assets/bgvideo/12760196_1920_1080_30fps (1).mp4">
        <div className="hero-inner-content">
          <h1 className="hero-inner-title fade-in-up">Our Products</h1>
          <p className="hero-inner-subtitle fade-in-up">
            Premium Indian agricultural products, carefully sourced and supplied to global markets.
          </p>
        </div>
      </BackgroundVideo>

      <main className="page-content" ref={contentRef}>
        <section className="catalog-section">
          <div className="container">
            
            {/* Category Filter Tabs */}
            <div className="category-tabs">
              {CATEGORIES.map(category => (
                <button
                  key={category}
                  className={`category-tab ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Products Grid */}
            <div className="products-grid">
              {filteredProducts.map(product => (
                <div key={product.id} className="product-card">
                  <div className="product-card__img-wrap">
                    <img src={product.image} alt={product.name} className="product-card__img" />
                    <span className="product-card__category">{product.category}</span>
                  </div>
                  
                  <div className="product-card__content">
                    <h3 className="product-card__title">{product.name}</h3>
                    <p className="product-card__desc">{product.shortDesc}</p>
                    
                    <div className="product-card__specs">
                      {product.quality && (
                        <div className="spec-item">
                          <strong>Quality:</strong> <span>{product.quality}</span>
                        </div>
                      )}
                      {product.packaging && (
                        <div className="spec-item">
                          <strong>Packaging:</strong> <span>{product.packaging}</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="product-card__actions">
                      <Link to={`/product/${product.id}`} className="btn-details">
                        View Details
                      </Link>
                      <a 
                        href={generateWhatsAppLink(product)} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn-whatsapp"
                      >
                        <i className="whatsapp-icon"></i> Enquire on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredProducts.length === 0 && (
              <div className="no-products">
                <p>No products found in this category.</p>
              </div>
            )}
            
          </div>
        </section>
      </main>
    </div>
  )
}
