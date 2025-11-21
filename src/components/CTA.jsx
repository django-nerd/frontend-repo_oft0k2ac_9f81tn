export default function CTA() {
  return (
    <section className="relative bg-black py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-400/10 via-cyan-400/10 to-blue-500/10 p-10">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-3xl font-semibold text-white">Start trading in minutes</h3>
              <p className="mt-2 text-white/70">Create an account, fund it, and access hundreds of markets with high-speed execution.</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 px-6 py-3 text-sm font-semibold text-black">
                Create Account
              </button>
              <button className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white">
                View Fees
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
