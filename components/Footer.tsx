import Image from "next/image";

export default function Footer() {
  return (
    <footer
      aria-labelledby="footer-heading"
      className="relative bg-[#F7F3EE] px-[clamp(14px,3vw,32px)] pb-[clamp(24px,3vw,36px)] pt-[clamp(28px,4vw,48px)] text-[#0A0A0A]"
    >
      {/* top seam from black Contact — single ink hairline, intentional bookend to CaseStudies paper */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[#0A0A0A]/10" aria-hidden="true" />

      <h2 id="footer-heading" className="sr-only">
        Helix footer
      </h2>

      <div className="relative mx-auto w-full max-w-[1150px]">
        {/* ---- main ledger ---- */}
        <div className="grid gap-8 lg:grid-cols-[1.35fr_0.85fr_0.85fr_1fr] lg:gap-6">
          {/* brand + thesis + inventory plate (the one signature) */}
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded-full bg-[#0A0A0A] shadow-[0_2px_10px_rgba(10,10,10,0.12)]">
                <Image src="/logo.webp" alt="" width={28} height={28} className="h-[64%] w-[64%] object-contain" />
              </span>
              <span className="font-display text-[18px] leading-none tracking-[-0.03em] text-[#0A0A0A]">HELIX</span>
              <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-[#0A0A0A]/10 bg-white px-2.5 py-1 font-geist-pixel text-[9px] tracking-[0.12em] text-[#0A0A0A]/60">
                <span className="size-1.5 rounded-full bg-signal animate-signal-pulse" aria-hidden="true" />
                SYS-REV 04 · LIVE
              </span>
            </div>

            <p className="mt-3 max-w-[320px] font-sans text-[13.5px] leading-[1.5] tracking-[-0.01em] text-[#0A0A0A]/65">
              Intelligence designed to evolve — modular inference, memory, and orchestration for production.
            </p>

            {/* inventory plate — stamped metal vernacular, encodes true build info */}
            <div className="mt-5 inline-flex w-full max-w-[340px] flex-col gap-2 rounded-[12px] border border-[#0A0A0A]/10 bg-white px-3.5 py-3 shadow-[0_2px_12px_rgba(10,10,10,0.06)] sm:w-auto">
              <div className="flex items-center justify-between gap-3">
                <span className="font-geist-pixel text-[9px] tracking-[0.14em] text-[#0A0A0A]/40">INVENTORY PLATE</span>
                <span className="font-geist-pixel text-[9px] tracking-[0.12em] text-[#0A0A0A]/30">HELIX-CHASSIS · 2024—2026</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <span className="inline-flex items-center gap-1.5 rounded-[6px] border border-[#0A0A0A]/10 bg-[#F7F3EE] px-2 py-1 font-geist-pixel text-[9px] tracking-[0.08em] text-[#0A0A0A]">
                  <span className="size-1 rounded-full bg-[#0A0A0A]" aria-hidden="true" />
                  REV 04
                </span>
                <span className="inline-flex items-center rounded-[6px] border border-[#0A0A0A]/10 bg-white px-2 py-1 font-geist-pixel text-[9px] tracking-[0.08em] text-[#0A0A0A]/70">
                  BUILD 149.32
                </span>
                <span className="inline-flex items-center gap-1 rounded-[6px] border border-[#0A0A0A]/10 bg-white px-2 py-1 font-geist-pixel text-[9px] tracking-[0.08em] text-[#0A0A0A]/70">
                  <span className="size-1 rounded-full bg-emerald-600" aria-hidden="true" /> SOC 2
                </span>
                <span className="inline-flex items-center rounded-[6px] border border-[#0A0A0A]/10 bg-white px-2 py-1 font-geist-pixel text-[9px] tracking-[0.08em] text-[#0A0A0A]/70">
                  ENC RELAY
                </span>
              </div>
              <div className="flex items-center gap-1.5 border-t border-dashed border-[#0A0A0A]/10 pt-2">
                <span className="size-1 rounded-full bg-[#0A0A0A]/20" aria-hidden="true" />
                <span className="size-1 rounded-full bg-[#0A0A0A]/20" aria-hidden="true" />
                <span className="font-geist-pixel text-[8px] tracking-[0.12em] text-[#0A0A0A]/30">STENCIL · VOL. 2024 · ARCHIVE REF HELIX-FIELD-2024</span>
              </div>
            </div>
          </div>

          {/* modules — structural, not generic "Product" */}
          <nav aria-label="Modules" className="min-w-0">
            <h3 className="font-geist-pixel text-[10px] tracking-[0.16em] text-[#0A0A0A]/40">MODULES</h3>
            <ul className="mt-3 grid gap-2.5">
              <li>
                <a href="#products" className="group inline-flex flex-col gap-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A0A0A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F3EE]">
                  <span className="font-sans text-[13.5px] font-semibold leading-none tracking-[-0.01em] text-[#0A0A0A] group-hover:underline decoration-[#0A0A0A]/15 underline-offset-4">
                    Reason
                  </span>
                  <span className="font-geist-pixel text-[10px] tracking-[0.08em] text-[#0A0A0A]/45">Inference · &lt;120 ms</span>
                </a>
              </li>
              <li>
                <a href="#products" className="group inline-flex flex-col gap-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A0A0A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F3EE]">
                  <span className="font-sans text-[13.5px] font-semibold leading-none tracking-[-0.01em] text-[#0A0A0A] group-hover:underline decoration-[#0A0A0A]/15 underline-offset-4">Adapt</span>
                  <span className="font-geist-pixel text-[10px] tracking-[0.08em] text-[#0A0A0A]/45">Memory · 2.4M tokens</span>
                </a>
              </li>
              <li>
                <a href="#products" className="group inline-flex flex-col gap-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A0A0A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F3EE]">
                  <span className="font-sans text-[13.5px] font-semibold leading-none tracking-[-0.01em] text-[#0A0A0A] group-hover:underline decoration-[#0A0A0A]/15 underline-offset-4">Collaborate</span>
                  <span className="font-geist-pixel text-[10px] tracking-[0.08em] text-[#0A0A0A]/45">Orchestration · 24/7</span>
                </a>
              </li>
            </ul>
          </nav>

          {/* field notes — case studies ledger */}
          <nav aria-label="Field notes" className="min-w-0">
            <h3 className="font-geist-pixel text-[10px] tracking-[0.16em] text-[#0A0A0A]/40">FIELD NOTES</h3>
            <ul className="mt-3 grid gap-2.5">
              <li>
                <a href="/case-studies/atlas-pay" className="group inline-flex flex-col gap-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A0A0A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F3EE]">
                  <span className="font-sans text-[13.5px] font-semibold leading-none tracking-[-0.01em] text-[#0A0A0A] group-hover:underline decoration-[#0A0A0A]/15 underline-offset-4">Atlas Pay — 11 min</span>
                  <span className="font-geist-pixel text-[10px] tracking-[0.08em] text-[#0A0A0A]/45">HELIX-2024-011</span>
                </a>
              </li>
              <li>
                <a href="/case-studies/nereus-health" className="group inline-flex flex-col gap-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A0A0A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F3EE]">
                  <span className="font-sans text-[13.5px] font-semibold leading-none tracking-[-0.01em] text-[#0A0A0A] group-hover:underline decoration-[#0A0A0A]/15 underline-offset-4">Nereus Health — 2.4M</span>
                  <span className="font-geist-pixel text-[10px] tracking-[0.08em] text-[#0A0A0A]/45">HELIX-2024-027</span>
                </a>
              </li>
              <li>
                <a href="/case-studies/kinetic-freight" className="group inline-flex flex-col gap-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A0A0A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F3EE]">
                  <span className="font-sans text-[13.5px] font-semibold leading-none tracking-[-0.01em] text-[#0A0A0A] group-hover:underline decoration-[#0A0A0A]/15 underline-offset-4">Kinetic Freight — 24/7</span>
                  <span className="font-geist-pixel text-[10px] tracking-[0.08em] text-[#0A0A0A]/45">HELIX-2024-039</span>
                </a>
              </li>
              <li className="pt-1">
                <a href="/case-studies" className="inline-flex items-center gap-1.5 font-sans text-[12.5px] font-semibold tracking-[-0.01em] text-[#0A0A0A] underline decoration-[#0A0A0A]/15 underline-offset-4 hover:decoration-[#0A0A0A]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A0A0A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F3EE]">
                  All dossiers <i className="fa-solid fa-arrow-right text-[10px] opacity-60" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </nav>

          {/* relay — contact, single CTA */}
          <div className="min-w-0">
            <h3 className="font-geist-pixel text-[10px] tracking-[0.16em] text-[#0A0A0A]/40">RELAY</h3>
            <div className="mt-3 flex flex-col gap-3">
              <a
                href="mailto:hello@helix.run"
                className="group inline-flex flex-col gap-1 rounded-[12px] border border-[#0A0A0A]/10 bg-white px-3.5 py-3 transition-colors hover:border-[#0A0A0A]/15 hover:bg-[#FFFEFB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A0A0A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F3EE]"
              >
                <span className="font-geist-pixel text-[9px] tracking-[0.14em] text-[#0A0A0A]/40">DIRECT</span>
                <span className="font-sans text-[13.5px] font-semibold tracking-[-0.01em] text-[#0A0A0A]">hello@helix.run</span>
                <span className="font-sans text-[11.5px] leading-none text-[#0A0A0A]/55">Avg 3.2h · PGP 0x8F2A</span>
              </a>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full border border-[#0A0A0A]/10 bg-white px-2.5 py-1 font-geist-pixel text-[9px] tracking-[0.1em] text-[#0A0A0A]/60">SF · LDN · REMOTE</span>
                <span className="inline-flex items-center gap-1 rounded-full border border-[#0A0A0A]/10 bg-white px-2.5 py-1 font-geist-pixel text-[9px] tracking-[0.1em] text-[#0A0A0A]/60">
                  <span className="size-1 rounded-full bg-emerald-600" aria-hidden="true" /> 149.32 MHz
                </span>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#0A0A0A] px-5 py-2.5 font-sans text-[13px] font-semibold tracking-[-0.01em] text-white transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A0A0A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F3EE]"
              >
                Transmit — pilot request <i className="fa-solid fa-paper-plane text-[11px] opacity-70" aria-hidden="true" />
              </a>
              <span className="font-geist-pixel text-[9px] tracking-[0.08em] text-[#0A0A0A]/35">No sales deck — scoped test plan</span>
            </div>
          </div>
        </div>

        {/* bottom rule — archival, legal, year */}
        <div className="mt-8 flex flex-col gap-3 border-t border-[#0A0A0A]/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-geist-pixel text-[10px] tracking-[0.08em] text-[#0A0A0A]/40">
            <span>© 2024—2026 Helix Platform</span>
            <span className="hidden sm:inline text-[#0A0A0A]/15" aria-hidden="true">
              ·
            </span>
            <a href="#" className="underline decoration-[#0A0A0A]/15 underline-offset-4 hover:text-[#0A0A0A]/70 hover:decoration-[#0A0A0A]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A0A0A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F3EE]">
              Privacy
            </a>
            <a href="#" className="underline decoration-[#0A0A0A]/15 underline-offset-4 hover:text-[#0A0A0A]/70 hover:decoration-[#0A0A0A]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A0A0A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F3EE]">
              Terms
            </a>
            <a href="#" className="underline decoration-[#0A0A0A]/15 underline-offset-4 hover:text-[#0A0A0A]/70 hover:decoration-[#0A0A0A]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A0A0A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F3EE]">
              Security
            </a>
            <span className="hidden sm:inline text-[#0A0A0A]/15" aria-hidden="true">
              ·
            </span>
            <span className="text-[#0A0A0A]/30">HELIX-CHASSIS REV 04</span>
          </div>

          <a
            href="#top"
            className="inline-flex items-center gap-1.5 self-start font-geist-pixel text-[10px] tracking-[0.14em] text-[#0A0A0A]/50 transition-colors hover:text-[#0A0A0A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A0A0A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F3EE] sm:self-auto"
          >
            BACK TO TOP <i className="fa-solid fa-arrow-up text-[9px]" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
