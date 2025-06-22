import type { PolymorphicProps } from "@kobalte/core/polymorphic";
import type { ValidComponent } from "solid-js";

import { Match, splitProps, Switch } from "solid-js";
import * as CheckboxPrimitive from "@kobalte/core/checkbox";
import { CheckIcon, MinusIcon } from "lucide-solid";

import { cn } from "~/lib/utils";

type CheckboxRootProps<T extends ValidComponent = "div"> =
  CheckboxPrimitive.CheckboxRootProps<T> & { class?: string | undefined };

const Checkbox = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, CheckboxRootProps<T>>,
) => {
  const [local, others] = splitProps(props as CheckboxRootProps, [
    "class",
    "id",
  ]);
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      class={cn("items-top group relative flex space-x-2", local.class)}
      {...others}
    >
      <CheckboxPrimitive.Input
        data-slot="checkbox-input"
        class="peer"
        id={local.id}
      />
      <CheckboxPrimitive.Control
        data-slot="checkbox-control"
        class="size-4 shrink-0 rounded-sm border-2 border-border ring-offset-background peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2 peer-focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[indeterminate]:border-none data-[indeterminate]:bg-foreground! data-[indeterminate]:text-background! ui-checked:border-none ui-checked:bg-primary ui-checked:text-background"
      >
        <CheckboxPrimitive.Indicator data-slot="checkbox-indicator">
          <Switch>
            <Match when={!others.indeterminate}>
              <CheckIcon class="size-4" />
            </Match>
            <Match when={others.indeterminate}>
              <MinusIcon class="size-4" />
            </Match>
          </Switch>
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Control>
    </CheckboxPrimitive.Root>
  );
};

export { Checkbox };
