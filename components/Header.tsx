"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { nav, site } from "@/lib/site";
import { getLenis } from "@/lib/lenis";

export default function Header() {
  const pathname = usePathname();
  const inner = pathname !== "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const overlay = useRef<HTMLDivElement>(null);
  const first = useRef(true);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const apply = () => {
      const y = window.scrollY;
      setScrolled((prev) => (prev ? y > 12 : y > 48));
    };
    apply();
    window.addEventListener("scroll", apply, { passive: true });
    return () => window.removeEventListener("scroll", apply);
  }, [pathname]);

  useEffect(() => {
    setOpen(false);
    setScrolled(false);
  }, [pathname]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const el = overlay.current;
    if (!el) return;

    if (first.current) {
      first.current = false;
      gsap.set(el, { yPercent: -100, autoAlpha: 0 });
      return;
    }

    const links = el.querySelectorAll(".nav-m-link");
    const lenis = getLenis();
    tl.current?.kill();

    if (open) {
      lenis?.stop();
      document.documentElement.style.overflow = "hidden";
      tl.current = gsap
        .timeline()
        .set(el, { autoAlpha: 1, pointerEvents: "auto" })
        .fromTo(el, { yPercent: -100 }, { yPercent: 0, duration: 0.55, ease: "power4.out" })
        .fromTo(
          links,
          { y: 28, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.42, stagger: 0.055, ease: "power3.out" },
          "-=0.28",
        );
    } else {
      lenis?.start();
      document.documentElement.style.overflow = "";
      tl.current = gsap
        .timeline({
          onComplete: () => {
            gsap.set(el, { autoAlpha: 0, pointerEvents: "none" });
          },
        })
        .to(links, { y: -8, autoAlpha: 0, duration: 0.18, stagger: 0.03, ease: "power2.in" })
        .to(el, { yPercent: -100, duration: 0.5, ease: "power4.inOut" }, "-=0.05");
    }

    return () => {
      tl.current?.kill();
    };
  }, [open]);

  useEffect(() => {
    return () => {
      getLenis()?.start();
      document.documentElement.style.overflow = "";
    };
  }, []);

  const solid = inner || scrolled || open;
  const homeLift = !inner && !scrolled && !open;

  return (
    <>
      <header className="fixed top-0 right-0 left-0 z-50">
        <div
          className={`border-b transition-[margin,background-color,border-color,backdrop-filter] duration-500 ${
            solid ? "border-line/80 bg-ink/85 backdrop-blur-md" : "border-transparent bg-transparent"
          } ${homeLift ? "mx-3 mt-5 md:mx-8 md:mt-7" : "mx-0 mt-0"}`}
        >
          <div className="mx-auto flex h-14 max-w-[1600px] items-center justify-between px-4 md:h-16 md:px-6">
            <Link href="/" className="relative z-10 flex items-center" onClick={() => setOpen(false)}>
              <img src="/images/logo.png" alt="Hairplay" className="h-8 w-8 object-contain md:h-9 md:w-9" />
            </Link>

            <nav className="hidden items-center gap-7 text-[14px] font-bold tracking-tight text-paper/80 md:flex">
              {nav.map((item) => (
                <Link key={item.href} href={item.href} className="transition-colors hover:text-paper">
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="relative z-10 flex items-center gap-3">
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="hidden rounded-full bg-gold px-4 py-2 text-[13px] font-bold tracking-tight text-ink transition-opacity hover:opacity-90 md:inline-flex"
              >
                Foglalás
              </a>
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center md:hidden"
                aria-label={open ? "Menü bezárása" : "Menü"}
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
              >
              <span className="relative block h-3.5 w-5">
                <span
                  className={`absolute top-[7px] left-0 h-[1.5px] w-full bg-paper transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    open ? "rotate-45" : "-translate-y-[5px]"
                  }`}
                />
                <span
                  className={`absolute top-[7px] left-0 h-[1.5px] w-full bg-paper transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    open ? "-rotate-45" : "translate-y-[5px]"
                  }`}
                />
              </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        ref={overlay}
        className="nav-sheet fixed inset-0 z-40 flex flex-col bg-ink px-6 pt-20 pb-10 md:hidden"
        aria-hidden={!open}
      >
        <nav className="flex flex-1 flex-col justify-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="nav-m-link py-3 text-5xl font-bold tracking-tight"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href={site.bookingUrl}
          target="_blank"
          rel="noreferrer"
          className="nav-m-link rounded-full bg-gold py-4 text-center text-lg font-bold tracking-tight text-ink"
        >
          Időpontfoglalás
        </a>
      </div>
    </>
  );
}
