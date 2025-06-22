import type { PolymorphicProps } from "@kobalte/core/polymorphic";
import type { VariantProps } from "class-variance-authority";
import type { JSX, ValidComponent } from "solid-js";

import { createContext, splitProps, useContext } from "solid-js";
import * as ToggleGroupPrimitive from "@kobalte/core/toggle-group";

import { toggleVariants } from "~/components/ui/toggle";
import { cn } from "~/lib/utils";

const ToggleGroupContext = createContext<VariantProps<typeof toggleVariants>>({
  size: "default",
  variant: "default",
});

type ToggleGroupRootProps<T extends ValidComponent = "div"> =
  ToggleGroupPrimitive.ToggleGroupRootProps<T> &
    VariantProps<typeof toggleVariants> & {
      class?: string | undefined;
      children?: JSX.Element;
    };

const ToggleGroup = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, ToggleGroupRootProps<T>>,
) => {
  const [local, others] = splitProps(props as ToggleGroupRootProps, [
    "class",
    "children",
    "size",
    "variant",
  ]);

  return (
    <ToggleGroupPrimitive.Root
      data-slot="toggle-group"
      class={cn("flex items-center justify-center gap-1", local.class)}
      {...others}
    >
      <ToggleGroupContext.Provider
        value={{
          get size() {
            return local.size;
          },
          get variant() {
            return local.variant;
          },
        }}
      >
        {local.children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  );
};

type ToggleGroupItemProps<T extends ValidComponent = "button"> =
  ToggleGroupPrimitive.ToggleGroupItemProps<T> &
    VariantProps<typeof toggleVariants> & { class?: string | undefined };

const ToggleGroupItem = <T extends ValidComponent = "button">(
  props: PolymorphicProps<T, ToggleGroupItemProps<T>>,
) => {
  const [local, others] = splitProps(props as ToggleGroupItemProps, [
    "class",
    "size",
    "variant",
  ]);
  const context = useContext(ToggleGroupContext);
  return (
    <ToggleGroupPrimitive.Item
      data-slot="toggle-group-item"
      class={cn(
        toggleVariants({
          size: context.size || local.size,
          variant: context.variant || local.variant,
        }),
        "border-2 border-border hover:bg-primary/20 hover:text-muted-foreground ui-pressed:bg-primary/40 ui-pressed:text-primary-foreground",
        local.class,
      )}
      {...others}
    />
  );
};

export { ToggleGroup, ToggleGroupItem };
