import { aboutStats } from '../../content/landing';

export default function AboutSection() {
  return (
    <div id="about" className="mt-[70px] grid grid-cols-[1fr_0.95fr] items-center gap-[46px] max-[900px]:grid-cols-1">
      <div className="grid min-h-[330px] place-items-center rounded-[22px] bg-[linear-gradient(135deg,rgba(0,0,0,0.16),rgba(255,255,255,0.12)),#d8d2ca] text-center text-sm font-bold uppercase tracking-[0.08em] text-black/55">
        Team / Workspace Image
      </div>
      <div>
        <div className="mb-4 text-xs font-extrabold uppercase tracking-[0.18em] text-accent">
          About Rotsi Labs
        </div>
        <h2 className="mb-3.5 text-[clamp(30px,3vw,44px)] font-extrabold leading-[1.1] tracking-[-0.04em] text-text">
          A lab of builders, problem solvers and dreamers.
        </h2>
        <p className="my-[18px] max-w-[520px] text-muted">
          We are a team of engineers, designers and strategists building digital solutions that make
          life and business better.
        </p>
        <div className="grid grid-cols-3 gap-[22px] border-t border-line pt-6 max-[560px]:grid-cols-1">
          {aboutStats.map((stat) => (
            <div key={stat.label}>
              <strong className="block text-[34px] leading-tight tracking-[-0.04em] text-text">
                {stat.value}
              </strong>
              <span className="block text-xs text-muted">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
