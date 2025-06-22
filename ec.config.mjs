import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
import { defineEcConfig } from "astro-expressive-code";
import { pluginColorChips } from "expressive-code-color-chips";

export default defineEcConfig({
  themes: ["catppuccin-latte", "catppuccin-macchiato"],
  plugins: [pluginLineNumbers(), pluginColorChips()],
});
