import { appTheme } from "../../assets";

export function StatusBar() {
  return (
    <header className="status-bar" aria-label="Status bar">
      <span className="status-bar__time" style={{ color: appTheme.colors.textPrimary }}>
        9:41
      </span>
      <span className="status-bar__right" aria-hidden="true">
        <span className="status-bar__signal" />
        <span className="status-bar__battery">
          <span className="status-bar__battery-fill" />
        </span>
      </span>
    </header>
  );
}
