import type { PolymorphicProps } from "@kobalte/core/polymorphic";
import type { Component, ComponentProps, JSX, ValidComponent } from "solid-js";

import { splitProps } from "solid-js";
import * as DropdownMenuPrimitive from "@kobalte/core/dropdown-menu";
import { CheckIcon, ChevronRightIcon, DotIcon } from "lucide-solid";

import { cn } from "~/lib/utils";

const DropdownMenuTrigger = <T extends ValidComponent = "button">(
  props: PolymorphicProps<T, DropdownMenuPrimitive.DropdownMenuTriggerProps<T>>,
) => {
  return (
    <DropdownMenuPrimitive.Trigger
      data-slot="dropdown-menu-trigger"
      {...props}
    />
  );
};

const DropdownMenuPortal = (
  props: DropdownMenuPrimitive.DropdownMenuPortalProps,
) => {
  return (
    <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
  );
};

const DropdownMenuSub = (props: DropdownMenuPrimitive.DropdownMenuSubProps) => {
  return <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />;
};

const DropdownMenuGroup = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, DropdownMenuPrimitive.DropdownMenuGroupProps<T>>,
) => {
  return (
    <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />
  );
};

const DropdownMenuRadioGroup = <
  TValue = string,
  T extends ValidComponent = "div",
>(
  props: PolymorphicProps<
    T,
    DropdownMenuPrimitive.DropdownMenuRadioGroupProps<T, TValue>
  >,
) => {
  return (
    <DropdownMenuPrimitive.RadioGroup
      data-slot="dropdown-menu-radio-group"
      {...props}
    />
  );
};

const DropdownMenu: Component<DropdownMenuPrimitive.DropdownMenuRootProps> = (
  props,
) => {
  return (
    <DropdownMenuPrimitive.Root
      data-slot="dropdown-menu"
      gutter={4}
      {...props}
    />
  );
};

type DropdownMenuContentProps<T extends ValidComponent = "div"> =
  DropdownMenuPrimitive.DropdownMenuContentProps<T> & {
    class?: string | undefined;
  };

const DropdownMenuContent = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, DropdownMenuContentProps<T>>,
) => {
  const [, rest] = splitProps(props as DropdownMenuContentProps, ["class"]);
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        data-slot="dropdown-menu-content"
        class={cn(
          "z-50 min-w-32 origin-[var(--kb-menu-content-transform-origin)] animate-out overflow-hidden rounded-base border-2 border-border bg-background p-1 text-foreground shadow-md ui-expanded:animate-in",
          props.class,
        )}
        {...rest}
      />
    </DropdownMenuPrimitive.Portal>
  );
};

type DropdownMenuItemProps<T extends ValidComponent = "div"> =
  DropdownMenuPrimitive.DropdownMenuItemProps<T> & {
    class?: string | undefined;
  };

const DropdownMenuItem = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, DropdownMenuItemProps<T>>,
) => {
  const [, rest] = splitProps(props as DropdownMenuItemProps, ["class"]);
  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
      class={cn(
        "relative flex cursor-default items-center gap-2 rounded-base px-2 py-1.5 text-sm transition-colors outline-none select-none hover:bg-primary hover:text-primary-foreground focus:border-border ui-disabled:pointer-events-none ui-disabled:opacity-50",
        props.class,
      )}
      {...rest}
    />
  );
};

const DropdownMenuShortcut: Component<ComponentProps<"span">> = (props) => {
  const [, rest] = splitProps(props, ["class"]);
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      class={cn("ml-auto text-xs tracking-widest opacity-60", props.class)}
      {...rest}
    />
  );
};

const DropdownMenuLabel: Component<
  ComponentProps<"div"> & { inset?: boolean }
> = (props) => {
  const [, rest] = splitProps(props, ["class", "inset"]);
  return (
    <div
      data-slot="dropdown-menu-label"
      class={cn(
        "px-2 py-1.5 text-sm font-semibold",
        props.inset && "pl-8",
        props.class,
      )}
      {...rest}
    />
  );
};

type DropdownMenuSeparatorProps<T extends ValidComponent = "hr"> =
  DropdownMenuPrimitive.DropdownMenuSeparatorProps<T> & {
    class?: string | undefined;
  };

const DropdownMenuSeparator = <T extends ValidComponent = "hr">(
  props: PolymorphicProps<T, DropdownMenuSeparatorProps<T>>,
) => {
  const [, rest] = splitProps(props as DropdownMenuSeparatorProps, ["class"]);
  return (
    <DropdownMenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      class={cn("-mx-1 my-1 h-0.5 bg-border", props.class)}
      {...rest}
    />
  );
};

