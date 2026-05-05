import type { ComponentType } from "react";
import { AccountScreen } from "../screens/AccountScreen";
import { DestinationScreen } from "../screens/DestinationScreen";
import { DriverInitializationScreen } from "../screens/DriverInitializationScreen";
import { HealthInsightsScreen } from "../screens/HealthInsightsScreen";
import { HaloDisplayReportsScreen } from "../screens/HaloDisplayReportsScreen";
import { HaloDisplayScreen } from "../screens/HaloDisplayScreen";
import { LoadingScreen } from "../screens/LoadingScreen";
import { OverviewScreen } from "../screens/OverviewScreen";
import { RideLogScreen } from "../screens/RideLogScreen";
import { RidePreferencesScreen } from "../screens/RidePreferencesScreen";
import { RideStrategiesSetupScreen } from "../screens/RideStrategiesSetupScreen";
import { SplashScreen } from "../screens/SplashScreen";

export const routeConfig: { path: string; component: ComponentType }[] = [
  { path: "/", component: SplashScreen },
  { path: "/onboarding/account-setup-4", component: RideStrategiesSetupScreen },
  { path: "/overview", component: OverviewScreen },
  { path: "/destination", component: DestinationScreen },
  { path: "/driver-initialization", component: DriverInitializationScreen },
  { path: "/halo-display", component: HaloDisplayScreen },
  { path: "/halo-display/reports", component: HaloDisplayReportsScreen },
  { path: "/loading", component: LoadingScreen },
  { path: "/ride-strategies", component: RidePreferencesScreen },
  { path: "/health-insights", component: HealthInsightsScreen },
  { path: "/ride-log", component: RideLogScreen },
  { path: "/account", component: AccountScreen },
];
