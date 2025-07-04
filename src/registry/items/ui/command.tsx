import type { DialogRootProps } from "@kobalte/core/dialog";
import type {
  Component,
  ComponentProps,
  ParentProps,
  VoidProps,
} from "solid-js";

import { splitProps } from "solid-js";
import * as CommandPrimitive from "cmdk-solid";
import SearchIcon from "lucide-solid/icons/search";

import { Dialog, DialogContent } from "~/components/ui/dialog";
import { cn } from "~/lib/utils";

const Command: Component<ParentProps<CommandPrimitive.CommandRootProps>> = (
  props,
) => {
  const [local, others] = splitProps(props, ["class"]);

  return (
    <CommandPrimitive.CommandRoot
      data-slot="command"
      class={cn(
        "flex size-full flex-col overflow-hidden rounded-base bg-background text-foreground blur-none",
        local.class,
      )}
      {...others}
    />
  );
};

const CommandDialog: Component<ParentProps<DialogRootProps>> = (props) => {
  const [local, others] = splitProps(props, ["children"]);

  return (
    <Dialog {...others}>
      <DialogContent class="overflow-hidden p-0">
        <Command class="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:size-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:size-5">
          {local.children}
        </Command>
      </DialogContent>
    </Dialog>
  );
};

const CommandInput: Component<VoidProps<CommandPrimitive.CommandInputProps>> = (
  props,
) => {
  const [local, others] = splitProps(props, ["class"]);

  return (
    <div
      data-slot="command-input"
      class="flex items-center border-b-2 border-border px-3"
      cmdk-input-wrapper=""
    >
      <SearchIcon class="mr-2 size-4 shrink-0" />
      <CommandPrimitive.CommandInput
        class={cn(
          "mr-10 flex h-10 w-full rounded-base bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          local.class,
        )}
        {...others}
      />
    </div>
  );
};

const CommandList: Component<ParentProps<CommandPrimitive.CommandListProps>> = (
  props,
) => {
  const [local, others] = splitProps(props, ["class"]);

  return (
    <CommandPrimitive.CommandList
      data-slot="command-list"
      class={cn("max-h-[300px] overflow-x-hidden overflow-y-auto", local.class)}
      {...others}
    />
  );
};

const CommandEmpty: Component<
  ParentProps<CommandPrimitive.CommandEmptyProps>
> = (props) => {
  const [local, others] = splitProps(props, ["class"]);

  return (
    <CommandPrimitive.CommandEmpty
      data-slot="command-empty"
      class={cn("py-6 text-center text-sm", local.class)}
      {...others}
    />
  );
};

const CommandGroup: Component<
  ParentProps<CommandPrimitive.CommandGroupProps>
> = (props) => {
  const [local, others] = splitProps(props, ["class"]);

  return (
    <CommandPrimitive.CommandGroup
      data-slot="command-group"
      class={cn(
        "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
        local.class,
      )}
      {...others}
    />
  );
};

const CommandSeparator: Component<
  VoidProps<CommandPrimitive.CommandSeparatorProps>
> = (props) => {
  const [local, others] = splitProps(props, ["class"]);

  return (
    <CommandPrimitive.CommandSeparator
      data-slot="command-separator"
      class={cn("h-0.5 border-border bg-border", local.class)}
      {...others}
    />
  );
};

const CommandItem: Component<ParentProps<CommandPrimitive.CommandItemProps>> = (
  props,
) => {
  const [local, others] = splitProps(props, ["class"]);

  return (
    <CommandPrimitive.CommandItem
      data-slot="command-item"
      cmdk-item=""
      class={cn(
        "relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none select-none aria-selected:bg-primary aria-selected:text-primary-foreground data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        local.class,
      )}
      {...others}
    />
  );
};

const CommandShortcut: Component<ComponentProps<"span">> = (props) => {
  const [local, others] = splitProps(props, ["class"]);

  return (
    <span
      data-slot="command-shortcut"
      class={cn("ml-auto text-xs tracking-widest", local.class)}
      {...others}
    />
  );
};

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};
