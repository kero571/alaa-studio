"use client";
import { useEffect, useState } from "react";
import Icon from "../ui/Icon";
import Logo from "../ui/Logo";
import { NAV } from "@/data/content";

// ارتفاع الـ navbar = var(--nav-h) (نفس القيمة اللي بيتخصم منها ارتفاع الـ hero)
export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 1024px)");
    const onMq = () => mq.matches && setOpen(false);
    document.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => { document.removeEventListener("keydown", onKey); mq.removeEventListener("change", onMq); };
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/5 bg-cream/95 backdrop-blur">
      <div className="container-x flex h-[var(--nav-h)] items-center justify-between gap-4">
        <a href="#top" aria-label="ALAA — Home"><Logo /></a>

        <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-semibold text-ink/70 transition hover:text-wine">{n.label}</a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact" className="btn hidden !px-6 !py-2.5 lg:inline-flex">Contact Me</a>
          <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-ink/[0.06] text-wine lg:hidden">
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>

      <nav id="mobile-nav" aria-label="Mobile" hidden={!open} className="border-t border-ink/5 bg-cream lg:hidden">
        <ul className="container-x grid gap-1 py-3">
          {NAV.map((n) => (
            <li key={n.href}><a href={n.href} onClick={() => setOpen(false)} className="block rounded-xl px-3 py-3 text-base font-semibold text-ink/80 hover:bg-ink/5">{n.label}</a></li>
          ))}
          <li className="pt-2"><a href="#contact" onClick={() => setOpen(false)} className="btn w-full">Contact Me</a></li>
        </ul>
      </nav>
    </header>
  );
}
