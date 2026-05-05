import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { haloDisplayImage, haloNavImages } from "../assets";
import { HomeIndicator } from "../components/layout/HomeIndicator";
import { PhoneFrame } from "../components/layout/PhoneFrame";
import { LoadingSpinner } from "../components/ui/LoadingSpinner";
import { HaloTabs } from "../components/halo/HaloTabs";
import { NavElementCarousel } from "../components/halo/NavElementCarousel";

export function HaloDisplayScreen() {
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);
  const activeIndex = 1;

  useEffect(() => {
    const timer = window.setTimeout(() => setImageLoaded(true), 900);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <PhoneFrame>
      <main className="halo-display-screen" aria-label="Halo display screen">
        <HaloTabs
          active="navigation"
          onNavigation={() => navigate("/halo-display")}
          onReports={() => navigate("/halo-display/reports")}
        />

        <section className="halo-display-screen__hero" aria-label="Navigation overview">
          <h1 className="halo-display-screen__title">Passenger Mode</h1>
          <div className="halo-display-screen__art-stage" aria-label="Halo image">
            {imageLoaded ? (
              <img className="halo-display-screen__art" src={haloDisplayImage} alt="Passenger mode halo" />
            ) : (
              <LoadingSpinner />
            )}
          </div>
        </section>

        <NavElementCarousel images={[...haloNavImages]} activeIndex={activeIndex} />

        <div className="halo-display-screen__footer">
          <button type="button" className="halo-display-screen__soften-ride">
            Soften Ride
          </button>
          <button type="button" className="halo-display-screen__end-session" onClick={() => navigate("/overview")}>
            End Session
          </button>
        </div>
      </main>
      <HomeIndicator />
    </PhoneFrame>
  );
}
