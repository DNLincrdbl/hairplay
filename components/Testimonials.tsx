"use client";

import { useState } from "react";
import { testimonials } from "@/lib/site";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];

  return (
    <section className="px-3 py-4 md:px-4">
      <div className="overflow-hidden rounded-[1.75rem] bg-panel px-6 py-14 md:rounded-[2.5rem] md:px-16 md:py-24">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Vélemények</h2>
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`${idx + 1}. vélemény`}
                onClick={() => setI(idx)}
                className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-gold" : "w-2 bg-line"}`}
              />
            ))}
          </div>
        </div>

        <blockquote key={t.name} className="mt-10 max-w-4xl">
          <p className="text-3xl font-semibold leading-[1.15] tracking-tight md:text-5xl md:leading-[1.12]">
            „{t.quote}”
          </p>
          <footer className="mt-8 text-base font-semibold text-mute">— {t.name}</footer>
        </blockquote>
      </div>
    </section>
  );
}
