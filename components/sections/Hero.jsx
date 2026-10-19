import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative h-[calc(100dvh_-_var(--nav-h))] overflow-hidden"
    >
      <div className="relative z-10 h-full lg:container-x lg:grid lg:grid-cols-2 lg:items-center lg:gap-14 lg:!px-10">
        {/* Hero Image */}
        <div className="absolute inset-0 lg:relative lg:order-2 lg:mx-auto lg:h-[min(640px,calc(100dvh_-_var(--nav-h)_-_4rem))] lg:w-full lg:max-w-md lg:overflow-hidden lg:rounded-t-[999px] lg:rounded-b-[2rem] lg:shadow-2xl lg:shadow-rose/20">
          <Image
            src="/profile.jpg"
            alt="ALAA — video editor and graphic designer"
            fill
            priority
            fetchPriority="high"
            sizes="(max-width: 1023px) 100vw, 448px"
            className="object-cover object-[50%_18%]"
          />

          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(250,247,243,.12)_0%,rgba(250,247,243,0)_25%,rgba(250,247,243,.92)_62%,#faf7f3_82%)] lg:hidden" />
        </div>

        {/* Hero Content */}
        <div className="absolute inset-x-0 bottom-3 z-10 px-5 text-center sm:px-8 lg:static lg:order-1 lg:px-0 lg:text-start">
          <span className="inline-flex animate-fadeUp items-center gap-2 rounded-full bg-[#eadcc4]/90 px-4 py-2 text-[10px] font-bold uppercase tracking-[.14em] text-bronze backdrop-blur sm:text-xs">
            <span aria-hidden="true">✦</span>
            Video Editor &amp; Graphic Designer
          </span>

          <h1 className="mt-4 animate-fadeUp font-serif text-[1.5rem] font-medium leading-[1.2] [animation-delay:.08s] sm:text-5xl lg:text-6xl xl:text-7xl">
            I turn ideas into visuals people{" "}
            <em className="text-roseText">
              can&apos;t stop watching.
            </em>
          </h1>

          <p className="mx-auto mt-4 max-w-md animate-fadeUp text-sm leading-6 text-ink/70 [animation-delay:.16s] sm:text-base sm:leading-7 lg:mx-0 lg:max-w-lg">
            High-retention short-form video editing, elevated brand systems,
            and intelligent generative craft that bring modern visionaries to
            life.
          </p>

          <div className="mt-6 grid animate-fadeUp grid-cols-2 gap-3 [animation-delay:.24s] sm:mx-auto sm:max-w-md lg:mx-0 lg:flex lg:max-w-none">
            <a href="#work" className="btn">
              View My Work
            </a>

            <a href="#contact" className="btn-outline">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}