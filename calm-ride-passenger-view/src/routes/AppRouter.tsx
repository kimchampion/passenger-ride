import { Route, Routes } from "react-router-dom";
import { routeConfig } from "./routeConfig";

export function AppRouter() {
  return (
    <Routes>
      {routeConfig.map(({ path, component: Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  );
}
