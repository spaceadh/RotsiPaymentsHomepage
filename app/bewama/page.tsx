import type { Metadata } from 'next';
import Link from 'next/link';
import Layout from '../../src/components/site/Layout';
import MotionReveal from '../../src/components/site/MotionReveal';

export const metadata: Metadata = {
  title: 'BEWAMA | Industrial Infrastructure Project Detail',
  description:
    'BEWAMA is an industrial infrastructure case study focused on workflow optimization, resilience, and enterprise-grade systems.',
};

const specs = [
  ['Technical Stack', 'Custom Erlang Core, Kubernetes, AWS Outposts, Industrial IoT Edge'],
  ['Location', 'Global Industrial Hubs / Confidential'],
  ['Duration', '24 Months Deployment Phase'],
];

export default function BewamaPage() {
  return (
    <Layout>
      <header className="fixed top-0 z-50 w-full bg-[#f8f9fa]">
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-8 py-6 md:px-12">
          <div className="flex items-center gap-6">
            <span className="material-symbols-outlined cursor-pointer text-[#101828]">menu</span>
            <Link href="/bewama" className="font-headline text-2xl font-bold uppercase tracking-tighter text-[#101828]">
              BEWAMA
            </Link>
          </div>
          <nav className="hidden items-center gap-12 md:flex">
            <a className="border-b-2 border-[#101828] py-1 font-headline text-sm uppercase tracking-widest text-[#101828]" href="#expertise">
              Expertise
            </a>
            <a className="py-1 font-headline text-sm uppercase tracking-widest text-slate-500 transition-colors duration-300 hover:text-[#D4AF37]" href="#projects">
              Projects
            </a>
            <a className="py-1 font-headline text-sm uppercase tracking-widest text-slate-500 transition-colors duration-300 hover:text-[#D4AF37]" href="#sustainability">
              Sustainability
            </a>
            <Link className="py-1 font-headline text-sm uppercase tracking-widest text-slate-500 transition-colors duration-300 hover:text-[#D4AF37]" href="/contact">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined cursor-pointer text-[#101828]">search</span>
          </div>
        </div>
        <div className="h-px w-full bg-[#f3f4f5]" />
      </header>

      <main className="pt-32">
        <section className="mx-auto max-w-[1440px] px-8 py-20 md:px-12 md:py-32">
          <div className="max-w-4xl">
            <MotionReveal>
              <span className="mb-6 block text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37]">PROJECT CASE STUDY</span>
              <h1 className="mb-12 font-headline text-6xl font-bold uppercase leading-[0.9] tracking-tighter text-primary md:text-8xl">
                BEWAMA: INDUSTRIAL INFRASTRUCTURE
              </h1>
              <p className="max-w-2xl text-xl font-light leading-relaxed text-secondary md:text-2xl">
                REDEFINING THE DIGITAL FOUNDATION OF MODERN INDUSTRY.
              </p>
            </MotionReveal>
          </div>
        </section>

        <section id="expertise" className="bg-surface-container-low py-32 md:py-48">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-12 px-8 md:grid-cols-12 md:px-12">
            <div className="md:col-span-4">
              <h2 className="mb-8 text-sm font-bold uppercase tracking-[0.4em] text-tertiary">THE CHALLENGE</h2>
            </div>
            <MotionReveal className="md:col-span-8">
              <p className="font-headline text-3xl font-light leading-tight text-[#191c1d] md:text-4xl">
                Optimizing heavy industrial workflows through a precision-engineered structural digital layer. Eliminating fragmentation in legacy systems to provide a unified, indestructible foundation for global operations.
              </p>
            </MotionReveal>
          </div>
        </section>

        <section id="projects" className="overflow-hidden bg-background py-20 md:py-32">
          <div className="mx-auto max-w-[1440px] px-8 md:px-12">
            <MotionReveal>
              <div className="ghost-border relative aspect-[21/9] w-full bg-surface-container">
                <img
                  alt="Industrial layout blueprint"
                  className="h-full w-full object-cover grayscale opacity-80 mix-blend-multiply"
                  data-alt="large clean light-grey isometric 3D floor plan representing modern industrial infrastructure and automated factory logistics with minimalist architectural lines"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsWPwJbQ1Gjg-2C9DT16hCdP4ZjgWuk02xQtqGfHKfB0dSQD4bagAxTNHwZihU0lsYXyzUEr4a118mIUt56pYxXk7fNvzoPBf0s7EnFjlPwA-47T8zKbgEgyiCTP1IblAyUciEoe8yuBjCvVxYt7niOqL9tHQAfAbG9-hAHMnU365DKzQxiA0yVqD4PAz_rxWdLiOvEqkTAz6oiPy5ROHA0kn2fBNYSXxofJ662pZHOb6PZ1Xggx5kdpNxROKKd4gE4nO6hjpZaHU"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="select-none font-headline text-9xl font-black text-[#D4AF37] opacity-10">X</span>
                </div>
              </div>
            </MotionReveal>
          </div>
        </section>

        <section className="bg-background py-32 md:py-48">
          <div className="mx-auto max-w-[1440px] px-8 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-0">
              <MotionReveal>
                <div className="border-l border-outline-variant/20 p-12 transition-colors duration-500 hover:bg-surface-container-low">
                  <span className="mb-4 block font-headline text-6xl font-bold text-primary md:text-7xl">40%</span>
                  <span className="text-sm font-bold uppercase tracking-widest text-tertiary">Efficiency Gain</span>
                </div>
              </MotionReveal>
              <MotionReveal delay={0.08}>
                <div className="border-l border-outline-variant/20 p-12 transition-colors duration-500 hover:bg-surface-container-low">
                  <span className="mb-4 block font-headline text-6xl font-bold text-primary md:text-7xl">0%</span>
                  <span className="text-sm font-bold uppercase tracking-widest text-tertiary">Downtime</span>
                </div>
              </MotionReveal>
              <MotionReveal delay={0.16}>
                <div className="border-l border-r border-outline-variant/20 p-12 transition-colors duration-500 hover:bg-surface-container-low">
                  <span className="mb-4 block font-headline text-6xl font-bold text-primary md:text-7xl">2.4M</span>
                  <span className="text-sm font-bold uppercase tracking-widest text-tertiary">Safe Hours</span>
                </div>
              </MotionReveal>
            </div>
          </div>
        </section>

        <section id="sustainability" className="bg-surface-container-low py-32 md:py-48">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-8 md:grid-cols-12 md:px-12">
            <div className="md:col-span-4">
              <h2 className="mb-8 text-sm font-bold uppercase tracking-[0.4em] text-tertiary">PROJECT SPECS</h2>
            </div>
            <div className="md:col-span-8">
              <div className="grid grid-cols-1 gap-12">
                {specs.map(([label, value], index) => (
                  <MotionReveal key={label} delay={index * 0.08}>
                    <div className="flex flex-col justify-between border-b border-outline-variant/30 pb-12 md:flex-row">
                      <span className="mb-4 text-sm font-bold uppercase tracking-widest text-secondary md:mb-0">{label}</span>
                      <span className="font-headline text-2xl text-primary">{value}</span>
                    </div>
                  </MotionReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary py-48">
          <div className="mx-auto max-w-[1440px] px-8 text-center md:px-12">
            <MotionReveal>
              <h2 className="mb-16 font-headline text-4xl font-bold uppercase tracking-tight text-white md:text-6xl">READY TO BUILD THE FUTURE?</h2>
              <Link className="inline-flex bg-white px-16 py-6 font-bold uppercase tracking-widest text-primary transition-all duration-300 hover:bg-[#ffe088]" href="/contact">
                INQUIRE NOW
              </Link>
            </MotionReveal>
          </div>
        </section>
      </main>

      <footer className="bg-[#f3f4f5] py-20">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-between gap-8 px-8 text-center md:flex-row md:px-12 md:text-left">
          <div>
            <span className="font-headline text-lg font-black text-[#101828]">BEWAMA</span>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <a className="font-body text-sm uppercase tracking-widest text-slate-500 transition-all duration-300 hover:text-[#101828] hover:underline hover:underline-offset-8" href="#expertise">
              Expertise
            </a>
            <a className="font-body text-sm uppercase tracking-widest text-slate-500 transition-all duration-300 hover:text-[#101828] hover:underline hover:underline-offset-8" href="#projects">
              Projects
            </a>
            <a className="font-body text-sm uppercase tracking-widest text-slate-500 transition-all duration-300 hover:text-[#101828] hover:underline hover:underline-offset-8" href="#sustainability">
              Sustainability
            </a>
            <Link className="font-body text-sm uppercase tracking-widest text-slate-500 transition-all duration-300 hover:text-[#101828] hover:underline hover:underline-offset-8" href="/contact">
              Contact
            </Link>
          </div>
          <div>
            <p className="font-body text-xs uppercase tracking-widest text-[#101828] opacity-60">© 2026 BEWAMA INDUSTRIAL INFRASTRUCTURE. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </Layout>
  );
}
