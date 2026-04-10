type RotsiLogoProps = {
  className?: string;
  kind?: 'wordmark' | 'monogram';
  tone?: 'primary' | 'white';
  title?: string;
};

const PRIMARY = '#0f172a';
const WHITE = '#ffffff';
const ACCENT = '#d6a540';

function Wordmark({ className, tone, title }: Pick<RotsiLogoProps, 'className' | 'tone' | 'title'>) {
  const base = tone === 'white' ? WHITE : PRIMARY;

  return (
    <svg
      className={className}
      viewBox="0 0 468 112"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <g fill={base}>
        <rect x="0" y="0" width="14" height="112" />
        <rect x="0" y="0" width="74" height="14" />
        <rect x="0" y="49" width="74" height="14" />
        <rect x="60" y="0" width="14" height="63" />
        <path d="M33 63H51L91 112H73L33 63Z" />

        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M100 18L118 0H180L198 18V94L180 112H118L100 94V18ZM123.799 14L114 23.799V88.201L123.799 98H174.201L184 88.201V23.799L174.201 14H123.799Z"
        />

        <rect x="218" y="0" width="98" height="14" />
        <rect x="260" y="0" width="14" height="112" />

        <path d="M334 0H430V14H334V0Z" />
        <path d="M334 49H430V63H334V49Z" />
        <path d="M334 98H430V112H334V98Z" />
        <rect x="334" y="0" width="14" height="63" />
        <rect x="416" y="49" width="14" height="63" />

        <rect x="454" y="0" width="14" height="112" />
      </g>
      <path d="M46 63H57L85 99H74L46 63Z" fill={ACCENT} />
    </svg>
  );
}

function Monogram({ className, tone, title }: Pick<RotsiLogoProps, 'className' | 'tone' | 'title'>) {
  const base = tone === 'white' ? WHITE : PRIMARY;

  return (
    <svg
      className={className}
      viewBox="0 0 96 112"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <g fill={base}>
        <rect x="0" y="0" width="14" height="112" />
        <rect x="0" y="0" width="74" height="14" />
        <rect x="0" y="49" width="74" height="14" />
        <rect x="60" y="0" width="14" height="63" />
        <path d="M33 63H51L91 112H73L33 63Z" />
      </g>
      <path d="M46 63H57L85 99H74L46 63Z" fill={ACCENT} />
    </svg>
  );
}

export default function RotsiLogo({
  className,
  kind = 'wordmark',
  tone = 'primary',
  title = 'Rotsi logo',
}: RotsiLogoProps) {
  if (kind === 'monogram') {
    return <Monogram className={className} tone={tone} title={title} />;
  }

  return <Wordmark className={className} tone={tone} title={title} />;
}
