import Icon from "../ui/Icon";
import Logo from "../ui/Logo";
import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-cream px-5 py-12 text-center">
      <Logo text={SITE.studio} />
      <p className="mx-auto mt-4 max-w-xs text-xs leading-6 text-ink/65 sm:max-w-none sm:text-sm">
        © 2026 {SITE.owner}. All rights reserved. Crafting scroll-stopping
        visuals.
      </p>
      <a
        href="#top"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink/[0.06] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-ink/70 transition hover:text-wine"
      >
        <Icon name="up" className="h-4 w-4" /> Back to top
      </a>
    </footer>
  );
}
