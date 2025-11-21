import { useEffect, useMemo, useState } from 'react'
import { TrendingUp, TrendingDown } from 'lucide-react'

const demoData = [
  { symbol: 'BTC', name: 'Bitcoin', price: 67250.23, change: 2.14 },
  { symbol: 'ETH', name: 'Ethereum', price: 3250.87, change: -1.02 },
  { symbol: 'SOL', name: 'Solana', price: 156.45, change: 4.67 },
  { symbol: 'XRP', name: 'XRP', price: 0.54, change: 0.86 },
  { symbol: 'ADA', name: 'Cardano', price: 0.78, change: -0.45 },
]

export default function Markets() {
  const [coins, setCoins] = useState(demoData)
  const [search, setSearch] = useState('')

  useEffect(() => {
    setCoins(demoData)
  }, [])

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    if (!q) return coins
    return coins.filter(c => c.symbol.toLowerCase().includes(q) || c.name.toLowerCase().includes(q))
  }, [coins, search])

  return (
    <section id="markets" className="relative bg-black py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_200px_at_10%_0%,rgba(16,185,129,0.08),transparent),radial-gradient(600px_200px_at_90%_0%,rgba(59,130,246,0.08),transparent)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-white">Markets</h2>
            <p className="mt-1 text-white/60">Discover and track your favorite assets</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search coins in list"
                className="w-64 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder-white/40 outline-none ring-emerald-400/0 focus:ring-2 focus:ring-emerald-400/40 transition"
              />
            </div>
            <a href="#trade" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/10">
              View All
            </a>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {filtered.map((c) => (
            <a href={`#coin-${c.symbol.toLowerCase()}`} key={c.symbol} className="group rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-4 transition-colors hover:border-emerald-400/40">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-wide text-white/60">{c.name}</div>
                  <div className="text-xl font-semibold text-white">{c.symbol}</div>
                </div>
                <div className={`${c.change >= 0 ? 'text-emerald-400' : 'text-rose-400'} flex items-center gap-1`}>
                  {c.change >= 0 ? (
                    <TrendingUp className="h-4 w-4" />
                  ) : (
                    <TrendingDown className="h-4 w-4" />
                  )}
                  <span className="text-sm font-medium">{c.change}%</span>
                </div>
              </div>
              <div className="mt-3 text-2xl font-semibold tracking-tight text-white">
                {c.price < 1 ? c.price.toFixed(4) : c.price.toLocaleString('en-US', { maximumFractionDigits: 2 })}
                <span className="ml-1 text-sm text-white/60">USD</span>
              </div>
              <div className="mt-4 h-10 rounded-lg bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-blue-500/20" />
            </a>
          ))}
        </div>

        {/* Coin detail anchors (placeholder sections) */}
        <div className="mt-12 grid gap-4">
          {coins.map((c) => (
            <div key={c.symbol} id={`coin-${c.symbol.toLowerCase()}`} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-white/80"><span className="font-semibold text-white">{c.symbol}</span> — {c.name}</div>
                <a className="text-emerald-400 hover:text-emerald-300 text-sm" href="#trade">Open in Trade</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
