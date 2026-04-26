import Link from 'next/link';

type LogoMarkProps = {
  href?: string;
};

export default function LogoMark({ href = '/' }: LogoMarkProps) {
  return (
    <Link href={href} className="inline-flex items-center gap-3 font-extrabold tracking-[0.06em]" aria-label="Rotsi Labs home">
      <span className="grid h-[38px] w-[38px] place-items-center rounded-full border-2 border-text font-serif text-[22px] font-bold leading-none">
        R
      </span>
      <span>ROTSI LABS</span>
    </Link>
  );
}
