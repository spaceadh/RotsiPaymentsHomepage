import type { Metadata } from 'next';
import SiteFooter from '../../src/components/layout/SiteFooter';
import SiteHeader from '../../src/components/layout/SiteHeader';
import Container from '../../src/components/ui/Container';

export const metadata: Metadata = {
  title: 'Contact | Start A Project With Rotsi Labs',
  description:
    'Start a project inquiry with Rotsi Labs for custom software, automation, fintech infrastructure, internal platforms, websites, and workflow systems.',
  alternates: { canonical: '/contact' },
};

const contactNavItems = [
  { href: '/', label: 'Home' },
  { href: '/#services', label: 'Services' },
  { href: '/work', label: 'Work' },
  { href: '/blog', label: 'Journal' },
  { href: '/contact', label: 'Contact', active: true },
];

const inquiryTypes = [
  'Custom software',
  'Automation & integrations',
  'Internal platform',
  'Website or SEO system',
];

function Field({
  id,
  label,
  placeholder,
  type = 'text',
  required = false,
}: {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-3 block text-xs font-extrabold uppercase tracking-[0.18em] text-muted" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        name={id}
        className="w-full rounded-[10px] border border-line bg-white px-4 py-4 text-text outline-none transition focus:border-text"
        placeholder={placeholder}
        type={type}
        required={required}
      />
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <SiteHeader navItems={contactNavItems} ctaHref="mailto:business@rotsi.co.ke" ctaLabel="Email Rotsi" />
      <main>
        <section className="pb-16 pt-[72px]">
          <Container className="grid grid-cols-[1.02fr_0.98fr] gap-14 lg:gap-20 max-[900px]:grid-cols-1">
            <div>
              <div className="eyebrow mb-6">Inquiry</div>
              <h1 className="max-w-4xl text-[clamp(42px,5.3vw,72px)] font-extrabold leading-[0.98] tracking-[-0.055em] text-text">
                Let&apos;s build the right <span className="text-accent">system</span> for the job.
              </h1>
              <p className="mt-7 max-w-2xl text-[17px] leading-relaxed text-muted">
                Share the business problem, the timeline, and the outcome you need. We will come
                back with a clear path forward.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-5 border-t border-line pt-8 sm:grid-cols-2">
                <div className="rounded-card border border-line bg-surface-2 p-6">
                  <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-accent">Email</p>
                  <a className="mt-3 block text-lg font-bold text-text" href="mailto:business@rotsi.co.ke">
                    business@rotsi.co.ke
                  </a>
                </div>
                <div className="rounded-card border border-line bg-surface-2 p-6">
                  <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-accent">Phone</p>
                  <a className="mt-3 block text-lg font-bold text-text" href="tel:+254745474586">
                    +254 745 474 586
                  </a>
                </div>
              </div>

              <div className="mt-8 rounded-card border border-line bg-white p-6">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-accent">
                  Common starts
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {inquiryTypes.map((type) => (
                    <span
                      key={type}
                      className="inline-flex rounded-md bg-surface px-3 py-2 text-xs font-bold text-text"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-panel border border-line bg-[linear-gradient(180deg,#ffffff,#fbfaf8)] p-6 shadow-soft md:p-8">
              <form className="space-y-6" action="mailto:business@rotsi.co.ke" method="post" encType="text/plain">
                <Field id="name" label="Name" placeholder="Your name" required />
                <Field id="company" label="Company" placeholder="Company or organization" />
                <Field id="email" label="Email" placeholder="name@company.com" type="email" required />
                <div>
                  <label className="mb-3 block text-xs font-extrabold uppercase tracking-[0.18em] text-muted" htmlFor="project-type">
                    Project Type
                  </label>
                  <select
                    id="project-type"
                    name="project-type"
                    className="w-full rounded-[10px] border border-line bg-white px-4 py-4 text-text outline-none transition focus:border-text"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a focus area
                    </option>
                    {inquiryTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-3 block text-xs font-extrabold uppercase tracking-[0.18em] text-muted" htmlFor="brief">
                    Project Brief
                  </label>
                  <textarea
                    id="brief"
                    name="brief"
                    className="min-h-[180px] w-full rounded-[10px] border border-line bg-white px-4 py-4 text-text outline-none transition focus:border-text"
                    placeholder="What are we solving, and what outcome matters most?"
                    required
                  />
                </div>
                <button className="button-primary w-full sm:w-auto" type="submit">
                  Send Inquiry →
                </button>
              </form>
            </div>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
