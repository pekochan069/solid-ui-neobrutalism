import type { Component, ComponentProps } from "solid-js";

import { mergeProps } from "solid-js";
import { Toaster as Sonner } from "solid-sonner";

type ToasterProps = ComponentProps<typeof Sonner>;

const Toaster: Component<ToasterProps> = (props) => {
  return (
    <Sonner
      class="toaster group"
      toastOptions={{
        unstyled: true,
        classes: {
          toast:
            "bg-background text-foreground border-border border-2 font-heading shadow-shadow rounded-base text-[13px] flex items-center gap-2.5 p-4 w-[356px] [&:has(button)]:justify-between",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "font-base border-2 text-[12px] h-6 px-2 bg-primary text-primary-foreground border-border rounded-base shrink-0",
          cancelButton:
            "font-base border-2 text-[12px] h-6 px-2 bg-secondary-background text-foreground border-border rounded-base shrink-0",
          success: "bg-success text-success-foreground",
          info: "bg-info text-info-foreground",
          warning: "bg-warning text-warning-foreground",
          error: "bg-error text-error-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
