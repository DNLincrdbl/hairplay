"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { consult, rules } from "@/lib/rules";
import { site } from "@/lib/site";

gsap.registerPlugin(ScrollTrigger);

export default function RulesView() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".rule-in");
      if (reduce) {
        gsap.set(items, { autoAlpha: 1, y: 0 });
        return;
      }
      gsap.set(items, { autoAlpha: 0, y: 36 });
      items.forEach((item) => {
        gsap.to(item, {
          autoAlpha: 1,
          y: 0,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 88%",
            once: true,
          },
        });
      });
    }, el);

    requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => ctx.revert();
  }, []);

  const booking = rules[0];
  const cancel = rules[1];
  const arrival = rules[2];
  const guests = rules[3];
  const cats = rules[4];

  return (
    <main ref={root} className="px-3 pt-20 pb-8 md:px-4 md:pt-24">
      <header className="rule-in px-2 pb-6 md:px-3 md:pb-8">
        <h1 className="text-[16vw] leading-[0.8] font-semibold tracking-[-0.04em] md:text-[8vw]">Házirend</h1>
      </header>

      <div className="grid gap-3 md:grid-cols-2 md:gap-3">
        <RuleCard title={booking.title} items={booking.items} className="md:col-span-2" />
        <RuleCard title={cancel.title} items={cancel.items} />
        <RuleCard title={arrival.title} items={arrival.items} />
        <RuleCard title={guests.title} items={guests.items} />
        <RuleCard title={cats.title} items={cats.items} />

        <article className="rule-in relative min-h-[240px] overflow-hidden rounded-[1.5rem] md:col-span-2 md:min-h-[300px] md:rounded-[2rem]">
          <img src="/images/hair-1.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-ink/72" />
          <div className="relative flex h-full flex-col justify-end p-5 md:p-7">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{consult.title}</h2>
            <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-paper/85 md:text-[15px]">{consult.body}</p>
          </div>
        </article>
      </div>

      <div className="rule-in mt-3 flex flex-col gap-3 rounded-[1.5rem] border border-line px-5 py-5 sm:flex-row sm:items-center sm:justify-between md:rounded-[2rem] md:px-7">
        <p className="text-sm text-mute">
          {site.zip} {site.city}, {site.address}
        </p>
        <div className="flex gap-3">
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-gold px-5 py-2.5 text-[15px] font-bold tracking-tight text-ink"
          >
            Foglalás
          </a>
          <Link href="/arak" className="rounded-full border border-line px-5 py-2.5 text-[15px] font-bold tracking-tight">
            Árlista
          </Link>
        </div>
      </div>
    </main>
  );
}

function RuleCard({
  title,
  items,
  className = "",
}: {
  title: string;
  items: string[];
  className?: string;
}) {
  return (
    <section className={`rule-in rounded-[1.5rem] bg-panel px-5 py-5 md:rounded-[2rem] md:px-7 md:py-6 ${className}`}>
      <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
      <ul className="mt-4">
        {items.map((item) => (
          <li key={item} className="border-t border-line py-2.5 text-[14px] leading-relaxed text-paper/80 md:text-[15px]">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
