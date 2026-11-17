import { site } from "@/lib/site";

export default function Contact() {
  return (
    <section className="px-3 py-4 md:px-4">
      <div className="grid gap-3 md:grid-cols-2 md:gap-4">
        <div className="overflow-hidden rounded-[1.75rem] md:min-h-[520px] md:rounded-[2.5rem]">
          <iframe
            title="Hairplay térkép"
            src={site.mapsEmbed}
            className="h-full min-h-[320px] w-full grayscale contrast-125"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="flex flex-col justify-between rounded-[1.75rem] bg-panel p-7 md:rounded-[2.5rem] md:p-12">
          <div>
            <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">Jósika utca 1</h2>
            <p className="mt-4 max-w-sm text-mute">
              {site.zip} {site.city}. A bejárat az Attila utca felől. Fizetés csak készpénzben.
            </p>
          </div>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-gold px-6 py-3.5 text-center text-[15px] font-bold tracking-tight text-ink"
            >
              Foglalok
            </a>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-line px-6 py-3.5 text-center text-[15px] font-bold tracking-tight"
            >
              Útvonal
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
