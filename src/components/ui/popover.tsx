import type { PolymorphicProps } from "@kobalte/core/polymorphic";
import type { Component, ValidComponent } from "solid-js";

import { splitProps } from "solid-js";
import * as PopoverPrimitive from "@kobalte/core/popover";

import { cn } from "~/lib/utils";

const PopoverTrigger = <T extends ValidComponent = "button">(
  props: PolymorphicProps<T, PopoverPrimitive.PopoverTriggerProps<T>>,
) => {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />;
};

const Popover: Component<PopoverPrimitive.PopoverRootProps> = (props) => {
  return <PopoverPrimitive.Root data-slot="popover" gutter={4} {...props} />;
};

type PopoverContentProps<T extends ValidComponent = "div"> =
  PopoverPrimitive.PopoverContentProps<T> & { class?: string | undefined };

const PopoverContent = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, PopoverContentProps<T>>,
) => {
  const [local, others] = splitProps(props as PopoverContentProps, ["class"]);
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        class={cn(
          "z-50 w-72 origin-[var(--kb-popover-content-transform-origin)] rounded-md border-2 border-border bg-background p-4 text-primary-foreground outline-none ui-expanded:animate-in ui-expanded:fade-in-0 ui-expanded:zoom-in-95 ui-closed:animate-out ui-closed:fade-out-0 ui-closed:zoom-out-95",
          local.class,
        )}
        {...others}
      />
    </PopoverPrimitive.Portal>
  );
};

export { Popover, PopoverTrigger, PopoverContent };
