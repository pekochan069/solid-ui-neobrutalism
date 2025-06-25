import type { DynamicProps, HandleProps, RootProps } from "@corvu/resizable";
import type { ValidComponent } from "solid-js";

import { Show, splitProps } from "solid-js";
import ResizablePrimitive from "@corvu/resizable";
import GripVerticalIcon from "lucide-solid/icons/grip-vertical";

import { cn } from "~/lib/utils";

type ResizableProps<T extends ValidComponent = "div"> = RootProps<T> & {
  class?: string;
};

const Resizable = <T extends ValidComponent = "div">(
  props: DynamicProps<T, ResizableProps<T>>,
) => {
  const [, rest] = splitProps(props as ResizableProps, ["class"]);
  return (
    <ResizablePrimitive
      data-slot="resizable"
      class={cn(
        "flex size-full data-[orientation=vertical]:flex-col",
        props.class,
      )}
      {...rest}
    />
  );
};

const ResizablePanel = ResizablePrimitive.Panel;

type ResizableHandleProps<T extends ValidComponent = "button"> =
  HandleProps<T> & {
    class?: string;
    withHandle?: boolean;
  };

const ResizableHandle = <T extends ValidComponent = "button">(
  props: DynamicProps<T, ResizableHandleProps<T>>,
) => {
  const [, rest] = splitProps(props as ResizableHandleProps, [
    "class",
    "withHandle",
  ]);
  return (
    <ResizablePrimitive.Handle
      data-slot="resizable-handle"
      class={cn(
        "relative flex w-px shrink-0 items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:outline-none data-[orientation=vertical]:h-px data-[orientation=vertical]:w-full data-[orientation=vertical]:after:left-0 data-[orientation=vertical]:after:h-1 data-[orientation=vertical]:after:w-full data-[orientation=vertical]:after:translate-x-0 data-[orientation=vertical]:after:-translate-y-1/2 [&[data-orientation=vertical]>div]:rotate-90",
        props.class,
      )}
      {...rest}
    >
      <Show when={props.withHandle}>
        <div
          data-slot="resizable-grip"
          class="z-10 flex h-5 w-4 items-center justify-center rounded-base border bg-primary text-primary-foreground"
        >
          <GripVerticalIcon class="size-3" />
        </div>
      </Show>
    </ResizablePrimitive.Handle>
  );
};

export { Resizable, ResizablePanel, ResizableHandle };
