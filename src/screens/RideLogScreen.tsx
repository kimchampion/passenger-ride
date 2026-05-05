import { useNavigate } from "react-router-dom";
import { HomeIndicator } from "../components/layout/HomeIndicator";
import { PhoneFrame } from "../components/layout/PhoneFrame";

export function RideLogScreen() {
  const navigate = useNavigate();

  return (
    <PhoneFrame>
      <main className="placeholder-screen" aria-label="Ride log screen">
        <p className="placeholder-screen__eyebrow">Passenger view</p>
        <h1 className="placeholder-screen__title">Ride log</h1>
        <p className="placeholder-screen__copy">
          Past rides and notes will be summarized here later in the flow.
        </p>
        <button type="button" className="placeholder-screen__button" onClick={() => navigate("/overview", { state: { openProfileOnReturn: true } })}>
          Back to overview
        </button>
      </main>
      <HomeIndicator />
    </PhoneFrame>
  );
}
