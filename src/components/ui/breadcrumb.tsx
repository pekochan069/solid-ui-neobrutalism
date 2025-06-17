import type { PolymorphicProps } from "@kobalte/core";
import type { Component, ComponentProps, JSX, ValidComponent } from "solid-js";

import { mergeProps, splitProps } from "solid-js";
import * as BreadcrumbPrimitive from "@kobalte/core/breadcrumbs";
import { ChevronRight, MoreHorizontal } from "lucide-solid";

import { cn } from "~/lib/utils";

// const Breadcrumb = BreadcrumbPrimitive.Root;
type BreadcrumbProps<T extends ValidComponent = "nav"> =
  BreadcrumbPrimitive.BreadcrumbsRootProps<T>;

const Breadcrumb = <T extends ValidComponent = "nav">(
  props: PolymorphicProps<T, BreadcrumbProps<T>>,
) => {
  const merged = mergeProps(
    {
      separator: () => <ChevronRight />,
    },
    props,
  );

  return <BreadcrumbPrimitive.Root {...merged} />;
};

const BreadcrumbList: Component<ComponentProps<"ol">> = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return (
    <ol
      class={cn(
        "flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
        local.class,
      )}
      {...others}
    />
  );
};

const BreadcrumbItem: Component<ComponentProps<"li">> = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return (
    <li
      class={cn("inline-flex items-center gap-1.5", local.class)}
      {...others}
    />
  );
};

type BreadcrumbLinkProps<T extends ValidComponent = "a"> =
  BreadcrumbPrimitive.BreadcrumbsLinkProps<T> & { class?: string | undefined };

const BreadcrumbLink = <T extends ValidComponent = "a">(
  props: PolymorphicProps<T, BreadcrumbLinkProps<T>>,
) => {
  const [local, others] = splitProps(props as BreadcrumbLinkProps, ["class"]);
  return (
    <BreadcrumbPrimitive.Link
      class={cn("ui-current:font-bold", local.class)}
      {...others}
    />
  );
};

type BreadcrumbSeparatorProps<T extends ValidComponent = "span"> =
  BreadcrumbPrimitive.BreadcrumbsSeparatorProps<T> & {
    class?: string | undefined;
    children?: JSX.Element;
  };

const BreadcrumbSeparator = <T extends ValidComponent = "span">(
  props: PolymorphicProps<T, BreadcrumbSeparatorProps<T>>,
) => {
  const [local, others] = splitProps(props as BreadcrumbSeparatorProps, [
    "class",
    "children",
  ]);
  return (
    <BreadcrumbPrimitive.Separator
      class={cn("[&>svg]:size-3.5", local.class)}
      {...others}
    />
  );
};

const BreadcrumbEllipsis: Component<ComponentProps<"span">> = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return (
    <span
      class={cn("flex size-9 items-center justify-center", local.class)}
      {...others}
    >
      <MoreHorizontal class="size-4" />
      <span class="sr-only">More</span>
    </span>
  );
};

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};
