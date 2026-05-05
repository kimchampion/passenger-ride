import { useNavigate } from "react-router-dom";
import { HomeIndicator } from "../components/layout/HomeIndicator";
import { PhoneFrame } from "../components/layout/PhoneFrame";
import { TopNav } from "../components/layout/TopNav";
import { StrategyPill } from "../components/ui/StrategyPill";
import { useAppState } from "../state/AppStateContext";
import { strategyOptions } from "../state/strategies";

export function RideStrategiesSetupScreen() {
  const navigate = useNavigate();
  const { selectedStrategies, toggleStrategy } = useAppState();

  return (
    <PhoneFrame>
      <main className="ride-strategies-setup-screen" aria-label="Ride strategies setup screen">
        <TopNav
          title="What helps you feel more comfortable?"
          subtitle="Onboarding"
          action={(
            <button
              type="button"
              className="ride-strategies-setup-screen__save"
              onClick={() => navigate("/overview")}
            >
              Save
            </button>
          )}
        />
        <section className="ride-strategies-setup-screen__content">
          <p className="ride-strategies-setup-screen__copy">
            Select all that apply. You can change these anytime.
          </p>
          <div className="ride-strategies-setup-screen__pill-grid" role="list" aria-label="Strategy options">
            {strategyOptions.map((strategy) => (
              <StrategyPill
                key={strategy}
                label={strategy}
                selected={selectedStrategies.includes(strategy)}
                onToggle={() => toggleStrategy(strategy)}
              />
            ))}
          </div>
        </section>
      </main>
      <HomeIndicator />
    </PhoneFrame>
  );
}
