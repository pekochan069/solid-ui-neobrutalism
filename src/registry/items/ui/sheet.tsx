import type { PolymorphicProps } from "@kobalte/core/polymorphic";
import type { VariantProps } from "class-variance-authority";
import type { Component, ComponentProps, JSX, ValidComponent } from "solid-js";

import { splitProps } from "solid-js";
import * as SheetPrimitive from "@kobalte/core/dialog";
import { cva } from "class-variance-authority";
import XIcon from "lucide-solid/icons/x";

import { cn } from "~/lib/utils";

const Sheet = (props: SheetPrimitive.DialogRootProps) => {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />;
};

const SheetTrigger = <T extends ValidComponent = "button">(
  props: PolymorphicProps<T, SheetPrimitive.DialogTriggerProps<T>>,
) => {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />;
};

const SheetClose = <T extends ValidComponent = "button">(
  props: PolymorphicProps<T, SheetPrimitive.DialogCloseButtonProps<T>>,
) => {
  return <SheetPrimitive.CloseButton data-slot="sheet-close" {...props} />;
};

const portalVariants = cva("fixed inset-0 z-50 flex", {
  variants: {
    position: {
      top: "items-start",
      bottom: "items-end",
      left: "justify-start",
      right: "justify-end",
    },
  },
  defaultVariants: { position: "right" },
});

type PortalProps = SheetPrimitive.DialogPortalProps &
  VariantProps<typeof portalVariants>;

const SheetPortal: Component<PortalProps> = (props) => {
  const [local, others] = splitProps(props, ["position", "children"]);
  return (
    <SheetPrimitive.Portal data-slot="sheet-portal" {...others}>
      <div class={portalVariants({ position: local.position })}>
        {local.children}
      </div>
    </SheetPrimitive.Portal>
  );
};

type DialogOverlayProps<T extends ValidComponent = "div"> =
  SheetPrimitive.DialogOverlayProps<T> & {
    class?: string | undefined;
  };

const SheetOverlay = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, DialogOverlayProps<T>>,
) => {
  const [local, others] = splitProps(props as DialogOverlayProps, ["class"]);
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      class={cn(
        "fixed inset-0 z-50 bg-overlay ui-expanded:animate-in ui-expanded:fade-in-0 ui-closed:animate-out ui-closed:fade-out-0",
        local.class,
      )}
      {...others}
    />
  );
};

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 transition-all ease-in-out ui-expanded:animate-in ui-expanded:duration-500 ui-closed:animate-out ui-closed:duration-300",
  {
    variants: {
      position: {
        top: "inset-x-0 top-0 border-b ui-expanded:slide-in-from-top ui-closed:slide-out-to-top",
        bottom:
          "inset-x-0 bottom-0 border-t ui-expanded:slide-in-from-bottom ui-closed:slide-out-to-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm ui-expanded:slide-in-from-left ui-closed:slide-out-to-left",
        right:
          "inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm ui-expanded:slide-in-from-right ui-closed:slide-out-to-right",
      },
    },
    defaultVariants: {
      position: "right",
    },
  },
);

type DialogContentProps<T extends ValidComponent = "div"> =
  SheetPrimitive.DialogContentProps<T> &
    VariantProps<typeof sheetVariants> & {
      class?: string | undefined;
      children?: JSX.Element;
    };

const SheetContent = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, DialogContentProps<T>>,
) => {
  const [local, others] = splitProps(props as DialogContentProps, [
    "position",
    "class",
    "children",
  ]);
  return (
    <SheetPortal position={local.position}>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        class={cn(
          sheetVariants({ position: local.position }),
          local.class,
          "flex max-h-screen flex-col overflow-y-auto",
        )}
        {...others}
      >
        {local.children}
        <SheetPrimitive.CloseButton
          data-slot="sheet-close-button"
          class="absolute top-4 right-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none disabled:pointer-events-none ui-expanded:bg-primary"
        >
          <XIcon class="size-4" />
          <span class="sr-only">Close</span>
        </SheetPrimitive.CloseButton>
      </SheetPrimitive.Content>
    </SheetPortal>
  );
};

const SheetHeader: Component<ComponentProps<"div">> = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return (
    <div
      data-slot="sheet-header"
      class={cn(
        "flex flex-col space-y-2 text-center sm:text-left",
        local.class,
      )}
      {...others}
    />
  );
};

const SheetFooter: Component<ComponentProps<"div">> = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return (
    <div
      data-slot="sheet-footer"
      class={cn("mt-auto flex flex-col", local.class)}
      {...others}
    />
  );
};

type DialogTitleProps<T extends ValidComponent = "h2"> =
  SheetPrimitive.DialogTitleProps<T> & {
    class?: string | undefined;
  };

const SheetTitle = <T extends ValidComponent = "h2">(
  props: PolymorphicProps<T, DialogTitleProps<T>>,
) => {
  const [local, others] = splitProps(props as DialogTitleProps, ["class"]);
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      class={cn("text-lg font-semibold text-foreground", local.class)}
      {...others}
    />
  );
};

type DialogDescriptionProps<T extends ValidComponent = "p"> =
  SheetPrimitive.DialogDescriptionProps<T> & { class?: string | undefined };

const SheetDescription = <T extends ValidComponent = "p">(
  props: PolymorphicProps<T, DialogDescriptionProps<T>>,
) => {
  const [local, others] = splitProps(props as DialogDescriptionProps, [
    "class",
  ]);
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      class={cn("text-sm text-muted-foreground", local.class)}
      {...others}
    />
  );
};

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
