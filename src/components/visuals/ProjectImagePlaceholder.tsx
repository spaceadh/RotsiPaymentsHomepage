import { cn } from '../../lib/cn';

type ProjectImagePlaceholderProps = {
  tone?: 'light' | 'dark';
};

export default function ProjectImagePlaceholder({ tone = 'light' }: ProjectImagePlaceholderProps) {
  return (
    <div
      className={cn(
        'h-[180px] border-b border-line',
        tone === 'dark'
          ? 'bg-[linear-gradient(135deg,#111,#444)]'
          : 'bg-[linear-gradient(135deg,rgba(255,255,255,0.85),rgba(0,0,0,0.04)),#e9edf2]',
      )}
      aria-hidden="true"
    />
  );
}
