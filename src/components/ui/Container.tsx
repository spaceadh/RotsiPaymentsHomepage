import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerProps) {
  return <div className={cn('site-container', className)}>{children}</div>;
}
