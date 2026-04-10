import Link from 'next/link';
import MotionReveal from './MotionReveal';

type ProjectCardProps = {
  index: string;
  title: string;
  subtitle: string;
  href: string;
  surface: string;
  status: string;
  imageAlt: string;
  imageDataAlt?: string;
  imageSrc: string;
  summary?: string;
  delay?: number;
  reveal?: boolean;
  className?: string;
};

export default function ProjectCard({
  index,
  title,
  subtitle,
  href,
  surface,
  status,
  imageAlt,
  imageDataAlt,
  imageSrc,
  summary,
  delay = 0,
  reveal = true,
  className = '',
}: ProjectCardProps) {
  const card = (
    <Link
      href={href}
      className={`glass-card group flex h-[700px] flex-col p-12 transition-all duration-500 hover:-translate-y-1 hover:border-tertiary/20 hover:shadow-[0_32px_84px_rgba(15,23,42,0.12)] ${className}`}
    >
      <div className="mb-auto">
        <span className="mb-4 block font-label text-xs uppercase tracking-[0.3em] text-tertiary">{index}</span>
        <h3 className="mb-2 font-headline text-4xl font-bold text-primary">{title}</h3>
        <p className="font-body text-sm uppercase tracking-wider text-secondary/90">{subtitle}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          <span className="inline-flex items-center border border-black/10 bg-white/72 px-3 py-2 font-label text-[0.62rem] uppercase tracking-[0.2em] text-secondary">
            {surface}
          </span>
          <span className="inline-flex items-center border border-tertiary/20 bg-tertiary/10 px-3 py-2 font-label text-[0.62rem] uppercase tracking-[0.2em] text-primary">
            {status}
          </span>
        </div>
        {summary ? <p className="body-copy mt-6 max-w-xl text-sm text-secondary">{summary}</p> : null}
      </div>
      <div className="mt-12 h-full overflow-hidden border border-black/5 bg-surface-container-low">
        <img
          alt={imageAlt}
          className="h-full w-full object-cover opacity-[0.88] saturate-[0.88] transition-[transform,opacity,filter] duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:saturate-100"
          data-alt={imageDataAlt}
          src={imageSrc}
        />
      </div>
    </Link>
  );

  if (!reveal) {
    return card;
  }

  return <MotionReveal delay={delay}>{card}</MotionReveal>;
}
