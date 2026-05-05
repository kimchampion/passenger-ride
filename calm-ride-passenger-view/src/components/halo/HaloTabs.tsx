type HaloTabsProps = {
  active: "navigation" | "reports";
  onNavigation: () => void;
  onReports: () => void;
};

export function HaloTabs({ active, onNavigation, onReports }: HaloTabsProps) {
  return (
    <nav className="halo-tabs" aria-label="Halo sections">
      <button
        type="button"
        aria-current={active === "navigation" ? "page" : undefined}
        className={`halo-tabs__tab${active === "navigation" ? " halo-tabs__tab--active" : ""}`}
        onClick={onNavigation}
      >
        Navigation
      </button>
      <button
        type="button"
        aria-current={active === "reports" ? "page" : undefined}
        className={`halo-tabs__tab${active === "reports" ? " halo-tabs__tab--active" : ""}`}
        onClick={onReports}
      >
        Reports
      </button>
    </nav>
  );
}
