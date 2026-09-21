import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BackgroundVideo from '../components/BackgroundVideo'
import Canvas3D from '../components/Canvas3D'
import happyImg from '../assets/happy.jpg'
import './About.css'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const contentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-stagger', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.about-stagger',
          start: 'top 80%'
        }
      })
    }, contentRef)
    
    return () => ctx.revert()
  }, [])

  return (
    <div className="about-page">
      <BackgroundVideo videoSrc="/assets/bgvideo/11991712_3840_2160_30fps (1).mp4">
        <div className="hero-inner-content">
          <h1 className="hero-inner-title fade-in-up">About Vajranic Global</h1>
          <p className="hero-inner-subtitle fade-in-up">
            Rooted in tradition, expanding globally.
          </p>
        </div>
      </BackgroundVideo>

      <main className="page-content" ref={contentRef}>
        <section className="about-section">
          <div className="container about-grid">
            <div className="about-text about-stagger">
              <h2>Our Story</h2>
              <p>
                Since our inception, Vajranic Global Trade has been driven by a singular vision: to bring the rich, authentic, and premium agricultural bounty of India to the global stage. What started as a local farming initiative has blossomed into a fully integrated export network.
              </p>
              <p>
                We work directly with thousands of farmers, providing them with sustainable farming techniques and fair trade practices. This ensures that every grain, fruit, and vegetable we export is not just of the highest quality, but also ethically sourced.
              </p>
            </div>
            <div className="about-image about-stagger">
              <img src={happyImg} alt="Farmers smiling - Our Story" className="about-img" />
            </div>
          </div>
        </section>

        <section className="about-section alternate">
          <Canvas3D />
          <div className="container text-center">
            <h2 className="section-title about-stagger">Our Mission & Vision</h2>
            <div className="mission-vision-grid about-stagger">
              <div className="mv-card">
                <h3>Our Mission</h3>
                <p>To deliver uncompromising quality agricultural products worldwide while empowering local farming communities through sustainable and ethical practices.</p>
              </div>
              <div className="mv-card">
                <h3>Our Vision</h3>
                <p>To become the world's most trusted partner for premium Indian agricultural exports, recognized for our integrity, quality, and commitment to the planet.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="container text-center">
            <h2 className="section-title about-stagger">Why Choose Us?</h2>
            <div className="features-grid about-stagger">
              <div className="feature-item">
                <div className="feature-icon">🌿</div>
                <h4>100% Traceability</h4>
                <p>Track your product from the farm to the container.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">❄️</div>
                <h4>Cold Chain Logistics</h4>
                <p>End-to-end temperature control to preserve freshness.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🏆</div>
                <h4>Certified Quality</h4>
                <p>Meeting strict international food safety standards.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🤝</div>
                <h4>Fair Trade</h4>
                <p>Ensuring ethical compensation for our farmers.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
