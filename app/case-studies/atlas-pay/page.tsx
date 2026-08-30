import Link from "next/link";

export const metadata = {
  title: "Atlas Pay — Helix Case Study",
  description:
    "Illustrative field note for Atlas Pay — reconciliation from 3 hours to 11 minutes. Demo preview, not verified production result.",
};

export default function AtlasPayPage() {
  return (
    <main className="min-h-screen bg-[#F7F3EE] px-[clamp(14px,3vw,32px)] py-12">
      <div className="mx-auto w-full max-w-[820px]">
        <Link
          href="/case-studies"
          className="font-geist-pixel inline-flex items-center gap-2 text-[11px] tracking-[0.16em] text-[#0A0A0A]/60 hover:text-[#0A0A0A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A0A0A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F3EE]"
        >
          <i className="fa-solid fa-arrow-left text-[9px]" aria-hidden="true" /> BACK TO ALL REPORTS
        </Link>

        <div className="mt-6 flex items-center gap-3 border-b border-[#0A0A0A]/15 pb-3">
          <span className="font-geist-pixel text-[10px] tracking-[0.2em] text-[#0A0A0A]/60">
            HELIX-2024-011
          </span>
          <span className="h-px flex-1 bg-[#0A0A0A]/15" aria-hidden="true" />
          <span className="font-geist-pixel text-[10px] tracking-[0.16em] text-[#0A0A0A]/40">
            ATLAS PAY · FINTECH
          </span>
        </div>

        <p className="font-geist-pixel mt-6 text-[10px] tracking-[0.18em] text-[#0A0A0A]/40">
          ILLUSTRATIVE FIELD NOTE — DEMO PREVIEW
        </p>
        <h1 className="font-display mt-2 text-[clamp(32px,5vw,52px)] leading-[0.9] tracking-[-0.04em] text-[#0A0A0A]">
          Atlas Pay
        </h1>
        <p className="font-geist-pixel mt-2 text-[10px] tracking-[0.14em] text-[#0A0A0A]/50">
          11 MIN · RECONCILIATION — FROM 3 HOURS
        </p>

        <div className="mt-6 rounded-[16px] border border-[#0A0A0A]/10 bg-white p-6 shadow-[0_2px_16px_rgba(10,10,10,0.05)]">
          <p className="font-sans text-[15px] leading-[1.6] text-[#0A0A0A]/70">
            <span className="font-semibold text-[#0A0A0A]">Illustrative preview:</span> In this demo dossier, Helix Reason is shown
            supporting a reconciliation workflow that went from{" "}
            <span className="font-semibold text-[#0A0A0A]">3 hours to 11 minutes</span> in a simulated
            ledger environment. This example is illustrative and not an independently
            verified production result.
          </p>
          <blockquote className="mt-4 border-l-2 border-[#0A0A0A]/10 pl-4 font-sans text-[14px] italic leading-[1.55] text-[#0A0A0A]/70">
            &ldquo;Reason cut our reconciliation from 3 hours to 11 minutes — grounded in our
            ledger, not a demo dataset. Auditors stopped asking how, started asking when we ship
            next.&rdquo; — S. Marín, CTO, Atlas Pay (illustrative quote)
          </blockquote>
          <p className="font-geist-pixel mt-4 text-[10px] tracking-[0.12em] text-[#0A0A0A]/35">
            Metrics shown are demo placeholders. Replace with verified customer data before
            claiming production results.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 rounded-full bg-[#0A0A0A] px-5 py-2 font-sans text-[13px] font-semibold text-white hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A0A0A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F3EE]"
          >
            View all reports <i className="fa-solid fa-arrow-right text-[11px]" aria-hidden="true" />
          </Link>
          <Link
            href="/#case-studies"
            className="inline-flex items-center gap-2 rounded-full border border-[#0A0A0A]/15 bg-white px-5 py-2 font-sans text-[13px] font-semibold text-[#0A0A0A] hover:border-[#0A0A0A]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A0A0A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F3EE]"
          >
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
