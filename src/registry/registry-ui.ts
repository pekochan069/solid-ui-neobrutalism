import type { Registry } from "shadcn/registry";

export const ui: Registry["items"] = [
  {
    name: "accordion",
    type: "registry:ui",
    dependencies: ["@kobalte/core"],
    files: [
      {
        type: "registry:ui",
        path: "src/registry/items/ui/accordion.tsx",
      },
    ],
  },
  {
    name: "alert-dialog",
    type: "registry:ui",
    dependencies: ["@kobalte/core"],
    registryDependencies: ["button"],
    files: [
      {
        type: "registry:ui",
        path: "src/registry/items/ui/alert-dialog.tsx",
      },
    ],
  },
  {
    name: "alert",
    type: "registry:ui",
    dependencies: ["@kobalte/core"],
    files: [
      {
        type: "registry:ui",
        path: "src/registry/items/ui/alert.tsx",
      },
    ],
  },
  {
    name: "avatar",
    type: "registry:ui",
    dependencies: ["@kobalte/core"],
    files: [
      {
        type: "registry:ui",
        path: "src/registry/items/ui/avatar.tsx",
      },
    ],
  },
  {
    name: "badge",
    type: "registry:ui",
    files: [
      {
        type: "registry:ui",
        path: "src/registry/items/ui/badge.tsx",
      },
    ],
  },
  {
    name: "badge-delta",
    type: "registry:ui",
    registryDependencies: ["badge"],
    files: [
      {
        type: "registry:ui",
        path: "src/registry/items/ui/badge-delta.tsx",
      },
    ],
  },
  {
    name: "breadcrumb",
    type: "registry:ui",
    dependencies: ["@kobalte/core"],
    files: [
      {
        type: "registry:ui",
        path: "src/registry/items/ui/breadcrumb.tsx",
      },
    ],
  },
  {
    name: "button",
    type: "registry:ui",
    dependencies: ["@kobalte/core"],
    files: [
      {
        type: "registry:ui",
        path: "src/registry/items/ui/button.tsx",
      },
    ],
  },
  {
    name: "calendar",
    type: "registry:ui",
    dependencies: ["@corvu/calendar"],
    registryDependencies: ["button"],
    files: [
      {
        type: "registry:ui",
        path: "src/registry/items/ui/calendar.tsx",
      },
    ],
  },
  {
    name: "callout",
    type: "registry:ui",
    files: [
      {
        type: "registry:ui",
        path: "src/registry/items/ui/callout.tsx",
      },
    ],
  },
  {
    name: "card",
    type: "registry:ui",
    files: [
      {
        type: "registry:ui",
        path: "src/registry/items/ui/card.tsx",
      },
    ],
  },
  {
    name: "carousel",
    type: "registry:ui",
    dependencies: ["embla-carousel-solid"],
    registryDependencies: ["button"],
    files: [
      {
        type: "registry:ui",
        path: "src/registry/items/ui/carousel.tsx",
      },
    ],
  },
  {
    name: "checkbox",
    type: "registry:ui",
    dependencies: ["@kobalte/core"],
    files: [
      {
        type: "registry:ui",
        path: "src/registry/items/ui/checkbox.tsx",
      },
    ],
  },
  {
    name: "collapsible",
    type: "registry:ui",
    dependencies: ["@kobalte/core"],
    files: [
      {
        type: "registry:ui",
        path: "src/registry/items/ui/collapsible.tsx",
      },
    ],
  },
  {
    name: "combobox",
    type: "registry:ui",
    dependencies: ["@kobalte/core"],
    files: [
      {
        type: "registry:ui",
        path: "src/registry/items/ui/combobox.tsx",
      },
    ],
  },
  {
    name: "command",
    type: "registry:ui",
    dependencies: ["cmdk-solid"],
    registryDependencies: ["dialog"],
    files: [
      {
        type: "registry:ui",
        path: "src/registry/items/ui/command.tsx",
      },
    ],
  },
  {
    name: "context-menu",
    type: "registry:ui",
    dependencies: ["@kobalte/core"],
    files: [
      {
        type: "registry:ui",
        path: "src/registry/items/ui/context-menu.tsx",
      },
    ],
  },
  {
    name: "dialog",
    type: "registry:ui",
    dependencies: ["@kobalte/core"],
    registryDependencies: ["button"],
    files: [
      {
        type: "registry:ui",
        path: "src/registry/items/ui/dialog.tsx",
      },
    ],
  },
  {
    name: "drawer",
    type: "registry:ui",
    dependencies: ["@corvu/drawer"],
    files: [
      {
        type: "registry:ui",
        path: "src/registry/items/ui/drawer.tsx",
      },
    ],
  },
  {
    name: "dropdown-menu",
    type: "registry:ui",
    dependencies: ["@kobalte/core"],
    files: [
      {
        type: "registry:ui",
        path: "src/registry/items/ui/dropdown-menu.tsx",
      },
    ],
  },
  {
    name: "hover-card",
    type: "registry:ui",
    dependencies: ["@kobalte/core"],
    files: [
      {
        type: "registry:ui",
        path: "src/registry/items/ui/hover-card.tsx",
      },
    ],
  },
  {
    name: "label",
    type: "registry:ui",
    files: [
      {
        type: "registry:ui",
        path: "src/registry/items/ui/label.tsx",
      },
    ],
  },
  {
    name: "menubar",
    type: "registry:ui",
    dependencies: ["@kobalte/core"],
    files: [
      {
        type: "registry:ui",
        path: "src/registry/items/ui/menubar.tsx",
      },
    ],
  },
  {
    name: "number-field",
    type: "registry:ui",
    dependencies: ["@kobalte/core"],
    files: [
      {
        type: "registry:ui",
        path: "src/registry/items/ui/number-field.tsx",
      },
    ],
  },
  {
    name: "otp-field",
    type: "registry:ui",
    dependencies: ["@corvu/otp-field"],
    files: [
      {
        type: "registry:ui",
        path: "src/registry/items/ui/otp-field.tsx",
      },
    ],
  },
  {
    name: "pagination",
    type: "registry:ui",
    dependencies: ["@kobalte/core"],
    registryDependencies: ["button"],
    files: [
      {
        type: "registry:ui",
        path: "src/registry/items/ui/pagination.tsx",
      },
    ],
  },
  {
    name: "popover",
    type: "registry:ui",
    dependencies: ["@kobalte/core"],
    files: [
      {
        type: "registry:ui",
        path: "src/registry/items/ui/popover.tsx",
      },
    ],
  },
  {
    name: "radio-group",
    type: "registry:ui",
    dependencies: ["@kobalte/core"],
    files: [
      {
        type: "registry:ui",
        path: "src/registry/items/ui/radio-group.tsx",
      },
    ],
  },
  {
    name: "resizable",
    type: "registry:ui",
    dependencies: ["@corvu/resizable"],
    files: [
      {
        type: "registry:ui",
        path: "src/registry/items/ui/resizable.tsx",
      },
    ],
  },
  {
    name: "select",
    type: "registry:ui",
    dependencies: ["@kobalte/core"],
    files: [
      {
        type: "registry:ui",
        path: "src/registry/items/ui/select.tsx",
      },
    ],
  },
  {
    name: "separator",
    type: "registry:ui",
    dependencies: ["@kobalte/core"],
    files: [
      {
        type: "registry:ui",
        path: "src/registry/items/ui/separator.tsx",
      },
    ],
  },
  {
    name: "sheet",
    type: "registry:ui",
    dependencies: ["@kobalte/core"],
    files: [
      {
        type: "registry:ui",
        path: "src/registry/items/ui/sheet.tsx",
      },
    ],
  },
  {
    name: "skeleton",
    type: "registry:ui",
    dependencies: ["@kobalte/core"],
    files: [
      {
        type: "registry:ui",
        path: "src/registry/items/ui/skeleton.tsx",
      },
    ],
  },
  {
    name: "slider",
    type: "registry:ui",
    dependencies: ["@kobalte/core"],
    registryDependencies: ["label"],
    files: [
      {
        type: "registry:ui",
        path: "src/registry/items/ui/slider.tsx",
      },
    ],
  },
  {
    name: "sonner",
    type: "registry:ui",
    dependencies: ["solid-sonner"],
    files: [
      {
        type: "registry:ui",
        path: "src/registry/items/ui/sonner.tsx",
      },
    ],
  },
  {
    name: "switch",
    type: "registry:ui",
    dependencies: ["@kobalte/core"],
    files: [
      {
        type: "registry:ui",
        path: "src/registry/items/ui/switch.tsx",
      },
    ],
  },
  {
    name: "table",
    type: "registry:ui",
    files: [
      {
        type: "registry:ui",
        path: "src/registry/items/ui/table.tsx",
      },
    ],
  },
  {
    name: "tabs",
    type: "registry:ui",
    dependencies: ["@kobalte/core"],
    files: [
      {
        type: "registry:ui",
        path: "src/registry/items/ui/tabs.tsx",
      },
    ],
  },
  {
    name: "text-field",
    type: "registry:ui",
    dependencies: ["@kobalte/core"],
    files: [
      {
        type: "registry:ui",
        path: "src/registry/items/ui/text-field.tsx",
      },
    ],
  },
  {
    name: "timeline",
    type: "registry:ui",
    files: [
      {
        type: "registry:ui",
        path: "src/registry/items/ui/timeline.tsx",
      },
    ],
  },
  {
    name: "toggle",
    type: "registry:ui",
    dependencies: ["@kobalte/core"],
    files: [
      {
        type: "registry:ui",
        path: "src/registry/items/ui/toggle.tsx",
      },
    ],
  },
  {
    name: "toggle-group",
    type: "registry:ui",
    dependencies: ["@kobalte/core"],
    registryDependencies: ["toggle"],
    files: [
      {
        type: "registry:ui",
        path: "src/registry/items/ui/toggle-group.tsx",
      },
    ],
  },
  {
    name: "tooltip",
    type: "registry:ui",
    dependencies: ["@kobalte/core"],
    files: [
      {
        type: "registry:ui",
        path: "src/registry/items/ui/tooltip.tsx",
      },
    ],
  },
];
