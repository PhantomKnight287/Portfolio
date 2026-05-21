import { NextConfig } from "next";

import { withContentCollections } from "@content-collections/next";
import createNextIntlPlugin from "next-intl/plugin";
import { createIntlWatcher } from "intl-watcher";

const withIntlWatcher = createIntlWatcher({
  dictionaryPaths: ["./translations/en.json", "./translations/de.json"],
  removeUnusedKeys: false,
  sourceDirectories: ["./app", "./components", "./content"],
});

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://github.com/**"),
      new URL("https://avatars.githubusercontent.com/**"),
      new URL("https://repository-images.githubusercontent.com/**"),
      new URL("https://voicelearn.tech/**"),
      new URL("https://*.procrastinator.fyi/**"),
      new URL("https://raw.githubusercontent.com/**"),
      new URL("https://saturn.procrastinator.fyi/api/og?page=Saturn")
    ],
  },
};

const withNextIntl = createNextIntlPlugin();

export default withContentCollections(
  withIntlWatcher(withNextIntl(nextConfig)),
);
