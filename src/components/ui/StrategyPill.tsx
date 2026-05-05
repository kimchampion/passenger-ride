type StrategyPillProps = {
  label: string;
  selected: boolean;
  onToggle: () => void;
};

export function StrategyPill({ label, selected, onToggle }: StrategyPillProps) {
  return (
    <button
      type="button"
      className={`strategy-pill${selected ? " strategy-pill--selected" : ""}`}
      aria-pressed={selected}
      onClick={onToggle}
    >
      <span className="strategy-pill__label">{label}</span>
      <span className="strategy-pill__meta">
        {selected ? "Enabled" : "Tap to enable"}
      </span>
    </button>
  );
}
