import Image from 'next/image';
import Button from '../ui/Button';
import Container from '../ui/Container';

const proofItems = ['CRM', 'Ecommerce', 'Automation', 'Internal Tools'];

const projectSlides = [
  {
    title: 'Bewama',
    label: 'B2B commerce and quoting',
    image: '/clients-work/bewama/landing-page.png',
    logo: '/clients-work/bewama/logo.png',
    alt: 'Bewama B2B ecommerce storefront interface',
  },
  {
    title: 'Tena CRM',
    label: 'Booking and retention CRM',
    image: '/clients-work/tena/site-overview.png',
    logo: '/clients-work/tena/logo.png',
    alt: 'Tena CRM booking and client retention interface',
  },
  {
    title: 'Somafix Kenya',
    label: 'Product website and SEO',
    image: '/clients-work/somafix/landing-page.png',
    logo: '/clients-work/somafix/logo.png',
    alt: 'Somafix Kenya product website interface',
  },
  {
    title: 'Kumbusha',
    label: 'Milestone workflow product',
    image: '/clients-work/kumbusha/dashboard.png',
    logo: '/clients-work/kumbusha/logo.png',
    alt: 'Kumbusha milestone workflow dashboard',
  },
];

function HeroProjectCarousel() {
  return (
    <div className="relative min-h-[530px] max-[980px]:min-h-[500px] max-[640px]:min-h-[430px]">
      <div className="absolute left-8 top-7 z-20 rounded-[8px] border border-line bg-white px-4 py-3 shadow-[0_18px_48px_rgba(0,0,0,0.08)] max-[640px]:left-4 max-[640px]:top-4">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-accent">
          Our Previous Work
        </p>
        {/* <p className="mt-1 text-sm font-bold text-text">Live systems, not mockups</p> */}
      </div>

      <div className="hero-project-carousel relative h-[500px] overflow-hidden rounded-[8px] border border-line bg-surface-2 shadow-[0_28px_90px_rgba(0,0,0,0.11)] max-[980px]:h-[470px] max-[640px]:h-[400px]">
        {projectSlides.map((slide, index) => (
          <article key={slide.title} className="hero-project-slide absolute inset-0">
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="(max-width: 980px) 100vw, 52vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,rgba(17,17,17,0),rgba(17,17,17,0.88))] px-6 pb-6 pt-24 text-white">
              <div className="flex items-end justify-between gap-5">
                <div>
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-white/64">
                    0{index + 1} / 04
                  </p>
                  <h2 className="mt-2 text-3xl font-extrabold uppercase leading-none tracking-[-0.04em] max-[640px]:text-2xl">
                    {slide.title}
                  </h2>
                  <p className="mt-2 text-sm font-medium text-white/76">{slide.label}</p>
                </div>
                <div className="relative h-12 w-24 shrink-0 overflow-hidden rounded-[8px] border border-white/18 bg-white p-2 max-[640px]:hidden">
                  <Image
                    src={slide.logo}
                    alt={`${slide.title} logo`}
                    fill
                    sizes="96px"
                    className="object-contain p-2"
                  />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="absolute -bottom-5 right-6 z-20 grid w-[78%] grid-cols-4 gap-2 max-[640px]:left-4 max-[640px]:right-4 max-[640px]:w-auto max-[640px]:grid-cols-2">
        {projectSlides.map((slide) => (
          <div
            key={slide.title}
            className="rounded-[8px] border border-line bg-white px-3 py-3 shadow-[0_14px_34px_rgba(0,0,0,0.08)]"
          >
            <p className="truncate text-[11px] font-extrabold uppercase tracking-[0.14em] text-text">
              {slide.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="overflow-hidden pb-16 pt-[58px] md:pb-20 md:pt-[72px]">
      <Container className="grid grid-cols-[0.92fr_1.08fr] items-center gap-12 max-[980px]:grid-cols-1">
        <div className="max-w-3xl">
          <div className="eyebrow mb-6">Business systems for growing teams</div>
          <h1 className="mb-7 max-w-[720px] text-[clamp(42px,6vw,78px)] font-extrabold leading-[0.96] tracking-[-0.055em] text-text max-[560px]:text-[42px]">
            We build the <span className="text-accent">software</span> layer behind growing businesses.
          </h1>
          <p className="mb-8 max-w-[620px] text-[17px] leading-relaxed text-muted md:text-lg">
            Rotsi designs and builds CRM platforms, ecommerce systems, workflow automations,
            internal tools, and data dashboards for teams outgrowing spreadsheets, chats, and
            manual follow-up.
          </p>

          <div className="flex items-center gap-[18px] max-[560px]:flex-col max-[560px]:items-stretch">
            <Button href="#projects" className="max-[560px]:w-full">
              Explore Our Work -&gt;
            </Button>
            <Button href="/labs" variant="secondary" className="max-[560px]:w-full max-[560px]:justify-center">
              Visit Labs -&gt;
            </Button>
          </div>

          <div className="mt-9 grid max-w-[620px] grid-cols-4 gap-2 max-[560px]:grid-cols-2">
            {proofItems.map((item) => (
              <div
                key={item}
                className="rounded-[8px] border border-line bg-surface-2 px-3 py-3 text-center text-[11px] font-extrabold uppercase tracking-[0.14em] text-text"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <HeroProjectCarousel />
      </Container>
    </section>
  );
}
