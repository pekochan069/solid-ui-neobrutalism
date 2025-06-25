import type { PolymorphicProps } from "@kobalte/core/polymorphic";
import type { JSX, ValidComponent } from "solid-js";

import { splitProps } from "solid-js";
import * as RadioGroupPrimitive from "@kobalte/core/radio-group";
import CircleIcon from "lucide-solid/icons/circle";

import { cn } from "~/lib/utils";

type RadioGroupRootProps<T extends ValidComponent = "div"> =
  RadioGroupPrimitive.RadioGroupRootProps<T> & { class?: string | undefined };

const RadioGroup = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, RadioGroupRootProps<T>>,
) => {
  const [local, others] = splitProps(props as RadioGroupRootProps, ["class"]);
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      class={cn("grid gap-2", local.class)}
      {...others}
    />
  );
};

type RadioGroupItemProps<T extends ValidComponent = "div"> =
  RadioGroupPrimitive.RadioGroupItemProps<T> & {
    class?: string | undefined;
    children?: JSX.Element;
  };

const RadioGroupItem = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, RadioGroupItemProps<T>>,
) => {
  const [local, others] = splitProps(props as RadioGroupItemProps, [
    "class",
    "children",
  ]);
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      class={cn("flex items-center space-x-2", local.class)}
      {...others}
    >
      <RadioGroupPrimitive.ItemInput data-slot="radio-group-input" />
      <RadioGroupPrimitive.ItemControl
        data-slot="radio-group-control"
        class="aspect-square size-4 rounded-full border ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ui-checked:text-primary"
      >
        <RadioGroupPrimitive.ItemIndicator class="flex h-full items-center justify-center">
          <CircleIcon class="size-2.5 fill-current text-current" />
        </RadioGroupPrimitive.ItemIndicator>
      </RadioGroupPrimitive.ItemControl>
      {local.children}
    </RadioGroupPrimitive.Item>
  );
};

type RadioGroupLabelProps<T extends ValidComponent = "label"> =
  RadioGroupPrimitive.RadioGroupLabelProps<T> & {
    class?: string | undefined;
  };

const RadioGroupItemLabel = <T extends ValidComponent = "label">(
  props: PolymorphicProps<T, RadioGroupLabelProps<T>>,
) => {
  const [local, others] = splitProps(props as RadioGroupLabelProps, ["class"]);
  return (
    <RadioGroupPrimitive.ItemLabel
      data-slot="radio-group-item-label"
      class={cn(
        "text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        local.class,
      )}
      {...others}
    />
  );
};

export { RadioGroup, RadioGroupItem, RadioGroupItemLabel };
