"use client";

import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import gsap from "gsap";
import { HairBob, HairLong, HairShort } from "@/components/HairMarks";
import {
  braidItems,
  categories,
  categoryNotes,
  colorAddons,
  colorServices,
  cutAddons,
  cutServices,
  extensionBraidItems,
  formatFt,
  kidsItems,
  keratinItems,
  menItems,
  occasionItems,
  type FlatItem,
  type Service,
} from "@/lib/prices";

type PanelId = "cut" | "color" | "more";

const hashToPanel: Record<string, PanelId> = {
  vagas: "cut",
  kategoriak: "cut",
  festes: "color",
  ferfi: "more",
  gyerek: "more",
  alkalmi: "more",
  keratin: "more",
  fonas: "more",
};

const COLS: Record<"none" | PanelId, string> = {
  none: "1fr 1fr 1fr",
  cut: "2.75fr 0.62fr 0.62fr",
  color: "0.62fr 2.75fr 0.62fr",
  more: "0.62fr 0.62fr 2.75fr",
};

export default function PriceBrochure() {
  const foldRef = useRef<HTMLDivElement>(null);
  const ready = useRef(false);
  const [open, setOpen] = useState<PanelId | null>(null);

  useEffect(() => {
    const apply = () => {
      const key = window.location.hash.replace("#", "");
      const panel = hashToPanel[key];
      if (panel) setOpen(panel);
    };
    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, []);

  useLayoutEffect(() => {
    const el = foldRef.current;
    if (!el) return;

    const desktop = window.matchMedia("(min-width: 768px)").matches;
    const cols = COLS[open ?? "none"];

    if (!desktop) {
      gsap.set(el, { clearProps: "gridTemplateColumns" });
      return;
    }

    if (!ready.current) {
      gsap.set(el, { gridTemplateColumns: cols });
      ready.current = true;
      return;
    }

    gsap.to(el, {
      duration: 1.05,
      ease: "power3.inOut",
      gridTemplateColumns: cols,
      overwrite: "auto",
    });
  }, [open]);

  useEffect(() => {
    const el = foldRef.current;
    if (!el) return;
    const onResize = () => {
      if (window.matchMedia("(min-width: 768px)").matches) {
        gsap.set(el, { gridTemplateColumns: COLS[open ?? "none"] });
      } else {
        gsap.set(el, { clearProps: "gridTemplateColumns" });
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  useEffect(() => {
    if (!open || window.matchMedia("(min-width: 768px)").matches) return;
    const id = window.setTimeout(() => {
      foldRef.current
        ?.querySelector<HTMLElement>('[data-state="open"]')
        ?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 420);
    return () => window.clearTimeout(id);
  }, [open]);

  return (
    <div ref={foldRef} className="fold" data-open={open ?? "none"}>
      <Panel
        id="cut"
        open={open}
        onOpen={setOpen}
        image="/images/scissors.jpg"
        title="Vágás"
        from="8 800"
      >
        <Featured
          name="Fazonvágás"
          note="Mosás, fazonvágás, szárítás, fejmasszázs"
          price="8 800"
        />
        <TierList items={cutServices.slice(1)} />
        <p className="fold-kicker">Mellé kérhető</p>
        <FlatRows items={cutAddons} />
        <div className="mt-6 grid grid-cols-3 gap-2">
          {categories.map((c, i) => (
            <div key={c.id} className="rounded-2xl bg-white/6 px-2 py-3 text-center">
              <span className="mx-auto flex justify-center text-mute">
                {i === 0 ? (
                  <HairShort className="h-7 w-6" />
                ) : i === 1 ? (
                  <HairBob className="h-7 w-6" />
                ) : (
                  <HairLong className="h-7 w-6" />
                )}
              </span>
              <p className="mt-1 text-sm font-bold">{c.id}. kat.</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-[12px] leading-relaxed text-paper/50">{categoryNotes[0]}</p>
      </Panel>

      <Panel
        id="color"
        open={open}
        onOpen={setOpen}
        image="/images/hair-2.jpg"
        title="Festés"
        from="16 000"
      >
        <Featured
          name="Tőfestés"
          note="Mosás, pakolás, szárítás, fejmasszázs"
          price="16 000"
        />
        <TierList items={colorServices.slice(1)} />
        <p className="fold-kicker">Festés mellé</p>
        <FlatRows items={colorAddons} />
      </Panel>

      <Panel
        id="more"
        open={open}
        onOpen={setOpen}
        image="/images/hero-portrait.jpg"
        title="Szalon"
        from="3 500"
      >
        <Section id="ferfi" title="Férfi">
          <FlatRows items={menItems} />
        </Section>
        <Section id="gyerek" title="Gyerek">
          <FlatRows items={kidsItems} />
        </Section>
        <Section id="alkalmi" title="Alkalmi">
          <p className="mb-3 text-[13px] text-paper/55">Mosás nélkül.</p>
          <FlatRows items={occasionItems} />
        </Section>
        <Section id="keratin" title="Keratin">
          <FlatRows items={keratinItems} />
        </Section>
        <Section id="fonas" title="Fonás">
          <p className="fold-kicker mt-0">Saját haj</p>
          <FlatRows items={braidItems} />
          <p className="fold-kicker">Póthajjal</p>
          <FlatRows items={extensionBraidItems} />
        </Section>
      </Panel>
    </div>
  );
}

function Panel({
  id,
  open,
  onOpen,
  image,
  title,
  from,
  children,
}: {
  id: PanelId;
  open: PanelId | null;
  onOpen: (id: PanelId | null) => void;
  image: string;
  title: string;
  from: string;
  children: ReactNode;
}) {
  const isOpen = open === id;
  const shut = open !== null && !isOpen;

  return (
    <article
      id={id === "cut" ? "vagas" : id === "color" ? "festes" : "szalon-arak"}
      data-state={isOpen ? "open" : shut ? "shut" : "even"}
      className="fold-panel relative flex flex-col overflow-hidden"
      onClick={() => {
        if (!isOpen) onOpen(id);
      }}
    >
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div
        className={`absolute inset-0 transition-colors duration-500 ${
          isOpen
            ? "bg-[linear-gradient(180deg,rgba(7,7,7,0.42)_0%,rgba(7,7,7,0.58)_100%)]"
            : "bg-[linear-gradient(180deg,rgba(7,7,7,0.32)_0%,rgba(7,7,7,0.18)_42%,rgba(7,7,7,0.82)_100%)]"
        }`}
      />

      <div className="relative z-[1] flex min-h-0 flex-1 flex-col overflow-hidden">
        <button
          type="button"
          className="relative z-10 flex shrink-0 items-center justify-between gap-3 px-4 py-4 text-left md:px-6 md:py-5"
          onClick={(e) => {
            e.stopPropagation();
            onOpen(isOpen ? null : id);
          }}
          aria-expanded={isOpen}
        >
          <h2 className="fold-title">{title}</h2>
          <span
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/25 text-lg leading-none ${
              shut ? "md:hidden" : ""
            }`}
          >
            {isOpen ? "–" : "+"}
          </span>
        </button>

        <div
          className={`fold-body${isOpen ? " is-open" : ""}`}
          data-lenis-prevent
          aria-hidden={!isOpen}
        >
          <div className="fold-sheet">{children}</div>
        </div>

        <div className={`fold-from${isOpen ? " is-hidden" : ""}`}>
          <p className="text-[12px] font-semibold tracking-wide text-mute">Ettől</p>
          <p className="num text-2xl font-semibold tracking-tight md:text-4xl">{formatFt(from)}</p>
        </div>
      </div>
    </article>
  );
}

function Featured({ name, note, price }: { name: string; note: string; price: string }) {
  return (
    <div className="mb-1 flex flex-col gap-1 border-b border-white/10 pb-5">
      <div className="flex items-end justify-between gap-3">
        <h3 className="min-w-0 pb-[0.12em] text-xl leading-[1.12] font-semibold md:text-2xl">{name}</h3>
        <p className="num shrink-0 text-xl font-semibold tracking-tight md:text-3xl">{formatFt(price)}</p>
      </div>
      <p className="max-w-sm text-[13px] leading-snug text-paper/55">{note}</p>
    </div>
  );
}

function TierList({ items }: { items: Service[] }) {
  return (
    <ul className="divide-y divide-white/10">
      {items.map((item) => (
        <li key={item.name} className="py-4">
          <p className="font-semibold tracking-tight">{item.name}</p>
          <div className="mt-2.5 grid grid-cols-3 gap-2">
            {(
              [
                ["I", item.prices.i],
                ["II", item.prices.ii],
                ["III", item.prices.iii],
              ] as const
            ).map(([label, value]) => (
              <div key={label} className="min-w-0">
                <p className="text-[10px] font-bold tracking-wider text-mute">{label}</p>
                <p className="num mt-0.5 text-[13px] font-semibold leading-tight">{formatFt(value)}</p>
              </div>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}

function FlatRows({ items }: { items: FlatItem[] }) {
  return (
    <ul>
      {items.map((item) => (
        <li
          key={`${item.name}-${item.price}`}
          className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-3 border-t border-white/10 py-2.5 first:border-t-0 first:pt-0"
        >
          <span className="text-[14px] leading-snug text-paper/85">{item.name}</span>
          <span className="num text-right text-[12px] font-semibold leading-snug sm:text-[13px]">
            {formatFt(item.price)}
          </span>
        </li>
      ))}
    </ul>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div id={id} className="mb-7 scroll-mt-24 last:mb-0">
      <h3 className="mb-3 text-xl font-semibold tracking-tight">{title}</h3>
      {children}
    </div>
  );
}
