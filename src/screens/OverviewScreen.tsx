import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { overviewHeroMapImage } from "../assets";
import { HomeIndicator } from "../components/layout/HomeIndicator";
import { PhoneFrame } from "../components/layout/PhoneFrame";
import { ProfileModal } from "../components/profile/ProfileModal";

export function OverviewScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  useEffect(() => {
    if (location.state?.openProfileOnReturn) {
      setIsProfileOpen(true);
    }
  }, [location.state]);

  return (
    <PhoneFrame>
      <main className="overview-screen" aria-label="Overview screen">
        <div className="overview-screen__map-shell" aria-hidden="true">
          <img className="overview-screen__map-image" src={overviewHeroMapImage} alt="" />
        </div>
        <section className="overview-screen__hero">
          <div className="overview-screen__hero-top">
            <div>
              <p className="overview-screen__date">Sunday, May 3</p>
              <h1 className="overview-screen__title">Hey there!</h1>
              <p className="overview-screen__location">Dublin, CA</p>
            </div>
            <button
              type="button"
              className="overview-screen__profile-button"
              aria-label="Open profile"
              onClick={() => setIsProfileOpen(true)}
            >
              <span>Profile</span>
            </button>
          </div>
          <p className="overview-screen__copy">
            Where would you like to go?
          </p>
        </section>

        <section className="overview-screen__traffic-card" aria-label="Traffic summary">
          <p className="overview-screen__card-label">Traffic Conditions</p>
          <strong className="overview-screen__card-title">Moderate</strong>
          <p className="overview-screen__card-copy">
            Dublin, CA
          </p>
        </section>

        <div className="overview-screen__actions">
          <button
            type="button"
            className="overview-screen__begin-button"
            onClick={() => navigate("/destination")}
          >
            Begin
          </button>
        </div>
      </main>
      <ProfileModal open={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
      <HomeIndicator />
    </PhoneFrame>
  );
}
