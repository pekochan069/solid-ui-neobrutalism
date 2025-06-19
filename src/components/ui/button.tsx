import type { PolymorphicProps } from "@kobalte/core/polymorphic";
import type { VariantProps } from "class-variance-authority";
import type { JSX, ValidComponent } from "solid-js";

import { splitProps } from "solid-js";
import * as ButtonPrimitive from "@kobalte/core/button";
import { cva } from "class-variance-authority";

import { cn } from "~/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-base text-sm font-base whitespace-nowrap ring-offset-white transition-all focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "border-2 border-border bg-main text-main-foreground shadow-shadow active:translate-x-box-shadow-x active:translate-y-box-shadow-y active:shadow-none",
        outline:
          "border-2 border-border bg-transparent text-foreground shadow-shadow active:translate-x-box-shadow-x active:translate-y-box-shadow-y active:shadow-none",
        "outline-no-shadow":
          "border-2 border-border bg-transparent text-foreground hover:bg-secondary-background/50",
        ghost:
          "bg-transparent text-foreground hover:bg-secondary-background/50",
        "no-shadow":
          "border-2 border-border bg-main text-main-foreground hover:bg-main/80",
        neutral:
          "border-2 border-black bg-secondary-background text-foreground shadow-destructive active:translate-x-box-shadow-x active:translate-y-box-shadow-y active:shadow-none",
        "neutral-no-shadow":
          "border-2 border-border bg-secondary-background text-foreground hover:bg-secondary-background/80",
        reverse:
          "border-2 border-border bg-main text-main-foreground active:translate-x-reverse-box-shadow-x active:translate-y-reverse-box-shadow-y active:shadow-shadow",
        link: "text-foreground underline-offset-4 hover:underline",
        success:
          "border-2 border-success-foreground bg-success text-success-foreground hover:bg-success/50",
        info: "border-2 border-info-foreground bg-info text-info-foreground hover:bg-info/50",
        warning:
          "border-2 border-warning-foreground bg-warning text-warning-foreground hover:bg-warning/50",
        error:
          "border-2 border-error-foreground bg-error text-error-foreground hover:bg-error/50",
      },
      size: {
        default: "h-10 px-4 py-2",
        xs: "h-8 px-2 text-xs",
        sm: "h-9 px-3 text-xs",
        lg: "h-11 px-8",
        xl: "h-12 px-10 text-lg",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type ButtonProps<T extends ValidComponent = "button"> =
  ButtonPrimitive.ButtonRootProps<T> &
    VariantProps<typeof buttonVariants> & {
      class?: string | undefined;
      children?: JSX.Element;
    };

const Button = <T extends ValidComponent = "button">(
  props: PolymorphicProps<T, ButtonProps<T>>,
) => {
  const [local, others] = splitProps(props as ButtonProps, [
    "variant",
    "size",
    "class",
  ]);
  return (
    <ButtonPrimitive.Root
      data-slot="button"
      class={cn(
        buttonVariants({ variant: local.variant, size: local.size }),
        local.class,
      )}
      {...others}
    />
  );
};

export { Button, buttonVariants };
export type { ButtonProps };
