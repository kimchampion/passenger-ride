import { useNavigate } from "react-router-dom";
import { HomeIndicator } from "../components/layout/HomeIndicator";
import { PhoneFrame } from "../components/layout/PhoneFrame";

export function AccountScreen() {
  const navigate = useNavigate();

  return (
    <PhoneFrame>
      <main className="placeholder-screen" aria-label="Account screen">
        <p className="placeholder-screen__eyebrow">Passenger view</p>
        <h1 className="placeholder-screen__title">Account</h1>
        <p className="placeholder-screen__copy">
          Account settings and passenger details will be connected in a later task.
        </p>
        <button type="button" className="placeholder-screen__button" onClick={() => navigate("/overview", { state: { openProfileOnReturn: true } })}>
          Back to overview
        </button>
      </main>
      <HomeIndicator />
    </PhoneFrame>
  );
}
