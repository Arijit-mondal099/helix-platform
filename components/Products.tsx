"use client";

import { useEffect, useRef, useState } from "react";

type Product = {
  eyebrow: string;
  meta: string;
  icon: string;
  title: string;
  desc: string;
  cta: string;
  spec: string;
};

const PRODUCTS: Product[] = [
  {
    eyebrow: "Inference",
    meta: "<120 ms",
    icon: "fa-bolt",
    title: "Reason",
    desc: "Models that reason where your data lives — grounded in your context, sub-120 ms, tuned for production traffic not demos.",
    cta: "Deploy Reason",
    spec: "ON-DEVICE · GROUNDED · VERIFIED",
  },
  {
    eyebrow: "Memory",
    meta: "2.4M tokens",
    icon: "fa-layer-group",
    title: "Adapt",
    desc: "Memory that evolves without retraining. Every turn sharpens context across sessions, tools, and teammates.",
    cta: "Enable Adapt",
    spec: "PERSISTENT · ADAPTIVE · PRIVATE",
  },
  {
    eyebrow: "Orchestration",
    meta: "24/7",
    icon: "fa-diagram-project",
    title: "Collaborate",
    desc: "Agents that plan, delegate and verify — running your workflows while you stay in control of the decisions.",
    cta: "Orchestrate",
    spec: "PLANNED · DELEGATED · OBSERVED",
  },
];

function useInView<T extends HTMLElement>(threshold = 0.18) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

