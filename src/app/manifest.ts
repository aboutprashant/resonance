import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Resonance",
    short_name: "Resonance",
    description: "Resonance is a platform for creating and sharing music",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0094F7",
    icons: [
      {
        src: "/resonance-favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
