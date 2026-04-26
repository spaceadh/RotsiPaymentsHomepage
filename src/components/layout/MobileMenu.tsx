'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { cn } from '../../lib/cn';

export type NavItem = {
  href: string;
  label: string;
  active?: boolean;
};

type MobileMenuProps = {
  items: NavItem[];
};

export default function MobileMenu({ items }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <div className="min-[901px]:hidden">
      <button
        type="button"
        className="grid h-11 w-11 place-items-center rounded-[10px] border border-line bg-white text-xl font-bold text-text"
        aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? '×' : '≡'}
      </button>

      {open ? (
        <div className="fixed inset-0 top-[86px] z-50 bg-white/95 backdrop-blur-xl">
          <nav className="site-container py-6" aria-label="Mobile navigation">
            <ul className="grid gap-3">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center justify-between rounded-[10px] border border-line bg-white px-4 py-4 text-sm font-bold uppercase tracking-[0.12em]',
                      item.active ? 'text-accent' : 'text-text',
                    )}
                    onClick={() => setOpen(false)}
                  >
                    <span>{item.label}</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
