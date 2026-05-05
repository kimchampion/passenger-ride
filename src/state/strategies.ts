export const strategyOptions = [
  "Guided Breathing",
  "Music",
  "Reassurance",
  "Gentle Reminders",
  "Distractions",
  "Quiet Mode",
  "Focus",
  "Ride Insights",
  "Grounding Exercises",
] as const;

export const defaultSelectedStrategies = [
  "Guided Breathing",
  "Music",
  "Ride Insights",
] as const;

export type StrategyName = (typeof strategyOptions)[number];
