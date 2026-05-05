import type { ReactNode } from "react";
import { appTheme } from "../../assets";

type PhoneFrameProps = {
  children: ReactNode;
};

export function PhoneFrame({ children }: PhoneFrameProps) {
  return (
    <div
      data-testid="phone-frame"
      className="phone-frame"
      style={{
        boxShadow: appTheme.shadow.phone,
      }}
    >
      <div className="phone-frame__screen">{children}</div>
    </div>
  );
}
