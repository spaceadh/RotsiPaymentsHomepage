import Link from 'next/link';
import RotsiLogo from '../brand/RotsiLogo';

type SiteFooterProps = {
  active?: 'work' | 'blog' | 'contact';
};

export default function SiteFooter({ active }: SiteFooterProps) {
  const currentYear = new Date().getFullYear();

  const footerLinkClass = (name?: SiteFooterProps['active']) =>
    name === active ? 'footer-link underline decoration-tertiary decoration-2 underline-offset-8' : 'footer-link';

  return (
    <footer className="w-full bg-surface-container-low py-24">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-center space-y-12 px-8 text-center md:px-12">
        <div className="w-[148px] text-primary">
          <RotsiLogo className="block w-full" kind="wordmark" title="Rotsi wordmark" />
        </div>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          <Link className={footerLinkClass()} href="/#services">
            Services
          </Link>
          <Link className={footerLinkClass('work')} href="/work">
            Work
          </Link>
          <Link className={footerLinkClass('blog')} href="/blog">
            Journal
          </Link>
          <Link className={footerLinkClass('contact')} href="/contact">
            Contact
          </Link>
        </div>
        <div className="font-body text-sm uppercase tracking-widest text-secondary">
          © {currentYear} ROTSI. BUSINESS AUTOMATION SYSTEMS. CUSTOM PLATFORMS. WORKFLOW INFRASTRUCTURE.
        </div>
      </div>
    </footer>
  );
}
