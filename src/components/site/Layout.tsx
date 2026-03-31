import type { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
  className?: string;
};

export default function Layout({ children, className = '' }: LayoutProps) {
  return <div className={`min-h-screen overflow-x-hidden bg-background text-primary ${className}`}>{children}</div>;
}
