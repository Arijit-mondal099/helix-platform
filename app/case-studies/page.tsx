import Link from "next/link";

export const metadata = {
  title: "Case Studies — Helix",
  description: "Illustrative field notes from Helix pilots — demo previews.",
};

const DOSSIERS = [
  {
    slug: "atlas-pay",
    company: "Atlas Pay",
    industry: "Fintech — Settlement",
    metric: "11 min",
    label: "RECONCILIATION — FROM 3 HOURS",
    fileNo: "HELIX-2024-011",
  },
  {
    slug: "nereus-health",
    company: "Nereus Health",
    industry: "Healthcare — Longitudinal Memory",
    metric: "2.4M",
    label: "TOKENS / PATIENT TIMELINE",
    fileNo: "HELIX-2024-027",
  },
  {
    slug: "kinetic-freight",
    company: "Kinetic Freight",
    industry: "Logistics — Orchestration",
    metric: "24/7",
    label: "AUTONOMOUS — 12K SHIPMENTS",
    fileNo: "HELIX-2024-039",
  },
];

export default function CaseStudiesIndex() {
  return (
    <main className="min-h-screen bg-[#F7F3EE] px-[clamp(14px,3vw,32px)] py-12">
      <div className="mx-auto w-full max-w-[900px]">
        <Link
          href="/#case-studies"
          className="font-geist-pixel inline-flex items-center gap-2 text-[11px] tracking-[0.16em] text-[#0A0A0A]/60 hover:text-[#0A0A0A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A0A0A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F3EE]"
        >
          <i className="fa-solid fa-arrow-left text-[9px]" aria-hidden="true" /> BACK TO FIELD NOTES
        </Link>

        <div className="mt-6 flex items-center gap-4 border-b border-[#0A0A0A]/15 pb-3">
          <span className="font-geist-pixel text-[10px] tracking-[0.2em] text-[#0A0A0A]/60">
            03 — FIELD NOTES
          </span>
          <span className="h-px flex-1 bg-[#0A0A0A]/15" aria-hidden="true" />
          <span className="font-geist-pixel text-[10px] tracking-[0.16em] text-[#0A0A0A]/40">
            VOL. 2024 · ARCHIVE
          </span>
        </div>

        <h1 className="font-display mt-6 text-[clamp(32px,5vw,48px)] leading-[0.95] tracking-[-0.04em] text-[#0A0A0A]">
          All reports
        </h1>
        <p className="mt-3 max-w-[560px] font-sans text-[14px] leading-[1.6] text-[#0A0A0A]/65">
          Illustrative field notes from Helix pilots. These are demo previews for
          layout and navigation — not independently verified production results.
        </p>

        <div className="mt-8 grid gap-4">
          {DOSSIERS.map((d) => (
            <Link
              key={d.slug}
              href={`/case-studies/${d.slug}`}
              className="group flex items-center justify-between gap-4 rounded-[16px] border border-[#0A0A0A]/10 bg-white p-5 shadow-[0_2px_16px_rgba(10,10,10,0.05)] transition-colors hover:border-[#0A0A0A]/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A0A0A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F3EE]"
            >
              <span>
                <span className="font-geist-pixel text-[10px] tracking-[0.14em] text-[#0A0A0A]/40">
                  {d.fileNo} · {d.industry}
                </span>
                <span className="mt-1 block font-sans text-[16px] font-semibold tracking-[-0.01em] text-[#0A0A0A] group-hover:underline group-hover:decoration-[#0A0A0A]/20 group-hover:underline-offset-4">
                  {d.company}
                </span>
                <span className="font-geist-pixel mt-1 block text-[10px] tracking-[0.12em] text-[#0A0A0A]/50">
                  {d.metric} · {d.label}
                </span>
              </span>
              <i className="fa-solid fa-arrow-right shrink-0 text-[12px] text-[#0A0A0A]/40 group-hover:text-[#0A0A0A]" aria-hidden="true" />
            </Link>
          ))}
        </div>

        <p className="font-geist-pixel mt-10 border-t border-[#0A0A0A]/10 pt-4 text-[10px] tracking-[0.12em] text-[#0A0A0A]/40">
          ARCHIVE REF: HELIX-FIELD-2024 · DEMO CONTENT ·{" "}
          <Link href="/#case-studies" className="underline decoration-[#0A0A0A]/20 underline-offset-4 hover:decoration-[#0A0A0A]/40">
            Return to home
          </Link>
        </p>
      </div>
    </main>
  );
}
