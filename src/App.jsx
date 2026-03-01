import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col relative w-full overflow-hidden bg-sekai-darker">
      {/* Background decorations - Sekai Geometric Style */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        {/* Giant Watermark Text */}
        <div className="absolute top-[20%] -left-20 rotate-[-10deg] text-[15rem] font-display font-black text-outline-bg opacity-30 select-none whitespace-nowrap leading-none tracking-tighter">
          PROJECT
        </div>
        <div className="absolute top-[40%] -right-20 rotate-[-10deg] text-[15rem] font-display font-black text-outline-bg opacity-30 select-none whitespace-nowrap leading-none tracking-tighter">
          SEKAI
        </div>

        {/* Colorful Orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-sekai-cyan/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-sekai-pink/10 rounded-full blur-[150px]" />
      </div>

      <Navbar />

      <main className="flex-grow flex flex-col relative z-0">
        <Hero />
        <About />
        <Gallery />
      </main>

      <Footer />
    </div>
  )
}

export default App
