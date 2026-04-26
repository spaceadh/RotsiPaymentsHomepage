import type { services } from '../../content/landing';
import Card from '../ui/Card';

type Service = (typeof services)[number];

type ServiceCardProps = {
  service: Service;
};

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card>
      <div className="mb-6 grid h-12 w-12 place-items-center rounded-xl bg-surface text-[22px]">
        {service.icon}
      </div>
      <h3 className="mb-3.5 text-[19px] font-extrabold leading-[1.25] tracking-[-0.02em] text-text">
        {service.title}
      </h3>
      <p className="mb-[22px] text-sm text-muted">{service.copy}</p>
      <a className="learn-link" href={service.href}>
        Learn more →
      </a>
    </Card>
  );
}
