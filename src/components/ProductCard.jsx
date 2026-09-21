import React from 'react'
import { Link } from 'react-router-dom'
import './ProductCard.css'

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-card__image-container">
        <img src={product.image} alt={product.name} className="product-card__image" />
        <div className="product-card__overlay">
          <Link to={`/product/${product.id}`} className="product-card__btn">
            View Details
          </Link>
        </div>
      </div>
      
      <div className="product-card__content">
        <span className="product-card__category">{product.category}</span>
        <h3 className="product-card__title">{product.name}</h3>
        <p className="product-card__desc">{product.shortDesc}</p>
        
        <Link to={`/product/${product.id}`} className="product-card__link">
          Explore Product <span>&rarr;</span>
        </Link>
      </div>
    </div>
  )
}
