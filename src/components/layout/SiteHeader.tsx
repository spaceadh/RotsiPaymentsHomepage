import Link from 'next/link';
import { landingNavItems } from '../../content/landing';
import Button from '../ui/Button';
import Container from '../ui/Container';
import LogoMark from '../ui/LogoMark';
import MobileMenu, { type NavItem } from './MobileMenu';

type SiteHeaderProps = {
  navItems?: NavItem[];
  ctaHref?: string;
  ctaLabel?: string;
};

export default function SiteHeader({
  navItems = landingNavItems,
  ctaHref = '#contact',
  ctaLabel = "Let's Build Something",
}: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 flex h-[86px] items-center border-b border-line/60 bg-white/85 backdrop-blur-[18px]">
      <Container className="flex items-center justify-between gap-5">
        <LogoMark />

        <nav className="flex items-center gap-8 max-[900px]:hidden" aria-label="Primary navigation">
          {navItems.map((item) => {
            const className = item.active ? 'nav-link nav-link-active' : 'nav-link';

            return item.href.startsWith('#') ? (
              <a key={item.href} href={item.href} className={className}>
                {item.label}
              </a>
            ) : (
              <Link key={item.href} href={item.href} className={className}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Button href={ctaHref} className="max-sm:hidden">
            {ctaLabel}
          </Button>
          <MobileMenu items={navItems} />
        </div>
      </Container>
    </header>
  );
}
