import type { PolymorphicProps } from "@kobalte/core/polymorphic";
import type { Component, ComponentProps, JSX, ValidComponent } from "solid-js";

import { splitProps } from "solid-js";
import * as MenubarPrimitive from "@kobalte/core/menubar";
import { CheckIcon, ChevronRightIcon, DotIcon } from "lucide-solid";

import { cn } from "~/lib/utils";

const MenubarGroup = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, MenubarPrimitive.MenubarGroupProps<T>>,
) => {
  return <MenubarPrimitive.Group data-slot="menubar-group" {...props} />;
};

const MenubarPortal = (props: MenubarPrimitive.MenubarPortalProps) => {
  return <MenubarPrimitive.Portal data-slot="menubar-portal" {...props} />;
};

const MenubarSub = (props: MenubarPrimitive.MenubarSubProps) => {
  return <MenubarPrimitive.Sub data-slot="menubar-sub" {...props} />;
};

const MenubarRadioGroup = <T extends ValidComponent = "div", TValue = string>(
  props: PolymorphicProps<
    T,
    MenubarPrimitive.MenubarRadioGroupProps<T, TValue>
  >,
) => {
  return (
    <MenubarPrimitive.RadioGroup data-slot="menubar-radio-group" {...props} />
  );
};

type MenubarRootProps<T extends ValidComponent = "div"> =
  MenubarPrimitive.MenubarRootProps<T> & {
    class?: string | undefined;
  };

const Menubar = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, MenubarRootProps<T>>,
) => {
  const [local, others] = splitProps(props as MenubarRootProps, ["class"]);
  return (
    <MenubarPrimitive.Root
      data-slot="menubar-root"
      class={cn(
        "flex h-10 items-center space-x-1 rounded-base border-2 border-border bg-background p-1",
        local.class,
      )}
      {...others}
    />
  );
};

const MenubarMenu: Component<MenubarPrimitive.MenubarMenuProps> = (props) => {
  return (
    <MenubarPrimitive.Menu data-slot="menubar-menu" gutter={8} {...props} />
  );
};

type MenubarTriggerProps<T extends ValidComponent = "button"> =
  MenubarPrimitive.MenubarTriggerProps<T> & { class?: string | undefined };

const MenubarTrigger = <T extends ValidComponent = "button">(
  props: PolymorphicProps<T, MenubarTriggerProps<T>>,
) => {
  const [local, others] = splitProps(props as MenubarTriggerProps, ["class"]);
  return (
    <MenubarPrimitive.Trigger
      data-slot="menubar-trigger"
      class={cn(
        "flex cursor-default items-center rounded-base px-3 py-1.5 text-sm font-medium outline-none select-none focus:bg-primary focus:text-primary-foreground ui-expanded:bg-primary ui-expanded:text-primary-foreground",
        local.class,
      )}
      {...others}
    />
  );
};

type MenubarContentProps<T extends ValidComponent = "div"> =
  MenubarPrimitive.MenubarContentProps<T> & { class?: string | undefined };

const MenubarContent = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, MenubarContentProps<T>>,
) => {
  const [local, others] = splitProps(props as MenubarContentProps, ["class"]);
  return (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        data-slot="menubar-content"
        class={cn(
          "z-50 min-w-48 origin-[var(--kb-menu-content-transform-origin)] overflow-hidden rounded-base border-2 border-border bg-background p-1 text-foreground ui-expanded:animate-in ui-expanded:fade-in-0 ui-expanded:zoom-in-95 ui-closed:animate-out ui-closed:fade-out-0 ui-closed:zoom-out-95",
          local.class,
        )}
        {...others}
      />
    </MenubarPrimitive.Portal>
  );
};

type MenubarSubTriggerProps<T extends ValidComponent = "div"> =
  MenubarPrimitive.MenubarSubTriggerProps<T> & {
    class?: string | undefined;
    children?: JSX.Element;
    inset?: boolean;
  };

const MenubarSubTrigger = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, MenubarSubTriggerProps<T>>,
) => {
  const [local, others] = splitProps(props as MenubarSubTriggerProps, [
    "class",
    "children",
    "inset",
  ]);
  return (
    <MenubarPrimitive.SubTrigger
      data-slot="menubar-sub-trigger"
      class={cn(
        "flex cursor-default items-center rounded-base px-2 py-1.5 text-sm transition-colors outline-none select-none focus:bg-primary focus:text-primary-foreground ui-expanded:bg-primary ui-expanded:text-primary-foreground",
        local.inset && "pl-8",
        local.class,
      )}
      {...others}
    >
      {local.children}
      <ChevronRightIcon class="ml-auto size-4" />
    </MenubarPrimitive.SubTrigger>
  );
};

type MenubarSubContentProps<T extends ValidComponent = "div"> =
  MenubarPrimitive.MenubarSubContentProps<T> & {
    class?: string | undefined;
  };

const MenubarSubContent = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, MenubarSubContentProps<T>>,
) => {
  const [local, others] = splitProps(props as MenubarSubContentProps, [
    "class",
  ]);
  return (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.SubContent
        data-slot="menubar-sub-content"
        class={cn(
          "z-50 min-w-32 origin-[var(--kb-menu-content-transform-origin)] animate-in overflow-hidden rounded-base border-2 bg-background p-1 text-foreground ui-expanded:animate-in ui-expanded:fade-in-0 ui-expanded:zoom-in-95 ui-closed:animate-out ui-closed:fade-out-0 ui-closed:zoom-out-95",
          local.class,
        )}
        {...others}
      />
    </MenubarPrimitive.Portal>
  );
};

