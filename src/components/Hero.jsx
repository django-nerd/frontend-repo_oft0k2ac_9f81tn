import Spline from '@splinetool/react-spline'
import { ArrowRight, Shield, Zap, LineChart } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-black pt-28">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/44zrIZf-iQZhbQNQ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient veil */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(16,185,129,0.18),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.22),transparent_35%),radial-gradient(circle_at_50%_90%,rgba(6,182,212,0.18),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black" />

      {/* Content */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-3xl gap-8 text-center">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-white/70">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              Live markets updating in real-time
            </div>
            <h1 className="text-5xl sm:text-6xl font-semibold leading-tight tracking-tight">
              Trade crypto with unmatched clarity
            </h1>
            <p className="text-white/80 text-lg">
              Deep liquidity, instant execution, and beautiful analytics. Built for beginners and pros.
            </p>

            <div className="mx-auto flex flex-wrap items-center justify-center gap-3">
              <a href="#trade" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 px-6 py-3 text-sm font-semibold text-black shadow-[0_10px_30px_-10px_rgba(34,197,94,0.6)] hover:brightness-110">
                Launch App <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#markets" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/10">
                View Markets
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <Feature icon={<Zap className='h-4 w-4' />} label="Latency" value="< 50ms" />
              <Feature icon={<Shield className='h-4 w-4' />} label="Security" value="Bank-grade" />
              <Feature icon={<LineChart className='h-4 w-4' />} label="Pairs" value={'500+'} />
            </div>
          </div>
        </div>

        {/* Glass cards row */}
        <div className="mx-auto mt-14 max-w-5xl px-4">
          <div className="grid gap-4 sm:grid-cols-3">
            {["Instant swaps", "Advanced charts", "One-click orders"].map((t, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur hover:border-emerald-400/40 transition-colors">
                <div className="text-sm text-white/70">{t}</div>
                <div className="mt-2 h-12 rounded-lg bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-blue-500/20" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Feature({ icon, label, value }) {
  return (
    <div className="pointer-events-auto rounded-2xl border border-white/10 bg-black/40 p-4 text-white/80 backdrop-blur">
      <div className="flex items-center justify-center gap-2 text-white">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5">{icon}</div>
        <span className="text-sm">{label}</span>
      </div>
      <div className="mt-1 text-center text-lg font-semibold text-white">{value}</div>
    </div>
  )
}
