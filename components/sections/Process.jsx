import Icon from "../ui/Icon";
import SectionHeading from "../ui/SectionHeading";
import { STEPS } from "@/data/content";

export default function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="section defer bg-mist/70">
      <div className="container-x">
        <SectionHeading id="process-title" eyebrow="05 / Process" title="From vision to scroll-stopping reality" />
        <ol className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-6">
          {STEPS.map((s) => (
            <li key={s.n} className="min-w-0 rounded-xl bg-white p-4 sm:p-6">
              <div className="flex items-center justify-between text-bronze">
                <span className="text-sm font-bold">{s.n}</span>
                <Icon name={s.icon} className="h-5 w-5" />
              </div>
              <h3 className="mt-3 font-serif text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-xs leading-6 text-ink/70 sm:text-sm sm:leading-7">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
