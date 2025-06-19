import type { VariantProps } from "class-variance-authority";
import type { Component, ComponentProps } from "solid-js";

import { splitProps } from "solid-js";
import { cva } from "class-variance-authority";

import { cn } from "~/lib/utils";

const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-base border-2 border-border px-2.5 py-0.5 text-xs font-base whitespace-nowrap focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 [&>svg]:pointer-events-none [&>svg]:size-3",
  {
    variants: {
      variant: {
        default: "bg-main text-main-foreground",
        neutral: "bg-secondary-background text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

type BadgeProps = ComponentProps<"div"> &
  VariantProps<typeof badgeVariants> & {
    round?: boolean;
  };

const Badge: Component<BadgeProps> = (props) => {
  const [local, others] = splitProps(props, ["class", "variant", "round"]);
  return (
    <div
      data-slot="badge"
      class={cn(
        badgeVariants({ variant: local.variant }),
        local.round && "rounded-full",
        local.class,
      )}
      {...others}
    />
  );
};

export type { BadgeProps };
export { Badge, badgeVariants };
