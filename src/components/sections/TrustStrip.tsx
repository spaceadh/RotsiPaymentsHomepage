import { trustLogos } from '../../content/landing';
import Container from '../ui/Container';

export default function TrustStrip() {
  return (
    <div className="border-y border-line py-[34px]">
      <Container className="grid grid-cols-[180px_1fr] items-center gap-11 max-[900px]:grid-cols-1">
        <div className="text-xs font-extrabold uppercase leading-[1.7] tracking-[0.12em]">
          Trusted by builders
          <br />
          &amp; businesses
        </div>
        <div className="grid grid-cols-5 items-center gap-[30px] text-[28px] font-bold text-text opacity-90 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
          {trustLogos.map((logo) => (
            <span key={logo}>{logo}</span>
          ))}
        </div>
      </Container>
    </div>
  );
}
