import Icon from "../ui/Icon";
import SectionHeading from "../ui/SectionHeading";
import { SERVICES } from "@/data/content";

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="section defer bg-cream">
      <div className="container-x">
        <SectionHeading id="services-title" eyebrow="02 / Services" title="Specialized crafts tailored for modern brands" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {SERVICES.map((s, i) => (
            <article key={s.title} className={`flex min-w-0 flex-col rounded-[2rem] bg-white p-6 shadow-[0_10px_30px_-18px_rgba(35,31,32,.25)] sm:p-7 ${i === 2 ? "sm:col-span-2 lg:col-span-1" : ""}`}>
              <div className="mb-5 flex items-center justify-between gap-3">
                <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${s.tone === "rose" ? "bg-rose/20 text-wine" : "bg-peach text-bronze"}`}><Icon name={s.icon} /></span>
                <span className="chip !tracking-wider">{s.chip}</span>
              </div>
              <h3 className="font-serif text-2xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm leading-7 text-ink/70">{s.text}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {s.tags.map((t) => <li key={t} className="rounded-lg bg-mist px-3 py-1.5 text-xs text-ink/70">{t}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
