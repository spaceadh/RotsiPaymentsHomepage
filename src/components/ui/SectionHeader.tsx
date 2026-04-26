import { cn } from '../../lib/cn';

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  copy?: string;
  align?: 'center' | 'left';
  className?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  copy,
  align = 'center',
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(align === 'center' ? 'text-center' : 'text-left', className)}>
      <div className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-accent">
        {eyebrow}
      </div>
      <h2 className="mb-3.5 text-[clamp(30px,3vw,44px)] font-extrabold leading-[1.1] tracking-[-0.04em] text-text">
        {title}
      </h2>
      {copy ? <p className="text-base text-muted">{copy}</p> : null}
    </div>
  );
}
