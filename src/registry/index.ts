import type { Registry } from "shadcn/registry";

import { registryItemSchema } from "shadcn/registry";
import { z } from "zod";

import { lib } from "./registry-lib";
import { ui } from "./registry-ui";

const registry = {
  name: "solid-ui-neobrutalism",
  homepage: "https://solid-ui-neobrutalism.vercel.app/",
  items: z.array(registryItemSchema).parse([
    {
      name: "index",
      type: "registry:style",
      dependencies: [
        "lucide-solid",
        "tw-animate-css",
        "@kobalte/tailwind",
        "class-variance-authority",
      ],
      registryDependencies: ["utils"],
      cssVars: {},
      files: [],
    },
    ...lib,
    ...ui,
  ]),
} satisfies Registry;

export default registry;
