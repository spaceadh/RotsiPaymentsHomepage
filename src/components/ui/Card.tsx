import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/cn';

type CardProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  as?: 'article' | 'div';
};

export default function Card({ children, as: Component = 'article', className, ...props }: CardProps) {
  return (
    <Component className={cn('design-card', className)} {...props}>
      {children}
    </Component>
  );
}
