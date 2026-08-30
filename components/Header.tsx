"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

type NavItem = { label: string; href: string; active?: boolean };

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#top", active: true },
  { label: "Product", href: "#products" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Contact", href: "#" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const burgerRef = useRef<HTMLButtonElement>(null);

  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 720 && open) close();
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("menu-open");
    } else {
      document.body.style.overflow = "";
      document.body.classList.remove("menu-open");
    }
    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("menu-open");
    };
  }, [open]);

  const handleCloseAndFocus = () => {
    close();
    setTimeout(() => burgerRef.current?.focus({ preventScroll: true }), 0);
  };

  return (
    <>
      {/* Header — fixed at top, retains original slide-down and stays visible on scroll */}
      <header className="fixed left-1/2 top-[clamp(16px,2.4vh,28px)] z-20 flex w-[calc(100%-clamp(28px,6vw,64px))] max-w-[720px] -translate-x-1/2 items-center justify-center gap-[clamp(18px,2.8vw,28px)] animate-slide-down max-[720px]:max-w-[calc(100%-clamp(28px,6vw,64px))] max-[720px]:justify-between">
        {/* Logo */}
        <a
          href="#"
          aria-label="Home"
          className="grid size-[clamp(40px,4.4vw,46px)] shrink-0 place-items-center rounded-full bg-white shadow-nav transition-transform duration-200 hover:scale-[1.04] max-[720px]:size-12"
        >
          <Image
            src="/logo.webp"
            alt=""
            width={52}
            height={52}
            priority
            className="block h-[72%] w-[72%] rounded-none object-contain"
          />
        </a>

        {/* Desktop nav pill - Tailwind replacement for .nav */}
        <nav
          aria-label="Primary navigation"
          className="flex h-[clamp(44px,5.2vw,48px)] max-w-[430px] flex-1 items-center gap-0.5 rounded-full bg-white p-1 px-2 shadow-nav max-[720px]:hidden"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-current={item.active ? "page" : undefined}
              className={`relative inline-flex h-full flex-1 items-center justify-center whitespace-nowrap rounded-full px-2.5 font-sans text-[clamp(13px,1.4vw,15px)] font-medium tracking-[-0.01em] text-nav-text transition-opacity duration-200 ${
                item.active
                  ? "opacity-100 after:absolute after:bottom-[5px] after:left-1/2 after:size-[3px] after:-translate-x-1/2 after:rounded-full after:bg-black after:shadow-[-5px_0_0_#000,5px_0_0_#000] after:content-['']"
                  : "opacity-50 hover:opacity-75"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Sign in desktop - Tailwind replacement for .sign-in */}
        <a
          href="#"
          className="hidden h-[clamp(44px,5.2vw,48px)] shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-pill-dark px-[22px] font-sans text-[clamp(13px,1.4vw,15px)] font-medium tracking-[-0.01em] text-sign-in-text shadow-nav transition-all duration-200 hover:-translate-y-px hover:bg-[#323234] hover:text-white max-[720px]:hidden min-[721px]:inline-flex"
        >
          Sign in
        </a>

        {/* Burger - Tailwind replacement for .burger + .burger-bar */}
        <button
          ref={burgerRef}
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={toggle}
          className="group hidden size-12 shrink-0 cursor-pointer flex-col items-center justify-center gap-[5px] rounded-full border-0 bg-pill-dark shadow-nav transition-all duration-200 aria-expanded:bg-white max-[720px]:inline-flex"
        >
          <span className="block h-[1.5px] w-[18px] origin-center rounded-full bg-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-aria-expanded:translate-y-[6.5px] group-aria-expanded:rotate-45 group-aria-expanded:bg-black" />
          <span className="block h-[1.5px] w-[18px] origin-center rounded-full bg-white transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-aria-expanded:scale-x-0 group-aria-expanded:opacity-0 group-aria-expanded:bg-black" />
          <span className="block h-[1.5px] w-[18px] origin-center rounded-full bg-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-aria-expanded:-translate-y-[6.5px] group-aria-expanded:-rotate-45 group-aria-expanded:bg-black" />
        </button>
      </header>

      {/* Overlay - Tailwind replacement for .overlay */}
      <div
        hidden={!open}
        onClick={handleCloseAndFocus}
        aria-hidden={!open}
        className="fixed inset-0 z-10 bg-black/62 backdrop-blur-[6px] animate-overlay-in"
      />

      {/* Mobile menu sheet - Tailwind replacement for .mobile-menu */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed left-1/2 top-[78px] z-[11] w-[min(92vw,380px)] -translate-x-1/2 rounded-[28px] bg-white px-[18px] pb-5 pt-[22px] shadow-menu animate-menu-in"
      >
        <nav
          aria-label="Mobile navigation"
          className="flex flex-col gap-0.5"
        >
          {NAV_ITEMS.map((item, idx) => (
            <a
              key={item.label}
              href={item.href}
              aria-current={item.active ? "page" : undefined}
              onClick={handleCloseAndFocus}
              style={{ animationDelay: `${0.06 + idx * 0.04}s` } as React.CSSProperties}
              className={`relative flex items-center justify-center rounded-xl px-3 py-[14px] font-sans text-base font-medium tracking-[-0.01em] text-nav-text transition-all animate-link-in ${
                item.active
                  ? "opacity-100 after:absolute after:bottom-2 after:left-1/2 after:size-[3px] after:-translate-x-1/2 after:rounded-full after:bg-black after:shadow-[-5px_0_0_#000,5px_0_0_#000] after:content-['']"
                  : "opacity-55 hover:bg-[#f5f5f5] hover:opacity-85"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#"
            onClick={handleCloseAndFocus}
            style={{ animationDelay: "0.22s" } as React.CSSProperties}
            className="mt-2.5 flex h-12 items-center justify-center rounded-full bg-pill-dark font-sans text-[15px] font-medium text-sign-in-text transition-colors animate-link-in hover:bg-[#1e1e1e] hover:text-white"
          >
            Sign in
          </a>
        </nav>
      </div>
    </>
  );
}
