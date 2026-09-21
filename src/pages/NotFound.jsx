import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import './Home.css' // Reuse some hero styles

export default function NotFound() {
  return (
    <div className="page-content" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '4rem 2rem' }}>
      <SEO 
        title="Page Not Found | Vajranic Global Trade"
        description="The page you are looking for does not exist or has been moved."
        canonical="/404"
      />
      
      <h1 style={{ fontSize: '4rem', color: 'var(--primary-green)', marginBottom: '1rem' }}>404</h1>
      <h2 style={{ fontSize: '2rem', color: 'var(--dark-green)', marginBottom: '2rem' }}>Page Not Found</h2>
      <p style={{ color: '#555', marginBottom: '2rem', fontSize: '1.1rem' }}>
        Oops! We couldn't find the page you were looking for.<br/>
        It might have been removed, renamed, or did not exist in the first place.
      </p>
      
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link to="/" className="hero__btn" style={{ padding: '0.8rem 1.5rem' }}>Back to Home</Link>
        <Link to="/products" className="hero__btn" style={{ background: 'transparent', color: 'var(--primary-green)', padding: '0.8rem 1.5rem' }}>View Products</Link>
        <Link to="/contact" className="hero__btn" style={{ background: 'transparent', color: 'var(--primary-green)', padding: '0.8rem 1.5rem' }}>Contact Us</Link>
      </div>
    </div>
  )
}
