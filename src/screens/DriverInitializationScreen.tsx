import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HomeIndicator } from "../components/layout/HomeIndicator";
import { PhoneFrame } from "../components/layout/PhoneFrame";
import { LoadingSpinner } from "../components/ui/LoadingSpinner";

export function DriverInitializationScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = window.setTimeout(() => navigate("/halo-display"), 3000);
    return () => window.clearTimeout(timer);
  }, [navigate]);

  return (
    <PhoneFrame>
      <main className="driver-initialization-screen" aria-label="Driver initialization screen">
        <section className="driver-initialization-screen__content" aria-label="Preparing ride">
          <LoadingSpinner />
          <h1 className="driver-initialization-screen__title">Preparing your ride</h1>
        </section>
        <div className="driver-initialization-screen__footer">
          <button type="button" className="driver-initialization-screen__cancel" onClick={() => navigate("/destination")}>
            Cancel
          </button>
        </div>
      </main>
      <HomeIndicator />
    </PhoneFrame>
  );
}
