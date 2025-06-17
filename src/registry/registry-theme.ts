import type { Registry } from "shadcn/registry";

export const lib: Registry["items"] = [
  {
    name: "css",
    type: "registry:style",
    dependencies: ["clsx", "tailwind-merge"],
    files: [
      {
        path: "src/lib/utils.ts",
        type: "registry:lib",
      },
    ],
  },
];
