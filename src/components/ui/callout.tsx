import type { VariantProps } from "class-variance-authority";
import type { Component, ComponentProps, JSX } from "solid-js";

import { Show, splitProps } from "solid-js";
import { cva } from "class-variance-authority";
import {
  CircleCheckIcon,
  CircleXIcon,
  InfoIcon,
  TriangleAlertIcon,
} from "lucide-solid";

import { cn } from "~/lib/utils";

const calloutVariants = cva("rounded-base border-2 px-4 py-3", {
  variants: {
    variant: {
      default: "border-primary bg-background text-primary",
      success: "border-success-foreground bg-success text-success-foreground",
      info: "border-info-foreground bg-info text-info-foreground",
      warning: "border-warning-foreground bg-warning text-warning-foreground",
      error: "border-error-foreground bg-error text-error-foreground",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type CalloutProps = ComponentProps<"div"> &
  VariantProps<typeof calloutVariants>;

type CalloutVariant = NonNullable<
  VariantProps<typeof calloutVariants>["variant"]
>;

type IconMap = Exclude<CalloutVariant, "default">;

const iconMap: {
  [key in IconMap]: (props: { class?: string }) => JSX.Element;
} = {
  success: (props) => <CircleCheckIcon class={props.class} />,
  info: (props) => <InfoIcon class={props.class} />,
  warning: (props) => <TriangleAlertIcon class={props.class} />,
  error: (props) => <CircleXIcon class={props.class} />,
};

const Callout: Component<CalloutProps> = (props) => {
  const [local, others] = splitProps(props, ["class", "variant"]);

  return (
    <div
      data-slot="callout"
      data-variant={local.variant}
      class={cn(calloutVariants({ variant: local.variant }), local.class)}
      {...others}
    />
  );
};

const CalloutTitle: Component<
  ComponentProps<"h3"> & {
    icon?: JSX.Element | (() => JSX.Element);
  }
> = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return (
    <div class="flex items-center gap-2">
      <Show when={props.icon}>
        {typeof props.icon === "function" ? <props.icon /> : props.icon}
      </Show>
      <h3
        data-slot="callout-title"
        class={cn("font-semibold", local.class)}
        {...others}
      />
    </div>
  );
};

const CalloutContent: Component<ComponentProps<"div">> = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return (
    <div
      data-slot="callout-content"
      class={cn("mt-2", local.class)}
      {...others}
    />
  );
};

export { Callout, CalloutTitle, CalloutContent, iconMap as calloutIconMap };
