import { AnimatePresence, motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { profileAvatarImage } from "../../assets";
import { useAppState } from "../../state/AppStateContext";

type ProfileModalProps = {
  open: boolean;
  onClose: () => void;
};

export function ProfileModal({ open, onClose }: ProfileModalProps) {
  const navigate = useNavigate();
  const { selectedStrategies } = useAppState();

  const navigateWithProfileReturn = (path: string) => {
    onClose();
    navigate(path, { state: { openProfileOnReturn: true } });
  };

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="profile-modal"
          role="presentation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            className="profile-modal__backdrop"
            aria-label="Close profile modal"
            data-testid="profile-modal-backdrop"
            onClick={onClose}
          />
          <motion.section
            className="profile-modal__sheet"
            role="dialog"
            aria-modal="true"
            aria-label="Passenger profile"
            initial={{ y: 24, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 24, opacity: 0, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 420, damping: 34 }}
          >
            <div className="profile-modal__header">
              <button type="button" className="profile-modal__close" onClick={onClose}>
                Close
              </button>
              <h2 className="profile-modal__header-title">Profile</h2>
              <span className="profile-modal__header-spacer" />
            </div>
            <div className="profile-modal__hero">
              <div className="profile-modal__avatar">
                <img className="profile-modal__avatar-image" src={profileAvatarImage} alt="" />
              </div>
              <h3 className="profile-modal__name">Demo</h3>
              <p className="profile-modal__location">Dublin, CA</p>
            </div>
            <div className="profile-modal__menu">
              <button type="button" className="profile-modal__menu-item" onClick={() => navigateWithProfileReturn("/account")}>
                <span>Account</span>
                <span aria-hidden="true">›</span>
              </button>
              <button type="button" className="profile-modal__menu-item" onClick={() => navigateWithProfileReturn("/ride-strategies")}>
                <span>Ride Preferences ({selectedStrategies.length})</span>
                <span aria-hidden="true">›</span>
              </button>
              <button type="button" className="profile-modal__menu-item" onClick={() => navigateWithProfileReturn("/health-insights")}>
                <span>Health Insights</span>
                <span aria-hidden="true">›</span>
              </button>
              <button type="button" className="profile-modal__menu-item" onClick={() => navigateWithProfileReturn("/ride-log")}>
                <span>Ride Log</span>
                <span aria-hidden="true">›</span>
              </button>
            </div>
            <button type="button" className="profile-modal__sign-out" onClick={() => navigate("/", { replace: true })}>
              Sign Out
            </button>
            <p className="profile-modal__footer">
              This is a demo app, data is not being stored. Calm Ride, version 1.x
            </p>
          </motion.section>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
