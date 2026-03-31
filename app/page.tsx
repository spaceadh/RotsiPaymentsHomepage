import type { Metadata } from 'next';
import Link from 'next/link';
import Layout from '../src/components/site/Layout';
import MotionReveal from '../src/components/site/MotionReveal';
import ProjectCard from '../src/components/site/ProjectCard';

export const metadata: Metadata = {
  title: 'Innovation Is The Core',
  description:
    'Rotsi Solutions engineers modern levers for industrial infrastructure and flow-state systems.',
};

const process = [
  {
    icon: 'architecture',
    title: '01. CONSULT',
    copy: 'High-level architectural auditing to identify friction points and legacy bottlenecks.',
  },
  {
    icon: 'query_stats',
    title: '02. STRATEGIZE',
    copy: 'Mapping the digital lever. We design the shortest path from logic to execution.',
  },
  {
    icon: 'precision_manufacturing',
    title: '03. ENGINEER',
    copy: 'Deploying precision-engineered software that anchors the future of the enterprise.',
  },
];

export default function HomePage() {
  return (
    <Layout>
      <header className="fixed top-0 z-50 w-full bg-white/60 backdrop-blur-xl shadow-[0_20px_50px_rgba(16,24,40,0.04)]">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-8 py-6 md:px-12">
          <Link href="/" className="font-headline text-xl font-bold uppercase tracking-tighter text-yellow-600">
            ROTSI SOLUTIONS
          </Link>
          <nav className="hidden space-x-12 md:flex">
            <Link className="font-headline font-bold uppercase tracking-tighter text-yellow-600 transition-colors duration-300" href="/blog">
              Journal
            </Link>
            <a className="font-headline font-medium uppercase tracking-tighter text-slate-600 transition-colors duration-300 hover:text-yellow-600" href="#portfolio">
              Portfolio
            </a>
            <Link className="font-headline font-medium uppercase tracking-tighter text-slate-600 transition-colors duration-300 hover:text-yellow-600" href="/contact">
              Inquiry
            </Link>
          </nav>
          <div className="flex items-center">
            <span className="material-symbols-outlined cursor-pointer text-slate-900 transition-transform duration-200 hover:scale-95">close</span>
          </div>
        </div>
      </header>

      <main className="pt-40">
        <section className="mx-auto mb-40 flex max-w-[1440px] flex-col items-center px-8 text-center md:px-12">
          <MotionReveal>
            <div className="mb-8">
              <span className="font-label text-sm font-bold uppercase tracking-[0.4em] text-tertiary">The Modern Lever</span>
            </div>
            <h1 className="mb-12 max-w-5xl font-headline text-5xl font-bold leading-tight tracking-[-0.03em] text-primary md:text-7xl lg:text-8xl">
              INNOVATION IS THE CORE. TECH IS THE TOOL.
            </h1>
            <p className="mb-16 max-w-2xl font-body text-xl font-light leading-relaxed tracking-wide text-secondary md:text-2xl">
              WE ENGINEER MODERN LEVERS FOR ELITE GROWTH.
            </p>
            <a
              href="#portfolio"
              className="inline-flex bg-primary px-10 py-5 font-headline text-sm uppercase tracking-widest text-white transition-all duration-300 hover:bg-primary-container active:scale-95"
            >
              EXPLORE INNOVATION
            </a>
          </MotionReveal>
        </section>

        <section className="mb-40 bg-surface-container-low py-32">
          <div className="mx-auto max-w-4xl px-8 text-center md:px-12">
            <MotionReveal>
              <p className="font-body text-2xl font-medium italic leading-relaxed text-primary md:text-3xl">
                "BUSINESS LOGIC HASN&apos;T CHANGED IN 3,000 YEARS. WE JUST ENGINEERED THE MODERN LEVER."
              </p>
              <div className="mt-12 flex justify-center">
                <span className="font-headline text-4xl font-light text-tertiary">X</span>
              </div>
            </MotionReveal>
          </div>
        </section>

        <section id="portfolio" className="mx-auto mb-40 max-w-[1440px] px-8 md:px-12">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <ProjectCard
              index="01. INFRASTRUCTURE"
              title="BEWAMA"
              subtitle="INDUSTRIAL INFRASTRUCTURE"
              href="/bewama"
              imageAlt="Industrial Infrastructure Concept"
              imageDataAlt="minimalist isometric 3D floor plan architectural rendering in light grey and white tones with soft clean shadows"
              imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDfU33MDRUV58v19KPuE--FYmoSBbHH6vXx4jEuj2UwUnHGkIUNW91Q9uNLZav_ccydJ7favYBmLQUokpo1vksU_Cnxcn-rB3bOQHzWvXBCCNHquXqDyb_UWXCSvKz1NGiuYzhISctXDNa_KesacPPgsw1op7JtQY1wsRaZ17d9C3AzPtcTmVE610jltjL3_ZsUHdCFlaDczeyZ4T18g1n0I_Uboo1li3pqGLsdLWjV7V4KEWWEZgz1WvpZN-BFPkKcF0-55HkIPL8"
            />
            <ProjectCard
              index="02. PERFORMANCE"
              title="REMINDR"
              subtitle="FLOW-STATE SYSTEMS"
              href="/remindr"
              imageAlt="Flow-State Systems UI"
              imageDataAlt="minimalist white mobile user interface mockup on a clean studio background with soft ambient lighting"
              imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDzHhVRBZaXItFXMKLu7R__AouE2FR_qP51Yyy3aWSr2na4eWdkXiSrdMYYSyZ-Z6bGWe_A2XRRaP4ORxfG9Wy7_kNRB_iA9b4OgQYhj6CZSKH-rOGEh6OoXMX4uTardm1j8mRZVl0NLkYZTgxw_OmOVoirqncLfLqhCZS-uUzQ0w5703MvxhvXfBa3o3e4H3FRqkeAbfHlbnJpoL3oEuQnkLpzLwBrmE0mOGAA0AgzWP-Hh4CwMjqk9WHYSQCO0nTk0Z3mOEx4E4o"
              delay={0.08}
            />
          </div>
        </section>

        <section className="mx-auto mb-60 max-w-[1440px] px-8 md:px-12">
          <div className="grid grid-cols-1 gap-24 md:grid-cols-3">
            {process.map((item, index) => (
              <MotionReveal key={item.title} delay={index * 0.08}>
                <div className="text-center">
                  <span className="material-symbols-outlined mb-6 text-4xl font-light text-primary">{item.icon}</span>
                  <h2 className="mb-4 font-headline text-lg font-bold uppercase tracking-widest text-primary">{item.title}</h2>
                  <p className="mx-auto max-w-xs font-body text-sm leading-relaxed text-secondary">{item.copy}</p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </section>

        <div className="pointer-events-none flex justify-center pb-20 opacity-5">
          <span className="select-none font-headline text-[20rem] font-bold text-tertiary">X</span>
        </div>
      </main>

      <footer className="w-full bg-slate-100 py-20">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-center space-y-12 px-8 text-center md:px-12">
          <div className="font-headline text-xl font-bold uppercase tracking-widest text-yellow-600">ROTSI SOLUTIONS</div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            <Link className="font-body text-sm uppercase tracking-widest text-slate-500 underline decoration-yellow-600 decoration-2 underline-offset-8 transition-all hover:text-slate-900" href="/blog">
              Journal
            </Link>
            <a className="font-body text-sm uppercase tracking-widest text-slate-500 transition-all hover:text-slate-900" href="#portfolio">
              Portfolio
            </a>
            <Link className="font-body text-sm uppercase tracking-widest text-slate-500 transition-all hover:text-slate-900" href="/contact">
              Inquiry
            </Link>
          </div>
          <div className="font-body text-sm uppercase tracking-widest text-slate-500">© 2026 ROTSI SOLUTIONS. ARCHITECTURAL EXCELLENCE.</div>
        </div>
      </footer>
    </Layout>
  );
}
