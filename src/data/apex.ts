export const APEX_BRAND = {
  primary: "#0B5CFF",
  primaryDark: "#0A2D82",
  electric: "#38BDF8",

  lime: "#B7D83F",
  limeSoft: "#EAF7C8",

  navy: "#071A3A",
  text: "#0F172A",
  muted: "#64748B",
  background: "#F8FAFC",
  white: "#FFFFFF",
} as const;

export const APEX_IMAGES = {
  hero: {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=85",
    alt: "Modern technology hardware representing Project APEX",
  },

  vision: {
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=85",
    alt: "Technology team working together",
  },

  technology: {
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=85",
    alt: "Digital technology interface",
  },

  workspace: {
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=85",
    alt: "Modern technology workspace",
  },
} as const;

export const APEX_NAVIGATION = [
  {
    label: "Vision",
    href: "#vision",
  },
  {
    label: "The Experience",
    href: "#experience",
  },
  {
    label: "Why APEX",
    href: "#why-apex",
  },
] as const;

export const APEX_WAITLIST_BENEFITS = [
  "Early access before public launch",
  "Behind-the-scenes product updates",
  "Early product announcements",
] as const;
