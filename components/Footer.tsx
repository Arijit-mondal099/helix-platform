import Image from "next/image";

export default function Footer() {
  return (
    <footer
      aria-labelledby="footer-heading"
      className="relative bg-black px-[clamp(14px,3vw,32px)] pb-0 pt-0 text-white"
    >
      <h2 id="footer-heading" className="sr-only">
        Helix footer
      </h2>

      <div className="relative mx-auto w-full max-w-[1150px]">
        {/* ---- floating CTA card — bridges Contact → Footer (-mt-24 overlap) ---- */}
        <div className="relative z-10 mx-auto -mt-24 max-w-4xl">
          <div className="rounded-[24px] border border-white/10 bg-[#131416] p-[1px] shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
            <div className="relative overflow-hidden rounded-[23px] bg-[#0D0E10] px-6 py-8 text-center sm:px-8 sm:py-10">
              <Image
                src="/footer-cta.png"
                alt=""
                fill
                sizes="(max-width: 896px) 100vw, 896px"
                className="absolute inset-0 h-full w-full object-cover"
                priority={false}
              />
              <div className="absolute inset-0 bg-[#0D0E10]/62" aria-hidden="true" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-white/[0.04]" aria-hidden="true" />
              <div className="relative">
                <div className="mx-auto inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 backdrop-blur-sm">
                  <span className="size-1.5 rounded-full bg-signal animate-signal-pulse" aria-hidden="true" />
                  <span className="font-geist-pixel text-[9px] tracking-[0.14em] text-white/70">HELIX — SYS-04 · LIVE</span>
                </div>
                <h3 className="mx-auto mt-4 max-w-[420px] font-sans text-[26px] font-semibold leading-[1.1] tracking-[-0.03em] text-white sm:text-[30px]">
                  Intelligence designed to evolve.
                </h3>
                <p className="mx-auto mt-3 max-w-[480px] font-sans text-[13.5px] leading-[1.6] text-white/65">
                  Modular inference, memory, and orchestration for production — scoped pilot, not a deck.
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center justify-center gap-1.5 rounded-full bg-signal px-7 py-3 font-sans text-[14px] font-semibold tracking-[-0.01em] text-black transition-colors hover:bg-[#ffc24a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0E10]"
                >
                  Transmit — pilot request <i className="fa-solid fa-paper-plane text-[11px] opacity-60" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ---- main ledger — screenshot proportions: 1.8fr + 0.9fr*3 ---- */}
        <div className="mt-24 grid gap-10 lg:grid-cols-[1.8fr_0.9fr_0.9fr_0.9fr] lg:gap-12">
          {/* brand + thesis — inventory plate deleted */}
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.2)]">
                <Image src="/logo.webp" alt="" width={28} height={28} className="h-[64%] w-[64%] object-contain" />
              </span>
              <span className="font-display text-[18px] leading-none tracking-[-0.03em] text-white">HELIX</span>
              <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 font-geist-pixel text-[9px] tracking-[0.12em] text-white/60">
                <span className="size-1.5 rounded-full bg-signal animate-signal-pulse" aria-hidden="true" />
                SYS-REV 04 · LIVE
              </span>
            </div>
            <p className="mt-3 max-w-[320px] font-sans text-[13.5px] leading-[1.5] tracking-[-0.01em] text-white/60">
              Intelligence designed to evolve — modular inference, memory, and orchestration for production.
            </p>
          </div>

          {/* MODULES + FIELD NOTES + RELAY — mobile: 2-col, RELAY spans full width */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-3 lg:grid-cols-3 lg:gap-12">
            <nav aria-label="Modules" className="min-w-0">
              <h3 className="font-geist-pixel text-[10px] tracking-[0.16em] text-white/40">MODULES</h3>
              <ul className="mt-3 grid gap-2.5">
                <li>
                  <a href="#products" className="group inline-flex flex-col gap-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-black">
                    <span className="font-sans text-[13.5px] font-semibold leading-none tracking-[-0.01em] text-white group-hover:underline decoration-white/15 underline-offset-4">
                      Reason
                    </span>
                    <span className="font-geist-pixel text-[10px] tracking-[0.08em] text-white/40">Inference · &lt;120 ms</span>
                  </a>
                </li>
                <li>
                  <a href="#products" className="group inline-flex flex-col gap-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-black">
                    <span className="font-sans text-[13.5px] font-semibold leading-none tracking-[-0.01em] text-white group-hover:underline decoration-white/15 underline-offset-4">Adapt</span>
                    <span className="font-geist-pixel text-[10px] tracking-[0.08em] text-white/40">Memory · 2.4M tokens</span>
                  </a>
                </li>
                <li>
                  <a href="#products" className="group inline-flex flex-col gap-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-black">
                    <span className="font-sans text-[13.5px] font-semibold leading-none tracking-[-0.01em] text-white group-hover:underline decoration-white/15 underline-offset-4">Collaborate</span>
                    <span className="font-geist-pixel text-[10px] tracking-[0.08em] text-white/40">Orchestration · 24/7</span>
                  </a>
                </li>
              </ul>
            </nav>

            <nav aria-label="Field notes" className="min-w-0">
              <h3 className="font-geist-pixel text-[10px] tracking-[0.16em] text-white/40">FIELD NOTES</h3>
              <ul className="mt-3 grid gap-2.5">
                <li>
                  <a href="/case-studies/atlas-pay" className="group inline-flex flex-col gap-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-black">
                    <span className="font-sans text-[13.5px] font-semibold leading-none tracking-[-0.01em] text-white group-hover:underline decoration-white/15 underline-offset-4">Atlas Pay — 11 min</span>
                    <span className="font-geist-pixel text-[10px] tracking-[0.08em] text-white/40">HELIX-2024-011</span>
                  </a>
                </li>
                <li>
                  <a href="/case-studies/nereus-health" className="group inline-flex flex-col gap-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-black">
                    <span className="font-sans text-[13.5px] font-semibold leading-none tracking-[-0.01em] text-white group-hover:underline decoration-white/15 underline-offset-4">Nereus Health — 2.4M</span>
                    <span className="font-geist-pixel text-[10px] tracking-[0.08em] text-white/40">HELIX-2024-027</span>
                  </a>
                </li>
                <li>
                  <a href="/case-studies/kinetic-freight" className="group inline-flex flex-col gap-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-black">
                    <span className="font-sans text-[13.5px] font-semibold leading-none tracking-[-0.01em] text-white group-hover:underline decoration-white/15 underline-offset-4">Kinetic Freight — 24/7</span>
                    <span className="font-geist-pixel text-[10px] tracking-[0.08em] text-white/40">HELIX-2024-039</span>
                  </a>
                </li>
              </ul>
            </nav>

            <nav aria-label="Relay" className="col-span-2 min-w-0 lg:col-span-1">
              <h3 className="font-geist-pixel text-[10px] tracking-[0.16em] text-white/40">RELAY</h3>
              <ul className="mt-3 grid gap-2.5">
                <li>
                  <a href="mailto:hello@helix.run" className="group inline-flex flex-col gap-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-black">
                    <span className="font-sans text-[13.5px] font-semibold leading-none tracking-[-0.01em] text-white group-hover:underline decoration-white/15 underline-offset-4">hello@helix.run</span>
                    <span className="font-geist-pixel text-[10px] tracking-[0.08em] text-white/40">Avg 3.2h · Encrypted</span>
                  </a>
                </li>
                <li>
                  <a href="#contact" className="font-geist-pixel text-[10px] tracking-[0.08em] text-white/40 underline decoration-white/15 underline-offset-4 hover:text-white/70 hover:decoration-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-black">
                    Start pilot →
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* bottom rule — minimal: © 2026 Helix · Privacy · Terms */}
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-geist-pixel text-[10px] tracking-[0.08em] text-white/40">
            <span>© 2026 Helix</span>
            <span className="hidden sm:inline text-white/15" aria-hidden="true">
              ·
            </span>
            <a href="#" className="underline decoration-white/15 underline-offset-4 hover:text-white/70 hover:decoration-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-black">
              Privacy
            </a>
            <a href="#" className="underline decoration-white/15 underline-offset-4 hover:text-white/70 hover:decoration-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-black">
              Terms
            </a>
            <span className="hidden sm:inline text-white/15" aria-hidden="true">
              ·
            </span>
            <span className="text-signal/60">SYS-04 · Encrypted relay</span>
          </div>
        </div>
      </div>

      {/* giant watermark — HELIX, same treatment as LOCAL EDITOR */}
      <div aria-hidden="true" className="pointer-events-none mt-6 select-none overflow-hidden">
        <p className="whitespace-nowrap text-center font-display text-[clamp(72px,18vw,220px)] leading-[0.82] tracking-[-0.06em] text-white/[0.04] translate-y-[18%]">
          HELIX
        </p>
      </div>
    </footer>
  );
}
