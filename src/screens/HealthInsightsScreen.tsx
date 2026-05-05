import { useNavigate } from "react-router-dom";
import { HomeIndicator } from "../components/layout/HomeIndicator";
import { PhoneFrame } from "../components/layout/PhoneFrame";

export function HealthInsightsScreen() {
  const navigate = useNavigate();

  return (
    <PhoneFrame>
      <main className="placeholder-screen" aria-label="Health insights screen">
        <p className="placeholder-screen__eyebrow">Passenger view</p>
        <h1 className="placeholder-screen__title">Health insights</h1>
        <p className="placeholder-screen__copy">
          Calmness and support insights will appear here once the experience is connected.
        </p>
        <button type="button" className="placeholder-screen__button" onClick={() => navigate("/overview", { state: { openProfileOnReturn: true } })}>
          Back to overview
        </button>
      </main>
      <HomeIndicator />
    </PhoneFrame>
  );
}
