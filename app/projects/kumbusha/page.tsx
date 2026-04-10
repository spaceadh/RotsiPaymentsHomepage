import type { Metadata } from 'next';
import Link from 'next/link';
import RotsiLogo from '../../../src/components/brand/RotsiLogo';
import Layout from '../../../src/components/site/Layout';
import MotionReveal from '../../../src/components/site/MotionReveal';
import SiteMobileMenu from '../../../src/components/site/SiteMobileMenu';
import { kumbushaNavigationItems } from '../../../src/content/navigation';

export const metadata: Metadata = {
  title: 'KUMBUSHA | FLOW-STATE SYSTEMS',
  description:
    'KUMBUSHA is a flow-state systems case study focused on concentration, output, and cognitive architecture.',
};

const metrics = [
  ['85%', 'DEEP WORK INCREASE', 'bg-surface-container-highest text-primary'],
  ['2.5X', 'COGNITIVE OUTPUT', 'bg-primary-container text-surface'],
  ['< 3MS', 'RESPONSE LATENCY', 'bg-surface-container-low text-primary'],
] as const;

const specs = [
  ['Architecture', 'Micro-flow Ledger'],
  ['Stack', 'Rust, WebAssembly, Neural API'],
  ['Status', 'Active Deployment'],
];

export default function KumbushaPage() {
  const currentYear = new Date().getFullYear();
  const mobileNavigationItems = kumbushaNavigationItems();

  return (
    <Layout>
      <header className="fixed left-0 right-0 top-0 z-50 bg-[#f8f9fa] transition-opacity duration-300">
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-8 py-8 md:px-12">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined hidden cursor-pointer text-[#101828] transition-opacity duration-300 hover:opacity-70 active:scale-95 md:inline-flex">grid_view</span>
            <Link href="/" className="inline-flex w-[108px] text-primary sm:w-[132px]" aria-label="Rotsi home">
              <RotsiLogo className="block w-full" kind="wordmark" title="Rotsi wordmark" />
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined hidden text-[#D4AF37] md:inline-flex" style={{ fontVariationSettings: "'FILL' 1" }}>close</span>
            <SiteMobileMenu items={mobileNavigationItems} title="Project Menu" />
          </div>
        </div>
      </header>

      <main className="pt-32">
        <section id="overview" className="relative flex min-h-[795px] flex-col items-center justify-center overflow-hidden bg-surface px-8 text-center md:px-12">
          <div className="pointer-events-none absolute inset-0 flex select-none items-center justify-center opacity-[0.02]">
            <span className="font-headline text-[60rem] leading-none text-tertiary">X</span>
          </div>
          <MotionReveal className="relative z-10 max-w-5xl">
            <p className="mb-8 font-label text-sm uppercase tracking-[0.4em] text-tertiary">FLOW-STATE SYSTEMS</p>
            <h1 className="mb-12 font-headline text-6xl font-bold uppercase leading-none tracking-[-0.04em] text-primary md:text-8xl">
              KUMBUSHA:
              <br />
              THE COGNITIVE LEVER
            </h1>
            <p className="mx-auto max-w-2xl font-body text-xl leading-relaxed tracking-tight text-secondary md:text-2xl">
              OPTIMIZING FLOW FOR ELITE PERFORMANCE.
            </p>
          </MotionReveal>
        </section>

        <section id="philosophy" className="flex items-center justify-center bg-surface-container-low px-8 py-48 md:px-12">
          <div className="max-w-3xl text-center">
            <span className="mb-12 block font-label text-xs uppercase tracking-[0.5em] text-tertiary">Philosophy</span>
            <MotionReveal>
              <h2 className="mb-12 font-headline text-4xl font-medium tracking-tight text-primary md:text-5xl">
                CONQUERING THE FRICTION OF MODERN DISTRACTION.
              </h2>
              <div className="mx-auto mb-12 h-px w-24 bg-outline-variant/30" />
              <p className="font-body text-lg leading-relaxed text-[#45474c]">
                Human potential is tethered by the noise of the digital landscape. Kumbusha isn&apos;t a tool for management; it is an architectural intervention. By isolating the signal from the noise, we create a sanctuary for deep work.
              </p>
            </MotionReveal>
          </div>
        </section>

        <section id="systems" className="mx-auto max-w-7xl bg-surface px-8 py-48 md:px-12">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="flex flex-col justify-between gap-12 md:col-span-5">
              {metrics.map(([value, label, cardClass], index) => (
                <MotionReveal key={label} delay={index * 0.08}>
                  <div className={`flex min-h-[300px] flex-col justify-end p-12 ${cardClass}`}>
                    <p className="mb-4 font-headline text-5xl font-bold tracking-tighter">{value}</p>
                    <p className="font-label text-xs uppercase tracking-widest text-tertiary">{label}</p>
                  </div>
                </MotionReveal>
              ))}
            </div>
            <MotionReveal delay={0.12} className="group relative overflow-hidden bg-surface-container-low md:col-span-7">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
              <div className="relative z-10 mx-auto flex min-h-[960px] items-center justify-center px-6 py-16 md:min-h-[936px]">
                <div className="relative flex h-[640px] w-[320px] flex-col gap-8 border-[12px] border-primary-container bg-white p-8 shadow-[0_40px_100px_rgba(16,24,40,0.08)]">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold tracking-tighter">KUMBUSHA</span>
                    <span className="material-symbols-outlined text-xs">battery_full</span>
                  </div>
                  <div className="mt-12 text-center">
                    <span className="font-label text-[0.6rem] uppercase tracking-[0.3em] text-tertiary">Status</span>
                    <h3 className="mt-2 font-headline text-3xl font-bold uppercase">Concentration</h3>
                  </div>
                  <div className="flex flex-grow items-center justify-center">
                    <div className="relative flex h-48 w-48 items-center justify-center rounded-full border border-outline-variant/20">
                      <div className="h-32 w-32 animate-pulse rounded-full border-2 border-tertiary" />
                      <span className="absolute font-headline text-xl font-bold tracking-tighter text-primary">ACTIVE</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-px w-full bg-outline-variant/20" />
                    <div className="flex justify-between text-[0.65rem] font-bold uppercase tracking-widest">
                      <span>Input Neutralized</span>
                      <span className="text-tertiary">98.2%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-20 -right-20 h-80 w-80 rotate-45 bg-tertiary/5" />
            </MotionReveal>
          </div>
        </section>

        <section id="architecture" className="bg-primary-container px-8 py-48 text-surface md:px-12">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-24 md:flex-row">
            <div className="max-w-md">
              <h2 className="mb-8 font-headline text-5xl font-bold uppercase leading-none tracking-tighter">
                Project
                <br />
                Architecture
              </h2>
              <p className="font-body leading-relaxed text-white/80">
                A decentralized ledger designed to capture micro-flows and translate neural patterns into actionable systems.
              </p>
            </div>
            <div className="flex max-w-xl flex-grow flex-col gap-12">
              {specs.map(([label, value], index) => (
                <MotionReveal key={label} delay={index * 0.08}>
                  <div className="flex items-end justify-between border-b border-surface/10 pb-6">
                    <span className="font-label text-xs uppercase tracking-widest text-tertiary">{label}</span>
                    <span className="font-headline text-xl uppercase tracking-tight">{value}</span>
                  </div>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-surface px-8 py-64 text-center md:px-12">
          <div className="mx-auto max-w-2xl">
            <span className="material-symbols-outlined mb-12 block text-6xl text-tertiary">psychology</span>
            <MotionReveal>
              <h2 className="mb-12 font-headline text-5xl font-bold uppercase tracking-tighter text-primary">Ready to Ascend?</h2>
              <Link className="group mx-auto inline-flex items-center gap-4 bg-primary px-16 py-6 font-headline font-bold uppercase tracking-widest text-surface transition-all duration-300 hover:bg-primary-container active:scale-95" href="/contact">
                ENTER FLOW
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">arrow_forward</span>
              </Link>
            </MotionReveal>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-[#c6c6cd]/10 bg-[#f8f9fa] px-8 py-24 md:px-12">
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            <a className="font-body text-sm uppercase tracking-widest text-[#101828]/60 underline transition-colors duration-300 hover:text-[#D4AF37]" href="#">
              Philosophy
            </a>
            <a className="font-body text-sm uppercase tracking-widest text-[#101828]/60 underline transition-colors duration-300 hover:text-[#D4AF37]" href="#">
              Systems
            </a>
            <Link className="font-body text-sm uppercase tracking-widest text-[#101828]/60 underline transition-colors duration-300 hover:text-[#D4AF37]" href="/blog">
              Archive
            </Link>
            <Link className="font-body text-sm uppercase tracking-widest text-[#101828]/60 underline transition-colors duration-300 hover:text-[#D4AF37]" href="/contact">
              Contact
            </Link>
          </div>
          <div className="font-headline text-xl font-bold uppercase tracking-tighter text-[#D4AF37]">ROTSI</div>
          <p className="font-body text-sm uppercase tracking-widest text-[#101828] opacity-40">© {currentYear} ROTSI SOLUTIONS. KUMBUSHA FLOW-STATE SYSTEM.</p>
        </div>
      </footer>
    </Layout>
  );
}
