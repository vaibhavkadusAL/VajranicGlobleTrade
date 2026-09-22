import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { siteConfig } from '../config/siteConfig'
import logoImg from '../assets/Navbar image.webp'
import './Hero.css'

const heroVideos = [
  "/assets/bgvideo/11991712_3840_2160_30fps (1).mp4",
  "/assets/bgvideo/13780879_3840_2160_24fps (1).mp4",
  "/assets/bgvideo/8334351-uhd_4096_2160_25fps.mp4"
];

export default function Hero() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [nextVideoIndex, setNextVideoIndex] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const currentVideoRef = useRef(null)
  const nextVideoRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    // GSAP Animation for hero text on mount
    const ctx = gsap.context(() => {
      gsap.from('.hero__animate', {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.2
      });
    }, contentRef);

    return () => ctx.revert();
  }, []);

  const handleVideoEnded = () => {
    setIsTransitioning(true);

    // Start playing the next video
    if (nextVideoRef.current) {
      nextVideoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
    }

    // After fade duration, swap videos
    setTimeout(() => {
      setCurrentVideoIndex(nextVideoIndex);
      setNextVideoIndex((nextVideoIndex + 1) % heroVideos.length);
      setIsTransitioning(false);
    }, 1000); // 1000ms crossfade duration
  };

  return (
    <header className="hero" id="main-content">
      {/* Background Video Layer */}
      <div className="hero__video-container">
        {/* Current Video */}
        <video
          ref={currentVideoRef}
          className={`hero__video ${isTransitioning ? 'fade-out' : 'fade-in'}`}
          src={heroVideos[currentVideoIndex]}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnded}
        />

        {/* Next Video (preloading/playing underneath during transition) */}
        <video
          ref={nextVideoRef}
          className={`hero__video ${isTransitioning ? 'fade-in' : 'fade-out'}`}
          src={heroVideos[nextVideoIndex]}
          muted
          playsInline
          preload="auto"
        />

        {/* Dark Green Overlay */}
        <div className="hero__overlay"></div>
      </div>

      {/* Hero Content */}
      <div className="hero__content" ref={contentRef}>
        <div className="hero__branding hero__animate">
          <img src={logoImg} alt="Vajranic Global Trade Logo" className="hero__logo-img" width="300" height="240" fetchpriority="high" />
          <span className="hero__company-name" style={{ display: 'block', fontSize: '1.2rem', fontWeight: '500', marginBottom: '1rem', color: 'var(--light-green)' }}>
            {siteConfig.companyName}
          </span>
          <h1 className="hero__desc" style={{ fontSize: '3rem', lineHeight: '1.2', margin: '0 0 1.5rem 0' }}>
            Indian Agricultural Products Exporter & Global Supplier
          </h1>
        </div>

        <p className="hero__desc hero__animate" style={{ fontSize: '1.2rem', fontWeight: '400', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
          Premium Indian agricultural products, carefully sourced and supplied to global markets.
        </p>
        <div className="hero__actions hero__animate">
          <a href="#products" className="hero__btn">
            Explore Products
          </a>
        </div>
      </div>
    </header>
  )
}
