import Link from 'next/link';
import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  ariaLabel?: string;
};

export default function Button({
  href,
  children,
  variant = 'primary',
  className,
  ariaLabel,
}: ButtonProps) {
  const classes = cn(
    variant === 'primary' ? 'button-primary' : 'button-secondary',
    className,
  );

  if (href.startsWith('#')) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
