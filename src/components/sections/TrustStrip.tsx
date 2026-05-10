import { trustLogos } from '../../content/landing';
import Container from '../ui/Container';

const mobileSlides = Array.from({ length: Math.ceil(trustLogos.length / 6) }, (_, index) =>
  trustLogos.slice(index * 6, index * 6 + 6),
);

export default function TrustStrip() {
  return (
    <div className="border-y border-line bg-white py-10 md:py-12">
      <Container>
        <div className="text-center text-xs font-extrabold uppercase leading-[1.7] tracking-[0.18em] text-muted">
          Trusted by businesses
        </div>

        <div className="mt-7 grid grid-cols-5 items-center justify-items-center gap-4 max-[900px]:grid-cols-3 max-[640px]:hidden">
          {trustLogos.map((logo) => (
            <div
              key={logo.label}
              className="flex min-h-[76px] w-full items-center justify-center rounded-[8px] border border-line bg-surface-2 px-5 py-4 text-center"
            >
              {'src' in logo && logo.src ? (
                <img
                  src={logo.src}
                  alt={logo.alt ?? logo.label}
                  className="max-h-10 max-w-[150px] object-contain"
                />
              ) : (
                <span className="text-sm font-extrabold uppercase tracking-[0.16em] text-text md:text-base">
                  {logo.label}
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="mt-7 hidden max-[640px]:block">
          <div className="-mx-3 flex snap-x snap-mandatory gap-4 overflow-x-auto px-3 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {mobileSlides.map((slide, index) => (
              <div
                key={index}
                className="grid min-w-full snap-center grid-cols-2 gap-3"
              >
                {slide.map((logo) => (
                  <div
                    key={logo.label}
                    className="flex min-h-[72px] items-center justify-center rounded-[8px] border border-line bg-surface-2 px-4 py-4 text-center"
                  >
                    {logo.src ? (
                      <img
                        src={logo.src}
                        alt={logo.alt ?? logo.label}
                        className="max-h-9 max-w-[128px] object-contain"
                      />
                    ) : (
                      <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-text">
                        {logo.label}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {mobileSlides.length > 1 ? (
            <div className="mt-4 flex justify-center gap-2" aria-hidden="true">
              {mobileSlides.map((_, index) => (
                <span key={index} className="h-1.5 w-6 rounded-full bg-line" />
              ))}
            </div>
          ) : null}
        </div>
      </Container>
    </div>
  );
}
