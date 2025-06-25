import type { BadgeProps } from "~/components/ui/badge";
import type { VariantProps } from "class-variance-authority";
import type { Component, JSXElement } from "solid-js";

import { createEffect, on, Show, splitProps } from "solid-js";
import { cva } from "class-variance-authority";
import ArrowDownIcon from "lucide-solid/icons/arrow-down";
import ArrowDownRightIcon from "lucide-solid/icons/arrow-down-right";
import ArrowRightIcon from "lucide-solid/icons/arrow-right";
import ArrowUpIcon from "lucide-solid/icons/arrow-up";
import ArrowUpRightIcon from "lucide-solid/icons/arrow-up-right";

import { Badge } from "~/components/ui/badge";
import { cn } from "~/lib/utils";

type DeltaType =
  | "increase"
  | "moderateIncrease"
  | "unchanged"
  | "moderateDecrease"
  | "decrease";

const badgeDeltaVariants = cva("", {
  variants: {
    variant: {
      success: "bg-success text-success-foreground hover:bg-success",
      warning: "bg-warning text-warning-foreground hover:bg-warning",
      error: "bg-error text-error-foreground hover:bg-error",
    },
  },
});
type DeltaVariant = NonNullable<
  VariantProps<typeof badgeDeltaVariants>["variant"]
>;

const iconMap: {
  [key in DeltaType]: (props: { class?: string }) => JSXElement;
} = {
  increase: (props) => <ArrowUpIcon class={props.class} />,
  moderateIncrease: (props) => <ArrowUpRightIcon class={props.class} />,
  unchanged: (props) => <ArrowRightIcon class={props.class} />,
  moderateDecrease: (props) => <ArrowDownRightIcon class={props.class} />,
  decrease: (props) => <ArrowDownIcon class={props.class} />,
};

const variantMap: { [key in DeltaType]: DeltaVariant } = {
  increase: "success",
  moderateIncrease: "success",
  unchanged: "warning",
  moderateDecrease: "error",
  decrease: "error",
};

type BadgeDeltaProps = Omit<BadgeProps, "variant"> & {
  deltaType: DeltaType;
  iconLocation?: "left" | "right";
};

const BadgeDelta: Component<BadgeDeltaProps> = (props) => {
  const [local, others] = splitProps(props, [
    "class",
    "children",
    "deltaType",
    "iconLocation",
  ]);

  // eslint-disable-next-line solid/reactivity
  let Icon = iconMap[local.deltaType];
  createEffect(
    on(
      () => local.deltaType,
      () => {
        Icon = iconMap[local.deltaType];
      },
    ),
  );

  return (
    <Badge
      class={cn(
        badgeDeltaVariants({ variant: variantMap[local.deltaType] }),
        local.class,
      )}
      {...others}
    >
      <span class="flex gap-1">
        <Show
          when={
            local.iconLocation === undefined || local.iconLocation === "left"
          }
        >
          <Icon class="size-4" />
        </Show>
        {local.children}
        <Show when={local.iconLocation === "right"}>
          <Icon class="size-4" />
        </Show>
      </span>
    </Badge>
  );
};

export { BadgeDelta };
