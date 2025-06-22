import type { ComponentProps } from "solid-js";

import { splitProps } from "solid-js";
import { Code } from "astro-expressive-code/components";
import { Image } from "astro:assets";

import CollapsibleCode from "./docs/collapsible-code.astro";
import ComponentsList from "./docs/components-list.astro";
import NpmCommand from "./docs/npm-command.astro";
import { cn } from "~/lib/utils";

export const mdxComponents = {
  CodeComponent: Code,
  CollapsibleCode,
  ComponentsList,
  Image,
  LinkedCard: (props: ComponentProps<"a">) => {
    const [local, others] = splitProps(props, ["children", "class"]);
    return (
      <a
        class={cn(
          "flex w-full flex-col items-center gap-2 rounded-xl border-2 border-border fill-foreground p-6 text-foreground transition-colors sm:p-10 [&_p]:m-0 [&_svg]:size-10",
          local.class,
        )}
        {...others}
      >
        {local.children}
      </a>
    );
  },
  NpmCommand,
};
