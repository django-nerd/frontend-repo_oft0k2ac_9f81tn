import Spline from '@splinetool/react-spline'
import { ArrowRight, Shield, Zap, LineChart } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-black pt-24">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/44zrIZf-iQZhbQNQ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(16,185,129,0.25),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.25),transparent_35%),radial-gradient(circle_at_50%_90%,rgba(6,182,212,0.2),transparent_30%)]"></div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <div className="mt-10 max-w-2xl">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
                  The fastest way to explore the cryptomarket
                </h1>
                <p className="mt-5 text-lg text-white/80">
                  Real-time prices, deep analytics, and a modern trading experience. Built for speed, trust, and scale.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#trade" className="pointer-events-auto inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 px-5 py-3 text-sm font-semibold text-black shadow-[0_10px_30px_-10px_rgba(34,197,94,0.6)]">
                    Launch App <ArrowRight className="h-4 w-4" />
                  </a>
                  <a href="#markets" className="pointer-events-auto inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">
                    View Markets
                  </a>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-6 max-w-lg">
                  <Feature icon={<Zap className='h-4 w-4' />} label="Low Latency" value="< 50ms" />
                  <Feature icon={<Shield className='h-4 w-4' />} label="Secure" value="Bank-grade" />
                  <Feature icon={<LineChart className='h-4 w-4' />} label="Pairs" value={"500+"} />
                </div>
              </div>
            </div>

            <div className="lg:col-span-5"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Feature({ icon, label, value }) {
  return (
    <div className="pointer-events-auto rounded-xl border border-white/10 bg-black/40 p-4 text-white/80">
      <div className="flex items-center gap-2 text-white">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5">{icon}</div>
        <span className="text-sm">{label}</span>
      </div>
      <div className="mt-2 text-xl font-semibold text-white">{value}</div>
    </div>
  )
}