export default function Products() {
  const header = useInView<HTMLDivElement>(0.2);
  const grid = useInView<HTMLDivElement>(0.12);

  return (
    <section
      id="products"
      aria-labelledby="products-heading"
      className="relative bg-black px-[clamp(14px,3vw,32px)] pb-[clamp(32px,6vw,72px)] pt-[clamp(40px,7vw,88px)]"
    >
      {/* hairline rule — encodes that this is a system break, not decoration */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* faint grid texture — the aesthetic risk: instrument paper, not SaaS */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          background:
            "radial-gradient(600px 400px at 50% 0%, rgba(255,255,255,0.08), transparent 70%)",
        }}
      />

      <div className="relative mx-auto flex w-full max-w-[1080px] flex-col items-center">
        {/* Header — mirrors Hero trust row + headline + subhead */}
        <div
          ref={header.ref}
          className="flex w-full max-w-[720px] flex-col items-center text-center"
        >
          {/* pill — same construction as Hero trust-pill, stripped of avatars */}
          <div
            className={`inline-flex items-center gap-2 rounded-full border border-trust-border bg-trust-bg px-3 py-[5px] transition-all duration-700 ${
              header.visible ? "translate-y-0 opacity-100 blur-0" : "translate-y-3 opacity-0 blur-[4px]"
            }`}
            style={{ transitionDelay: "0.05s" } as React.CSSProperties}
          >
            <span className="grid size-2 place-items-center">
              <span className="size-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
            </span>
            <span className="font-geist-pixel text-[10px] font-normal tracking-[0.18em] text-trust-text">
              THE MODULAR STACK
            </span>
          </div>

          <h2
            id="products-heading"
            className="font-display mt-5 w-full text-center text-[clamp(28px,6vw,64px)] font-normal leading-[0.95] tracking-[-0.04em] text-white max-[720px]:tracking-[-0.06em]"
          >
            <span
              className={`block transition-all duration-[850ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                header.visible ? "translate-y-0 opacity-100" : "translate-y-[14px] opacity-0"
              }`}
              style={{ transitionDelay: "0.12s" } as React.CSSProperties}
            >
              Systems that
            </span>
            <span
              className={`block transition-all duration-[850ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                header.visible ? "translate-y-0 opacity-100" : "translate-y-[14px] opacity-0"
              }`}
              style={{ transitionDelay: "0.28s" } as React.CSSProperties}
            >
              learn to evolve
            </span>
          </h2>

          <p
            className={`mt-4 max-w-[480px] text-center font-sans text-[clamp(13.5px,1.45vw,15.5px)] leading-[1.6] text-[#d0d0d0]/75 transition-all duration-700 max-[720px]:max-w-[92%] ${
              header.visible ? "translate-y-0 opacity-100 blur-0" : "translate-y-3 opacity-0 blur-[4px]"
            }`}
            style={{ transitionDelay: "0.38s" } as React.CSSProperties}
          >
            Three primitives from the same chassis — each instrument tuned for production, not prototypes.
          </p>
        </div>

        {/* Grid — 3-col, hero-matched tokens but instrument vernacular */}
        <div
          ref={grid.ref}
          className="mt-[clamp(28px,5vw,48px)] grid w-full grid-cols-3 gap-[clamp(14px,2vw,20px)] max-[900px]:grid-cols-1 max-[900px]:max-w-[520px]"
        >
          {PRODUCTS.map((p, i) => (
            <article
              key={p.title}
              className={`group relative flex flex-col overflow-hidden rounded-[28px] border border-white/[0.08] bg-pill-dark p-[1px] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-white/15 ${
                grid.visible ? "translate-y-0 opacity-100 blur-0" : "translate-y-6 opacity-0 blur-[6px]"
              }`}
              style={{ transitionDelay: `${0.08 + i * 0.12}s` } as React.CSSProperties}
            >
              {/* inner chassis */}
              <div className="relative flex flex-1 flex-col rounded-[27px] bg-[#0f0f10] px-6 pb-6 pt-5">
                {/* scanline veil — signature, subtle */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-[27px] opacity-[0.045]"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(0deg, transparent 0px, transparent 2px, white 3px)",
                  }}
                />
                {/* top inset highlight */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* eyebrow — instrument spec, not numbered steps */}
                <div className="relative flex items-center justify-between gap-3 border-b border-white/[0.06] pb-3.5">
                  <span className="inline-flex items-center gap-2">
                    <span className="size-1 rounded-full bg-white/70 group-hover:bg-white group-hover:shadow-[0_0_6px_rgba(255,255,255,0.7)] transition-all" />
                    <span className="font-geist-pixel text-[10px] tracking-[0.16em] text-muted">
                      {p.eyebrow.toUpperCase()}
                    </span>
                  </span>
                  <span className="font-geist-pixel text-[10px] tracking-[0.12em] text-white/45">
                    {p.meta.toUpperCase()}
                  </span>
                </div>

                {/* icon — hero avatar language repurposed as instrument dial */}
                <div className="relative mt-5 flex items-start justify-between">
                  <span className="grid size-[42px] place-items-center rounded-full border border-trust-border bg-trust-bg p-[4px] shadow-[0_2px_10px_rgba(0,0,0,0.4)] transition-transform duration-300 group-hover:-translate-y-0.5">
                    <span className="grid size-full place-items-center rounded-full bg-white">
                      <i className={`fa-solid ${p.icon} text-[14px] leading-none text-[#111]`} aria-hidden="true" />
                    </span>
                  </span>
                  <span className="font-geist-pixel hidden text-[10px] tracking-[0.14em] text-white/20 sm:inline">
                    SYS·{p.eyebrow.slice(0, 3).toUpperCase()}
                  </span>
                </div>

                <h3 className="font-display relative mt-4 text-[22px] font-normal leading-none tracking-[-0.03em] text-white">
                  {p.title}
                </h3>

                <p className="relative mt-2.5 line-clamp-3 font-sans text-[13.5px] leading-[1.55] text-[#d0d0d0]/70">
                  {p.desc}
                </p>

                {/* spec rule — encodes capability, not decoration */}
                <p className="font-geist-pixel relative mt-5 border-t border-white/[0.06] pt-3 text-[9px] tracking-[0.16em] text-muted/70">
                  {p.spec}
                </p>

                {/* CTA — exact hero shadow-cta pill, scaled */}
                <a
                  href="#"
                  className="relative mt-5 inline-flex w-fit items-center justify-center gap-1.5 self-start rounded-full bg-white px-5 py-[10px] font-sans text-[13.5px] font-semibold tracking-[-0.01em] text-black shadow-cta transition-all duration-200 hover:-translate-y-px hover:scale-[1.02] hover:shadow-cta-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0f10]"
                >
                  {p.cta}
                  <i className="fa-solid fa-arrow-right text-[11px] translate-y-px opacity-70" aria-hidden="true" />
                </a>

                {/* bottom glow on hover */}
                <div className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-white/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:via-white/15 group-hover:opacity-100" />
              </div>
            </article>
          ))}
        </div>

        {/* footer affordance — subtle anchor */}
        <a
          href="#top"
          className="font-geist-pixel mt-10 inline-flex items-center gap-2 text-[10px] tracking-[0.18em] text-muted transition-colors hover:text-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          <i className="fa-solid fa-arrow-up text-[9px]" aria-hidden="true" />
          BACK TO TOP
        </a>
      </div>
    </section>
  );
}
