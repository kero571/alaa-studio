const P = {
  menu: <path d="M4 8h16M4 16h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  play: <path d="M8 5v14l11-7z" fill="currentColor" stroke="none" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  up: <path d="M12 19V5M6 11l6-6 6 6" />,
  home: <path d="M4 11l8-7 8 7v9H4zM10 20v-6h4v6" />,
  layers: <><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" /></>,
  clapper: <><path d="M3 9h18v10a1 1 0 0 1-1 1h-8M3 9l2-5 3 1 3-1 3 1 3-1 2 5M3 9v6" /><path d="m14 21 5-5-2-2-5 5z" /></>,
  brush: <path d="M14 5l5 5-8 8-5-5zM6 13l-2 6 6-2" />,
  sparkles: <><path d="M10 4l1.8 4.7L16.5 10.5 11.8 12.3 10 17l-1.8-4.7L3.5 10.5 8.2 8.7z" /><path d="M18 3v4M16 5h4M18 14v4M16 16h4" /></>,
  flag: <path d="M5 21V4h13l-3 4 3 4H5" />,
  bulb: <><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.8c.7.6 1 1.2 1 2.2h5c0-1 .3-1.6 1-2.2A6 6 0 0 0 12 3z" /></>,
  wand: <path d="M5 19 16 8M14 6l2-2 4 4-2 2M6 4v3M4.5 5.5h3M19 15v3M17.5 16.5h3" />,
  badge: <><path d="M12 3l2.4 1.6 2.9.1 1 2.7 2.2 1.9-.9 2.8.9 2.8-2.2 1.9-1 2.7-2.9.1L12 21l-2.4-1.6-2.9-.1-1-2.7L3.5 14.7l.9-2.8-.9-2.8 2.2-1.9 1-2.7 2.9-.1z" /><path d="m9 12 2 2 4-4" /></>,
  chat: <path d="M4 5h16v11H9l-5 4zM8 9h8M8 12h5" />,
  camera: <><path d="M4 8h3l2-3h6l2 3h3v11H4z" /><circle cx="12" cy="13" r="3.5" /></>,
  playCircle: <><circle cx="12" cy="12" r="9" /><path d="M10 8.5v7l6-3.5z" fill="currentColor" /></>,
  palette: <><circle cx="12" cy="12" r="9" /><circle cx="8" cy="11" r="1" /><circle cx="12" cy="7.5" r="1" /><circle cx="16" cy="11" r="1" /><path d="M12 21a2 2 0 0 1 0-4h2a3 3 0 0 0 3-3" /></>,
  briefcase: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M3 13h18" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  send: <path d="M22 3 11 14M22 3l-7 18-4-8-8-4z" />,
};
export default function Icon({ name, className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" focusable="false">
      {P[name]}
    </svg>
  );
}
