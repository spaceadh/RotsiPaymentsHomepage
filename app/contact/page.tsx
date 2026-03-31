import type { Metadata } from 'next';
import Link from 'next/link';
import Layout from '../../src/components/site/Layout';
import MotionReveal from '../../src/components/site/MotionReveal';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Start a project inquiry with Rotsi Solutions.',
};

export default function ContactPage() {
  return (
    <Layout>
      <header className="fixed top-0 z-50 w-full bg-white/60 backdrop-blur-xl shadow-[0_20px_50px_rgba(16,24,40,0.04)]">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-8 py-6 md:px-12">
          <Link href="/" className="font-headline text-xl font-bold uppercase tracking-tighter text-yellow-600">
            ROTSI SOLUTIONS
          </Link>
          <nav className="hidden space-x-12 md:flex">
            <Link className="font-headline font-medium uppercase tracking-tighter text-slate-600 transition-colors duration-300 hover:text-yellow-600" href="/blog">
              Journal
            </Link>
            <Link className="font-headline font-medium uppercase tracking-tighter text-slate-600 transition-colors duration-300 hover:text-yellow-600" href="/bewama">
              Portfolio
            </Link>
            <Link className="font-headline font-bold uppercase tracking-tighter text-yellow-600 transition-colors duration-300" href="/contact">
              Inquiry
            </Link>
          </nav>
          <span className="material-symbols-outlined text-slate-900">mail</span>
        </div>
      </header>

      <main className="pt-40">
        <section className="mx-auto max-w-[1440px] px-8 pb-24 md:px-12">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
            <MotionReveal>
              <span className="mb-6 block font-label text-sm font-bold uppercase tracking-[0.4em] text-tertiary">Inquiry</span>
              <h1 className="mb-12 max-w-4xl font-headline text-5xl font-bold leading-tight tracking-[-0.03em] text-primary md:text-7xl">
                LET&apos;S ARCHITECT THE NEXT LEVER.
              </h1>
              <p className="max-w-2xl font-body text-xl font-light leading-relaxed text-secondary md:text-2xl">
                Share the operating problem, the ambition, and the timeline. We will return with a structured path forward.
              </p>
              <div className="mt-16 grid grid-cols-1 gap-10 border-t border-outline-variant/30 pt-10 sm:grid-cols-2">
                <div>
                  <p className="font-label text-xs uppercase tracking-[0.3em] text-tertiary">Email</p>
                  <p className="mt-3 font-body text-lg text-primary">support@rotsi.co.ke</p>
                </div>
                <div>
                  <p className="font-label text-xs uppercase tracking-[0.3em] text-tertiary">Phone</p>
                  <p className="mt-3 font-body text-lg text-primary">+254 745 474 586</p>
                </div>
              </div>
            </MotionReveal>

            <MotionReveal delay={0.1}>
              <div className="glass-panel border border-primary/10 p-8 md:p-12">
                <form className="space-y-8">
                  <div>
                    <label className="mb-3 block font-label text-xs font-bold uppercase tracking-[0.3em] text-secondary" htmlFor="name">
                      Name
                    </label>
                    <input id="name" className="w-full border border-outline-variant/40 bg-white px-4 py-4 text-primary outline-none transition-colors focus:border-primary" placeholder="Your name" type="text" />
                  </div>
                  <div>
                    <label className="mb-3 block font-label text-xs font-bold uppercase tracking-[0.3em] text-secondary" htmlFor="company">
                      Company
                    </label>
                    <input id="company" className="w-full border border-outline-variant/40 bg-white px-4 py-4 text-primary outline-none transition-colors focus:border-primary" placeholder="Company or organization" type="text" />
                  </div>
                  <div>
                    <label className="mb-3 block font-label text-xs font-bold uppercase tracking-[0.3em] text-secondary" htmlFor="email">
                      Email
                    </label>
                    <input id="email" className="w-full border border-outline-variant/40 bg-white px-4 py-4 text-primary outline-none transition-colors focus:border-primary" placeholder="name@company.com" type="email" />
                  </div>
                  <div>
                    <label className="mb-3 block font-label text-xs font-bold uppercase tracking-[0.3em] text-secondary" htmlFor="brief">
                      Project Brief
                    </label>
                    <textarea id="brief" className="min-h-[180px] w-full border border-outline-variant/40 bg-white px-4 py-4 text-primary outline-none transition-colors focus:border-primary" placeholder="What are we solving, and what outcome matters most?" />
                  </div>
                  <button className="inline-flex bg-primary px-10 py-5 font-headline text-sm uppercase tracking-widest text-white transition-all duration-300 hover:bg-primary-container active:scale-95" type="submit">
                    SEND INQUIRY
                  </button>
                </form>
              </div>
            </MotionReveal>
          </div>
        </section>
      </main>
    </Layout>
  );
}
