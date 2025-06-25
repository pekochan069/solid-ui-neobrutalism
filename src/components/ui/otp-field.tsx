import type { DynamicProps, RootProps } from "@corvu/otp-field";
import type { Component, ComponentProps, ValidComponent } from "solid-js";

import { Show, splitProps } from "solid-js";
import OtpField from "@corvu/otp-field";
import DotIcon from "lucide-solid/icons/dot";

import { cn } from "~/lib/utils";

export const REGEXP_ONLY_DIGITS = "^\\d*$";
export const REGEXP_ONLY_CHARS = "^[a-zA-Z]*$";
export const REGEXP_ONLY_DIGITS_AND_CHARS = "^[a-zA-Z0-9]*$";

type OTPFieldProps<T extends ValidComponent = "div"> = RootProps<T> & {
  class?: string;
};

const OTPField = <T extends ValidComponent = "div">(
  props: DynamicProps<T, OTPFieldProps<T>>,
) => {
  const [local, others] = splitProps(props as OTPFieldProps, ["class"]);
  return (
    <OtpField
      data-slot="otp-field"
      class={cn(
        "flex items-center gap-2 disabled:cursor-not-allowed has-[:disabled]:opacity-50",
        local.class,
      )}
      {...others}
    />
  );
};

const OTPFieldInput = OtpField.Input;

const OTPFieldGroup: Component<ComponentProps<"div">> = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return <div class={cn("flex items-center", local.class)} {...others} />;
};

const OTPFieldSlot: Component<ComponentProps<"div"> & { index: number }> = (
  props,
) => {
  const [local, others] = splitProps(props, ["class", "index"]);
  const context = OtpField.useContext();
  const char = () => context.value()[local.index];
  const showFakeCaret = () =>
    context.value().length === local.index && context.isInserting();

  return (
    <div
      data-slot="otp-field-slot"
      class={cn(
        "group relative flex size-10 items-center justify-center border-y border-r-2 border-border text-sm first:rounded-l-base first:border-l-2 last:rounded-r-base",
        local.class,
      )}
      {...others}
    >
      <div
        class={cn(
          "absolute inset-0 z-10 transition-all group-first:rounded-l-base group-last:rounded-r-base",
          context.activeSlots().includes(local.index) &&
            "ring-2 ring-primary ring-offset-background",
        )}
      />
      {char()}
      <Show when={showFakeCaret()}>
        <div class="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div class="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      </Show>
    </div>
  );
};

const OTPFieldSeparator: Component<ComponentProps<"div">> = (props) => {
  return (
    <div data-slot="otp-field-separator" {...props}>
      <DotIcon class="size-6" />
    </div>
  );
};

export {
  OTPField,
  OTPFieldInput,
  OTPFieldGroup,
  OTPFieldSlot,
  OTPFieldSeparator,
};
