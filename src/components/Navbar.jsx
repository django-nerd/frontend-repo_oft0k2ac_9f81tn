import { useMemo, useState } from 'react'
import { Menu, X, CircleDollarSign, Search } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')

  const navItems = [
    { label: 'Markets', href: '#markets' },
    { label: 'Trade', href: '#trade' },
    { label: 'Earn', href: '#earn' },
    { label: 'Learn', href: '#learn' },
    { label: 'Support', href: '#support' },
  ]

  const coins = [
    { symbol: 'BTC', name: 'Bitcoin', href: '#markets' },
    { symbol: 'ETH', name: 'Ethereum', href: '#markets' },
    { symbol: 'SOL', name: 'Solana', href: '#markets' },
    { symbol: 'XRP', name: 'XRP', href: '#markets' },
    { symbol: 'ADA', name: 'Cardano', href: '#markets' },
  ]

  const filtered = useMemo(() => {
    if (!query.trim()) return []
    const q = query.toLowerCase()
    return coins.filter(c => c.symbol.toLowerCase().includes(q) || c.name.toLowerCase().includes(q)).slice(0, 6)
  }, [query])

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-full border border-white/10 bg-black/30 backdrop-blur-xl supports-[backdrop-filter]:bg-black/40">
          <div className="flex items-center gap-3 px-4 py-3">
            {/* Brand */}
            <a href="#top" className="flex items-center gap-2 rounded-full px-2 py-1 text-white hover:text-emerald-300 transition">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 via-cyan-400 to-blue-500 text-black shadow-[0_0_40px_rgba(34,197,94,0.35)]">
                <CircleDollarSign className="h-5 w-5" />
              </span>
              <span className="text-base font-semibold tracking-tight">Krypto Market</span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-2 mx-auto">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group relative rounded-full px-4 py-2 text-sm text-white/80 hover:text-white transition-colors"
                >
                  <span>{item.label}</span>
                  <span className="pointer-events-none absolute inset-x-3 -bottom-1 h-px scale-x-0 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              ))}
            </nav>

            {/* Search + CTA (desktop) */}
            <div className="hidden md:flex items-center gap-3 relative ml-auto">
              <div className="relative">
                <input
                  placeholder="Search coins"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-56 rounded-full border border-white/10 bg-white/5 pl-10 pr-4 py-2 text-sm text-white placeholder-white/40 outline-none ring-emerald-400/0 focus:ring-2 focus:ring-emerald-400/40 transition"
                />
                <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />

                {filtered.length > 0 && (
                  <div className="absolute left-0 right-0 mt-2 overflow-hidden rounded-2xl border border-white/10 bg-black/90 backdrop-blur-xl">
                    <ul className="max-h-64 overflow-y-auto p-1">
                      {filtered.map((c) => (
                        <li key={c.symbol}>
                          <a href={c.href} className="flex items-center justify-between gap-3 rounded-xl px-3 py-2 text-sm text-white/90 hover:bg-white/5">
                            <span className="font-medium">{c.symbol}</span>
                            <span className="text-white/60">{c.name}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <a href="#trade" className="rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 px-4 py-2 text-sm font-semibold text-black shadow-[0_10px_30px_-10px_rgba(34,197,94,0.6)] hover:brightness-110">
                Get Started
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden ml-auto inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile menu */}
          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3">
              <div className="grid gap-2">
                {navItems.map((item) => (
                  <a key={item.label} href={item.href} className="rounded-xl px-3 py-2 text-left text-white/80 hover:bg-white/5">
                    {item.label}
                  </a>
                ))}
                <div className="relative">
                  <div className="relative">
                    <input
                      placeholder="Search coins"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-10 py-2 text-sm text-white placeholder-white/40 outline-none ring-emerald-400/0 focus:ring-2 focus:ring-emerald-400/40 transition"
                    />
                    <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                  </div>
                  {filtered.length > 0 && (
                    <div className="mt-2 overflow-hidden rounded-xl border border-white/10 bg-black/90 backdrop-blur-xl">
                      <ul className="max-h-64 overflow-y-auto p-1">
                        {filtered.map((c) => (
                          <li key={c.symbol}>
                            <a href={c.href} className="flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm text-white/90 hover:bg-white/5">
                              <span className="font-medium">{c.symbol}</span>
                              <span className="text-white/60">{c.name}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <a href="#trade" className="mt-2 rounded-xl bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 px-4 py-2 text-sm font-semibold text-black">
                  Get Started
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
