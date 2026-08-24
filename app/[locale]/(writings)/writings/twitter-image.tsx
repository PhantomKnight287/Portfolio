// Same card as the Open Graph image; Next needs `runtime` declared literally,
// so the config can't simply be re-exported.
export { default, alt } from "./opengraph-image";

export const runtime = "edge";
export const contentType = "image/png";
export const size = { width: 1200, height: 630 };
