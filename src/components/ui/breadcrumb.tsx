import type { PolymorphicProps } from "@kobalte/core";
import type { Component, ComponentProps, JSX, ValidComponent } from "solid-js";

import { mergeProps, splitProps } from "solid-js";
import * as BreadcrumbPrimitive from "@kobalte/core/breadcrumbs";
import ChevronRightIcon from "lucide-solid/icons/chevron-right";
import MoreHorizontalIcon from "lucide-solid/icons/more-horizontal";

import { cn } from "~/lib/utils";

// const Breadcrumb = BreadcrumbPrimitive.Root;
type BreadcrumbProps<T extends ValidComponent = "nav"> =
  BreadcrumbPrimitive.BreadcrumbsRootProps<T>;

const Breadcrumb = <T extends ValidComponent = "nav">(
  props: PolymorphicProps<T, BreadcrumbProps<T>>,
) => {
  const merged = mergeProps(
    {
      separator: () => <ChevronRightIcon />,
    },
    props,
  );

  return <BreadcrumbPrimitive.Root data-slot="breadcrumb" {...merged} />;
};

const BreadcrumbList: Component<ComponentProps<"ol">> = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return (
    <ol
      data-slot="breadcrumb-list"
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
      data-slot="breadcrumb-item"
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
      data-slot="breadcrumb-link"
      class={cn("ui-current:font-bold", local.class)}
      {...others}
    />
  );
};

const BreadcrumbPage = <T extends ValidComponent = "span">(
  props: ComponentProps<T> & {
    class?: string | undefined;
  },
) => {
  const [local, others] = splitProps(props, ["class"]);
  return (
    <span
      data-slot="breadcrumb-page"
      class={cn("font-bold text-foreground", local.class)}
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
      data-slot="breadcrumb-separator"
      class={cn("[&>svg]:size-3.5", local.class)}
      {...others}
    />
  );
};

const BreadcrumbEllipsis: Component<ComponentProps<"span">> = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      class={cn("flex size-9 items-center justify-center", local.class)}
      {...others}
    >
      <MoreHorizontalIcon class="size-4" />
      <span class="sr-only">More</span>
    </span>
  );
};

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};
