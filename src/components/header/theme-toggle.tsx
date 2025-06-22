import { createEffect, createSignal, onMount } from "solid-js";
import MoonIcon from "lucide-solid/icons/moon";
import SunIcon from "lucide-solid/icons/sun";

import { Button } from "~/components/ui/button";

export default function ThemeToggle() {
  const [theme, setTheme] = createSignal<"light" | "dark" | "system">("light");

  onMount(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setTheme(isDarkMode ? "dark" : "light");
  });

  createEffect(() => {
    const isDark =
      theme() === "dark" ||
      (theme() === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
    document.documentElement.dataset.theme = isDark
      ? "catppuccin-macchiato"
      : "catppuccin-latte";
    ``;
  });

  const onClick = () => {
    if (theme() === "light") {
      setTheme("dark");
    } else if (theme() === "dark") {
      setTheme("light");
    }
  };

  return (
    <Button size="icon" onClick={onClick}>
      <SunIcon class="size-6 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <MoonIcon class="absolute size-6 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <span class="sr-only">Toggle theme</span>
    </Button>
  );
}
