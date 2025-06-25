import type { PolymorphicProps } from "@kobalte/core/polymorphic";
import type { Component, ComponentProps, JSX, ValidComponent } from "solid-js";

import { Show, splitProps } from "solid-js";
import * as NumberFieldPrimitive from "@kobalte/core/number-field";
import ChevronDownIcon from "lucide-solid/icons/chevron-down";
import ChevronUpIcon from "lucide-solid/icons/chevron-up";

import { cn } from "~/lib/utils";

const NumberField = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, NumberFieldPrimitive.NumberFieldRootProps<T>>,
) => {
  return (
    <NumberFieldPrimitive.Root data-slot="number-field" gutter={4} {...props} />
  );
};

const NumberFieldGroup: Component<ComponentProps<"div">> = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return (
    <div
      data-slot="number-field-group"
      class={cn(
        "relative rounded-md focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
        local.class,
      )}
      {...others}
    />
  );
};

type NumberFieldLabelProps<T extends ValidComponent = "label"> =
  NumberFieldPrimitive.NumberFieldLabelProps<T> & {
    class?: string | undefined;
  };

const NumberFieldLabel = <T extends ValidComponent = "label">(
  props: PolymorphicProps<T, NumberFieldLabelProps<T>>,
) => {
  const [local, others] = splitProps(props as NumberFieldLabelProps, ["class"]);
  return (
    <NumberFieldPrimitive.Label
      data-slot="number-field-label"
      class={cn(
        "text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        local.class,
      )}
      {...others}
    />
  );
};

type NumberFieldInputProps<T extends ValidComponent = "input"> =
  NumberFieldPrimitive.NumberFieldInputProps<T> & {
    class?: string | undefined;
  };

const NumberFieldInput = <T extends ValidComponent = "input">(
  props: PolymorphicProps<T, NumberFieldInputProps<T>>,
) => {
  const [local, others] = splitProps(props as NumberFieldInputProps, ["class"]);
  return (
    <NumberFieldPrimitive.Input
      data-slot="number-field-input"
      class={cn(
        "flex h-10 w-full rounded-base border-2 border-border bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 ui-invalid:border-error-foreground ui-invalid:text-error-foreground",
        local.class,
      )}
      {...others}
    />
  );
};

type NumberFieldIncrementTriggerProps<T extends ValidComponent = "button"> =
  NumberFieldPrimitive.NumberFieldIncrementTriggerProps<T> & {
    class?: string | undefined;
    children?: JSX.Element;
  };

const NumberFieldIncrementTrigger = <T extends ValidComponent = "button">(
  props: PolymorphicProps<T, NumberFieldIncrementTriggerProps<T>>,
) => {
  const [local, others] = splitProps(
    props as NumberFieldIncrementTriggerProps,
    ["class", "children"],
  );
  return (
    <NumberFieldPrimitive.IncrementTrigger
      data-slot="number-field-increment-trigger"
      class={cn(
        "absolute top-1 right-1 inline-flex size-4 items-center justify-center",
        local.class,
      )}
      {...others}
    >
      <Show when={local.children} fallback={<ChevronUpIcon class="size-4" />}>
        {(children) => children()}
      </Show>
    </NumberFieldPrimitive.IncrementTrigger>
  );
};

type NumberFieldDecrementTriggerProps<T extends ValidComponent = "button"> =
  NumberFieldPrimitive.NumberFieldDecrementTriggerProps<T> & {
    class?: string | undefined;
    children?: JSX.Element;
  };

const NumberFieldDecrementTrigger = <T extends ValidComponent = "button">(
  props: PolymorphicProps<T, NumberFieldDecrementTriggerProps<T>>,
) => {
  const [local, others] = splitProps(
    props as NumberFieldDecrementTriggerProps,
    ["class", "children"],
  );
  return (
    <NumberFieldPrimitive.DecrementTrigger
      data-slot="number-field-decrement-trigger"
      class={cn(
        "absolute right-1 bottom-1 inline-flex size-4 items-center justify-center",
        local.class,
      )}
      {...others}
    >
      <Show when={local.children} fallback={<ChevronDownIcon class="size-4" />}>
        {(children) => children()}
      </Show>
    </NumberFieldPrimitive.DecrementTrigger>
  );
};

type NumberFieldDescriptionProps<T extends ValidComponent = "div"> =
  NumberFieldPrimitive.NumberFieldDescriptionProps<T> & {
    class?: string | undefined;
  };

const NumberFieldDescription = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, NumberFieldDescriptionProps<T>>,
) => {
  const [local, others] = splitProps(props as NumberFieldDescriptionProps, [
    "class",
  ]);
  return (
    <NumberFieldPrimitive.Description
      data-slot="number-field-description"
      class={cn("text-sm text-muted-foreground", local.class)}
      {...others}
    />
  );
};

type NumberFieldErrorMessageProps<T extends ValidComponent = "div"> =
  NumberFieldPrimitive.NumberFieldErrorMessageProps<T> & {
    class?: string | undefined;
  };

const NumberFieldErrorMessage = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, NumberFieldErrorMessageProps<T>>,
) => {
  const [local, others] = splitProps(props as NumberFieldErrorMessageProps, [
    "class",
  ]);
  return (
    <NumberFieldPrimitive.ErrorMessage
      data-slot="number-field-error-message"
      class={cn("text-sm text-error-foreground", local.class)}
      {...others}
    />
  );
};

export {
  NumberField,
  NumberFieldGroup,
  NumberFieldLabel,
  NumberFieldInput,
  NumberFieldIncrementTrigger,
  NumberFieldDecrementTrigger,
  NumberFieldDescription,
  NumberFieldErrorMessage,
};
