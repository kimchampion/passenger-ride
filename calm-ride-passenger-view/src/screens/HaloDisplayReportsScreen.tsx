import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { bridgeIllustrationAsset, haloDisplayImage } from "../assets";
import { HomeIndicator } from "../components/layout/HomeIndicator";
import { PhoneFrame } from "../components/layout/PhoneFrame";
import { LoadingSpinner } from "../components/ui/LoadingSpinner";
import { HaloTabs } from "../components/halo/HaloTabs";

export function HaloDisplayReportsScreen() {
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setImageLoaded(true), 900);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <PhoneFrame>
      <main className="halo-display-reports-screen" aria-label="Halo display reports screen">
        <HaloTabs
          active="reports"
          onNavigation={() => navigate("/halo-display")}
          onReports={() => navigate("/halo-display/reports")}
        />

        <section className="halo-display-reports-screen__hero" aria-label="Report details">
          <div className="halo-display-reports-screen__art-stage" aria-label="Halo image">
            {imageLoaded ? (
              <img className="halo-display-reports-screen__art" src={haloDisplayImage} alt="Passenger mode halo" />
            ) : (
              <LoadingSpinner />
            )}
          </div>
          <h1 className="halo-display-reports-screen__title">Bridge coming up</h1>
          <div className="halo-display-reports-screen__bridge-stage" aria-label="Bridge illustration">
            <img className="halo-display-reports-screen__bridge" src={bridgeIllustrationAsset} alt="Bridge illustration" />
          </div>
        </section>

        <div className="halo-display-reports-screen__footer">
          <button type="button" className="halo-display-reports-screen__soften-ride">
            Soften Ride
          </button>
          <button type="button" className="halo-display-reports-screen__end-session" onClick={() => navigate("/overview")}>
            End Session
          </button>
        </div>
      </main>
      <HomeIndicator />
    </PhoneFrame>
  );
}
