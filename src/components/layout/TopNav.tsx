import type { ReactNode } from "react";

type TopNavProps = {
  title: string;
  subtitle?: string;
  onBack?: () => void;
  backLabel?: string;
  action?: ReactNode;
};

export function TopNav({
  title,
  subtitle,
  onBack,
  backLabel = "Back",
  action,
}: TopNavProps) {
  return (
    <header className="top-nav">
      <div className="top-nav__leading">
        {onBack ? (
          <button type="button" className="top-nav__back" onClick={onBack} aria-label={backLabel}>
            <span aria-hidden="true">‹</span>
          </button>
        ) : null}
        <div className="top-nav__titles">
          {subtitle ? <p className="top-nav__subtitle">{subtitle}</p> : null}
          <h1 className="top-nav__title">{title}</h1>
        </div>
      </div>
      {action ? <div className="top-nav__action">{action}</div> : null}
    </header>
  );
}
