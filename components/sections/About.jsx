import Image from "next/image";
import { Eyebrow } from "../ui/SectionHeading";
import { ABOUT_STATS } from "@/data/content";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section container-x defer">
      <Eyebrow>01 / About Me</Eyebrow>
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <figure className="relative mx-auto w-full max-w-[17rem] sm:max-w-xs lg:max-w-sm">
          <div className="relative aspect-[3/4] overflow-hidden rounded-t-[999px] rounded-b-2xl bg-mist shadow-xl shadow-ink/10">
            <Image src="/profile.jpg" alt="Portrait of ALAA, video editor and graphic designer" fill sizes="(max-width: 1023px) 70vw, 384px" loading="lazy" className="object-cover object-[50%_20%]" />
            <figcaption className="absolute inset-x-5 bottom-4 flex items-center justify-center gap-2 rounded-full bg-cream/95 px-4 py-2 text-[10px] font-bold uppercase tracking-[.14em] text-wine shadow">
              <span aria-hidden="true">✦</span> AI-Powered Creator
            </figcaption>
          </div>
        </figure>

        <div>
          <h2 id="about-title" className="h2">Creative, detail-obsessed, and <em className="text-roseText">always one step ahead.</em></h2>
          <div className="mt-6 space-y-4 text-sm leading-7 text-ink/75 sm:text-base sm:leading-8">
            <p>With over five years at the nexus of cinematic pacing and contemporary graphic design, I build media that commands immediate intrigue. Short-form retention isn&apos;t just about fast cuts—it&apos;s an emotional tempo governed by sound design, rhythmic typography, and visual balance.</p>
            <p>By embedding custom generative AI synthesis into my post-production pipeline, I deliver visionary art direction, hyper-stylized b-roll, and concept iterations at unprecedented speed, preserving genuine atelier craftsmanship in every single frame.</p>
          </div>
          <dl className="mt-7 grid gap-3 sm:grid-cols-2">
            {ABOUT_STATS.map((s) => (
              <div key={s.label} className="rounded-xl bg-mist p-5">
                <dt className="text-[11px] font-bold uppercase tracking-[.16em] text-bronze">{s.label}</dt>
                <dd className="mt-1.5 text-sm font-medium leading-6">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
