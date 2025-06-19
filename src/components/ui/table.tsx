import type { Component, ComponentProps } from "solid-js";

import { splitProps } from "solid-js";

import { cn } from "~/lib/utils";

const Table: Component<ComponentProps<"table">> = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return (
    <div data-slot="table" class="relative w-full overflow-auto">
      <table
        class={cn(
          "w-full caption-bottom border-2 border-border text-sm",
          local.class,
        )}
        {...others}
      />
    </div>
  );
};

const TableHeader: Component<ComponentProps<"thead">> = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return (
    <thead
      data-slot="table-header"
      class={cn("[&_tr]:border-b-4", local.class)}
      {...others}
    />
  );
};

const TableBody: Component<ComponentProps<"tbody">> = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return (
    <tbody
      data-slot="table-body"
      class={cn("[&_tr:last-child]:border-0", local.class)}
      {...others}
    />
  );
};

const TableFooter: Component<ComponentProps<"tfoot">> = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return (
    <tfoot
      data-slot="table-footer"
      class={cn("bg-main font-medium text-main-foreground", local.class)}
      {...others}
    />
  );
};

const TableRow: Component<ComponentProps<"tr">> = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return (
    <tr
      data-slot="table-row"
      class={cn(
        "border-b transition-colors hover:bg-main/20 data-[state=selected]:bg-muted",
        local.class,
      )}
      {...others}
    />
  );
};

const TableHead: Component<ComponentProps<"th">> = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return (
    <th
      data-slot="table-head"
      class={cn(
        "h-10 px-2 text-left align-middle font-bold [&:has([role=checkbox])]:pr-0",
        local.class,
      )}
      {...others}
    />
  );
};

const TableCell: Component<ComponentProps<"td">> = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return (
    <td
      data-slot="table-cell"
      class={cn("p-2 align-middle [&:has([role=checkbox])]:pr-0", local.class)}
      {...others}
    />
  );
};

const TableCaption: Component<ComponentProps<"caption">> = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return (
    <caption
      data-slot="table-caption"
      class={cn("mt-4 text-sm text-muted-foreground", local.class)}
      {...others}
    />
  );
};

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};
