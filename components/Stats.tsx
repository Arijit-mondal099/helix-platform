"use client";

import { useEffect, useRef, useState } from "react";

type Stat = {
  icon: string;
  target: number;
  suffix: string;
  decimals: number;
  label: string;
  delayIndex: number;
};

const STATS: Stat[] = [
  { icon: "<", target: 120, suffix: "ms", decimals: 0, label: "Inference Time", delayIndex: 0 },
  { icon: "%", target: 99.99, suffix: "%", decimals: 2, label: "Platform Uptime", delayIndex: 1 },
  { icon: "*", target: 24, suffix: "/7", decimals: 0, label: "Autonomous Runtime", delayIndex: 2 },
  { icon: "#", target: 2.4, suffix: "M", decimals: 1, label: "Context Windows", delayIndex: 3 },
];

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function formatValue(val: number, decimals: number) {
  if (decimals === 0) return Math.round(val).toString();
  return val.toFixed(decimals);
}

function StatItem({ stat }: { stat: Stat }) {
  const [display, setDisplay] = useState("0" + stat.suffix);
  const hasAnimatedRef = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const startAnimation = () => {
      if (hasAnimatedRef.current) return;
      hasAnimatedRef.current = true;

      const duration = 1500 + stat.delayIndex * 80;
      const startOffset = 480 + stat.delayIndex * 90;
      let rafId: number | null = null;
      let startTime: number | null = null;

      const step = (timestamp: number) => {
        if (startTime === null) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeOutCubic(progress);
        const current = stat.target * eased;
        setDisplay(formatValue(current, stat.decimals) + stat.suffix);
        if (progress < 1) {
          rafId = requestAnimationFrame(step);
        } else {
          setDisplay(formatValue(stat.target, stat.decimals) + stat.suffix);
        }
      };

      const timeout = setTimeout(() => requestAnimationFrame(step), startOffset);
      return () => {
        clearTimeout(timeout);
        if (rafId) cancelAnimationFrame(rafId);
      };
    };

    const statsContainer = document.querySelector(".stats") as HTMLElement | null;
    const target = statsContainer ?? containerRef.current;

    if (!target) {
      startAnimation();
      return;
    }

    if (!("IntersectionObserver" in window)) {
      startAnimation();
      return;
    }

    let observer: IntersectionObserver | null = null;
    let safety: ReturnType<typeof setTimeout> | null = null;

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startAnimation();
            observer?.disconnect();
            if (safety) clearTimeout(safety);
          }
        });
      },
      { threshold: 0.25 }
    );
    observer.observe(target);

    safety = setTimeout(() => {
      if (!hasAnimatedRef.current) {
        const rect = target.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        if (inView) {
          startAnimation();
          observer?.disconnect();
        }
      }
    }, 900);

    return () => {
      observer?.disconnect();
      if (safety) clearTimeout(safety);
    };
  }, [stat]);

  return (
    <div
      ref={containerRef}
      className="anim flex flex-col items-center gap-1.5"
      style={{ ["--d" as string]: `${0.5 + stat.delayIndex * 0.08}s` } as React.CSSProperties}
    >
      <span
        className="font-display text-[clamp(22px,3vw,33px)] font-normal leading-none text-white max-[720px]:text-[28px]"
        aria-hidden="true"
      >
        {stat.icon}
      </span>
      <span className="font-sans text-[clamp(18px,2.2vw,26px)] font-semibold leading-[1.1] tracking-[-0.025em] text-white tabular-nums">
        {display}
      </span>
      <span className="font-sans text-[clamp(11px,1.2vw,12.5px)] font-normal tracking-[-0.01em] text-muted">
        {stat.label}
      </span>
    </div>
  );
}

export default function Stats() {
  return (
    <footer
      aria-label="Platform metrics"
      className="stats z-[1] grid w-full max-w-[920px] shrink-0 grid-cols-4 gap-[clamp(14px,2vw,24px)] pt-[clamp(8px,1.5vh,14px)] text-center max-[700px]:pt-1.5 max-[720px]:max-w-[420px] max-[720px]:grid-cols-2 max-[720px]:gap-x-3 max-[720px]:gap-y-[18px]"
    >
      {STATS.map((s) => (
        <StatItem key={s.label} stat={s} />
      ))}
    </footer>
  );
}
