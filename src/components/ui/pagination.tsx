import type { PolymorphicProps } from "@kobalte/core/polymorphic";
import type { JSX, ValidComponent } from "solid-js";

import { Show, splitProps } from "solid-js";
import * as PaginationPrimitive from "@kobalte/core/pagination";
import ChevronLeftIcon from "lucide-solid/icons/chevron-left";
import ChevronRightIcon from "lucide-solid/icons/chevron-right";
import EllipsisIcon from "lucide-solid/icons/ellipsis";

import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";

const PaginationItems = PaginationPrimitive.Items;

type PaginationRootProps<T extends ValidComponent = "nav"> =
  PaginationPrimitive.PaginationRootProps<T> & { class?: string | undefined };

const Pagination = <T extends ValidComponent = "nav">(
  props: PolymorphicProps<T, PaginationRootProps<T>>,
) => {
  const [local, others] = splitProps(props as PaginationRootProps, ["class"]);
  return (
    <PaginationPrimitive.Root
      data-slot="pagination"
      class={cn(
        "[&>*]:flex [&>*]:flex-row [&>*]:items-center [&>*]:gap-1",
        local.class,
      )}
      {...others}
    />
  );
};

type PaginationItemProps<T extends ValidComponent = "button"> =
  PaginationPrimitive.PaginationItemProps<T> & { class?: string | undefined };

const PaginationItem = <T extends ValidComponent = "button">(
  props: PolymorphicProps<T, PaginationItemProps<T>>,
) => {
  const [local, others] = splitProps(props as PaginationItemProps, ["class"]);
  return (
    <PaginationPrimitive.Item
      data-slot="pagination-item"
      class={cn(
        buttonVariants({
          variant: "neutral-no-shadow",
        }),
        "size-10 ui-current:bg-primary ui-current:text-primary-foreground ui-current:hover:bg-primary/80",
        local.class,
      )}
      {...others}
    />
  );
};

type PaginationEllipsisProps<T extends ValidComponent = "div"> =
  PaginationPrimitive.PaginationEllipsisProps<T> & {
    class?: string | undefined;
  };

const PaginationEllipsis = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, PaginationEllipsisProps<T>>,
) => {
  const [local, others] = splitProps(props as PaginationEllipsisProps, [
    "class",
  ]);
  return (
    <PaginationPrimitive.Ellipsis
      data-slot="pagination-ellipsis"
      class={cn("flex size-10 items-center justify-center", local.class)}
      {...others}
    >
      <EllipsisIcon class="size-4" />
      <span class="sr-only">More pages</span>
    </PaginationPrimitive.Ellipsis>
  );
};

type PaginationPreviousProps<T extends ValidComponent = "button"> =
  PaginationPrimitive.PaginationPreviousProps<T> & {
    class?: string | undefined;
    children?: JSX.Element;
  };

const PaginationPrevious = <T extends ValidComponent = "button">(
  props: PolymorphicProps<T, PaginationPreviousProps<T>>,
) => {
  const [local, others] = splitProps(props as PaginationPreviousProps, [
    "class",
    "children",
  ]);
  return (
    <PaginationPrimitive.Previous
      data-slot="pagination-previous"
      class={cn(
        buttonVariants({
          variant: "neutral-no-shadow",
        }),
        "gap-1 pl-2.5",
        local.class,
      )}
      {...others}
    >
      <Show
        when={local.children}
        fallback={
          <>
            <ChevronLeftIcon class="size-4" />
            <span>Previous</span>
          </>
        }
      >
        {(children) => children()}
      </Show>
    </PaginationPrimitive.Previous>
  );
};

type PaginationNextProps<T extends ValidComponent = "button"> =
  PaginationPrimitive.PaginationNextProps<T> & {
    class?: string | undefined;
    children?: JSX.Element;
  };

const PaginationNext = <T extends ValidComponent = "button">(
  props: PolymorphicProps<T, PaginationNextProps<T>>,
) => {
  const [local, others] = splitProps(props as PaginationNextProps, [
    "class",
    "children",
  ]);
  return (
    <PaginationPrimitive.Next
      data-slot="pagination-next"
      class={cn(
        buttonVariants({
          variant: "neutral-no-shadow",
        }),
        "gap-1 pr-2.5",
        local.class,
      )}
      {...others}
    >
      <Show
        when={local.children}
        fallback={
          <>
            <span>Next</span>
            <ChevronRightIcon class="size-4" />
          </>
        }
      >
        {(children) => children()}
      </Show>
    </PaginationPrimitive.Next>
  );
};

export {
  Pagination,
  PaginationItems,
  PaginationItem,
  PaginationEllipsis,
  PaginationPrevious,
  PaginationNext,
};