type DropdownMenuSubTriggerProps<T extends ValidComponent = "div"> =
  DropdownMenuPrimitive.DropdownMenuSubTriggerProps<T> & {
    class?: string | undefined;
    children?: JSX.Element;
  };

const DropdownMenuSubTrigger = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, DropdownMenuSubTriggerProps<T>>,
) => {
  const [, rest] = splitProps(props as DropdownMenuSubTriggerProps, [
    "class",
    "children",
  ]);
  return (
    <DropdownMenuPrimitive.SubTrigger
      data-slot="dropdown-menu-sub-trigger"
      class={cn(
        "flex cursor-default items-center rounded-base px-2 py-1.5 text-sm outline-none select-none focus:bg-primary ui-expanded:bg-primary",
        props.class,
      )}
      {...rest}
    >
      {props.children}
      <ChevronRightIcon class="ml-auto size-4" />
    </DropdownMenuPrimitive.SubTrigger>
  );
};

type DropdownMenuSubContentProps<T extends ValidComponent = "div"> =
  DropdownMenuPrimitive.DropdownMenuSubContentProps<T> & {
    class?: string | undefined;
  };

const DropdownMenuSubContent = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, DropdownMenuSubContentProps<T>>,
) => {
  const [, rest] = splitProps(props as DropdownMenuSubContentProps, ["class"]);
  return (
    <DropdownMenuPrimitive.SubContent
      data-slot="dropdown-menu-sub-content"
      class={cn(
        "shadow-base z-50 min-w-32 origin-[var(--kb-menu-content-transform-origin)] animate-in overflow-hidden rounded-md border-2 bg-background p-1 text-foreground",
        props.class,
      )}
      {...rest}
    />
  );
};

type DropdownMenuCheckboxItemProps<T extends ValidComponent = "div"> =
  DropdownMenuPrimitive.DropdownMenuCheckboxItemProps<T> & {
    class?: string | undefined;
    children?: JSX.Element;
  };

const DropdownMenuCheckboxItem = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, DropdownMenuCheckboxItemProps<T>>,
) => {
  const [, rest] = splitProps(props as DropdownMenuCheckboxItemProps, [
    "class",
    "children",
  ]);
  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      class={cn(
        "relative flex cursor-default items-center rounded-base py-1.5 pr-2 pl-8 text-sm transition-colors outline-none select-none focus:bg-primary focus:text-primary-foreground ui-disabled:pointer-events-none ui-disabled:opacity-50",
        props.class,
      )}
      {...rest}
    >
      <span class="absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon class="size-4" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {props.children}
    </DropdownMenuPrimitive.CheckboxItem>
  );
};

type DropdownMenuGroupLabelProps<T extends ValidComponent = "span"> =
  DropdownMenuPrimitive.DropdownMenuGroupLabelProps<T> & {
    class?: string | undefined;
  };

const DropdownMenuGroupLabel = <T extends ValidComponent = "span">(
  props: PolymorphicProps<T, DropdownMenuGroupLabelProps<T>>,
) => {
  const [, rest] = splitProps(props as DropdownMenuGroupLabelProps, ["class"]);
  return (
    <DropdownMenuPrimitive.GroupLabel
      data-slot="dropdown-menu-group-label"
      class={cn("px-2 py-1.5 text-sm font-semibold", props.class)}
      {...rest}
    />
  );
};

type DropdownMenuRadioItemProps<T extends ValidComponent = "div"> =
  DropdownMenuPrimitive.DropdownMenuRadioItemProps<T> & {
    class?: string | undefined;
    children?: JSX.Element;
  };

const DropdownMenuRadioItem = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, DropdownMenuRadioItemProps<T>>,
) => {
  const [, rest] = splitProps(props as DropdownMenuRadioItemProps, [
    "class",
    "children",
  ]);
  return (
    <DropdownMenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      class={cn(
        "relative flex cursor-default items-center rounded-base py-1.5 pr-2 pl-8 text-sm transition-colors outline-none select-none focus:bg-primary focus:text-primary-foreground ui-disabled:pointer-events-none ui-disabled:opacity-50",
        props.class,
      )}
      {...rest}
    >
      <span class="absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <DotIcon class="size-10" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {props.children}
    </DropdownMenuPrimitive.RadioItem>
  );
};

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuPortal,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuCheckboxItem,
  DropdownMenuGroup,
  DropdownMenuGroupLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
};
