import Link from 'next/link';
import Container from '../ui/Container';

type SiteFooterProps = {
  active?: 'services' | 'work' | 'blog' | 'contact';
};

export default function SiteFooter({ active }: SiteFooterProps) {
  const footerLinkClass = (name?: SiteFooterProps['active']) =>
    name === active ? 'font-bold text-text underline decoration-accent decoration-2 underline-offset-8' : 'text-muted';

  return (
    <footer id="contact" className="border-t border-line py-11 text-sm text-muted">
      <Container className="flex flex-wrap items-center justify-between gap-6">
        <div>(c) 2026 Rotsi Labs. Built for systems, people and impact.</div>
        <nav className="flex flex-wrap gap-5" aria-label="Footer navigation">
          <Link className={footerLinkClass('services')} href="/services">
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
        </nav>
      </Container>
    </footer>
  );
}
