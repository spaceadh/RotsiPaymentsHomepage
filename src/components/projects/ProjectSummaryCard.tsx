import Link from 'next/link';
import type { ProjectEntry } from '../../content/projects';
import { cn } from '../../lib/cn';
import Tag from '../ui/Tag';

type ProjectSummaryCardProps = {
  project: ProjectEntry;
  density?: 'compact' | 'large';
  className?: string;
};

export default function ProjectSummaryCard({
  project,
  density = 'compact',
  className,
}: ProjectSummaryCardProps) {
  const isLarge = density === 'large';

  return (
    <Link
      href={project.href}
      className={cn(
        'group flex h-full flex-col overflow-hidden rounded-card border border-line bg-white transition duration-300 hover:-translate-y-1 hover:shadow-soft',
        className,
      )}
    >
      <div className={cn('overflow-hidden border-b border-line bg-surface', isLarge ? 'h-[260px]' : 'h-[180px]')}>
        <img
          src={project.image.src}
          alt={project.image.alt}
          data-alt={project.image.dataAlt}
          className="h-full w-full object-cover opacity-90 saturate-[0.92] transition duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:saturate-100"
        />
      </div>
      <div className={cn('flex flex-1 flex-col', isLarge ? 'p-8' : 'p-[22px]')}>
        <div className="mb-3 flex flex-wrap gap-2">
          <Tag>{project.surface}</Tag>
          <Tag className="bg-surface text-text">{project.status}</Tag>
        </div>
        <h3
          className={cn(
            'font-extrabold leading-[1.18] tracking-[-0.03em] text-text',
            isLarge ? 'text-[28px]' : 'text-[19px]',
          )}
        >
          {project.title}
        </h3>
        <p className={cn('mt-3 text-muted', isLarge ? 'text-base' : 'text-sm')}>{project.cardSummary}</p>
        <span className="learn-link mt-6 inline-flex">View case study →</span>
      </div>
    </Link>
  );
}
