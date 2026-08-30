"use client";

import { useEffect, useRef, useState } from "react";

type CaseStudy = {
  company: string;
  slug: string;
  industry: string;
  icon: string;
  metric: string;
  metricLabel: string;
  quote: string;
  author: string;
  role: string;
  fileNo: string;
  year: string;
};

const CASE_STUDIES: CaseStudy[] = [
  {
    company: "Atlas Pay",
    slug: "atlas-pay",
    industry: "Fintech — Settlement",
    icon: "fa-landmark",
    metric: "11 min",
    metricLabel: "RECONCILIATION — FROM 3 HOURS",
    quote:
      "Reason cut our reconciliation from 3 hours to 11 minutes — grounded in our ledger, not a demo dataset. Auditors stopped asking how, started asking when we ship next.",
    author: "S. Marín",
    role: "CTO, Atlas Pay",
    fileNo: "HELIX-2024-011",
    year: "2024",
  },
  {
    company: "Nereus Health",
    slug: "nereus-health",
    industry: "Healthcare — Longitudinal Memory",
    icon: "fa-heart-pulse",
    metric: "2.4M",
    metricLabel: "TOKENS / PATIENT TIMELINE",
    quote:
      "Adapt remembers what retraining forgets. Every visit sharpens context across a 7-year timeline — no re-training, no data exfil.",
    author: "Dr. A. Okoro",
    role: "Head of Clinical AI, Nereus",
    fileNo: "HELIX-2024-027",
    year: "2024",
  },
  {
    company: "Kinetic Freight",
    slug: "kinetic-freight",
    industry: "Logistics — Orchestration",
    icon: "fa-truck-fast",
    metric: "24/7",
    metricLabel: "AUTONOMOUS — 12K SHIPMENTS",
    quote:
      "Collaborate runs 12k shipments while we sleep — it plans, delegates, verifies. We only get pinged for decisions.",
    author: "J. Park",
    role: "COO, Kinetic Freight",
    fileNo: "HELIX-2024-039",
    year: "2024",
  },
];

function useInView<T extends HTMLElement>(threshold = 0.18) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
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

