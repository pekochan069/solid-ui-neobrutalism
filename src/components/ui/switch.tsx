import type { PolymorphicProps } from "@kobalte/core";
import type { JSX, ValidComponent } from "solid-js";

import { splitProps } from "solid-js";
import * as SwitchPrimitive from "@kobalte/core/switch";

import { cn } from "~/lib/utils";

const Switch = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, SwitchPrimitive.SwitchRootProps<T>>,
) => {
  return <SwitchPrimitive.Root data-slot="switch" {...props} />;
};

const SwitchDescription = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, SwitchPrimitive.SwitchDescriptionProps<T>>,
) => {
  return (
    <SwitchPrimitive.Description data-slot="switch-description" {...props} />
  );
};

const SwitchErrorMessage = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, SwitchPrimitive.SwitchErrorMessageProps<T>>,
) => {
  return (
    <SwitchPrimitive.ErrorMessage data-slot="switch-error-message" {...props} />
  );
};

type SwitchControlProps = SwitchPrimitive.SwitchControlProps & {
  class?: string | undefined;
  children?: JSX.Element;
};

const SwitchControl = <T extends ValidComponent = "input">(
  props: PolymorphicProps<T, SwitchControlProps>,
) => {
  const [local, others] = splitProps(props as SwitchControlProps, [
    "class",
    "children",
  ]);
  return (
    <>
      <SwitchPrimitive.Input
        data-slot="switch-input"
        class={cn(
          "[&:focus-visible+div]:ring-2 [&:focus-visible+div]:ring-ring [&:focus-visible+div]:ring-offset-2 [&:focus-visible+div]:ring-offset-background [&:focus-visible+div]:outline-none",
          local.class,
        )}
      />
      <SwitchPrimitive.Control
        data-slot="switch-control"
        class={cn(
          "inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-border bg-secondary-background transition-[color,background-color,box-shadow] ui-disabled:cursor-not-allowed ui-disabled:opacity-50 ui-checked:bg-main",
          local.class,
        )}
        {...others}
      >
        {local.children}
      </SwitchPrimitive.Control>
    </>
  );
};

type SwitchThumbProps = SwitchPrimitive.SwitchThumbProps & {
  class?: string | undefined;
};

const SwitchThumb = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, SwitchThumbProps>,
) => {
  const [local, others] = splitProps(props as SwitchThumbProps, ["class"]);
  return (
    <SwitchPrimitive.Thumb
      data-slot="switch-thumb"
      class={cn(
        "pointer-events-none block size-4 translate-x-1 rounded-full border-2 border-border bg-white ring-0 transition-transform ui-checked:translate-x-5",
        local.class,
      )}
      {...others}
    />
  );
};

type SwitchLabelProps = SwitchPrimitive.SwitchLabelProps & {
  class?: string | undefined;
};

const SwitchLabel = <T extends ValidComponent = "label">(
  props: PolymorphicProps<T, SwitchLabelProps>,
) => {
  const [local, others] = splitProps(props as SwitchLabelProps, ["class"]);
  return (
    <SwitchPrimitive.Label
      data-slot="switch-label"
      class={cn(
        "text-sm leading-none font-medium ui-disabled:cursor-not-allowed ui-disabled:opacity-70",
        local.class,
      )}
      {...others}
    />
  );
};

export {
  Switch,
  SwitchControl,
  SwitchThumb,
  SwitchLabel,
  SwitchDescription,
  SwitchErrorMessage,
};
