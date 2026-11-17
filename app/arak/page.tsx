import type { Metadata } from "next";
import Link from "next/link";
import PriceBrochure from "@/components/PriceBrochure";
import { priceNotes, priceValidFrom } from "@/lib/prices";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Árlista",
  description: `Hairplay árlista, ${priceValidFrom}. Vágás, festés, balayage, fonás. Szeged.`,
  alternates: { canonical: "/arak" },
};

export default function PricesPage() {
  return (
    <main className="px-3 pt-20 pb-8 md:px-4 md:pt-24">
      <header className="flex items-end justify-between px-1 pb-4 md:px-2">
        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">Árak</h1>
        <p className="text-sm font-semibold text-mute md:text-base">{priceValidFrom}</p>
      </header>

      <PriceBrochure />

      <aside className="mt-3 flex flex-col gap-4 rounded-[1.5rem] border border-line px-5 py-5 sm:flex-row sm:items-center sm:justify-between md:rounded-[2rem] md:px-7">
        <ul className="space-y-1 text-sm text-mute">
          {priceNotes.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
        <div className="flex shrink-0 gap-3">
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-gold px-5 py-2.5 text-center text-[15px] font-bold tracking-tight text-ink"
          >
            Időpontfoglalás
          </a>
          <Link
            href="/hazirend"
            className="rounded-full border border-line px-5 py-2.5 text-center text-[15px] font-bold tracking-tight"
          >
            Házirend
          </Link>
        </div>
      </aside>
    </main>
  );
}
