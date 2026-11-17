"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function Loader() {
  useEffect(() => {
    const el = document.getElementById("preloader");
    if (!el) return;

    if (sessionStorage.getItem("hp-in")) {
      el.remove();
      return;
    }

    const mark = el.querySelector(".preloader-mark");
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      onComplete: () => {
        sessionStorage.setItem("hp-in", "1");
        el.remove();
      },
    });

    gsap.set(mark, { scale: 0.82, opacity: 0 });
    tl.to(mark, { scale: 1, opacity: 1, duration: 0.7 })
      .to(mark, { scale: 1.04, duration: 0.35, ease: "power2.inOut" })
      .to(el, { yPercent: -100, duration: 0.85, ease: "power4.inOut" }, "+=0.15");
  }, []);

  return null;
}
