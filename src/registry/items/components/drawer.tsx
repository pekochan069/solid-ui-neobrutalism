import type {
  CloseProps,
  ContentProps,
  DescriptionProps,
  DynamicProps,
  LabelProps,
  OverlayProps,
  PortalProps,
  RootProps,
  TriggerProps,
} from "@corvu/drawer";
import type { Component, ComponentProps, JSX, ValidComponent } from "solid-js";
import type { Portal } from "solid-js/web";

import { splitProps } from "solid-js";
import DrawerPrimitive from "@corvu/drawer";

import { cn } from "~/lib/utils";

// const Drawer = DrawerPrimitive;
const Drawer = (props: RootProps) => {
  return <DrawerPrimitive data-slot="drawer" {...props} />;
};

const DrawerTrigger = <T extends ValidComponent = "button">(
  props: DynamicProps<T, TriggerProps<T>>,
) => {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />;
};

const DrawerPortal = (props: PortalProps & ComponentProps<typeof Portal>) => {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />;
};

const DrawerClose = <T extends ValidComponent = "button">(
  props: DynamicProps<T, CloseProps<T>>,
) => {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />;
};

type DrawerOverlayProps<T extends ValidComponent = "div"> = OverlayProps<T> & {
  class?: string;
};

const DrawerOverlay = <T extends ValidComponent = "div">(
  props: DynamicProps<T, DrawerOverlayProps<T>>,
) => {
  const [, rest] = splitProps(props as DrawerOverlayProps, ["class"]);
  const drawerContext = DrawerPrimitive.useContext();
  return (
    <DrawerPrimitive.Overlay
      data-slot="drawer-overlay"
      data-transitioning={drawerContext.openPercentage() * 100}
      class={cn(
        "fixed inset-0 z-50 data-[transitioning]:transition-colors data-[transitioning]:duration-300",
        props.class,
      )}
      style={{
        "background-color": `color-mix(in oklab, var(--overlay) ${100 * drawerContext.openPercentage()}%, transparent)`,
      }}
      {...rest}
    />
  );
};

type DrawerContentProps<T extends ValidComponent = "div"> = ContentProps<T> & {
  class?: string;
  children?: JSX.Element;
};

const DrawerContent = <T extends ValidComponent = "div">(
  props: DynamicProps<T, DrawerContentProps<T>>,
) => {
  const [, rest] = splitProps(props as DrawerContentProps, [
    "class",
    "children",
  ]);
  return (
    <DrawerPortal>
      <DrawerOverlay />
      <DrawerPrimitive.Content
        data-slot="drawer-content"
        class={cn(
          "group/drawer-content fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background after:absolute after:inset-x-0 after:top-full after:h-1/2 after:bg-inherit data-[transitioning]:transition-transform data-[transitioning]:duration-300 md:select-none",
          props.class,
        )}
        {...rest}
      >
        <div class="mx-auto mt-4 h-2 w-[100px] rounded-full bg-current" />
        {props.children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  );
};

const DrawerHeader: Component<ComponentProps<"div">> = (props) => {
  const [, rest] = splitProps(props, ["class"]);
  return (
    <div
      data-slot="drawer-header"
      class={cn("grid gap-1.5 p-4 text-center sm:text-left", props.class)}
      {...rest}
    />
  );
};

const DrawerFooter: Component<ComponentProps<"div">> = (props) => {
  const [, rest] = splitProps(props, ["class"]);
  return (
    <div
      data-slot="drawer-footer"
      class={cn("mt-auto flex flex-col gap-2 p-4", props.class)}
      {...rest}
    />
  );
};

type DrawerTitleProps<T extends ValidComponent = "div"> = LabelProps<T> & {
  class?: string;
};

const DrawerTitle = <T extends ValidComponent = "div">(
  props: DynamicProps<T, DrawerTitleProps<T>>,
) => {
  const [, rest] = splitProps(props as DrawerTitleProps, ["class"]);
  return (
    <DrawerPrimitive.Label
      data-slot="drawer-title"
      class={cn(
        "text-lg leading-none font-semibold tracking-tight",
        props.class,
      )}
      {...rest}
    />
  );
};

type DrawerDescriptionProps<T extends ValidComponent = "div"> =
  DescriptionProps<T> & {
    class?: string;
  };

const DrawerDescription = <T extends ValidComponent = "div">(
  props: DynamicProps<T, DrawerDescriptionProps<T>>,
) => {
  const [, rest] = splitProps(props as DrawerDescriptionProps, ["class"]);
  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      class={cn("text-sm text-muted-foreground", props.class)}
      {...rest}
    />
  );
};

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};
