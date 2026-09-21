import React, { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import BackgroundVideo from '../components/BackgroundVideo'
import Canvas3D from '../components/Canvas3D'
import { siteConfig } from '../config/siteConfig'
import './Contact.css'

export default function Contact() {
  const [formStatus, setFormStatus] = useState(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-animate', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        delay: 0.2
      })
    }, contentRef)
    
    return () => ctx.revert()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    // UI-only form submission
    setFormStatus('success')
    setTimeout(() => setFormStatus(null), 5000)
    e.target.reset()
  }

  return (
    <div className="contact-page">
      <BackgroundVideo videoSrc="/assets/bgvideo/8334351-uhd_4096_2160_25fps.mp4">
        <div className="hero-inner-content">
          <h1 className="hero-inner-title fade-in-up">Get in Touch</h1>
          <p className="hero-inner-subtitle fade-in-up">
            We'd love to hear from you. Reach out for export inquiries or partnership opportunities.
          </p>
        </div>
      </BackgroundVideo>

      <main className="page-content" ref={contentRef}>
        <section className="contact-section">
          <Canvas3D />
          <div className="container contact-grid">
            
            {/* Contact Info */}
            <div className="contact-info contact-animate">
              <h2>Contact Information</h2>
              <p className="contact-intro">
                Whether you have a question about our products, pricing, or shipping capabilities, our team is ready to answer all your questions.
              </p>
              
              <div className="info-blocks">
                <div className="info-block">
                  <div className="info-icon">📍</div>
                  <div>
                    <h3>Our Office</h3>
                    <p>123 Global Trade Tower, Business Hub, Mumbai, Maharashtra, India 400001</p>
                  </div>
                </div>
                
                <div className="info-block">
                  <div className="info-icon">📞</div>
                  <div>
                    <h3>Phone</h3>
                    {siteConfig.phoneNumbers.map((num, i) => (
                      <p key={i}>{num}</p>
                    ))}
                  </div>
                </div>
                
                <div className="info-block">
                  <div className="info-icon">✉️</div>
                  <div>
                    <h3>Email</h3>
                    <p>exports@vajranicglobal.com</p>
                    <p>info@vajranicglobal.com</p>
                  </div>
                </div>
                
                <div className="info-block">
                  <div className="info-icon">🕒</div>
                  <div>
                    <h3>Business Hours</h3>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM (IST)</p>
                    <p>Saturday: 9:00 AM - 1:00 PM (IST)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper contact-animate">
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3>Send an Enquiry</h3>
                
                {formStatus === 'success' && (
                  <div className="form-success">
                    Thank you! Your message has been sent successfully. We will get back to you shortly.
                  </div>
                )}
                
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" required placeholder="John Doe" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" required placeholder="john@company.com" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" placeholder="+1 234 567 8900" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="product">Product of Interest</label>
                  <select id="product" required>
                    <option value="">Select a product...</option>
                    <option value="maize">Premium Indian Maize</option>
                    <option value="vegetables">Fresh Mixed Vegetables</option>
                    <option value="onions">Organic Red Onions</option>
                    <option value="rice">Premium Basmati Rice</option>
                    <option value="pomegranates">Export Quality Pomegranates</option>
                    <option value="other">Other / General Enquiry</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows="5" required placeholder="Tell us about your requirements..."></textarea>
                </div>
                
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>
            
          </div>
        </section>
      </main>
    </div>
  )
}
