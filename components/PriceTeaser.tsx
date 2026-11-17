import Link from "next/link";
import { featured, formatFt } from "@/lib/prices";

export default function PriceTeaser() {
  return (
    <section className="px-3 py-4 md:px-4">
      <div className="rounded-[1.75rem] border border-line px-5 py-10 md:rounded-[2.5rem] md:px-12 md:py-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Árlista</h2>
          <Link href="/arak" className="text-[15px] font-bold tracking-tight text-gold">
            Teljes lista →
          </Link>
        </div>

        <div className="mt-10 divide-y divide-line border-y border-line">
          {featured.map((f) => (
            <Link
              key={f.name}
              href={f.href}
              className="group flex items-baseline justify-between gap-4 py-6 md:py-8"
            >
              <span className="text-2xl font-semibold tracking-tight md:text-4xl">{f.name}</span>
              <span className="num text-sm text-mute md:text-base">
                {formatFt(f.from)}-tól
                <span className="ml-3 text-gold opacity-0 transition-opacity group-hover:opacity-100">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
