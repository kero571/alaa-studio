"use client";
import { useEffect, useState } from "react";
import Icon from "./ui/Icon";
import { TABS } from "@/data/content";

// شريط التنقل السفلي (موبايل وتابلت فقط) مع تمييز السكشن النشط
export default function TabBar() {
  const [active, setActive] = useState("top");

  useEffect(() => {
    const els = TABS.map((t) => document.getElementById(t.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <nav aria-label="Quick navigation" className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/5 bg-cream/95 backdrop-blur lg:hidden" style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}>
      <ul className="mx-auto grid h-[var(--tab-h)] max-w-xl grid-cols-5">
        {TABS.map((t) => (
          <li key={t.id}>
            <a href={t.href} aria-current={active === t.id ? "true" : undefined}
              className={`flex h-full flex-col items-center justify-center gap-1 text-[11px] font-semibold transition ${active === t.id ? "text-wine" : "text-ink/65"}`}>
              <Icon name={t.icon} className="h-5 w-5" />
              {t.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
