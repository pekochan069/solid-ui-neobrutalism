import type { PolymorphicProps } from "@kobalte/core/polymorphic";
import type { ValidComponent } from "solid-js";

import { splitProps } from "solid-js";
import * as SkeletonPrimitive from "@kobalte/core/skeleton";

import { cn } from "~/lib/utils";

type SkeletonRootProps<T extends ValidComponent = "div"> =
  SkeletonPrimitive.SkeletonRootProps<T> & { class?: string | undefined };

const Skeleton = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, SkeletonRootProps<T>>,
) => {
  const [local, others] = splitProps(props as SkeletonRootProps, ["class"]);
  return (
    <SkeletonPrimitive.Root
      data-slot="skeleton"
      class={cn(
        "bg-primary/20 data-[animate='true']:animate-pulse",
        local.class,
      )}
      {...others}
    />
  );
};

export { Skeleton };
