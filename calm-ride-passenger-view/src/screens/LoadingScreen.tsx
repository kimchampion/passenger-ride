import { useNavigate } from "react-router-dom";
import { HomeIndicator } from "../components/layout/HomeIndicator";
import { PhoneFrame } from "../components/layout/PhoneFrame";

export function LoadingScreen() {
  const navigate = useNavigate();

  return (
    <PhoneFrame>
      <main className="placeholder-screen" aria-label="Loading screen">
        <p className="placeholder-screen__eyebrow">Passenger view</p>
        <h1 className="placeholder-screen__title">Loading</h1>
        <p className="placeholder-screen__copy">
          We are preparing the next step of the ride flow.
        </p>
        <button type="button" className="placeholder-screen__button" onClick={() => navigate("/overview", { state: { openProfileOnReturn: true } })}>
          Back to overview
        </button>
      </main>
      <HomeIndicator />
    </PhoneFrame>
  );
}
