import { useNavigate } from "react-router-dom";
import { HomeIndicator } from "../components/layout/HomeIndicator";
import { PhoneFrame } from "../components/layout/PhoneFrame";

export function RidePreferencesScreen() {
  const navigate = useNavigate();

  return (
    <PhoneFrame>
      <main className="placeholder-screen" aria-label="Ride preferences screen">
        <p className="placeholder-screen__eyebrow">Passenger view</p>
        <h1 className="placeholder-screen__title">Ride preferences</h1>
        <p className="placeholder-screen__copy">
          Preference controls will be added here for the ride experience.
        </p>
        <button type="button" className="placeholder-screen__button" onClick={() => navigate("/overview", { state: { openProfileOnReturn: true } })}>
          Back to overview
        </button>
      </main>
      <HomeIndicator />
    </PhoneFrame>
  );
}
