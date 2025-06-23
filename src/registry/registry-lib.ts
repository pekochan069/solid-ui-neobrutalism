import type { Registry } from "shadcn/registry";

export const lib: Registry["items"] = [
  {
    name: "utils",
    type: "registry:lib",
    dependencies: ["clsx", "tailwind-merge"],
    files: [
      {
        path: "src/registry/items/lib/utils.ts",
        type: "registry:lib",
      },
    ],
  },
];
