import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

type TagProps = {
  children: ReactNode;
  className?: string;
};

export default function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex rounded-md bg-[#f8efe6] px-2 py-1 text-[11px] font-extrabold uppercase tracking-[0.08em] text-accent',
        className,
      )}
    >
      {children}
    </span>
  );
}
