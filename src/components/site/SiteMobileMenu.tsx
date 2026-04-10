'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useId, useState } from 'react';

export type MobileMenuItem = {
  href: string;
  label: string;
  active?: boolean;
};

type SiteMobileMenuProps = {
  items: MobileMenuItem[];
  title?: string;
};

export default function SiteMobileMenu({
  items,
  title = 'Navigation',
}: SiteMobileMenuProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panelId = useId();

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

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        className="inline-flex h-12 w-12 items-center justify-center border border-black/10 bg-white/80 text-primary transition-all duration-300 hover:border-tertiary/40 hover:text-tertiary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tertiary"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="material-symbols-outlined" aria-hidden="true">
          {open ? 'close' : 'menu'}
        </span>
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[60] bg-[rgba(15,23,42,0.26)] backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            <motion.div
              id={panelId}
              className="mx-4 mt-4 overflow-hidden border border-black/5 bg-[rgba(252,253,254,0.98)] shadow-[0_24px_80px_rgba(15,23,42,0.16)]"
              initial={{ opacity: 0, y: -18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between border-b border-black/5 px-5 py-4">
                <div>
                  <p className="font-label text-[0.68rem] uppercase tracking-[0.34em] text-tertiary">
                    {title}
                  </p>
                </div>
                <button
                  type="button"
                  aria-label="Close navigation menu"
                  className="inline-flex h-10 w-10 items-center justify-center text-primary transition-colors duration-300 hover:text-tertiary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tertiary"
                  onClick={() => setOpen(false)}
                >
                  <span className="material-symbols-outlined" aria-hidden="true">
                    close
                  </span>
                </button>
              </div>

              <nav className="px-5 py-4" aria-label={title}>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={`${item.href}-${item.label}`}>
                      <Link
                        href={item.href}
                        className={`flex items-center justify-between border border-black/5 px-4 py-4 font-headline text-sm uppercase tracking-[0.22em] transition-all duration-300 ${
                          item.active
                            ? 'border-tertiary/30 bg-tertiary/10 text-primary'
                            : 'bg-white/72 text-secondary hover:border-tertiary/25 hover:text-primary'
                        }`}
                        onClick={() => setOpen(false)}
                      >
                        <span>{item.label}</span>
                        <span className="material-symbols-outlined text-base" aria-hidden="true">
                          north_east
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
