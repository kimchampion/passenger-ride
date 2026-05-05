import { appName } from "../assets";
import { HomeIndicator } from "../components/layout/HomeIndicator";
import { PhoneFrame } from "../components/layout/PhoneFrame";
import { CalmRideSplashLogo } from "../components/ui/CalmRideSplashLogo";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      navigate("/onboarding/account-setup-4", { replace: true });
    }, 2500);

    return () => window.clearTimeout(timeoutId);
  }, [navigate]);

  return (
    <PhoneFrame>
      <main className="splash-screen" aria-label={`${appName} splash screen`}>
        <p className="splash-screen__eyebrow">Passenger view</p>
        <CalmRideSplashLogo />
        <h1 className="splash-screen__title">{appName}</h1>
        <p className="splash-screen__copy">A calm, guided ride experience.</p>
      </main>
      <HomeIndicator />
    </PhoneFrame>
  );
}
