import type { PolymorphicProps } from "@kobalte/core";
import type { ValidComponent } from "solid-js";

import * as CollapsiblePrimitive from "@kobalte/core/collapsible";

const Collapsible = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, CollapsiblePrimitive.CollapsibleRootProps<T>>,
) => {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />;
};

const CollapsibleTrigger = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, CollapsiblePrimitive.CollapsibleTriggerProps<T>>,
) => {
  return (
    <CollapsiblePrimitive.Trigger data-slot="collapsible-trigger" {...props} />
  );
};

const CollapsibleContent = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, CollapsiblePrimitive.CollapsibleContentProps<T>>,
) => {
  return (
    <CollapsiblePrimitive.Content data-slot="collapsible-content" {...props} />
  );
};

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
