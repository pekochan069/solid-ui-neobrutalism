import type { Registry } from "shadcn/registry";

import { registryItemSchema } from "shadcn/registry";
import { z } from "zod";

import { lib } from "./registry-lib";

const registry = {
  name: "solid-ui-neobrutalism",
  homepage: "https://github.com/pekochan/solid-ui-neobrutalism",
  items: z.array(registryItemSchema).parse([
    {
      name: "index",
      type: "registry:style",
      dependencies: [
        "class-variance-authority",
        "lucide-solid",
        "tw-animate-css",
      ],
      registryDependencies: ["utils"],
      cssVars: {},
      files: [],
    },
    ...lib,
  ]),
} satisfies Registry;

export default registry;
