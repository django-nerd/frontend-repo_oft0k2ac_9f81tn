import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Markets from './components/Markets'
import CTA from './components/CTA'

function Section({ id, title, description }) {
  return (
    <section id={id} className="relative bg-black py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10">
          <h2 className="text-3xl font-semibold text-white">{title}</h2>
          {description && (
            <p className="mt-2 max-w-3xl text-white/70">{description}</p>
          )}
          <div className="mt-6 text-white/60 text-sm">
            More content coming soon.
          </div>
        </div>
      </div>
    </section>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-black text-white scroll-smooth">
      <Navbar />
      <Hero />
      {/* Trade section placeholder */}
      <Section
        id="trade"
        title="Trade"
        description="Fast order execution, advanced charts, and a seamless experience."
      />
      <Markets />
      {/* Earn section placeholder */}
      <Section
        id="earn"
        title="Earn"
        description="Put your assets to work with staking, savings, and rewards."
      />
      {/* Learn section placeholder */}
      <Section
        id="learn"
        title="Learn"
        description="Guides, tutorials, and insights to master crypto fundamentals."
      />
      {/* Support section placeholder */}
      <Section
        id="support"
        title="Support"
        description="24/7 help center and community support to keep you moving."
      />
      <CTA />
      <footer className="bg-black/90 border-t border-white/10 py-10" id="footer">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/60">© {new Date().getFullYear()} Krypto Market. All rights reserved.</p>
            <div className="flex items-center gap-6 text-white/60">
              <a href="#privacy">Privacy</a>
              <a href="#terms">Terms</a>
              <a href="#support">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
