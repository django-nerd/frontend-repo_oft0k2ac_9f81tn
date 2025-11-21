import { useEffect, useState } from 'react'
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

  // Placeholder for future real-time fetch
  useEffect(() => {
    setCoins(demoData)
  }, [])

  return (
    <section className="relative bg-black py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white">Trending Markets</h2>
            <p className="mt-1 text-white/60">Live snapshots for top pairs</p>
          </div>
          <button className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/10">
            View All
          </button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {coins.map((c) => (
            <div key={c.symbol} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-white/70">{c.name}</div>
                  <div className="text-lg font-semibold text-white">{c.symbol}</div>
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
              <div className="mt-3 h-10 rounded-lg bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-blue-500/20"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
