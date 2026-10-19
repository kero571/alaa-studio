export function Eyebrow({ children, line = true, center = false }) {
  return (
    <p className={`mb-4 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[.18em] text-bronze ${center ? "justify-center" : ""}`}>
      {children}
      {line && <span className="h-px flex-1 bg-ink/10" aria-hidden="true" />}
    </p>
  );
}

export default function SectionHeading({ eyebrow, title, id, className = "" }) {
  return (
    <div className={`mb-8 lg:mb-12 ${className}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 id={id} className="h2 max-w-3xl">{title}</h2>
    </div>
  );
}
