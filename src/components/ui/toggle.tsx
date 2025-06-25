import type { PolymorphicProps } from "@kobalte/core/polymorphic";
import type { VariantProps } from "class-variance-authority";
import type { ValidComponent } from "solid-js";

import { splitProps } from "solid-js";
import * as ToggleButtonPrimitive from "@kobalte/core/toggle-button";
import { cva } from "class-variance-authority";

import { cn } from "~/lib/utils";

const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-transparent ui-pressed:border-2 ui-pressed:border-border ui-pressed:bg-primary/80",
        transparent: "bg-transparent",
        outline:
          "border-2 border-border bg-transparent shadow-sm ui-pressed:bg-primary/80",
        outlineTransparent: "border-2 border-border bg-transparent shadow-sm",
      },
      size: {
        default: "h-9 px-3",
        sm: "h-8 px-2",
        lg: "h-10 px-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type ToggleButtonRootProps<T extends ValidComponent = "button"> =
  ToggleButtonPrimitive.ToggleButtonRootProps<T> &
    VariantProps<typeof toggleVariants> & { class?: string | undefined };

const Toggle = <T extends ValidComponent = "button">(
  props: PolymorphicProps<T, ToggleButtonRootProps<T>>,
) => {
  const [local, others] = splitProps(props as ToggleButtonRootProps, [
    "class",
    "variant",
    "size",
  ]);
  return (
    <ToggleButtonPrimitive.Root
      data-slot="toggle-button"
      class={cn(
        toggleVariants({ variant: local.variant, size: local.size }),
        local.class,
      )}
      {...others}
    />
  );
};

export type { ToggleButtonRootProps as ToggleProps };
export { toggleVariants, Toggle };
