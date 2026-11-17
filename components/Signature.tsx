"use client";

import { useEffect, useId, useRef } from "react";
import gsap from "gsap";
import { signatureNamePath } from "@/lib/signature-path";

const writePath =
  "M 10 132 C 26 72 68 38 98 86 C 118 122 132 156 156 124 C 176 96 192 104 210 130 C 230 156 250 94 270 122 C 294 152 320 100 340 126 C 364 152 392 102 420 128 C 458 154 492 66 550 76 C 592 84 574 154 614 128 C 638 108 650 90 664 118 C 684 150 702 96 724 122 C 746 146 764 102 792 130 C 808 142 818 136 832 144";

const underlinePath =
  "M 812 146 C 858 158 848 180 742 184 C 560 190 300 172 96 186 C 42 190 20 176 48 168 C 78 158 130 176 188 172";

function prep(path: SVGPathElement) {
  const len = path.getTotalLength();
  path.style.strokeDasharray = `${len}`;
  path.style.strokeDashoffset = `${len}`;
  return len;
}

export default function Signature() {
  const root = useRef<SVGSVGElement>(null);
  const uid = useId().replace(/:/g, "");

  useEffect(() => {
    const svg = root.current;
    if (!svg) return;

    const write = svg.querySelector<SVGPathElement>(".sig-write");
    const line = svg.querySelector<SVGPathElement>(".sig-line");
    if (!write || !line) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      write.style.strokeDashoffset = "0";
      line.style.strokeDashoffset = "0";
      return;
    }

    prep(write);
    prep(line);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 1.15 });
      tl.to(write, {
        strokeDashoffset: 0,
        duration: 2.35,
        ease: "none",
      }).to(
        line,
        {
          strokeDashoffset: 0,
          duration: 0.95,
          ease: "power1.out",
        },
        "-=0.28",
      );
    }, svg);

    return () => ctx.revert();
  }, []);

  return (
    <svg
      ref={root}
      viewBox="0 0 860 230"
      className="hero-sig pointer-events-none h-auto w-[min(72vw,22rem)] origin-bottom-right -rotate-[4deg] md:w-[min(34vw,26rem)]"
      fill="none"
      aria-hidden
    >
      <defs>
        <mask id={`sig-mask-${uid}`} maskUnits="userSpaceOnUse">
          <path
            className="sig-write"
            d={writePath}
            stroke="#fff"
            strokeWidth="86"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </mask>
      </defs>
      <path d={signatureNamePath} fill="#f3efe6" mask={`url(#sig-mask-${uid})`} />
      <path
        className="sig-line"
        d={underlinePath}
        stroke="#f3efe6"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
