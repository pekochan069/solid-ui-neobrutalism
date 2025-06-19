import type { PolymorphicProps } from "@kobalte/core/polymorphic";
import type { JSX, ValidComponent } from "solid-js";

import { splitProps } from "solid-js";
import * as SelectPrimitive from "@kobalte/core/select";
import { cva } from "class-variance-authority";
import { CheckIcon, ChevronsUpDownIcon } from "lucide-solid";

import { cn } from "~/lib/utils";

const Select = <Option, OptGroup = never, T extends ValidComponent = "div">(
  props: PolymorphicProps<
    T,
    SelectPrimitive.SelectRootProps<Option, OptGroup, T>
  >,
) => {
  return <SelectPrimitive.Root data-slot="select" {...props} />;
};

const SelectValue = <Option, T extends ValidComponent = "span">(
  props: PolymorphicProps<T, SelectPrimitive.SelectValueProps<Option, T>>,
) => {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />;
};

const SelectHiddenSelect = (props: SelectPrimitive.SelectHiddenSelectProps) => {
  return (
    <SelectPrimitive.HiddenSelect data-slot="select-hidden-select" {...props} />
  );
};

type SelectTriggerProps<T extends ValidComponent = "button"> =
  SelectPrimitive.SelectTriggerProps<T> & {
    class?: string | undefined;
    children?: JSX.Element;
  };

const SelectTrigger = <T extends ValidComponent = "button">(
  props: PolymorphicProps<T, SelectTriggerProps<T>>,
) => {
  const [local, others] = splitProps(props as SelectTriggerProps, [
    "class",
    "children",
  ]);
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      class={cn(
        "flex h-10 w-full items-center justify-between rounded-base border-2 border-border bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        local.class,
      )}
      {...others}
    >
      {local.children}
      <SelectPrimitive.Icon
        as={ChevronsUpDownIcon}
        class="size-4 opacity-50"
      ></SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
};

type SelectContentProps<T extends ValidComponent = "div"> =
  SelectPrimitive.SelectContentProps<T> & { class?: string | undefined };

const SelectContent = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, SelectContentProps<T>>,
) => {
  const [local, others] = splitProps(props as SelectContentProps, ["class"]);
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        class={cn(
          "relative z-50 min-w-32 overflow-hidden rounded-base border-2 bg-background text-foreground ui-expanded:animate-in ui-expanded:fade-in-0 ui-expanded:zoom-in-95 ui-closed:animate-out ui-closed:fade-out-0 ui-closed:zoom-out-95",
          local.class,
        )}
        {...others}
      >
        <SelectPrimitive.Listbox class="m-0 p-1" />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
};

type SelectItemProps<T extends ValidComponent = "li"> =
  SelectPrimitive.SelectItemProps<T> & {
    class?: string | undefined;
    children?: JSX.Element;
  };

const SelectItem = <T extends ValidComponent = "li">(
  props: PolymorphicProps<T, SelectItemProps<T>>,
) => {
  const [local, others] = splitProps(props as SelectItemProps, [
    "class",
    "children",
  ]);
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      class={cn(
        "relative mt-0 flex w-full cursor-default items-center rounded-sm py-1.5 pr-8 pl-2 text-sm transition-colors outline-none select-none focus:bg-main focus:text-main-foreground ui-disabled:pointer-events-none ui-disabled:opacity-50",
        local.class,
      )}
      {...others}
    >
      <SelectPrimitive.ItemIndicator class="absolute right-2 flex size-3.5 items-center justify-center">
        <CheckIcon class="size-4" />
      </SelectPrimitive.ItemIndicator>
      <SelectPrimitive.ItemLabel>{local.children}</SelectPrimitive.ItemLabel>
    </SelectPrimitive.Item>
  );
};

const labelVariants = cva(
  "text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  {
    variants: {
      variant: {
        label: "ui-invalid:text-destructive",
        description: "font-normal text-muted-foreground",
        error: "text-destructive text-xs",
      },
    },
    defaultVariants: {
      variant: "label",
    },
  },
);

type SelectLabelProps<T extends ValidComponent = "label"> =
  SelectPrimitive.SelectLabelProps<T> & {
    class?: string | undefined;
  };

const SelectLabel = <T extends ValidComponent = "label">(
  props: PolymorphicProps<T, SelectLabelProps<T>>,
) => {
  const [local, others] = splitProps(props as SelectLabelProps, ["class"]);
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      class={cn(labelVariants(), local.class)}
      {...others}
    />
  );
};

type SelectDescriptionProps<T extends ValidComponent = "div"> =
  SelectPrimitive.SelectDescriptionProps<T> & {
    class?: string | undefined;
  };

const SelectDescription = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, SelectDescriptionProps<T>>,
) => {
  const [local, others] = splitProps(props as SelectDescriptionProps, [
    "class",
  ]);
  return (
    <SelectPrimitive.Description
      data-slot="select-description"
      class={cn(labelVariants({ variant: "description" }), local.class)}
      {...others}
    />
  );
};

type SelectErrorMessageProps<T extends ValidComponent = "div"> =
  SelectPrimitive.SelectErrorMessageProps<T> & {
    class?: string | undefined;
  };

const SelectErrorMessage = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, SelectErrorMessageProps<T>>,
) => {
  const [local, others] = splitProps(props as SelectErrorMessageProps, [
    "class",
  ]);
  return (
    <SelectPrimitive.ErrorMessage
      data-slot="select-error-message"
      class={cn(labelVariants({ variant: "error" }), local.class)}
      {...others}
    />
  );
};

export {
  Select,
  SelectValue,
  SelectHiddenSelect,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectDescription,
  SelectErrorMessage,
};