export default function CaseStudies() {
  const header = useInView<HTMLDivElement>(0.2);
  const featured = useInView<HTMLDivElement>(0.12);
  const grid = useInView<HTMLDivElement>(0.1);
  const featuredStudy = CASE_STUDIES[0];
  const secondary = CASE_STUDIES.slice(1);

  return (
    <section
      id="case-studies"
      aria-labelledby="case-studies-heading"
      className="relative bg-[#F7F3EE] px-[clamp(14px,3vw,32px)] pb-[clamp(36px,6vw,72px)] pt-[clamp(40px,7vw,88px)]"
    >
      {/* top hairline — distinct from Products' white/10: ink/10 on paper */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[#0A0A0A]/10" />
      {/* subtle paper grain — replaces Products' white grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, #0A0A0A 0 1px, transparent 1px 6px)`,
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #0A0A0A 1px, transparent 1px), linear-gradient(to bottom, #0A0A0A 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1150px]">
        {/* ── Editorial Header — left-aligned, indexed, ruled (not centered pill) ── */}
        <div ref={header.ref} className="w-full">
          {/* index rule */}
          <div
            className={`flex items-center gap-4 border-b border-[#0A0A0A]/15 pb-3 transition-all duration-700 ${
              header.visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
          >
            <span className="font-geist-pixel shrink-0 text-[10px] tracking-[0.2em] text-[#0A0A0A]/60">
              03 — FIELD NOTES
            </span>
            <span className="h-px flex-1 bg-[#0A0A0A]/15" aria-hidden="true" />
            <span className="font-geist-pixel hidden shrink-0 text-[10px] tracking-[0.16em] text-[#0A0A0A]/40 sm:inline">
              VOL. 2024 · ARCHIVE
            </span>
            <span className="font-geist-pixel shrink-0 rounded-full border border-[#0A0A0A]/10 bg-white px-2.5 py-1 text-[10px] tracking-[0.12em] text-[#0A0A0A]/70">
              3 DOSSIERS
            </span>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <h2
              id="case-studies-heading"
              className="font-display text-[clamp(36px,6.2vw,72px)] font-normal leading-[0.9] tracking-[-0.04em] text-[#0A0A0A]"
            >
              <span
                className={`block transition-all duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  header.visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: "0.08s" } as React.CSSProperties}
              >
                Field notes
              </span>
              <span
                className={`block font-sans text-[clamp(14px,1.6vw,18px)] font-normal tracking-[-0.01em] text-[#0A0A0A]/55 transition-all duration-700 ${
                  header.visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: "0.18s" } as React.CSSProperties}
              >
                — from production, not prototypes
              </span>
              <span
                className={`mt-1 block transition-all duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  header.visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: "0.26s" } as React.CSSProperties}
              >
                where it matters.
              </span>
            </h2>

            <p
              className={`max-w-[420px] self-end border-l border-[#0A0A0A]/10 pl-4 font-sans text-[13.5px] leading-[1.6] text-[#0A0A0A]/65 transition-all duration-700 lg:ml-auto ${
                header.visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              }`}
              style={{ transitionDelay: "0.34s" } as React.CSSProperties}
            >
              Three teams exploring Helix in production pilots. Each dossier is an
              illustrative field note — demo preview.
              <a
                href="/case-studies"
                className="mt-3 inline-flex items-center gap-1.5 font-sans text-[12px] font-semibold tracking-[-0.01em] text-[#0A0A0A] underline decoration-[#0A0A0A]/20 underline-offset-4 hover:decoration-[#0A0A0A]/40"
              >
                View all reports <i className="fa-solid fa-arrow-right text-[10px]" aria-hidden="true" />
              </a>
            </p>
          </div>
        </div>

        {/* ── Featured Dossier — wide, tabbed, stamped (signature) ── */}
        <div
          ref={featured.ref}
          className={`group relative mt-10 overflow-visible transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            featured.visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          {/* folder tab — protrudes above card, unique to this section */}
          <div className="absolute -top-[14px] left-6 z-[2] hidden h-[22px] items-center gap-2 rounded-t-[8px] border border-[#0A0A0A]/10 border-b-white bg-white px-3 sm:inline-flex">
            <span className="size-1.5 rounded-full bg-[#C43A2A]" aria-hidden="true" />
            <span className="font-geist-pixel text-[10px] tracking-[0.14em] text-[#0A0A0A]/70">
              {featuredStudy.fileNo}
            </span>
            <span className="font-geist-pixel text-[9px] tracking-[0.12em] text-[#0A0A0A]/35">
              — {featuredStudy.year} · ARCHIVE
            </span>
          </div>

          <article className="relative overflow-hidden rounded-[20px] border border-[#0A0A0A]/10 bg-white shadow-[0_2px_24px_rgba(10,10,10,0.06),0_1px_2px_rgba(10,10,10,0.08)]">
            {/* perforated left edge — dotted spine */}
            <div
              aria-hidden="true"
              className="absolute left-0 top-0 hidden h-full w-[18px] border-r border-dashed border-[#0A0A0A]/15 bg-[#F7F3EE] sm:block"
              style={{
                backgroundImage: "radial-gradient(circle, #0A0A0A 1.1px, transparent 1.5px)",
                backgroundSize: "18px 14px",
                backgroundPosition: "-6px 8px",
                backgroundRepeat: "repeat-y",
              }}
            />

            <div className="grid sm:pl-[18px] lg:grid-cols-[1.05fr_1fr]">
              {/* left — metric monument */}
              <div className="relative flex flex-col justify-between border-b border-[#0A0A0A]/10 bg-[#FFFEFB] p-7 lg:border-b-0 lg:border-r lg:p-8">
                {/* stamped badge — the risk element, rotated */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-4 top-4 rotate-[8deg] rounded-[8px] border-[1.5px] border-[#C43A2A] bg-white px-2.5 py-1 font-geist-pixel text-[10px] tracking-[0.14em] text-[#C43A2A] shadow-[0_1px_6px_rgba(196,58,42,0.15)] sm:right-6 sm:top-6"
                >
                  ILLUSTRATIVE · PREVIEW
                </span>

                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#0A0A0A]/10 bg-[#F7F3EE] px-2.5 py-1">
                    <span className="grid size-[18px] place-items-center rounded-full bg-[#0A0A0A] text-white">
                      <i className={`fa-solid ${featuredStudy.icon} text-[9px]`} aria-hidden="true" />
                    </span>
                    <span className="font-geist-pixel text-[10px] tracking-[0.14em] text-[#0A0A0A]/70">
                      {featuredStudy.company.toUpperCase()}
                    </span>
                  </div>
                  <p className="font-geist-pixel mt-3 text-[10px] tracking-[0.14em] text-[#0A0A0A]/40">
                    {featuredStudy.industry.toUpperCase()}
                  </p>
                  {/* hero metric — display type as monument, distinct from Products' 22px h3 */}
                  <p className="font-display mt-4 text-[clamp(56px,8vw,84px)] leading-[0.85] tracking-[-0.05em] text-[#0A0A0A]">
                    {featuredStudy.metric}
                  </p>
                  <p className="font-geist-pixel mt-2 inline-flex items-center gap-2 text-[10px] tracking-[0.16em] text-[#0A0A0A]/60">
                    <span className="h-px w-6 bg-[#C43A2A]" aria-hidden="true" />
                    {featuredStudy.metricLabel}
                  </p>
                </div>

                {/* ledger spec — mono row like Products' spec but ledger style */}
                <div className="mt-8 grid grid-cols-3 gap-3 border-t border-dashed border-[#0A0A0A]/15 pt-4">
                  <span className="font-geist-pixel text-[9px] leading-[1.4] tracking-[0.12em] text-[#0A0A0A]/40">
                    Latency
                    <br />
                    <b className="font-geist-pixel text-[11px] tracking-[-0.01em] text-[#0A0A0A]">11 min</b>
                  </span>
                  <span className="font-geist-pixel text-[9px] leading-[1.4] tracking-[0.12em] text-[#0A0A0A]/40">
                    Volume
                    <br />
                    <b className="font-geist-pixel text-[11px] tracking-[-0.01em] text-[#0A0A0A]">$4.2B / mo</b>
                  </span>
                  <span className="font-geist-pixel text-[9px] leading-[1.4] tracking-[0.12em] text-[#0A0A0A]/40">
                    Uptime
                    <br />
                    <b className="font-geist-pixel text-[11px] tracking-[-0.01em] text-[#0A0A0A]">99.99%</b>
                  </span>
                </div>
              </div>

              {/* right — verbatim field note */}
              <div className="relative flex flex-col bg-white p-7 lg:p-8">
                {/* faint ruled lines — paper vernacular */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-[0.045]"
                  style={{
                    backgroundImage: "repeating-linear-gradient(0deg, transparent 0 24px, #0A0A0A 25px)",
                  }}
                />
                <div className="relative">
                  <span className="font-geist-pixel text-[10px] tracking-[0.18em] text-[#0A0A0A]/35">
                    FIELD REPORT — ILLUSTRATIVE
                  </span>
                  <blockquote className="mt-3 font-sans text-[15.5px] font-[450] leading-[1.55] tracking-[-0.015em] text-[#0A0A0A]">
                    &ldquo;{featuredStudy.quote}&rdquo;
                  </blockquote>

                  <div className="mt-6 flex items-center gap-3 border-t border-[#0A0A0A]/10 pt-4">
                    <span className="grid size-8 place-items-center rounded-full bg-[#0A0A0A] font-sans text-[11px] font-semibold text-white">
                      {featuredStudy.author.charAt(0)}
                    </span>
                    <span className="flex flex-col">
                      <span className="font-sans text-[13px] font-semibold leading-none tracking-[-0.01em] text-[#0A0A0A]">
                        {featuredStudy.author}
                      </span>
                      <span className="font-sans text-[11.5px] leading-none tracking-[-0.01em] text-[#0A0A0A]/55">
                        {featuredStudy.role}
                      </span>
                    </span>
                    <span className="ml-auto hidden font-geist-pixel text-[10px] tracking-[0.12em] text-[#0A0A0A]/30 sm:inline">
                      SIGNED · {featuredStudy.year}
                    </span>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <a
                      href={`/case-studies/${featuredStudy.slug}`}
                      className="inline-flex items-center gap-2 rounded-full bg-[#0A0A0A] px-5 py-[10px] font-sans text-[13px] font-semibold tracking-[-0.01em] text-white transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A0A0A] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                    >
                      Read dossier
                      <i className="fa-solid fa-arrow-right text-[11px] opacity-80" aria-hidden="true" />
                    </a>
                    <span className="font-geist-pixel text-[10px] tracking-[0.12em] text-[#0A0A0A]/35">
                      PDF · 2.4 MB · DEMO
                    </span>
                  </div>

                  {/* handwritten annotation — illustrative, not a verified claim */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-2 bottom-[62px] hidden rotate-[-2deg] font-sans text-[11px] italic tracking-[-0.01em] text-[#C43A2A]/70 lg:block"
                  >
                    ↳ illustrative annotation
                  </span>
                </div>
              </div>
            </div>

            {/* bottom perforated edge */}
            <div
              aria-hidden="true"
              className="h-[10px] w-full border-t border-dashed border-[#0A0A0A]/15 bg-[#F7F3EE]"
              style={{
                backgroundImage: "radial-gradient(circle, #0A0A0A 1.1px, transparent 1.5px)",
                backgroundSize: "14px 10px",
                backgroundPosition: "8px 0",
              }}
            />
          </article>
        </div>

        {/* ── Secondary Dossiers — 2-col file cards with tabs ── */}
        <div
          ref={grid.ref}
          className="mt-6 grid gap-6 lg:grid-cols-2"
        >
          {secondary.map((c, i) => (
            <article
              key={c.company}
              className={`group relative transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                grid.visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 0.14}s` } as React.CSSProperties}
            >
              {/* tab */}
              <div className="absolute -top-[10px] left-5 z-[2] inline-flex h-[18px] items-center gap-1.5 rounded-t-[7px] border border-[#0A0A0A]/10 border-b-white bg-white px-2.5">
                <span className="size-1 rounded-full bg-[#0A0A0A]/30" aria-hidden="true" />
                <span className="font-geist-pixel text-[9px] tracking-[0.14em] text-[#0A0A0A]/60">
                  {c.fileNo}
                </span>
              </div>

              <div className="relative overflow-hidden rounded-[18px] border border-[#0A0A0A]/10 bg-white p-[1px] shadow-[0_2px_16px_rgba(10,10,10,0.05)]">
                <div className="relative flex flex-col rounded-[17px] bg-white p-5 sm:p-6">
                  {/* faint ruled lines */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-[17px] opacity-[0.03]"
                    style={{
                      backgroundImage: "repeating-linear-gradient(0deg, transparent 0 22px, #0A0A0A 23px)",
                    }}
                  />
                  <div className="relative flex items-start justify-between gap-3">
                    <span className="inline-flex items-center gap-2">
                      <span className="grid size-6 place-items-center rounded-full bg-[#0A0A0A] text-white">
                        <i className={`fa-solid ${c.icon} text-[10px]`} aria-hidden="true" />
                      </span>
                      <span className="font-geist-pixel text-[10px] tracking-[0.14em] text-[#0A0A0A]">
                        {c.company.toUpperCase()}
                      </span>
                    </span>
                    <span className="font-geist-pixel shrink-0 rounded-full border border-[#0A0A0A]/10 bg-[#F7F3EE] px-2 py-1 text-[9px] tracking-[0.12em] text-[#0A0A0A]/60">
                      {c.industry.split("—")[0].trim().toUpperCase()}
                    </span>
                  </div>

                  <div className="relative mt-4 flex items-baseline gap-3">
                    <p className="font-display text-[38px] leading-none tracking-[-0.04em] text-[#0A0A0A]">
                      {c.metric}
                    </p>
                    <span className="h-px flex-1 bg-[#0A0A0A]/10" aria-hidden="true" />
                    <span
                      aria-hidden="true"
                      className="rotate-[6deg] rounded-[6px] border border-[#C43A2A]/70 px-1.5 py-0.5 font-geist-pixel text-[8px] tracking-[0.12em] text-[#C43A2A]"
                    >
                      ARCHIVE
                    </span>
                  </div>
                  <p className="font-geist-pixel relative mt-1 text-[9px] tracking-[0.16em] text-[#0A0A0A]/50">
                    {c.metricLabel}
                  </p>

                  <blockquote className="relative mt-4 border-t border-dashed border-[#0A0A0A]/15 pt-4 font-sans text-[13.5px] leading-[1.55] tracking-[-0.01em] text-[#0A0A0A]/75">
                    &ldquo;{c.quote}&rdquo;
                  </blockquote>

                  <div className="relative mt-4 flex items-center gap-2.5">
                    <span className="grid size-7 place-items-center rounded-full bg-[#0A0A0A] font-sans text-[10px] font-semibold text-white">
                      {c.author.split(" ").pop()?.charAt(0) ?? c.author.charAt(0)}
                    </span>
                    <span className="flex flex-col">
                      <span className="font-sans text-xs font-semibold leading-none tracking-[-0.01em] text-[#0A0A0A]">
                        {c.author}
                      </span>
                      <span className="font-sans text-[11px] leading-none tracking-[-0.01em] text-[#0A0A0A]/55">
                        {c.role}
                      </span>
                    </span>
                  </div>

                  <a
                    href={`/case-studies/${c.slug}`}
                    className="relative mt-5 inline-flex w-fit items-center gap-1.5 border-b border-[#0A0A0A]/15 pb-1 font-sans text-[12.5px] font-semibold tracking-[-0.01em] text-[#0A0A0A] transition-colors hover:border-[#0A0A0A]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A0A0A] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  >
                    Read dossier <i className="fa-solid fa-arrow-right text-[10px] translate-y-px opacity-60" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* footer rule — archival, not SaaS CTA */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[#0A0A0A]/10 pt-4">
          <span className="font-geist-pixel text-[10px] tracking-[0.14em] text-[#0A0A0A]/40">
            ARCHIVE REF: HELIX-FIELD-2024 · 3 OF 3 DOSSIERS SHOWN ·{" "}
            <a href="/case-studies" className="underline decoration-[#0A0A0A]/20 underline-offset-4 hover:decoration-[#0A0A0A]/40">
              Request full archive
            </a>
          </span>
          <a
            href="#top"
            className="font-geist-pixel inline-flex items-center gap-2 text-[10px] tracking-[0.16em] text-[#0A0A0A]/60 transition-colors hover:text-[#0A0A0A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A0A0A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F3EE]"
          >
            <i className="fa-solid fa-arrow-up text-[9px]" aria-hidden="true" />
            BACK TO TOP
          </a>
        </div>
      </div>
    </section>
  );
}
