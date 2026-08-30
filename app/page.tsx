import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <main className="relative bg-black">
      {/* Hero stage — scoped video backdrop, retains original 100dvh thesis */}
      <section
        id="top"
        className="relative flex h-screen h-[100dvh] flex-col items-center justify-between overflow-hidden px-[clamp(14px,3vw,32px)] py-[clamp(16px,2.4vh,28px)]"
      >
        <div className="absolute inset-0 overflow-hidden bg-black" aria-hidden="true">
          <video
            className="absolute inset-0 h-full w-full object-cover pointer-events-none"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src="/hero-bg-video.mp4" type="video/mp4" />
          </video>
          {/* subtle vignette to keep hero readable and separate from products */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/45" />
        </div>
        <Header />
        {/* spacer — reserves header height in flow since header is now fixed */}
        <div
          aria-hidden="true"
          className="z-[1] h-[clamp(44px,5.2vw,48px)] w-full max-w-[720px] shrink-0 max-[720px]:h-12"
        />
        <Hero />
        <Stats />
      </section>

      <Products />
    </main>
  );
}
