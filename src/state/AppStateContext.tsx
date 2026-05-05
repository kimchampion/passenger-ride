import {
  createContext,
  useContext,
  useMemo,
  useState,
  type PropsWithChildren,
} from "react";
import { defaultSelectedStrategies, type StrategyName } from "./strategies";

type AppStateValue = {
  selectedStrategies: StrategyName[];
  toggleStrategy: (strategy: StrategyName) => void;
};

const AppStateContext = createContext<AppStateValue | null>(null);

export function AppStateProvider({ children }: PropsWithChildren) {
  const [selectedStrategies, setSelectedStrategies] = useState<StrategyName[]>(
    [...defaultSelectedStrategies],
  );

  const value = useMemo(
    () => ({
      selectedStrategies,
      toggleStrategy: (strategy: StrategyName) => {
        setSelectedStrategies((current) =>
          current.includes(strategy)
            ? current.filter((item) => item !== strategy)
            : [...current, strategy],
        );
      },
    }),
    [selectedStrategies],
  );

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

export function useAppState() {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error("useAppState must be used within AppStateProvider");
  }

  return context;
}