type MenubarItemProps<T extends ValidComponent = "div"> =
  MenubarPrimitive.MenubarItemProps<T> & {
    class?: string | undefined;
    inset?: boolean;
  };

const MenubarItem = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, MenubarItemProps<T>>,
) => {
  const [local, others] = splitProps(props as MenubarItemProps, [
    "class",
    "inset",
  ]);
  return (
    <MenubarPrimitive.Item
      data-slot="menubar-item"
      class={cn(
        "relative flex cursor-default items-center rounded-base px-2 py-1.5 text-sm transition-colors outline-none select-none focus:bg-primary focus:text-primary-foreground ui-disabled:pointer-events-none ui-disabled:opacity-50",
        local.inset && "pl-8",
        local.class,
      )}
      {...others}
    />
  );
};

type MenubarCheckboxItemProps<T extends ValidComponent = "div"> =
  MenubarPrimitive.MenubarCheckboxItemProps<T> & {
    class?: string | undefined;
    children?: JSX.Element;
  };

const MenubarCheckboxItem = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, MenubarCheckboxItemProps<T>>,
) => {
  const [local, others] = splitProps(props as MenubarCheckboxItemProps, [
    "class",
    "children",
  ]);
  return (
    <MenubarPrimitive.CheckboxItem
      data-slot="menubar-checkbox-item"
      class={cn(
        "relative flex cursor-default items-center rounded-base py-1.5 pr-2 pl-8 text-sm transition-colors outline-none select-none focus:bg-primary focus:text-primary-foreground ui-disabled:pointer-events-none ui-disabled:opacity-50",
        local.class,
      )}
      {...others}
    >
      <span class="absolute left-2 flex size-3.5 items-center justify-center">
        <MenubarPrimitive.ItemIndicator>
          <CheckIcon class="size-4" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {local.children}
    </MenubarPrimitive.CheckboxItem>
  );
};

type MenubarRadioItemProps<T extends ValidComponent = "div"> =
  MenubarPrimitive.MenubarRadioItemProps<T> & {
    class?: string | undefined;
    children?: JSX.Element;
  };

const MenubarRadioItem = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, MenubarRadioItemProps<T>>,
) => {
  const [local, others] = splitProps(props as MenubarRadioItemProps, [
    "class",
    "children",
  ]);
  return (
    <MenubarPrimitive.RadioItem
      data-slot="menubar-radio-item"
      class={cn(
        "relative flex cursor-default items-center rounded-base py-1.5 pr-2 pl-8 text-sm transition-colors outline-none select-none focus:bg-primary focus:text-primary-foreground ui-disabled:pointer-events-none ui-disabled:opacity-50",
        local.class,
      )}
      {...others}
    >
      <span class="absolute left-2 flex size-3.5 items-center justify-center">
        <MenubarPrimitive.ItemIndicator>
          <DotIcon class="size-10" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {local.children}
    </MenubarPrimitive.RadioItem>
  );
};

type MenubarItemLabelProps<T extends ValidComponent = "div"> =
  MenubarPrimitive.MenubarItemLabelProps<T> & {
    class?: string | undefined;
    inset?: boolean;
  };

const MenubarItemLabel = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, MenubarItemLabelProps<T>>,
) => {
  const [local, others] = splitProps(props as MenubarItemLabelProps, [
    "class",
    "inset",
  ]);
  return (
    <MenubarPrimitive.ItemLabel
      data-slot="menubar-item-label"
      class={cn(
        "px-2 py-1.5 text-sm font-semibold",
        local.inset && "pl-8",
        local.class,
      )}
      {...others}
    />
  );
};

type MenubarGroupLabelProps<T extends ValidComponent = "span"> =
  MenubarPrimitive.MenubarGroupLabelProps<T> & {
    class?: string | undefined;
    inset?: boolean;
  };

const MenubarGroupLabel = <T extends ValidComponent = "span">(
  props: PolymorphicProps<T, MenubarGroupLabelProps<T>>,
) => {
  const [local, others] = splitProps(props as MenubarGroupLabelProps, [
    "class",
    "inset",
  ]);
  return (
    <MenubarPrimitive.GroupLabel
      data-slot="menubar-group-label"
      class={cn(
        "px-2 py-1.5 text-sm font-semibold",
        local.inset && "pl-8",
        local.class,
      )}
      {...others}
    />
  );
};

type MenubarSeparatorProps<T extends ValidComponent = "hr"> =
  MenubarPrimitive.MenubarSeparatorProps<T> & { class?: string | undefined };

const MenubarSeparator = <T extends ValidComponent = "hr">(
  props: PolymorphicProps<T, MenubarSeparatorProps<T>>,
) => {
  const [local, others] = splitProps(props as MenubarSeparatorProps, ["class"]);
  return (
    <MenubarPrimitive.Separator
      data-slot="menubar-separator"
      class={cn("-mx-1 my-1 h-0.5 border-border bg-border", local.class)}
      {...others}
    />
  );
};

const MenubarShortcut: Component<ComponentProps<"span">> = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return (
    <span
      data-slot="menubar-shortcut"
      class={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        local.class,
      )}
      {...others}
    />
  );
};

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarItemLabel,
  MenubarGroupLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
};
