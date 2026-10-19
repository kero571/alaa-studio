export const NAV = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#gallery", label: "Gallery" },
  { href: "#tools", label: "Tools" },
  { href: "#process", label: "Process" },
];
export const TICKER = ["Video Editing", "Graphic Design", "AI-Powered Creation", "Short-Form Reels", "Brand Systems"];

export const ABOUT_STATS = [
  { label: "Retention Focus", value: "+340% Avg Watch Duration" },
  { label: "Turnaround", value: "Bespoke 24–48h Velocity" },
];

export const SERVICES = [
  { icon: "clapper", tone: "peach", chip: "Short-Form & Reels", title: "Video Editing", text: "Reels, ads, and short-form edits featuring surgical cuts, precision sound design, hypnotic captions, and rhythmic motion graphics engineered to capture and hold organic algorithmic attention.", tags: ["Color Grading", "Sound Architecture", "Viral Hooks"] },
  { icon: "brush", tone: "rose", chip: "Brand & Visuals", title: "Graphic Design", text: "Comprehensive social media design systems, refined identity packages, editorial typography, and high-conversion marketing collaterals that deliver an impeccably luxurious aesthetic.", tags: ["Visual Identity", "Carousels & Social", "Art Direction"] },
  { icon: "sparkles", tone: "peach", chip: "Generative Workflows", title: "AI-Powered Creation", text: "AI-assisted visual styling, concept mockups, dynamic enhancements, and generative video scenes that morph abstract client briefs into scroll-stopping creative assets faster than traditional pipelines.", tags: ["Synthesized Motion", "Rapid Prototyping", "Stylized VFX"] },
];

export const FILTERS = [
  { id: "all", label: "All" },
  { id: "video", label: "Video Edits" },
  { id: "ai", label: "AI Creations" },
];
const makeVideos = (cat, folder, count = 4) =>
  Array.from({ length: count }, (_, i) => ({
    id: `${cat}-${i + 1}`,
    cat,
    src: `/videos/${folder}/${i + 1}.mp4`,
    title: `${cat === "ai" ? "AI creation" : "Video edit"} ${i + 1}`,
  }));


export const WORKS = [...makeVideos("video", "video"), ...makeVideos("ai", "ai")];

export const GALLERY = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  src: `/photos/${i + 1}.webp`,
  alt: `Gallery photo ${i + 1}`,
}));

export const TOOLS = [
  { label: "Premiere Pro", dot: "rose" },
  { label: "After Effects", dot: "bronze" },
  { label: "CapCut Pro", dot: "rose" },
  { label: "Photoshop", dot: "bronze" },
  { label: "Illustrator", dot: "rose" },
  { label: "Midjourney & AI Tools", special: true },
  { label: "Figma", dot: "bronze" },
];

export const STEPS = [
  { n: "01", icon: "flag", title: "Brief", text: "Discovery, core brand goals, audience persona, and retention benchmark." },
  { n: "02", icon: "bulb", title: "Concept", text: "Moodboards, narrative pacing, 3-second hook structure, and audio curation." },
  { n: "03", icon: "wand", title: "Creation", text: "Surgical edits, sound mastering, motion graphics, and generative AI synthesis." },
  { n: "04", icon: "badge", title: "Delivery", text: "Final polish, multi-platform aspect ratios, revision round, and master handoff." },
];

export const SOCIALS = [
  { icon: "camera", label: "Instagram", href: "https://instagram.com/" },
  { icon: "playCircle", label: "YouTube", href: "https://youtube.com/" },
  { icon: "palette", label: "Behance", href: "https://behance.net/" },
  { icon: "briefcase", label: "LinkedIn", href: "https://linkedin.com/" },
  { icon: "mail", label: "Email", href: "mailto:hello@alaa-studio.com" },
];

export const TABS = [
  { href: "#top", id: "top", label: "Home", icon: "home" },
  { href: "#work", id: "work", label: "Work", icon: "layers" },
  { href: "#services", id: "services", label: "Services", icon: "clapper" },
  { href: "#about", id: "about", label: "About", icon: "sparkles" },
  { href: "#contact", id: "contact", label: "Contact", icon: "send" },
];
