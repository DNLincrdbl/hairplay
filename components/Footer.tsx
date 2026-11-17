import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="overflow-x-clip border-t border-line bg-ink">
      <div className="mx-auto max-w-[1600px] px-4 pt-10 pb-0 md:px-6 md:pt-14">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <img src="/images/logo.png" alt="Hairplay" className="h-12 w-12 object-contain" />
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex rounded-full bg-gold px-5 py-2.5 text-[13px] font-bold tracking-tight text-ink"
            >
              Időpontfoglalás
            </a>
          </div>

          <div>
            <p className="text-sm font-bold tracking-tight text-paper">Cím</p>
            <p className="mt-3 text-sm leading-relaxed text-mute">
              {site.zip} {site.city}
              <br />
              {site.address}
              <br />
              {site.addressNote}
            </p>
          </div>

          <div>
            <p className="text-sm font-bold tracking-tight text-paper">Nyitvatartás</p>
            <ul className="mt-3 space-y-2 text-sm text-mute">
              {site.hours.map((h) => (
                <li key={h.days}>
                  {h.days}
                  <br />
                  <span className="text-paper">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold tracking-tight text-paper">Oldalak</p>
            <ul className="mt-3 space-y-2 text-sm text-mute">
              <li>
                <Link href="/arak" className="hover:text-paper">
                  Árlista
                </Link>
              </li>
              <li>
                <Link href="/hazirend" className="hover:text-paper">
                  Házirend
                </Link>
              </li>
              <li>
                <a href={site.bookingUrl} target="_blank" rel="noreferrer" className="hover:text-paper">
                  Foglalás
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold tracking-tight text-paper">Közösség</p>
            <ul className="mt-3 space-y-2 text-sm text-mute">
              <li>
                <a href={site.instagram} target="_blank" rel="noreferrer" className="hover:text-paper">
                  Instagram
                </a>
              </li>
              <li>
                <a href={site.facebook} target="_blank" rel="noreferrer" className="hover:text-paper">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-line py-5 text-sm text-mute">
          <p>© 2026 Hairplay</p>
          <p>Szeged</p>
        </div>
      </div>

      <div className="footer-crop" aria-hidden>
        <p className="footer-mark pointer-events-none select-none">
          <span className="footer-hair">HAIR</span>
          <span className="footer-play">play</span>
        </p>
      </div>
    </footer>
  );
}
