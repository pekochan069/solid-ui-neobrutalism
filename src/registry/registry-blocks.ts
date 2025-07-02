import type { Registry } from "shadcn/registry";

export const blocks: Registry["items"] = [
  {
    name: "sidebar-01",
    type: "registry:block",
    description: "A simple sidebar with navigation grouped by section.",
    registryDependencies: [
      "sidebar",
      "breadcrumb",
      "separator",
      "label",
      "dropdown-menu",
    ],
    files: [
      {
        path: "src/registry/items/block/sidebar-01/page.tsx",
        type: "registry:page",
        target: "src/routes/dashboard/page.tsx",
      },
      {
        path: "src/registry/items/block/sidebar-01/components/app-sidebar.tsx",
        type: "registry:component",
      },
      {
        path: "src/registry/items/block/sidebar-01/components/search-form.tsx",
        type: "registry:component",
      },
      {
        path: "src/registry/items/block/sidebar-01/components/version-switcher.tsx",
        type: "registry:component",
      },
    ],
    categories: ["sidebar", "dashboard"],
  },
  {
    name: "sidebar-02",
    description: "A sidebar with collapsible sections.",
    type: "registry:block",
    registryDependencies: [
      "sidebar",
      "breadcrumb",
      "separator",
      "label",
      "dropdown-menu",
    ],
    files: [
      {
        path: "src/registry/items/block/sidebar-02/page.tsx",
        type: "registry:page",
        target: "src/dashboard/page.tsx",
      },
      {
        path: "src/registry/items/block/sidebar-02/components/app-sidebar.tsx",
        type: "registry:component",
      },
      {
        path: "src/registry/items/block/sidebar-02/components/search-form.tsx",
        type: "registry:component",
      },
      {
        path: "src/registry/items/block/sidebar-02/components/version-switcher.tsx",
        type: "registry:component",
      },
    ],
    categories: ["sidebar", "dashboard"],
  },
  {
    name: "sidebar-03",
    description: "A sidebar with submenus.",
    type: "registry:block",
    registryDependencies: ["sidebar", "breadcrumb"],
    files: [
      {
        path: "src/registry/items/block/sidebar-03/page.tsx",
        type: "registry:page",
        target: "src/dashboard/page.tsx",
      },
      {
        path: "src/registry/items/block/sidebar-03/components/app-sidebar.tsx",
        type: "registry:component",
      },
    ],
    categories: ["sidebar", "dashboard"],
  },
  {
    name: "sidebar-04",
    description: "A floating sidebar with submenus.",
    type: "registry:block",
    registryDependencies: ["sidebar", "breadcrumb", "separator"],
    files: [
      {
        path: "src/registry/items/block/sidebar-04/page.tsx",
        type: "registry:page",
        target: "src/dashboard/page.tsx",
      },
      {
        path: "src/registry/items/block/sidebar-04/components/app-sidebar.tsx",
        type: "registry:component",
      },
    ],
    categories: ["sidebar", "dashboard"],
  },
  {
    name: "sidebar-05",
    description: "A sidebar with collapsible submenus.",
    type: "registry:block",
    registryDependencies: [
      "sidebar",
      "breadcrumb",
      "separator",
      "label",
      "collapsible",
    ],
    files: [
      {
        path: "src/registry/items/block/sidebar-05/page.tsx",
        type: "registry:page",
        target: "src/dashboard/page.tsx",
      },
      {
        path: "src/registry/items/block/sidebar-05/components/app-sidebar.tsx",
        type: "registry:component",
      },
      {
        path: "src/registry/items/block/sidebar-05/components/search-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["sidebar", "dashboard"],
  },
  {
    name: "sidebar-06",
    description: "A sidebar with submenus as dropdowns.",
    type: "registry:block",
    registryDependencies: [
      "sidebar",
      "breadcrumb",
      "separator",
      "card",
      "dropdown-menu",
    ],
    files: [
      {
        path: "src/registry/items/block/sidebar-06/page.tsx",
        type: "registry:page",
        target: "src/dashboard/page.tsx",
      },
      {
        path: "src/registry/items/block/sidebar-06/components/app-sidebar.tsx",
        type: "registry:component",
      },
      {
        path: "src/registry/items/block/sidebar-06/components/nav-main.tsx",
        type: "registry:component",
      },
      {
        path: "src/registry/items/block/sidebar-06/components/sidebar-opt-in-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["sidebar", "dashboard"],
  },
  {
    name: "sidebar-07",
    type: "registry:block",
    description: "A sidebar that collapses to icons.",
    registryDependencies: [
      "sidebar",
      "breadcrumb",
      "separator",
      "collapsible",
      "dropdown-menu",
      "avatar",
    ],
    files: [
      {
        path: "src/registry/items/block/sidebar-07/page.tsx",
        type: "registry:page",
        target: "src/dashboard/page.tsx",
      },
      {
        path: "src/registry/items/block/sidebar-07/components/app-sidebar.tsx",
        type: "registry:component",
      },
      {
        path: "src/registry/items/block/sidebar-07/components/nav-main.tsx",
        type: "registry:component",
      },
      {
        path: "src/registry/items/block/sidebar-07/components/nav-projects.tsx",
        type: "registry:component",
      },
      {
        path: "src/registry/items/block/sidebar-07/components/nav-user.tsx",
        type: "registry:component",
      },
      {
        path: "src/registry/items/block/sidebar-07/components/team-switcher.tsx",
        type: "registry:component",
      },
    ],
    categories: ["sidebar", "dashboard"],
  },
  {
    name: "sidebar-08",
    description: "An inset sidebar with secondary navigation.",
    type: "registry:block",
    registryDependencies: [
      "sidebar",
      "breadcrumb",
      "separator",
      "collapsible",
      "dropdown-menu",
      "avatar",
    ],
    files: [
      {
        path: "src/registry/items/block/sidebar-08/page.tsx",
        type: "registry:page",
        target: "src/dashboard/page.tsx",
      },
      {
        path: "src/registry/items/block/sidebar-08/components/app-sidebar.tsx",
        type: "registry:component",
      },
      {
        path: "src/registry/items/block/sidebar-08/components/nav-main.tsx",
        type: "registry:component",
      },
      {
        path: "src/registry/items/block/sidebar-08/components/nav-projects.tsx",
        type: "registry:component",
      },
      {
        path: "src/registry/items/block/sidebar-08/components/nav-secondary.tsx",
        type: "registry:component",
      },
      {
        path: "src/registry/items/block/sidebar-08/components/nav-user.tsx",
        type: "registry:component",
      },
    ],
    categories: ["sidebar", "dashboard"],
  },
  {
    name: "sidebar-09",
    description: "Collapsible nested sidebars.",
    type: "registry:block",
    registryDependencies: [
      "sidebar",
      "breadcrumb",
      "separator",
      "collapsible",
      "dropdown-menu",
      "avatar",
      "switch",
      "label",
    ],
    files: [
      {
        path: "src/registry/items/block/sidebar-09/page.tsx",
        type: "registry:page",
        target: "src/dashboard/page.tsx",
      },
      {
        path: "src/registry/items/block/sidebar-09/components/app-sidebar.tsx",
        type: "registry:component",
      },
      {
        path: "src/registry/items/block/sidebar-09/components/nav-user.tsx",
        type: "registry:component",
      },
    ],
    categories: ["sidebar", "dashboard"],
  },
];
