"use client";
import Image from "next/image";
import { useRef } from "react";
import Icon from "../ui/Icon";
import SectionHeading from "../ui/SectionHeading";
import { GALLERY } from "@/data/content";

export default function Gallery() {
  const track = useRef(null);

  const scroll = (dir) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <section id="gallery" aria-labelledby="gallery-title" className="section defer">
      <div className="container-x">
        <SectionHeading
          id="gallery-title"
          eyebrow="04 / Gallery"
          title="Frames That Tell Stories"
        />

        <div className="relative">
          <ul
            ref={track}
            tabIndex={0}
            aria-label="Photo gallery"
            className="no-scrollbar -mx-5 flex h-[320px] snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-5 sm:mx-0 sm:h-[420px] sm:px-0 lg:h-[480px]"
          >
            {GALLERY.map((p, i) => (
              <li
                key={p.id}
                className="h-full shrink-0 snap-center overflow-hidden rounded-[1.75rem] bg-ink/[0.06] shadow-md"
              >
                {/* width/height 0 + auto width => each image keeps its own ratio at the same height */}
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={0}
                  height={0}
                  sizes="(max-width: 640px) 80vw, 480px"
                  priority={i < 2}
                  loading={i < 2 ? undefined : "lazy"}
                  draggable={false}
                  style={{ height: "100%", width: "auto" }}
                  className="block max-w-none"
                />
              </li>
            ))}
          </ul>

          <div className="mt-6 flex justify-center gap-3">
            <button onClick={() => scroll(-1)} aria-label="Previous photos"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-ink/[0.06] transition hover:bg-rose hover:text-white">
              <Icon name="arrow" className="h-4 w-4 rotate-180" />
            </button>
            <button onClick={() => scroll(1)} aria-label="Next photos"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-ink/[0.06] transition hover:bg-rose hover:text-white">
              <Icon name="arrow" className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}