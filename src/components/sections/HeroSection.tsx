import Button from '../ui/Button';
import Container from '../ui/Container';
import HeroWorkspaceVisual from '../visuals/HeroWorkspaceVisual';

export default function HeroSection() {
  return (
    <section className="pb-14 pt-[72px]">
      <Container className="grid grid-cols-[0.95fr_1.05fr] items-center gap-[52px] max-[900px]:grid-cols-1">
        <div>
          <div className="eyebrow mb-6">Systems. People. Impact.</div>
          <h1 className="mb-7 max-w-[620px] text-[clamp(42px,5.3vw,72px)] font-extrabold leading-[0.98] tracking-[-0.055em] text-text max-[560px]:text-[42px]">
            We build systems that solve <span className="text-accent">real</span> problems.
          </h1>
          <p className="mb-8 max-w-[510px] text-[17px] text-muted">
            Rotsi Labs is a product and systems studio building fintech solutions, automation tools
            and digital products for Africa and the world.
          </p>
          <div className="flex items-center gap-[18px] max-[560px]:flex-col max-[560px]:items-start">
            <Button href="#projects">Explore Our Work →</Button>
            <Button href="#contact" variant="secondary">
              Work With Us →
            </Button>
          </div>
        </div>

        <HeroWorkspaceVisual />
      </Container>
    </section>
  );
}
