import type { PolymorphicProps } from "@kobalte/core/polymorphic";
import type { ValidComponent } from "solid-js";

import { splitProps } from "solid-js";
import * as TabsPrimitive from "@kobalte/core/tabs";

import { cn } from "~/lib/utils";

const Tabs = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, TabsPrimitive.TabsRootProps<T>>,
) => {
  return <TabsPrimitive.Root data-slot="tabs" {...props} />;
};

type TabsListProps<T extends ValidComponent = "div"> =
  TabsPrimitive.TabsListProps<T> & {
    class?: string | undefined;
  };

const TabsList = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, TabsListProps<T>>,
) => {
  const [local, others] = splitProps(props as TabsListProps, ["class"]);
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      class={cn(
        "inline-flex h-12 items-center justify-center rounded-base border-2 border-border bg-background p-1 text-foreground",
        local.class,
      )}
      {...others}
    />
  );
};

type TabsTriggerProps<T extends ValidComponent = "button"> =
  TabsPrimitive.TabsTriggerProps<T> & {
    class?: string | undefined;
  };

const TabsTrigger = <T extends ValidComponent = "button">(
  props: PolymorphicProps<T, TabsTriggerProps<T>>,
) => {
  const [local, others] = splitProps(props as TabsTriggerProps, ["class"]);
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      class={cn(
        "inline-flex items-center justify-center gap-1.5 rounded-base border-2 border-transparent px-2 py-1 text-sm font-heading whitespace-nowrap ring-offset-white transition-all focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 ui-selected:border-border ui-selected:bg-primary ui-selected:text-primary-foreground",
        local.class,
      )}
      {...others}
    />
  );
};

type TabsContentProps<T extends ValidComponent = "div"> =
  TabsPrimitive.TabsContentProps<T> & {
    class?: string | undefined;
  };

const TabsContent = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, TabsContentProps<T>>,
) => {
  const [local, others] = splitProps(props as TabsContentProps, ["class"]);
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      class={cn(
        "mt-2 ring-offset-white focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none",
        local.class,
      )}
      {...others}
    />
  );
};

type TabsIndicatorProps<T extends ValidComponent = "div"> =
  TabsPrimitive.TabsIndicatorProps<T> & {
    class?: string | undefined;
  };

const TabsIndicator = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, TabsIndicatorProps<T>>,
) => {
  const [local, others] = splitProps(props as TabsIndicatorProps, ["class"]);
  return (
    <TabsPrimitive.Indicator
      data-slot="tabs-indicator"
      class={cn(
        "duration-250ms absolute transition-all data-[orientation=horizontal]:-bottom-px data-[orientation=horizontal]:h-[2px] data-[orientation=vertical]:-right-px data-[orientation=vertical]:w-[2px]",
        local.class,
      )}
      {...others}
    />
  );
};

export { Tabs, TabsList, TabsTrigger, TabsContent, TabsIndicator };
