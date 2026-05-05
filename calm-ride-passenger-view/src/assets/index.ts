import bridgeIllustrationImage from "./media/bridge-illustration.svg";
import haloTransparentAnimatedImage from "./media/halo-transparent-animated.png";
import logoImage from "./media/logo.svg";
import navElement1ActiveImage from "./media/nav-element_1_active.png";
import navElement1EnabledImage from "./media/nav-element_1_enabled.png";
import navElement2ActiveImage from "./media/nav-element_2_active.png";
import navElement2EnabledImage from "./media/nav-element_2_enabled.png";
import navElement3EnabledImage from "./media/nav-element_3_enabled.png";
import navElement4EnabledImage from "./media/nav-element_4_enabled.png";
import navElement5EnabledImage from "./media/nav-element_5_enabled.png";
import navElement6EnabledImage from "./media/nav-element_6_enabled.png";
import navElement7EnabledImage from "./media/nav-element_7_enabled.png";
import navElement8EnabledImage from "./media/nav-element_8_enabled.png";
import navElement9EnabledImage from "./media/nav-element_9_enabled.png";
import navElement10EnabledImage from "./media/nav-element_10_enabled.png";
import overviewMapImage from "./media/overview-map.png";
import overviewProfileImage from "./media/overview-profile.png";

export const appTheme = {
  colors: {
    background: "#08111f",
    backgroundSoft: "#111c31",
    surface: "rgba(15, 23, 42, 0.86)",
    surfaceBorder: "rgba(255, 255, 255, 0.08)",
    textPrimary: "#f5f7fb",
    textSecondary: "rgba(245, 247, 251, 0.72)",
    accent: "#79b8ff",
  },
  radius: {
    phone: "2.75rem",
    pill: "9999px",
  },
  shadow: {
    phone: "0 36px 100px rgba(0, 0, 0, 0.45)",
  },
} as const;

export const appName = "Calm Ride";

export const splashLogoImage = logoImage;
export const haloDisplayImage = haloTransparentAnimatedImage;
export const overviewHeroMapImage = overviewMapImage;
export const profileAvatarImage = overviewProfileImage;
export const bridgeIllustrationAsset = bridgeIllustrationImage;

export const haloNavImages = [
  navElement1EnabledImage,
  navElement2ActiveImage,
  navElement3EnabledImage,
  navElement4EnabledImage,
  navElement5EnabledImage,
  navElement6EnabledImage,
  navElement7EnabledImage,
  navElement8EnabledImage,
  navElement9EnabledImage,
  navElement10EnabledImage,
] as const;

export const haloNavPreviewImages = {
  enabled: [
    navElement1EnabledImage,
    navElement2EnabledImage,
    navElement3EnabledImage,
    navElement4EnabledImage,
    navElement5EnabledImage,
    navElement6EnabledImage,
    navElement7EnabledImage,
    navElement8EnabledImage,
    navElement9EnabledImage,
    navElement10EnabledImage,
  ] as const,
  active: {
    0: navElement1ActiveImage,
    1: navElement2ActiveImage,
  } as const,
};
