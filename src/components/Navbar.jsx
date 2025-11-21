import { useState } from 'react'
import { Menu, X, CircleDollarSign, Search } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Markets' },
    { label: 'Trade' },
    { label: 'Earn' },
    { label: 'Learn' },
    { label: 'Support' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-black/30 backdrop-blur supports-[backdrop-filter]:bg-black/40">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 via-cyan-400 to-blue-500 text-black shadow-[0_0_40px_rgba(34,197,94,0.35)]">
                <CircleDollarSign className="h-6 w-6" />
              </div>
              <span className="text-lg font-semibold tracking-tight text-white">Krypto Market</span>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button key={item.label} className="text-sm text-white/80 hover:text-white transition-colors">
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <div className="relative">
                <input
                  placeholder="Search coins"
                  className="w-44 rounded-xl border border-white/10 bg-white/5 px-10 py-2 text-sm text-white placeholder-white/40 outline-none ring-emerald-400/0 focus:ring-2 focus:ring-emerald-400/40 transition"
                />
                <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
              </div>
              <button className="rounded-xl bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 px-4 py-2 text-sm font-semibold text-black shadow-[0_10px_30px_-10px_rgba(34,197,94,0.6)]">
                Get Started
              </button>
            </div>

            <button
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3">
              <div className="grid gap-2">
                {navItems.map((item) => (
                  <button key={item.label} className="rounded-lg px-3 py-2 text-left text-white/80 hover:bg-white/5">
                    {item.label}
                  </button>
                ))}
                <button className="mt-2 rounded-xl bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 px-4 py-2 text-sm font-semibold text-black">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
