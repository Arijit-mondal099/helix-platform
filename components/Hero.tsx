export default function Hero() {
  return (
    <main className="z-[1] flex w-full max-w-[900px] flex-1 flex-col items-center justify-center text-center min-h-0">
      {/* Trust row - Tailwind replacement for .trust */}
      <div
        className="anim inline-flex items-center gap-0 mb-[clamp(16px,2.5vh,26px)] max-[700px]:mb-2.5"
        style={{ ["--d" as string]: "0.05s" } as React.CSSProperties}
      >
        <div className="flex items-center" aria-hidden="true">
          {/* Avatar 1 - Tailwind replacement for .avatar.a1 */}
          <span className="grid size-[clamp(36px,4.5vw,42px)] place-items-center shrink-0 rounded-full border border-trust-border bg-trust-bg p-[5px] transition-transform duration-300 hover:-translate-y-0.5 z-[1] max-[420px]:size-[34px]">
            <span className="grid size-full place-items-center overflow-hidden rounded-full bg-white">
              <i className="fa-brands fa-microsoft text-[#111] leading-none text-[calc(clamp(36px,4.5vw,42px)*0.34)] max-[420px]:text-[11.5px]" />
            </span>
          </span>
          {/* Avatar 2 */}
          <span className="grid size-[clamp(36px,4.5vw,42px)] place-items-center shrink-0 rounded-full border border-trust-border bg-trust-bg p-[5px] transition-transform duration-300 hover:-translate-y-1 z-[2] -ml-[calc(clamp(36px,4.5vw,42px)*0.42)] max-[420px]:size-[34px] max-[420px]:-ml-[14px]">
            <span className="grid size-full place-items-center overflow-hidden rounded-full bg-white">
              <i className="fa-brands fa-amazon text-[#111] leading-none text-[calc(clamp(36px,4.5vw,42px)*0.34)] max-[420px]:text-[11.5px]" />
            </span>
          </span>
          {/* Avatar 3 */}
          <span className="grid size-[clamp(36px,4.5vw,42px)] place-items-center shrink-0 rounded-full border border-trust-border bg-trust-bg p-[5px] transition-transform duration-300 hover:-translate-y-0.5 z-[4] -ml-[calc(clamp(36px,4.5vw,42px)*0.42)] max-[420px]:size-[34px] max-[420px]:-ml-[14px]">
            <span className="grid size-full place-items-center overflow-hidden rounded-full bg-white">
              <i className="fa-brands fa-google text-[#111] leading-none text-[calc(clamp(36px,4.5vw,42px)*0.34)] max-[420px]:text-[11.5px]" />
            </span>
          </span>
        </div>
        {/* Trust pill - Tailwind replacement for .trust-pill */}
        <span className="inline-flex h-[clamp(36px,4.5vw,42px)] items-center whitespace-nowrap rounded-full border border-trust-border bg-trust-bg pr-3.5 pl-[calc(clamp(36px,4.5vw,42px)*0.58)] -ml-[calc(clamp(36px,4.5vw,42px)*0.42)] font-sans text-[clamp(12px,1.4vw,13.5px)] font-medium text-trust-text max-[420px]:h-[34px] max-[420px]:pl-[19px] max-[420px]:-ml-[14px] max-[420px]:pr-2.5 max-[420px]:text-xs">
          Trusted by 2000+ Enterprises
        </span>
      </div>

      {/* Headline - Tailwind replacement for .headline */}
      <h1 className="font-display w-full overflow-hidden text-center text-[clamp(28px,6.2vw,80px)] font-normal leading-[1.12] tracking-[-0.04em] whitespace-nowrap text-white max-[720px]:text-[clamp(34px,11vw,58px)] max-[720px]:tracking-[-0.08em] max-[720px]:leading-[1.05] max-[420px]:text-[clamp(30px,10vw,42px)] max-[420px]:tracking-[-0.09em] max-[420px]:leading-[1.04]">
        <span className="block opacity-0 translate-y-[14px] animate-headline-fade [animation-delay:0.12s]">Intelligence</span>
        <span className="block opacity-0 translate-y-[14px] animate-headline-fade [animation-delay:0.3s]">Designed To Evolve</span>
      </h1>

      {/* Subhead - Tailwind replacement for .subhead */}
      <p
        className="anim max-w-[min(500px,92%)] mt-[clamp(14px,2vh,20px)] text-center font-sans text-[clamp(calc(13.5px+2pt),calc(1.55vw+2pt),calc(16.5px+2pt))] leading-[1.55] font-normal text-[#d0d0d0]/80 max-[700px]:mt-2.5 max-[720px]:max-w-[92%] max-[720px]:text-[clamp(calc(13px+2pt),calc(3.4vw+2pt),calc(15px+2pt))]"
        style={{ ["--d" as string]: "0.28s" } as React.CSSProperties}
      >
        Build applications that reason, adapt and collaborate using a modular AI
        platform designed for production.
      </p>

      {/* CTA - Tailwind replacement for .cta - uses revealPulse with delay */}
      <a
        href="#"
        className="inline-flex items-center justify-center rounded-full bg-white px-[clamp(22px,3vw,28px)] py-[clamp(11px,1.6vh,13px)] mt-[clamp(20px,2.8vh,28px)] font-sans text-[clamp(13.5px,1.5vw,14.5px)] font-semibold tracking-[-0.01em] text-black shadow-cta transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-cta-hover max-[700px]:mt-3.5 opacity-0 translate-y-[22px] scale-[0.96] blur-[6px] animate-reveal-pulse [animation-delay:0.4s]"
      >
        Get Started
      </a>
    </main>
  );
}
