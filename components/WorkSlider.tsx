"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { works } from "@/lib/site";

gsap.registerPlugin(ScrollTrigger);

export default function WorkSlider() {
  const section = useRef<HTMLElement>(null);
  const viewport = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sec = section.current;
    const view = viewport.current;
    const row = track.current;
    if (!sec || !view || !row) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const getDistance = () => Math.max(0, row.scrollWidth - view.clientWidth);

      gsap.set(row, { x: 0, force3D: true });

      const tween = gsap.to(row, {
        x: () => -getDistance(),
        ease: "none",
        force3D: true,
        scrollTrigger: {
          trigger: sec,
          start: "top top",
          end: () => `+=${getDistance()}`,
          pin: true,
          pinType: "transform",
          scrub: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
        gsap.set(row, { clearProps: "transform" });
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="munkak" ref={section} className="relative bg-ink">
      <div
        ref={viewport}
        className="flex flex-col justify-end overflow-hidden px-4 py-8 md:h-svh md:px-8 md:pt-28 md:pb-12"
      >
        <h2 className="mb-6 text-3xl font-semibold tracking-tight md:mb-8 md:text-5xl">Munkák</h2>

        <div
          ref={track}
          className="no-scrollbar flex w-max gap-4 overflow-x-auto md:overflow-visible"
        >
          {works.map((w) => (
            <figure
              key={w.src}
              className="relative w-[78vw] shrink-0 overflow-hidden rounded-[1.75rem] md:w-[min(38vw,560px)] md:rounded-[2.25rem]"
            >
              <img
                src={w.src}
                alt={w.alt}
                className="aspect-[3/4] h-auto w-full object-cover md:h-[62vh] md:aspect-auto"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
