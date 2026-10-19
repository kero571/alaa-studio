"use client";
import Image from "next/image";
import { useState } from "react";
import Icon from "../ui/Icon";
import SectionHeading from "../ui/SectionHeading";
import { FILTERS, WORKS } from "@/data/content";

const INITIAL = 4;

// Cover image only until the user presses play; the <video> is mounted on demand,
// so nothing heavy loads with the page.
function Card({ w, playing, onPlay }) {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-black shadow-lg">
      {playing ? (
        <video
          src={w.src}
          controls
          autoPlay
          playsInline
          preload="auto"
          className="h-full w-full bg-black object-contain"
        />
      ) : (
        <button
          onClick={() => onPlay(w.id)}
          aria-label={`Play ${w.title}`}
          className="group absolute inset-0 block h-full w-full"
        >
          <Image
            src="/profile.jpg"
            alt=""
            fill
            sizes="(max-width: 639px) 92vw, (max-width: 1023px) 46vw, 360px"
            loading="lazy"
            className="object-cover"
          />
          <span className="absolute inset-0 bg-black/20 transition group-hover:bg-black/30" />
          <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-cream text-wine transition group-hover:scale-110">
            <Icon name="play" className="h-6 w-6" />
          </span>
        </button>
      )}
    </div>
  );
}

export default function Work() {
  const [filter, setFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const [activeId, setActiveId] = useState(null);

  const list = filter === "all" ? WORKS : WORKS.filter((w) => w.cat === filter);
  const visible = showAll ? list : list.slice(0, INITIAL);

  const changeFilter = (id) => {
    setFilter(id);
    setShowAll(false);
    setActiveId(null);
  };

  return (
    <section id="work" aria-labelledby="work-title" className="section defer bg-mist/70">
      <div className="container-x">
        <SectionHeading
          id="work-title"
          eyebrow="03 / Selected Work"
          title="Recent Projects & Creative Showcase"
        />

        <div
          role="tablist"
          aria-label="Filter projects"
          className="no-scrollbar -mx-5 mb-8 flex gap-2.5 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0"
        >
          {FILTERS.map((f) => (
            <button
              key={f.id}
              role="tab"
              aria-selected={filter === f.id}
              onClick={() => changeFilter(f.id)}
              className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                filter === f.id ? "bg-rose text-white" : "bg-ink/[0.06] text-ink/75 hover:bg-ink/10"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {visible.map((w) => (
            <li key={w.id} className="min-w-0">
              <Card w={w} playing={activeId === w.id} onPlay={setActiveId} />
            </li>
          ))}
        </ul>

        {list.length > INITIAL && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll((s) => !s)}
              aria-expanded={showAll}
              className="inline-flex items-center gap-2 rounded-full bg-ink/[0.06] px-7 py-3.5 text-sm font-bold transition hover:bg-ink/10"
            >
              {showAll ? "Show Less" : "View More Work"}
              <Icon name="arrow" className={`h-4 w-4 transition ${showAll ? "-rotate-90" : "rotate-90"}`} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}