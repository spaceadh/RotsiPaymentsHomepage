'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../../lib/cn';

export type NavItem = {
  href: string;
  label: string;
  active?: boolean;
};

type MobileMenuProps = {
  items: NavItem[];
};

function MenuIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="2"
    >
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="2"
    >
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export default function MobileMenu({ items }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  const menuOverlay =
    mounted && open
      ? createPortal(
          <div className="fixed inset-0 z-[9999] bg-[#fbfaf8] text-[#111111]">
            <div className="flex h-[86px] items-center border-b border-[#e8e2da] bg-white shadow-[0_12px_36px_rgba(0,0,0,0.08)]">
              <div className="site-container flex items-center justify-between gap-5">
                <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#666666]">
                  Menu
                </span>
                <button
                  type="button"
                  className="grid h-11 w-11 place-items-center rounded-[10px] border border-[#111111] bg-[#111111] text-white shadow-[0_10px_30px_rgba(0,0,0,0.16)]"
                  aria-label="Close navigation menu"
                  onClick={() => setOpen(false)}
                >
                  <CloseIcon />
                </button>
              </div>
            </div>
            <div className="h-[calc(100dvh-86px)] overflow-y-auto">
              <div className="site-container py-7">
                <nav aria-label="Mobile navigation">
                  <ul className="grid gap-3">
                    {items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={cn(
                            'group flex min-h-[64px] items-center justify-between rounded-[10px] border px-5 py-4 text-sm font-extrabold uppercase tracking-[0.14em] shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition',
                            item.active
                              ? 'border-[#c7a27c] bg-[#c7a27c] text-[#111111]'
                              : 'border-[#e8e2da] bg-white text-[#111111] hover:border-[#c7a27c] hover:text-[#111111]',
                          )}
                          onClick={() => setOpen(false)}
                        >
                          <span>{item.label}</span>
                          <ArrowIcon />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <div className="min-[901px]:hidden">
      <button
        type="button"
        className={cn(
          'relative z-[10000] grid h-11 w-11 place-items-center rounded-[10px] border text-text shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition',
          open
            ? 'border-text bg-text text-white'
            : 'border-text/15 bg-white hover:border-text hover:bg-text hover:text-white',
        )}
        aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>
      {menuOverlay}
    </div>
  );
}
