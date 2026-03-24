const GITHUB_PAGES_ASSET_BASE =
  "https://tom-spalding.github.io/marathon-salvage-planner";

export const ASSET_BASE_URL =
  process.env.NODE_ENV === "production" ? GITHUB_PAGES_ASSET_BASE : "";

export const assetUrl = (path: string): string => `${ASSET_BASE_URL}${path}`;
