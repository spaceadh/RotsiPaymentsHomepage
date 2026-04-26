import { services } from '../../content/landing';
import Container from '../ui/Container';
import SectionHeader from '../ui/SectionHeader';
import ServiceCard from './ServiceCard';

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding">
      <Container>
        <SectionHeader
          eyebrow="What we do"
          title="We design. We build. We ship."
          copy="From idea to production, we help you build systems that scale and make an impact."
          className="mb-10"
        />

        <div className="grid grid-cols-4 gap-5 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
