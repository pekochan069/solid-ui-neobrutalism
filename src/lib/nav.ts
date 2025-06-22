import type { NavGroup } from "~/types/nav";

const nav: NavGroup[] = [
  {
    title: "menu",
    items: [
      { title: "Home", href: "/" },
      {
        title: "Docs",
        href: "/docs",
      },
      {
        title: "Components",
        href: "/docs/components/accordion",
      },
      {
        title: "themes",
        href: "/docs/themes",
      },
      {
        title: "Colors",
        href: "/docs/colors",
      },
    ],
  },
  {
    title: "Get Started",
    items: [
      {
        title: "Introduction",
        href: "/docs/introduction",
      },
      {
        title: "Installation",
        href: "/docs/installation",
      },
      {
        title: "components.json",
        href: "/docs/components-json",
      },
      {
        title: "Theming",
        href: "/docs/theming",
      },
      {
        title: "Dark Mode",
        href: "/docs/dark-mode",
      },
    ],
  },
  {
    title: "Components",
    items: [],
  },
];

export { nav };
