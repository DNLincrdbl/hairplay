import { marqueeItems } from "@/lib/site";

export default function Marquee() {
  const row = [...marqueeItems, ...marqueeItems];

  return (
    <div className="overflow-hidden border-y border-line py-5 md:py-6">
      <div className="marquee-track">
        {row.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-8 pr-8">
            <span className="text-3xl font-semibold tracking-tight md:text-5xl">{item}</span>
            <span className="text-2xl font-semibold text-gold md:text-3xl">/</span>
          </span>
        ))}
        {row.map((item, i) => (
          <span key={`b-${item}-${i}`} className="flex items-center gap-8 pr-8">
            <span className="text-3xl font-semibold tracking-tight md:text-5xl">{item}</span>
            <span className="text-2xl font-semibold text-gold md:text-3xl">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
