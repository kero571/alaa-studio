import { Eyebrow } from "../ui/SectionHeading";
import { TOOLS } from "@/data/content";

export default function Tools() {
  return (
    <section id="tools" aria-labelledby="tools-title" className="section container-x defer text-center">
      <Eyebrow center line={false}><span id="tools-title">04 / Tools I Work With</span></Eyebrow>
      <p className="mx-auto max-w-md text-sm leading-7 text-ink/70 sm:text-base">State-of-the-art creative engines tuned for high-velocity precision and aesthetic polish.</p>
      <ul className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-3">
        {TOOLS.map((t) => (
          <li key={t.label} className={`flex items-center gap-2.5 rounded-full px-5 py-3 text-sm ${t.special ? "bg-peach font-medium" : "bg-mist"}`}>
            {t.special ? <span className="text-bronze" aria-hidden="true">✦</span> : <i className={`block h-2.5 w-2.5 rounded-full ${t.dot === "rose" ? "bg-rose" : "bg-bronze"}`} aria-hidden="true" />}
            {t.label}
          </li>
        ))}
      </ul>
    </section>
  );
}
