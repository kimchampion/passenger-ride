import { useNavigate } from "react-router-dom";
import { HomeIndicator } from "../components/layout/HomeIndicator";
import { PhoneFrame } from "../components/layout/PhoneFrame";

export function DestinationScreen() {
  const navigate = useNavigate();

  return (
    <PhoneFrame>
      <main className="placeholder-screen" aria-label="Destination screen">
        <p className="placeholder-screen__eyebrow">Passenger view</p>
        <h1 className="placeholder-screen__title">Destination</h1>
        <p className="placeholder-screen__copy">
          Destination details and pickup timing will appear here in the next task.
        </p>
        <button type="button" className="placeholder-screen__button" onClick={() => navigate("/driver-initialization")}>
          Continue
        </button>
      </main>
      <HomeIndicator />
    </PhoneFrame>
  );
}
