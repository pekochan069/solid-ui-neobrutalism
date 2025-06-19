import type { PolymorphicProps } from "@kobalte/core/polymorphic";
import type { Component, ValidComponent } from "solid-js";

import { splitProps } from "solid-js";
import * as HoverCardPrimitive from "@kobalte/core/hover-card";

import { cn } from "~/lib/utils";

const HoverCardTrigger = <T extends ValidComponent = "a">(
  props: PolymorphicProps<T, HoverCardPrimitive.HoverCardTriggerProps<T>>,
) => {
  return (
    <HoverCardPrimitive.Trigger data-slot="hover-card-trigger" {...props} />
  );
};

const HoverCard: Component<HoverCardPrimitive.HoverCardRootProps> = (props) => {
  return (
    <HoverCardPrimitive.Root data-slot="hover-card" gutter={4} {...props} />
  );
};

type HoverCardContentProps<T extends ValidComponent = "div"> =
  HoverCardPrimitive.HoverCardContentProps<T> & {
    class?: string | undefined;
  };

const HoverCardContent = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, HoverCardContentProps<T>>,
) => {
  const [local, others] = splitProps(props as HoverCardContentProps, ["class"]);
  return (
    <HoverCardPrimitive.Portal>
      <HoverCardPrimitive.Content
        data-slot="hover-card-content"
        class={cn(
          "z-50 w-64 rounded-base border-2 border-border bg-background p-4 text-foreground shadow-shadow outline-none data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ui-opened:animate-in ui-opened:fade-in-0 ui-opened:zoom-in-95 ui-closed:animate-out ui-closed:fade-out-0 ui-closed:zoom-out-95",
          local.class,
        )}
        {...others}
      />
    </HoverCardPrimitive.Portal>
  );
};

export { HoverCard, HoverCardTrigger, HoverCardContent };
