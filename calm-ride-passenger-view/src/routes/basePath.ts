export function normalizeRouterBasename(baseUrl: string) {
  return baseUrl === "/" ? "" : baseUrl.replace(/\/$/, "");
}
