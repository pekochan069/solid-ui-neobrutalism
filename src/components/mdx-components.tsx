import type { ComponentProps } from "solid-js";

import { splitProps } from "solid-js";
import { Image } from "astro:assets";

import NpmCommand from "./docs/npm-command.astro";
import { cn } from "~/lib/utils";

export const mdxComponents = {
  LinkedCard: (props: ComponentProps<"a">) => {
    const [local, others] = splitProps(props, ["children", "class"]);
    return (
      <a
        class={cn(
          "flex w-full flex-col items-center gap-2 rounded-xl border-2 border-border fill-foreground p-6 text-foreground transition-colors sm:p-10 [&_svg]:size-10",
          local.class,
        )}
        {...others}
      >
        {local.children}
      </a>
    );
  },
  NpmCommand,
  Image,
};
