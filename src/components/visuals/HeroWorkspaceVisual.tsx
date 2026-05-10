const nodes = ['API -> PAYMENT', 'DATABASE', 'USER -> DASHBOARD'];

export default function HeroWorkspaceVisual() {
  return (
    <div
      className="relative grid min-h-[430px] place-items-center overflow-hidden bg-surface shadow-[inset_0_0_0_1px_rgba(232,226,218,0.8)] max-[900px]:min-h-[330px]"
      aria-label="Rotsi Labs workspace illustration"
    >
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.95),rgba(247,244,239,0.6))]" />
      <div className="absolute right-[54px] top-[42px] grid gap-3.5 text-[13px] font-semibold text-[#222] max-sm:right-5 max-sm:top-6">
        {nodes.map((node) => (
          <div key={node} className="rounded-md border border-[#333] bg-white/65 px-3 py-2">
            {node}
          </div>
        ))}
      </div>
    </div>
  );
}
