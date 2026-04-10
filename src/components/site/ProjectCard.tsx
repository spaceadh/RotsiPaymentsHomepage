import Link from 'next/link';
import MotionReveal from './MotionReveal';

type ProjectCardProps = {
  index: string;
  title: string;
  subtitle: string;
  href: string;
  imageAlt: string;
  imageDataAlt?: string;
  imageSrc: string;
  delay?: number;
  reveal?: boolean;
  className?: string;
};

export default function ProjectCard({
  index,
  title,
  subtitle,
  href,
  imageAlt,
  imageDataAlt,
  imageSrc,
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
