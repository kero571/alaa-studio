import Icon from "../ui/Icon";
import { SITE } from "@/lib/site";
import { SOCIALS } from "@/data/content";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="section defer relative overflow-hidden bg-[#f1ece8]">
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-rose/20 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-peach blur-3xl" />
      <div className="container-x relative text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-cream px-4 py-2 text-[11px] font-bold uppercase tracking-[.16em] text-bronze">
          <span aria-hidden="true">✦</span> 06 / Let&apos;s Create Together
        </span>
        <h2 id="contact-title" className="h2 mx-auto mt-6 max-w-3xl !font-medium">
          Have an idea? Let&apos;s turn it into something people <em className="text-roseText">can&apos;t scroll past.</em>
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-ink/70 sm:text-base">
          Message me directly to discuss your project, explore creative ideas, and get a tailored timeline within 24 hours.
        </p>
        <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn mx-auto mt-8 flex w-full max-w-md !py-4 text-base">
          <Icon name="chat" className="h-5 w-5" /> Start on WhatsApp
        </a>
        {/* <ul className="mt-6 flex flex-wrap justify-center gap-3">
          {SOCIALS.map((s) => (
            <li key={s.label}>
              <a href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" aria-label={s.label}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-cream text-ink/80 shadow-sm transition hover:-translate-y-0.5 hover:text-wine">
                <Icon name={s.icon} className="h-5 w-5" />
              </a>
            </li>
          ))}
        </ul> */}
      </div>
    </section>
  );
}
