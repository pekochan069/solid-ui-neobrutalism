import type { PolymorphicProps } from "@kobalte/core/polymorphic";
import type { JSX, ValidComponent } from "solid-js";

import { splitProps } from "solid-js";
import * as SliderPrimitive from "@kobalte/core/slider";

import { Label } from "~/components/ui/label";
import { cn } from "~/lib/utils";

type SliderRootProps<T extends ValidComponent = "div"> =
  SliderPrimitive.SliderRootProps<T> & {
    class?: string | undefined;
  };

const Slider = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, SliderRootProps<T>>,
) => {
  const [local, others] = splitProps(props as SliderRootProps, ["class"]);
  return (
    <SliderPrimitive.Root
      data-slot="slider"
      class={cn(
        "relative flex w-full touch-none flex-col items-center select-none",
        local.class,
      )}
      {...others}
    />
  );
};

type SliderTrackProps<T extends ValidComponent = "div"> =
  SliderPrimitive.SliderTrackProps<T> & {
    class?: string | undefined;
  };

const SliderTrack = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, SliderTrackProps<T>>,
) => {
  const [local, others] = splitProps(props as SliderTrackProps, ["class"]);
  return (
    <SliderPrimitive.Track
      data-slot="slider-track"
      class={cn(
        "relative h-3 w-full grow rounded-base border-2 border-border bg-secondary-background",
        local.class,
      )}
      {...others}
    />
  );
};

type SliderFillProps<T extends ValidComponent = "div"> =
  SliderPrimitive.SliderFillProps<T> & {
    class?: string | undefined;
  };

const SliderFill = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, SliderFillProps<T>>,
) => {
  const [local, others] = splitProps(props as SliderFillProps, ["class"]);
  return (
    <SliderPrimitive.Fill
      data-slot="slider-fill"
      class={cn("absolute h-full rounded-base bg-main", local.class)}
      {...others}
    />
  );
};

type SliderThumbProps<T extends ValidComponent = "span"> =
  SliderPrimitive.SliderThumbProps<T> & {
    class?: string | undefined;
    children?: JSX.Element;
  };

const SliderThumb = <T extends ValidComponent = "span">(
  props: PolymorphicProps<T, SliderThumbProps<T>>,
) => {
  const [local, others] = splitProps(props as SliderThumbProps, [
    "class",
    "children",
  ]);
  return (
    <SliderPrimitive.Thumb
      data-slot="slider-thumb"
      class={cn(
        "-top-1.5 block size-5 rounded-full border-2 border-border bg-white ring-offset-white transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
        local.class,
      )}
      {...others}
    >
      <SliderPrimitive.Input />
    </SliderPrimitive.Thumb>
  );
};

const SliderLabel = <T extends ValidComponent = "label">(
  props: PolymorphicProps<T, SliderPrimitive.SliderLabelProps<T>>,
) => {
  return (
    <SliderPrimitive.Label data-slot="slider-label" as={Label} {...props} />
  );
};

const SliderValueLabel = <T extends ValidComponent = "label">(
  props: PolymorphicProps<T, SliderPrimitive.SliderValueLabelProps<T>>,
) => {
  return (
    <SliderPrimitive.ValueLabel
      data-slot="slider-value-label"
      as={Label}
      {...props}
    />
  );
};

export {
  Slider,
  SliderTrack,
  SliderFill,
  SliderThumb,
  SliderLabel,
  SliderValueLabel,
};
