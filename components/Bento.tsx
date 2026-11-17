"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { copy, site } from "@/lib/site";

gsap.registerPlugin(ScrollTrigger);

export default function Bento() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.from(".bento-cell", {
        y: 48,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          once: true,
        },
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section id="salon" ref={root} className="px-3 py-8 md:px-4 md:py-12">
      <h2 className="mb-5 px-2 text-3xl font-semibold tracking-tight md:mb-6 md:px-3 md:text-5xl">A szalon</h2>

      <div className="grid auto-rows-[minmax(200px,auto)] grid-cols-1 gap-3 md:grid-cols-6 md:gap-4">
        <article className="bento-cell relative overflow-hidden rounded-[1.75rem] bg-ink md:col-span-2 md:row-span-2 md:min-h-[640px] md:rounded-[2.25rem]">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/Woman_turning_head_with_hair_25c64154_1080p.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
        </article>

        <article className="bento-cell group relative overflow-hidden rounded-[1.75rem] md:col-span-4 md:row-span-2 md:rounded-[2.25rem]">
          <img
            src="/images/scissors.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent" />
          <div className="relative flex h-full min-h-[340px] flex-col justify-end p-6 md:min-h-[640px] md:p-10">
            <h3 className="max-w-lg text-3xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              {copy.salonTitle}
            </h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-paper/75 md:text-[15px]">
              {copy.salonBody}
            </p>
          </div>
        </article>

        <article className="bento-cell group relative overflow-hidden rounded-[1.75rem] md:col-span-2 md:min-h-[280px] md:rounded-[2.25rem]">
          <img
            src="/images/hair-1.jpg"
            alt="Hajszálak közeli"
            className="h-full min-h-[220px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </article>

        <article className="bento-cell group relative overflow-hidden rounded-[1.75rem] md:col-span-2 md:min-h-[280px] md:rounded-[2.25rem]">
          <img
            src="/images/hero-portrait.jpg"
            alt="Profil portré, bob vágás"
            className="h-full min-h-[220px] w-full object-cover object-[center_30%] transition-transform duration-700 group-hover:scale-105"
          />
        </article>

        <article className="bento-cell relative overflow-hidden rounded-[1.75rem] md:col-span-2 md:rounded-[2.25rem]">
          <img src="/images/hair-2.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-ink/55" />
          <div className="relative flex h-full min-h-[240px] flex-col justify-between p-6 md:p-8">
            <div>
              <p className="text-3xl font-semibold tracking-tight md:text-4xl">@hairplayszeged</p>
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex rounded-full border border-paper/30 px-4 py-2 text-[15px] font-bold tracking-tight"
              >
                Követés
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
