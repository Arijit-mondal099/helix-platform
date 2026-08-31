"use client";

import { useEffect, useRef, useState } from "react";

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

type FormState = {
  name: string;
  email: string;
  company: string;
  workload: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

export default function Contact() {
  const header = useInView<HTMLDivElement>(0.2);
  const info = useInView<HTMLDivElement>(0.14);
  const formRef = useInView<HTMLDivElement>(0.12);

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    workload: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const validate = (v: FormState): Errors => {
    const e: Errors = {};
    if (!v.name.trim()) e.name = "Name is required";
    if (!v.email.trim()) e.email = "Work email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = "Enter a valid email";
    if (!v.company.trim()) e.company = "Company is required";
    if (!v.message.trim()) e.message = "Tell us about your workload";
    else if (v.message.trim().length < 12) e.message = "Add a little more detail (12+ chars)";
    return e;
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate(form);
    setErrors(e);
    setTouched({ name: true, email: true, company: true, message: true });
    if (Object.keys(e).length > 0) return;
    setStatus("sending");
    window.setTimeout(() => setStatus("success"), 700);
  };

  const set = (k: keyof FormState, val: string) => setForm((s) => ({ ...s, [k]: val }));

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden bg-black px-[clamp(14px,3vw,32px)] pb-[clamp(132px,14vw,200px)] pt-[clamp(40px,6vw,72px)]"
    >
      {/* quiet transition from paper — single hairline, no gradient stack */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-[1150px]">
        {/* index rule — continues 03 FIELD NOTES → 04 TRANSMIT — simplified, one dot */}
        <div
          ref={header.ref as unknown as React.RefObject<HTMLDivElement>}
          className={`flex items-center gap-4 border-b border-white/10 pb-3 transition-all duration-700 ${
            header.visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
        >
          <span className="font-geist-pixel shrink-0 text-[11px] tracking-[0.18em] text-white">04 — TRANSMIT</span>
          <span className="h-px flex-1 bg-white/10" aria-hidden="true" />
          <span className="hidden sm:inline-flex items-center gap-2 font-geist-pixel text-[10px] tracking-[0.14em] text-white/50">
            <span className="size-1.5 rounded-full bg-signal animate-signal-pulse" aria-hidden="true" />
            CHANNEL OPEN
          </span>
          <span className="font-geist-pixel shrink-0 rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[10px] tracking-[0.12em] text-white/70">
            AVG 3.2H REPLY
          </span>
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* LEFT: one clear job, readable hierarchy */}
          <div ref={info.ref} className="min-w-0">
            <h2
              id="contact-heading"
              className="font-display text-[clamp(38px,6vw,64px)] font-normal leading-[0.92] tracking-[-0.04em] text-white"
            >
              <span
                className={`block transition-all duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  info.visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: "0.06s" } as React.CSSProperties}
              >
                Initiate
              </span>
              <span
                className={`block font-sans text-[16px] font-normal tracking-[-0.015em] text-white/60 transition-all duration-700 ${
                  info.visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: "0.14s" } as React.CSSProperties}
              >
                — transmission to Helix
              </span>
              <span
                className={`mt-1 block transition-all duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  info.visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: "0.22s" } as React.CSSProperties}
              >
                transmission.
              </span>
            </h2>

            <p
              className={`mt-5 max-w-[440px] border-l-2 border-signal/40 pl-4 font-sans text-[15px] leading-[1.65] text-white/80 transition-all duration-700 ${
                info.visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              }`}
              style={{ transitionDelay: "0.3s" } as React.CSSProperties}
            >
              For production teams evaluating a pilot. Tell us your stack, volume, and latency
              budget — we’ll reply with a scoped test plan, not a deck.
            </p>
            <p
              className={`mt-3 max-w-[440px] pl-[18px] font-geist-pixel text-[10px] tracking-[0.14em] text-white/40 transition-all duration-700 ${
                info.visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              }`}
              style={{ transitionDelay: "0.32s" } as React.CSSProperties}
            >
              PILOT SCOPE · NO GENERIC DEMO
            </p>

            {/* direct channels — fewer, higher contrast */}
            <div
              className={`mt-8 grid gap-3 transition-all duration-700 ${
                info.visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: "0.38s" } as React.CSSProperties}
            >
              <div className="grid gap-3 sm:grid-cols-2">
                <a
                  href="mailto:hello@helix.run"
                  className="group flex flex-col gap-1 rounded-[14px] border border-white/10 bg-white/[0.05] px-4 py-4 transition-colors hover:border-white/15 hover:bg-white/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  <span className="font-geist-pixel text-[10px] tracking-[0.14em] text-white/50">DIRECT RELAY</span>
                  <span className="font-sans text-[14px] font-semibold tracking-[-0.01em] text-white">
                    hello@helix.run
                  </span>
                  <span className="font-sans text-[12px] leading-none text-white/60">Response &lt; 24h · PGP 0x8F2A</span>
                </a>
                <div className="flex flex-col gap-1 rounded-[14px] border border-white/10 bg-white/[0.04] px-4 py-4">
                  <span className="font-geist-pixel text-[10px] tracking-[0.14em] text-white/50">FREQUENCY</span>
                  <span className="font-geist-pixel text-[12px] tracking-[0.08em] text-white">SYS-04 / CH-07</span>
                  <span className="font-sans text-[12px] leading-none text-white/60">SF · LDN · Remote</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 font-geist-pixel text-[10px] tracking-[0.1em] text-white/60">
                  <i className="fa-regular fa-clock text-[10px] text-white/40" aria-hidden="true" /> 20 min pilot call
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 font-geist-pixel text-[10px] tracking-[0.1em] text-white/60">
                  <span className="size-1.5 rounded-full bg-emerald-400" aria-hidden="true" /> SOC 2 · Encrypted
                </span>
              </div>
            </div>

            <p
              className={`mt-8 border-t border-white/10 pt-4 font-geist-pixel text-[10px] leading-[1.5] tracking-[0.1em] text-white/40 transition-all duration-700 ${
                info.visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              }`}
              style={{ transitionDelay: "0.46s" } as React.CSSProperties}
            >
              ARCHIVE REF: HELIX-COMMS-2024 · FOLLOWING 03 FIELD NOTES ·{" "}
              <a href="/case-studies" className="text-white/60 underline decoration-white/20 underline-offset-4 hover:text-white hover:decoration-white/40">
                View dossiers
              </a>
            </p>
          </div>

          {/* RIGHT: single quiet chassis — readable fields are the hero */}
          <div
            ref={formRef.ref}
            className={`relative transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              formRef.visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            {/* one structural tab — the only dossiers callback */}
            <div className="absolute -top-[12px] left-6 z-[2] hidden h-[20px] items-center gap-2 rounded-t-[8px] border border-white/10 border-b-[#131416] bg-[#131416] px-3 sm:inline-flex">
              <span className="size-1.5 rounded-full bg-signal shadow-[0_0_6px_oklch(0.86_0.16_84/0.5)] animate-signal-pulse" aria-hidden="true" />
              <span className="font-geist-pixel text-[10px] tracking-[0.14em] text-white/70">SYS-04 — SECURE RELAY</span>
            </div>

            <div className="relative overflow-hidden rounded-[20px] border border-white/10 bg-[#131416] p-[1px] shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
              <div className="relative rounded-[19px] bg-[#0D0E10] px-5 py-6 sm:px-7 sm:py-7">
                {status === "success" ? (
                  <div role="status" aria-live="polite" className="flex flex-col items-start gap-4 py-2">
                    <span className="inline-flex items-center gap-2 rounded-full border border-signal/20 bg-signal-soft px-3 py-1 font-geist-pixel text-[10px] tracking-[0.14em] text-signal">
                      <span className="size-1.5 rounded-full bg-signal animate-signal-pulse" aria-hidden="true" />
                      TRANSMISSION QUEUED
                    </span>
                    <h3 className="font-display text-[30px] leading-none tracking-[-0.03em] text-white">Received.</h3>
                    <p className="font-sans text-[14.5px] leading-[1.6] text-white/75">
                      Your payload is in the relay. We’ll reply from{" "}
                      <span className="font-semibold text-white">hello@helix.run</span> within ~3 hours during
                      relay hours — with a scoped pilot plan, not a calendar link.
                    </p>
                    <div className="mt-1 flex flex-wrap gap-2">
                      <span className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 font-geist-pixel text-[10px] tracking-[0.12em] text-white/60">
                        REF: HX-{(Date.now() % 10000).toString().padStart(4, "0")}
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 font-geist-pixel text-[10px] tracking-[0.12em] text-white/50">
                        ENCRYPTED · 30D
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setStatus("idle");
                        setForm({ name: "", email: "", company: "", workload: "", message: "" });
                        setErrors({});
                        setTouched({});
                      }}
                      className="mt-2 inline-flex items-center gap-1.5 border-b border-white/20 pb-1 font-sans text-[13px] font-semibold tracking-[-0.01em] text-white hover:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0E10]"
                    >
                      Send another <i className="fa-solid fa-arrow-right text-[11px] opacity-60" aria-hidden="true" />
                    </button>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
                    <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-3">
                      <span className="font-geist-pixel text-[11px] tracking-[0.14em] text-white">PILOT REQUEST</span>
                      <span className="font-geist-pixel text-[10px] tracking-[0.1em] text-white/35">ENCRYPTED RELAY · CH 04</span>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field
                        id="contact-name"
                        label="Full name"
                        value={form.name}
                        error={touched.name ? errors.name : undefined}
                        placeholder="Ada Lovelace"
                        onChange={(v) => set("name", v)}
                        onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                        autoComplete="name"
                      />
                      <Field
                        id="contact-email"
                        label="Work email"
                        type="email"
                        value={form.email}
                        error={touched.email ? errors.email : undefined}
                        placeholder="ada@atlas-pay.run"
                        onChange={(v) => set("email", v)}
                        onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                        autoComplete="email"
                      />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-[1.2fr_0.8fr]">
                      <Field
                        id="contact-company"
                        label="Company / team"
                        value={form.company}
                        error={touched.company ? errors.company : undefined}
                        placeholder="Atlas Pay · Platform"
                        onChange={(v) => set("company", v)}
                        onBlur={() => setTouched((t) => ({ ...t, company: true }))}
                        autoComplete="organization"
                      />
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="contact-workload" className="font-sans text-[11px] font-medium tracking-[-0.01em] text-white/70">
                          Workload <span className="font-normal text-white/40">— optional</span>
                        </label>
                        <div className="relative">
                          <select
                            id="contact-workload"
                            value={form.workload}
                            onChange={(e) => set("workload", e.target.value)}
                            className="w-full appearance-none rounded-[12px] border border-white/10 bg-white/[0.06] px-3.5 py-3 pr-9 font-sans text-[14px] leading-none text-white outline-none transition-colors focus:border-signal/40 focus:bg-white/[0.08] focus:ring-2 focus:ring-signal/20"
                          >
                            <option value="" className="bg-[#1A1C1E]">Select workload</option>
                            <option value="reason" className="bg-[#1A1C1E]">Reason · Inference &lt;120 ms</option>
                            <option value="adapt" className="bg-[#1A1C1E]">Adapt · 2.4M token memory</option>
                            <option value="collaborate" className="bg-[#1A1C1E]">Collaborate · 24/7</option>
                            <option value="full" className="bg-[#1A1C1E]">Full stack · Helix</option>
                          </select>
                          <i className="fa-solid fa-chevron-down pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[11px] text-white/40" aria-hidden="true" />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-baseline justify-between gap-2">
                        <label htmlFor="contact-message" className="font-sans text-[11px] font-medium tracking-[-0.01em] text-white/70">
                          Message
                        </label>
                        <span className="font-geist-pixel text-[10px] tracking-[0.08em] text-white/35">
                          {form.message.length}/600
                        </span>
                      </div>
                      <textarea
                        id="contact-message"
                        value={form.message}
                        onChange={(e) => set("message", e.target.value.slice(0, 600))}
                        onBlur={() => setTouched((t) => ({ ...t, message: true }))}
                        aria-invalid={Boolean(touched.message && errors.message)}
                        aria-describedby={touched.message && errors.message ? "contact-message-error" : "contact-message-hint"}
                        placeholder="Stack, volume, latency budget — e.g. 4.2B settlements/mo on Postgres + Kafka, need <120 ms grounded reasoning at the edge…"
                        rows={4}
                        className="min-h-[118px] w-full resize-none rounded-[12px] border border-white/10 bg-white/[0.06] px-3.5 py-3 font-sans text-[14px] leading-[1.6] text-white placeholder:text-white/40 outline-none transition-colors focus:border-signal/40 focus:bg-white/[0.08] focus:ring-2 focus:ring-signal/20"
                      />
                      {touched.message && errors.message ? (
                        <p id="contact-message-error" className="font-sans text-[12px] leading-none text-[#ff7a7a]">
                          {errors.message}
                        </p>
                      ) : (
                        <p id="contact-message-hint" className="font-sans text-[11px] leading-[1.4] text-white/40">
                          Be specific — we scope the pilot from this note. No sales deck.
                        </p>
                      )}
                    </div>

                    <p className="font-sans text-[11px] leading-[1.5] text-white/40">
                      By transmitting, you agree to Helix storing this note for pilot evaluation (30 days, encrypted). No marketing list.{" "}
                      <a href="#" className="text-white/60 underline decoration-white/20 underline-offset-4 hover:text-white hover:decoration-white/40">
                        Privacy
                      </a>
                      .
                    </p>

                    <div className="flex flex-wrap items-center gap-3 border-t border-white/10 pt-5">
                      <button
                        type="submit"
                        disabled={status === "sending"}
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 font-sans text-[14px] font-semibold tracking-[-0.01em] text-black shadow-cta transition-all duration-200 hover:-translate-y-px hover:shadow-cta-hover disabled:opacity-60 disabled:hover:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0E10]"
                      >
                        {status === "sending" ? (
                          <>
                            <span className="size-3.5 animate-spin rounded-full border-2 border-black/15 border-t-black" aria-hidden="true" />
                            Transmitting…
                          </>
                        ) : (
                          <>
                            Transmit <i className="fa-solid fa-paper-plane text-[11px] opacity-60" aria-hidden="true" />
                          </>
                        )}
                      </button>
                      <span className="font-geist-pixel text-[10px] tracking-[0.1em] text-white/35">ENTER ↵ · ENCRYPTED</span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  value,
  error,
  placeholder,
  onChange,
  onBlur,
  type = "text",
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  error?: string;
  placeholder: string;
  onChange: (v: string) => void;
  onBlur: () => void;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="font-sans text-[11px] font-medium tracking-[-0.01em] text-white/70">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full rounded-[12px] border border-white/10 bg-white/[0.06] px-3.5 py-3 font-sans text-[14px] leading-none text-white placeholder:text-white/40 outline-none transition-colors focus:border-signal/40 focus:bg-white/[0.08] focus:ring-2 focus:ring-signal/20"
      />
      {error ? (
        <p id={`${id}-error`} className="font-sans text-[12px] leading-none text-[#ff7a7a]">
          {error}
        </p>
      ) : null}
    </div>
  );
}
