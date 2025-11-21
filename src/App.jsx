import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Markets from './components/Markets'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Markets />
      <CTA />
      <footer className="bg-black/90 border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/60">© {new Date().getFullYear()} Krypto Market. All rights reserved.</p>
            <div className="flex items-center gap-6 text-white/60">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
