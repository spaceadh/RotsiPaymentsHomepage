const panels = [
  {
    title: 'CRM',
    metric: '128',
    label: 'Active clients',
    rows: ['Follow-ups due', 'Retention signals'],
    tone: 'bg-[#111111] text-white',
  },
  {
    title: 'Commerce',
    metric: '42',
    label: 'Open orders',
    rows: ['Quote requests', 'Cart recovery'],
    tone: 'bg-white text-text',
  },
  {
    title: 'Automation',
    metric: '18',
    label: 'Live workflows',
    rows: ['WhatsApp reminders', 'Approval routing'],
    tone: 'bg-white text-text',
  },
  {
    title: 'Operations',
    metric: '96%',
    label: 'Stock visibility',
    rows: ['Reports ready', 'Permissions controlled'],
    tone: 'bg-[#f7f4ef] text-text',
  },
];

const products = ['Bewama', 'Tena CRM', 'Somafix', 'Nexus', 'Labs'];

function MiniBars({ inverted = false }: { inverted?: boolean }) {
  return (
    <div className="mt-5 grid gap-2">
      {[68, 86, 52].map((width, index) => (
        <div
          key={width}
          className={inverted ? 'h-2 rounded-full bg-white/18' : 'h-2 rounded-full bg-line'}
        >
          <div
            className={inverted ? 'h-full rounded-full bg-accent' : 'h-full rounded-full bg-text'}
            style={{ width: `${width - index * 7}%` }}
          />
        </div>
      ))}
    </div>
  );
}

export default function HeroWorkspaceVisual() {
  return (
    <div
      className="relative min-h-[520px] overflow-hidden rounded-[18px] border border-line bg-[linear-gradient(135deg,#ffffff,#fbfaf8)] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.1)] max-[980px]:min-h-0 max-[560px]:rounded-[14px] max-[560px]:p-3"
      aria-label="Rotsi Labs operational dashboard preview"
    >
      <div className="mb-4 flex items-center justify-between gap-4 rounded-[8px] border border-line bg-white px-4 py-3">
        <div>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-accent">
            Operating Layer
          </p>
          <p className="mt-1 text-sm font-bold text-text">CRM, commerce, automation, and reporting</p>
        </div>
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-accent" />
          <span className="h-2.5 w-2.5 rounded-full bg-text" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute left-1/2 top-8 hidden h-[calc(100%-64px)] w-px bg-line md:block" />
        <div className="pointer-events-none absolute left-8 right-8 top-1/2 hidden h-px bg-line md:block" />

        <div className="grid grid-cols-2 gap-4 max-[560px]:grid-cols-1">
          {panels.map((panel, index) => {
            const inverted = panel.tone.includes('111111');

            return (
              <article
                key={panel.title}
                className={`${panel.tone} relative min-h-[188px] rounded-[8px] border border-line p-5 shadow-[0_14px_34px_rgba(0,0,0,0.06)] max-[560px]:min-h-[168px]`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className={inverted ? 'text-[11px] font-extrabold uppercase tracking-[0.18em] text-accent' : 'text-[11px] font-extrabold uppercase tracking-[0.18em] text-muted'}>
                      {panel.title}
                    </p>
                    <p className="mt-4 text-[42px] font-extrabold leading-none tracking-[-0.05em]">
                      {panel.metric}
                    </p>
                    <p className={inverted ? 'mt-2 text-sm text-white/68' : 'mt-2 text-sm text-muted'}>
                      {panel.label}
                    </p>
                  </div>
                  <span
                    className={inverted ? 'h-3 w-3 rounded-full bg-accent' : 'h-3 w-3 rounded-full bg-text'}
                    aria-hidden="true"
                  />
                </div>

                <MiniBars inverted={inverted} />

                <div className="mt-5 grid gap-2">
                  {panel.rows.map((row) => (
                    <div
                      key={row}
                      className={inverted ? 'rounded-[6px] bg-white/10 px-3 py-2 text-xs font-bold text-white/78' : 'rounded-[6px] bg-surface-2 px-3 py-2 text-xs font-bold text-muted'}
                    >
                      {row}
                    </div>
                  ))}
                </div>

                <span
                  className="absolute -right-1.5 -top-1.5 grid h-7 w-7 place-items-center rounded-full border border-line bg-white text-xs font-extrabold text-text"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
              </article>
            );
          })}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-5 gap-2 max-[560px]:grid-cols-2">
        {products.map((product) => (
          <div
            key={product}
            className="rounded-[8px] border border-line bg-white px-2 py-3 text-center text-[11px] font-extrabold uppercase tracking-[0.12em] text-muted"
          >
            {product}
          </div>
        ))}
      </div>
    </div>
  );
}
