"use client";

import { useEffect, useId, useRef } from "react";
import gsap from "gsap";
import { copy, site } from "@/lib/site";
import Signature from "@/components/Signature";

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const uid = useId().replace(/:/g, "");

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      gsap.set(".hero-media", { clipPath: "inset(18% 14% 18% 14% round 2.5rem)", scale: 1.12 });
      gsap.set(".hero-hair-g", { y: 90, opacity: 0 });
      gsap.set(".hero-play-g", { y: 24, opacity: 0 });
      gsap.set(".hero-meta", { opacity: 0, y: 20 });

      tl.to(".hero-media", {
        clipPath: "inset(0% 0% 0% 0% round 2.5rem)",
        scale: 1,
        duration: 1.45,
      })
        .to(".hero-hair-g", { y: 0, opacity: 1, duration: 0.95 }, 0.22)
        .to(".hero-play-g", { y: 0, opacity: 1, duration: 0.9 }, 0.48)
        .to(".hero-meta", { opacity: 1, y: 0, duration: 0.7, stagger: 0.08 }, 0.85);
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative px-3 pt-3 md:px-4 md:pt-4">
      <div className="hero-media relative isolate min-h-[calc(100svh-12px)] overflow-hidden rounded-[1.75rem] md:rounded-[2.5rem]">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/scissors.jpg"
        >
          <source src="/Scissors_cutting_hair_in_studio_1768cc1e_t1.8-8_1080p.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,7,7,0.28)_0%,rgba(7,7,7,0.12)_40%,rgba(7,7,7,0.78)_100%)]" />

        <div className="relative z-10 flex min-h-[calc(100svh-12px)] flex-col justify-end px-5 pt-24 pb-8 md:px-10 md:pt-28 md:pb-12 lg:px-14">
          <h1 className="hero-mark">
            <svg
              className="hero-mark-svg"
              viewBox="0 0 1200 390"
              role="img"
              aria-label="Hairplay"
            >
              <defs>
                <mask id={`hair-mask-${uid}`}>
                  <rect width="1200" height="390" fill="black" />
                  <text x="0" y="248" className="hero-svg-hair hero-svg-hair-mask" aria-hidden>
                    HAIR
                  </text>
                </mask>
              </defs>
              <g className="hero-hair-g">
                <text x="0" y="248" className="hero-svg-hair">
                  HAIR
                </text>
              </g>
              <g className="hero-play-g">
                <text x="36" y="322" className="hero-svg-play">
                  play
                </text>
                <text
                  x="36"
                  y="322"
                  className="hero-svg-play-cut"
                  mask={`url(#hair-mask-${uid})`}
                  aria-hidden
                >
                  play
                </text>
              </g>
            </svg>
          </h1>

          <div className="mt-8 flex flex-col gap-8 md:mt-10 md:flex-row md:items-end md:justify-between">
            <p className="hero-meta max-w-md text-[15px] leading-relaxed text-paper/85 md:text-base">
              {copy.hero}
            </p>
            <div className="hero-meta flex flex-col items-start gap-4 md:items-end">
              <Signature />
              <div className="flex items-center gap-3">
                <a
                  href={site.bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-gold px-6 py-3 text-[15px] font-bold tracking-tight text-ink"
                >
                  Időpont
                </a>
                <a
                  href="/arak"
                  className="rounded-full border border-paper/25 px-6 py-3 text-[15px] font-bold tracking-tight text-paper hover:border-paper"
                >
                  Árlista
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
