import React, { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import BackgroundVideo from '../components/BackgroundVideo'
import SEO from '../components/SEO'
import { products } from '../data/products'
import { siteConfig } from '../config/siteConfig'
import './ProductDetails.css'

export default function ProductDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  
  const product = products.find(p => p.id === id)

  // Redirect if product not found
  useEffect(() => {
    if (!product) {
      navigate('/products')
    }
  }, [product, navigate])

  if (!product) return null

  const generateWhatsAppLink = () => {
    const phone = siteConfig.whatsappNumber.replace(/[^0-9]/g, '')
    const message = `Hello ${siteConfig.companyName}, I am interested in ${product.name}. Please share the available varieties, quality, packaging options, MOQ and quotation.`
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
  }

  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": `https://www.vajranicglobaltrade.com${product.image}`,
    "description": product.longDesc || product.shortDesc,
    "brand": {
      "@type": "Brand",
      "name": "Vajranic Global Trade"
    }
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.vajranicglobaltrade.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Products",
        "item": "https://www.vajranicglobaltrade.com/products"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": product.name,
        "item": `https://www.vajranicglobaltrade.com/product/${product.id}`
      }
    ]
  }

  return (
    <div className="product-details-page">
      <SEO 
        title={`${product.name} Exporter from India | Vajranic Global Trade`}
        description={product.shortDesc}
        canonical={`/product/${product.id}`}
        image={product.image}
        schema={[productSchema, breadcrumbSchema]}
      />
      <BackgroundVideo videoSrc="/assets/bgvideo/13780879_3840_2160_24fps (1).mp4">
        <div className="hero-inner-content">
          <p className="product-breadcrumb fade-in-up">
            <Link to="/products">Products</Link> / <Link to={`/products?category=${product.category.toLowerCase().replace(/\s+/g, '-')}`}>{product.category}</Link>
          </p>
          <h1 className="hero-inner-title fade-in-up">{product.name}</h1>
        </div>
      </BackgroundVideo>

      <main className="page-content">
        <section className="product-details-section">
          <div className="container">
            <div className="details-grid">
              
              {/* Product Image */}
              <div className="details-image-wrapper">
                <img src={product.image} alt={`Premium ${product.name} Exporter from India - Vajranic Global Trade`} className="details-image" />
                <div className="details-category-badge">{product.category}</div>
              </div>

              {/* Product Info */}
              <div className="details-info">
                <h2>{product.name}</h2>
                <p className="details-overview">{product.longDesc || product.shortDesc}</p>
                
                {/* Key Features */}
                {product.keyFeatures && product.keyFeatures.length > 0 && (
                  <div className="details-section">
                    <h3>Key Features</h3>
                    <ul className="features-list">
                      {product.keyFeatures.map((feature, idx) => (
                        <li key={idx}>✓ {feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Specs Grid */}
                <div className="specs-grid">
                  {product.quality && (
                    <div className="spec-box">
                      <div className="spec-icon">⭐</div>
                      <div className="spec-content">
                        <h4>Quality / Grade</h4>
                        <p>{product.quality}</p>
                      </div>
                    </div>
                  )}
                  
                  {product.packaging && (
                    <div className="spec-box">
                      <div className="spec-icon">📦</div>
                      <div className="spec-content">
                        <h4>Packaging</h4>
                        <p>{product.packaging}</p>
                      </div>
                    </div>
                  )}

                  {product.storage && (
                    <div className="spec-box">
                      <div className="spec-icon">❄️</div>
                      <div className="spec-content">
                        <h4>Storage</h4>
                        <p>{product.storage}</p>
                      </div>
                    </div>
                  )}

                  {product.exportInfo && (
                    <div className="spec-box">
                      <div className="spec-icon">🚢</div>
                      <div className="spec-content">
                        <h4>Export Availability</h4>
                        <p>{product.exportInfo}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="details-actions">
                  <a 
                    href={generateWhatsAppLink()} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-whatsapp-large"
                  >
                    <i className="whatsapp-icon"></i> Send Inquiry on WhatsApp
                  </a>
                  <p className="action-help">Clicking this will open WhatsApp with a pre-filled inquiry for this product.</p>
                </div>
                
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
