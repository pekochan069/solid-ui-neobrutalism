import type { PolymorphicProps } from "@kobalte/core/polymorphic";
import type { JSX, ValidComponent } from "solid-js";

import { splitProps } from "solid-js";
import * as AccordionPrimitive from "@kobalte/core/accordion";
import ChevronDownIcon from "lucide-solid/icons/chevron-down";

import { cn } from "~/lib/utils";

const Accordion = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, AccordionPrimitive.AccordionRootProps<T>>,
) => {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
};

type AccordionItemProps<T extends ValidComponent = "div"> =
  AccordionPrimitive.AccordionItemProps<T> & {
    class?: string | undefined;
  };

const AccordionItem = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, AccordionItemProps<T>>,
) => {
  const [local, others] = splitProps(props as AccordionItemProps, ["class"]);
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      class={cn(
        "overflow-hidden rounded-base border-2 border-b border-border shadow-shadow",
        local.class,
      )}
      {...others}
    />
  );
};

type AccordionTriggerProps<T extends ValidComponent = "button"> =
  AccordionPrimitive.AccordionTriggerProps<T> & {
    class?: string | undefined;
    children?: JSX.Element;
  };

const AccordionTrigger = <T extends ValidComponent = "button">(
  props: PolymorphicProps<T, AccordionTriggerProps<T>>,
) => {
  const [local, others] = splitProps(props as AccordionTriggerProps, [
    "class",
    "children",
  ]);
  return (
    <AccordionPrimitive.Header data-slot="accordion-header" class="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        class={cn(
          "ui flex flex-1 items-center justify-between border-border bg-primary p-4 text-left text-base font-heading text-primary-foreground transition-all focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 ui-expanded:rounded-b-none ui-expanded:border-b-2 ui-expanded:[&_svg]:rotate-180",
          local.class,
        )}
        {...others}
      >
        {local.children}
        <ChevronDownIcon class="pointer-events-none size-5 shrink-0 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
};

type AccordionContentProps<T extends ValidComponent = "div"> =
  AccordionPrimitive.AccordionContentProps<T> & {
    class?: string | undefined;
    children?: JSX.Element;
  };

const AccordionContent = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, AccordionContentProps<T>>,
) => {
  const [local, others] = splitProps(props as AccordionContentProps, [
    "class",
    "children",
  ]);
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      class={cn(
        "overflow-hidden rounded-b-base bg-secondary-background text-sm font-base transition-all ui-expanded:animate-accordion-down ui-closed:animate-accordion-up",
        local.class,
      )}
      {...others}
    >
      <div class="p-4">{local.children}</div>
    </AccordionPrimitive.Content>
  );
};

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
