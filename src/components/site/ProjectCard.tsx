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
}: ProjectCardProps) {
  return (
    <MotionReveal delay={delay}>
      <Link
        href={href}
        className="glass-card group flex h-[700px] flex-col border border-primary/10 p-12 transition-all duration-500 hover:shadow-[0_40px_80px_rgba(16,24,40,0.08)]"
      >
        <div className="mb-auto">
          <span className="mb-4 block font-label text-xs uppercase tracking-[0.3em] text-tertiary">{index}</span>
          <h3 className="mb-2 font-headline text-4xl font-bold text-primary">{title}</h3>
          <p className="font-body text-sm uppercase tracking-wider text-secondary">{subtitle}</p>
        </div>
        <div className="mt-12 h-full overflow-hidden bg-slate-100">
          <img
            alt={imageAlt}
            className="h-full w-full object-cover grayscale opacity-80 transition-transform duration-700 group-hover:scale-105"
            data-alt={imageDataAlt}
            src={imageSrc}
          />
        </div>
      </Link>
    </MotionReveal>
  );
}
