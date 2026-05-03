export default function Home() {
  const faqs = [
    {
      q: "What is domain front-running?",
      a: "Some registrars monitor search queries and register domains you look up before you can buy them, then resell at inflated prices. Our proxy prevents this."
    },
    {
      q: "How does the anonymous proxy work?",
      a: "Your domain queries are routed through rotating anonymous endpoints so no single registrar can correlate searches back to you or your IP address."
    },
    {
      q: "Which TLDs are supported?",
      a: "We support all major TLDs including .com, .net, .org, .io, .co, and hundreds more through our aggregated availability API."
    }
  ];

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          Anti Front-Running Protection
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Search Domains Safely.<br />
          <span className="text-[#58a6ff]">No One Steals Your Ideas.</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Registrars watch your searches and buy domains before you do. Our anonymous proxy routes your queries through multiple endpoints so your ideas stay yours.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-lg"
        >
          Start Protecting Searches
        </a>
        <p className="text-[#8b949e] text-sm mt-3">No registrar ever sees your queries</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-3 gap-4 mb-20">
        {[
          { icon: "🔒", label: "Anonymous Routing" },
          { icon: "⚡", label: "Instant Results" },
          { icon: "🌐", label: "500+ TLDs" }
        ].map(({ icon, label }) => (
          <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 text-center">
            <div className="text-2xl mb-2">{icon}</div>
            <div className="text-sm text-[#c9d1d9] font-medium">{label}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wider mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$9</div>
          <div className="text-[#8b949e] mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited anonymous domain searches",
              "Rotating proxy endpoints",
              "Aggregated multi-registrar results",
              "Search history (private, encrypted)",
              "API access included"
            ].map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                {feature}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started – $9/mo
          </a>
          <p className="text-[#8b949e] text-xs mt-3">Cancel anytime. No contracts.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm border-t border-[#30363d] pt-8">
        © {new Date().getFullYear()} Domain Search Protector. All rights reserved.
      </footer>
    </main>
  );
}
