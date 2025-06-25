import type { ComponentProps } from "solid-js";

import { splitProps } from "solid-js";
import { Code } from "astro-expressive-code/components";
import { Image } from "astro:assets";

import CollapsibleCode from "./docs/collapsible-code.astro";
import ComponentsList from "./docs/components-list.astro";
import InstallationTabs from "./docs/installation-tabs.astro";
import NpmCommand from "./docs/npm-command.astro";
import PreviewTabs from "./docs/preview-tabs.astro";
import { cn } from "~/lib/utils";

export const mdxComponents = {
  h1: (props: ComponentProps<"h1">) => {
    const [local, others] = splitProps(props, ["class"]);
    return (
      <h1
        class={cn(
          "mt-2 scroll-m-28 first:mt-0 [&_a]:text-3xl [&_a]:font-heading [&_a]:tracking-tight [&_a]:no-underline [&+p]:mt-4",
          local.class,
        )}
        {...others}
      />
    );
  },
  h2: (props: ComponentProps<"h2">) => {
    const [local, others] = splitProps(props, ["class"]);
    return (
      <h2
        class={cn(
          "mt-12 scroll-m-28 first:mt-0 lg:mt-20 [&_a]:text-2xl [&_a]:font-heading [&_a]:tracking-tight [&_a]:no-underline [&+p]:!mt-4 [&_a]:*:[code]:text-2xl",
          local.class,
        )}
        {...others}
      />
    );
  },
  h3: (props: ComponentProps<"h3">) => {
    const [local, others] = splitProps(props, ["class"]);
    return (
      <h3
        class={cn(
          "mt-8 scroll-m-28 first:mt-0 [&_a]:text-xl [&_a]:font-heading [&_a]:tracking-tight [&_a]:no-underline [&+p]:!mt-2 [&_a]:*:[code]:text-xl",
          local.class,
        )}
        {...others}
      />
    );
  },
  h4: (props: ComponentProps<"h4">) => {
    const [local, others] = splitProps(props, ["class"]);
    return (
      <h4
        class={cn(
          "mt-8 scroll-m-28 first:mt-0 [&_a]:text-lg [&_a]:font-heading [&_a]:tracking-tight [&_a]:no-underline [&+p]:mt-2",
          local.class,
        )}
        {...others}
      />
    );
  },
  h5: (props: ComponentProps<"h5">) => {
    const [local, others] = splitProps(props, ["class"]);
    return (
      <h5
        class={cn(
          "mt-8 scroll-m-28 first:mt-0 [&_a]:text-lg [&_a]:font-medium [&_a]:tracking-tight [&_a]:no-underline [&+p]:mt-2",
          local.class,
        )}
        {...others}
      />
    );
  },
  h6: (props: ComponentProps<"h6">) => {
    const [local, others] = splitProps(props, ["class"]);
    return (
      <h6
        class={cn(
          "mt-8 scroll-m-28 first:mt-0 [&_a]:text-base [&_a]:font-medium [&_a]:tracking-tight [&_a]:no-underline [&+p]:mt-2",
          local.class,
        )}
        {...others}
      />
    );
  },
  a: (props: ComponentProps<"a">) => {
    const [local, others] = splitProps(props, ["class"]);
    return (
      <a
        class={cn("font-medium underline underline-offset-4", local.class)}
        {...others}
      />
    );
  },
  p: (props: ComponentProps<"p">) => {
    const [local, others] = splitProps(props, ["class"]);
    return <p class={cn("mt-6 leading-relaxed", local.class)} {...others} />;
  },
  strong: (props: ComponentProps<"strong">) => {
    const [local, others] = splitProps(props, ["class"]);
    return <strong class={cn("font-bold", local.class)} {...others} />;
  },
  ul: (props: ComponentProps<"ul">) => {
    const [local, others] = splitProps(props, ["class"]);
    return <ul class={cn("my-6 ml-6 list-disc", local.class)} {...others} />;
  },
  ol: (props: ComponentProps<"ol">) => {
    const [local, others] = splitProps(props, ["class"]);
    return <ol class={cn("my-6 ml-6 list-decimal", local.class)} {...others} />;
  },
  li: (props: ComponentProps<"li">) => {
    const [local, others] = splitProps(props, ["class"]);
    return <li class={cn("mt-1", local.class)} {...others} />;
  },
  blockquote: (props: ComponentProps<"blockquote">) => {
    const [local, others] = splitProps(props, ["class"]);
    return (
      <blockquote
        class={cn("mt-6 border-l-2 pl-6 italic", local.class)}
        {...others}
      />
    );
  },
  img: (props: ComponentProps<"img">) => {
    const [local, others] = splitProps(props, ["class", "src"]);
    return (
      <img
        class={cn("rounded-base", local.class)}
        loading="lazy"
        {...others}
        alt={local.src}
        src={local.src}
      />
    );
  },
  hr: (props: ComponentProps<"hr">) => {
    const [local, others] = splitProps(props, ["class"]);
    return <hr class={cn("my-4 md:my-8", local.class)} {...others} />;
  },
  pre: (props: ComponentProps<"pre">) => {
    const [local, others] = splitProps(props, ["class"]);
    return (
      <pre
        class={cn(
          "no-scrollbar min-w-0 overflow-x-auto px-4 py-3.5 outline-none has-[[data-highlighted-line]]:px-0 has-[[data-line-numbers]]:px-0 has-[[data-slot=tabs]]:p-0",
          local.class,
        )}
        {...others}
      />
    );
  },
  figcaption: (props: ComponentProps<"figcaption">) => {
    const [local, others] = splitProps(props, ["class"]);
    return (
      <figcaption
        class={cn(
          "flex items-center gap-2 [&_svg]:size-4 [&_svg]:opacity-70",
          local.class,
        )}
        {...others}
      />
    );
  },
  code: (props: ComponentProps<"code">) => {
    const [local, others] = splitProps(props, ["class"]);
    return (
      <code
        class={cn(
          "rounded-base bg-muted px-1 py-0.5 text-muted-foreground",
          local.class,
        )}
        {...others}
      />
    );
  },
  CodeComponent: Code,
  CollapsibleCode,
  ComponentsList,
  Image,
  InstallationTabs,
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
  PreviewTabs,
};
