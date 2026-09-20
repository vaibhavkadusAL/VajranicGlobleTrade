import Background from './components/Background'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'

function App() {
  return (
    <>
      {/* Animated full-screen background */}
      <Background />

      {/* Fixed glassmorphism header */}
      <Header />

      {/* Main hero / coming-soon section */}
      <Hero />

      {/* Footer */}
      <Footer />
    </>
  )
}

export default App
