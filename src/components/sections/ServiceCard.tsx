import Link from 'next/link';
import type { services } from '../../content/landing';
import Card from '../ui/Card';

type Service = (typeof services)[number];
type ServiceIconName = Service['icon'];

type ServiceCardProps = {
  service: Service;
};

function ServiceIcon({ name }: { name: ServiceIconName }) {
  const commonProps = {
    className: 'h-6 w-6',
    fill: 'none',
    stroke: 'currentColor',
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    strokeWidth: 1.8,
    viewBox: '0 0 24 24',
    'aria-hidden': true,
  };

  switch (name) {
    case 'software':
      return (
        <svg {...commonProps}>
          <path d="M8 9 5 12l3 3" />
          <path d="m16 9 3 3-3 3" />
          <path d="m14 5-4 14" />
        </svg>
      );
    case 'automation':
      return (
        <svg {...commonProps}>
          <path d="M4 7h11a4 4 0 0 1 4 4v1" />
          <path d="m16 4 3 3-3 3" />
          <path d="M20 17H9a4 4 0 0 1-4-4v-1" />
          <path d="m8 20-3-3 3-3" />
        </svg>
      );
    case 'analytics':
      return (
        <svg {...commonProps}>
          <path d="M4 19V5" />
          <path d="M4 19h16" />
          <path d="M8 15v-4" />
          <path d="M12 15V8" />
          <path d="M16 15v-6" />
          <path d="M8 7h8" />
        </svg>
      );
    case 'commerce':
      return (
        <svg {...commonProps}>
          <path d="M5 9h14l-1 10H6L5 9Z" />
          <path d="M8 9a4 4 0 0 1 8 0" />
          <path d="M8 13h8" />
        </svg>
      );
  }
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card>
      <div className="mb-6 grid h-12 w-12 place-items-center rounded-xl bg-surface text-text">
        <ServiceIcon name={service.icon} />
      </div>
      <h3 className="mb-3.5 text-[19px] font-extrabold leading-[1.25] tracking-[-0.02em] text-text">
        {service.title}
      </h3>
      <p className="mb-[22px] text-sm text-muted">{service.copy}</p>
      <Link className="learn-link" href={service.href}>
        Learn more -&gt;
      </Link>
    </Card>
  );
}
