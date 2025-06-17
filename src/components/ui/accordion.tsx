import type { PolymorphicProps } from "@kobalte/core/polymorphic";
import type { JSX, ValidComponent } from "solid-js";

import { splitProps } from "solid-js";
import * as AccordionPrimitive from "@kobalte/core/accordion";
import { ChevronDown } from "lucide-solid";

import { cn } from "~/lib/utils";

const Accordion = AccordionPrimitive.Root;

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
    <AccordionPrimitive.Header class="flex">
      <AccordionPrimitive.Trigger
        class={cn(
          "ui flex flex-1 items-center justify-between border-border bg-main p-4 text-left text-base font-heading text-main-foreground transition-all focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 ui-expanded:rounded-b-none ui-expanded:border-b-2 ui-expanded:[&_svg]:rotate-180",
          local.class,
        )}
        {...others}
      >
        {local.children}
        <ChevronDown class="pointer-events-none size-5 shrink-0 transition-transform duration-200" />
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
      class={cn(
        "overflow-hidden rounded-b-base bg-secondary-background text-sm font-base transition-all ui-expanded:animate-accordion-down ui-closed:animate-accordion-up",
        local.class,
      )}
      {...others}
    >
      <div class="pt-0 pb-4">{local.children}</div>
    </AccordionPrimitive.Content>
  );
};

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
