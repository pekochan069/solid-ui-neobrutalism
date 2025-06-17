import type { PolymorphicProps } from "@kobalte/core/polymorphic";
import type { VariantProps } from "class-variance-authority";
import type { Component, ComponentProps, ValidComponent } from "solid-js";

import { splitProps } from "solid-js";
import * as AlertPrimitive from "@kobalte/core/alert";
import { cva } from "class-variance-authority";

import { cn } from "~/lib/utils";

const alertVariants = cva(
  "relative grid w-full grid-cols-[0_1fr] items-start gap-y-0.5 rounded-base border-2 border-border px-4 py-3 text-sm shadow-shadow has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3 [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-main text-main-foreground",
        destructive: "bg-black text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

type AlertRootProps<T extends ValidComponent = "div"> =
  AlertPrimitive.AlertRootProps<T> &
    VariantProps<typeof alertVariants> & { class?: string | undefined };

const Alert = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, AlertRootProps<T>>,
) => {
  const [local, others] = splitProps(props as AlertRootProps, [
    "class",
    "variant",
  ]);
  return (
    <AlertPrimitive.Root
      class={cn(alertVariants({ variant: props.variant }), local.class)}
      {...others}
    />
  );
};

const AlertTitle: Component<ComponentProps<"h5">> = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return (
    <h5
      class={cn(
        "col-start-2 line-clamp-1 min-h-4 font-heading tracking-tight",
        local.class,
      )}
      {...others}
    />
  );
};

const AlertDescription: Component<ComponentProps<"div">> = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return (
    <div
      class={cn(
        "col-start-2 grid justify-items-start gap-1 text-sm font-base [&_p]:leading-relaxed",
        local.class,
      )}
      {...others}
    />
  );
};

export { Alert, AlertTitle, AlertDescription };
