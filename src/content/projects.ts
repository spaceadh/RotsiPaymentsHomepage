export type ProjectEntry = {
  index: string;
  title: string;
  subtitle: string;
  href: string;
  imageAlt: string;
  imageDataAlt?: string;
  imageSrc: string;
  summary: string;
  tags: string[];
  delay?: number;
};

export const projects: ProjectEntry[] = [
  {
    index: '01. B2B PLATFORM',
    title: 'BEWAMA',
    subtitle: 'INDUSTRIAL AND BUILDING MATERIALS',
    href: '/projects/bewama',
    imageAlt: 'Industrial Infrastructure Concept',
    imageDataAlt:
      'minimalist isometric 3D floor plan architectural rendering in light grey and white tones with soft clean shadows',
    imageSrc: '/clients-work/bewama/landing-page.png',
    summary:
      'A procurement and infrastructure platform designed to make complex industrial buying, discovery, and follow-through feel structured, fast, and dependable.',
    tags: ['B2B Platform', 'Procurement Flow', 'Industrial Systems'],
  },
  {
    index: '02. EMPLOYEE APPRECIATION',
    title: 'KUMBUSHA',
    subtitle: 'MORALE, RECOGNITION, AND TEAM CULTURE',
    href: '/projects/kumbusha',
    imageAlt: 'Flow-State Systems UI',
    imageDataAlt:
      'minimalist white mobile user interface mockup on a clean studio background with soft ambient lighting',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDzHhVRBZaXItFXMKLu7R__AouE2FR_qP51Yyy3aWSr2na4eWdkXiSrdMYYSyZ-Z6bGWe_A2XRRaP4ORxfG9Wy7_kNRB_iA9b4OgQYhj6CZSKH-rOGEh6OoXMX4uTardm1j8mRZVl0NLkYZTgxw_OmOVoirqncLfLqhCZS-uUzQ0w5703MvxhvXfBa3o3e4H3FRqkeAbfHlbnJpoL3oEuQnkLpzLwBrmE0mOGAA0AgzWP-Hh4CwMjqk9WHYSQCO0nTk0Z3mOEx4E4o',
    summary:
      'A recognition product focused on morale, appreciation, and healthier cultural feedback loops for teams that want consistency, clarity, and momentum.',
    tags: ['Recognition Product', 'Team Culture', 'Internal Systems'],
    delay: 0.08,
  },
];

export const featuredProjects = projects.slice(0, 2);
