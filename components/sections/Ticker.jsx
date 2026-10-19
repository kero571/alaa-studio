import { TICKER } from "@/data/content";

export default function Ticker() {
  const loop = [...TICKER, ...TICKER];
  return (
    <div aria-hidden="true" className="overflow-hidden border-y border-ink/5 bg-mist/60 py-4">
      <ul className="flex w-max animate-marquee">
        {loop.map((t, i) => (
          <li key={i} className="flex shrink-0 items-center text-xs font-semibold uppercase tracking-[.2em] text-bronze sm:text-sm">
            <span className="px-5 sm:px-8">{t}</span>
            <span className="text-rose">✦</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
