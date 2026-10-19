export default function Logo({ text = "ALAA", className = "" }) {
  return (
    <span className={`inline-flex items-center gap-1.5 font-serif text-2xl tracking-wide text-wine ${className}`}>
      {text}<span className="text-sm text-bronze" aria-hidden="true">✦</span>
    </span>
  );
}
