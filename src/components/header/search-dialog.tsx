import type { KbdKey } from "@solid-primitives/keyboard";

import { createSignal, For, onMount } from "solid-js";
import { createShortcut } from "@solid-primitives/keyboard";
import ArrowDownIcon from "lucide-solid/icons/arrow-down";
import ArrowUpIcon from "lucide-solid/icons/arrow-up";
import FluentArrowEnter24Filled from "lucide-solid/icons/corner-down-left";
import SearchIcon from "lucide-solid/icons/search";

import { Button } from "~/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "~/components/ui/command";
import { nav } from "~/lib/nav";

const [open, setOpen] = createSignal(false);

export function SearchButton() {
  const modifier: KbdKey = navigator.userAgent.match(
    /\b(Mac|iphone|ipod|ipad)\b/i,
  )
    ? "Meta"
    : "Control";
  onMount(() => {
    createShortcut([modifier, "K"], () => setOpen((prev) => !prev));
  });

  return (
    <Button
      variant="neutral"
      type="button"
      aria-label="Search"
      aria-keyshortcuts={`${modifier}+K`}
      onClick={() => setOpen(true)}
      class="h-10 w-10 lg:w-auto"
    >
      <SearchIcon class="size-5" />
      <div class="invisible ml-2 hidden rounded-base border border-border bg-background px-1 py-0.5 text-foreground lg:visible lg:inline-block">
        <div>{modifier}+K</div>
      </div>
    </Button>
  );
}

export function SearchDialog() {
  const modifier: KbdKey = navigator.userAgent.match(
    /\b(Mac|iphone|ipod|ipad)\b/i,
  )
    ? "⌘"
    : "Ctrl";
  const [input, setInput] = createSignal("");

  return (
    <CommandDialog open={open()} onOpenChange={setOpen}>
      <CommandInput
        placeholder="Search..."
        value={input()}
        onValueChange={setInput}
      />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Command">
          <CommandItem onSelect={() => setOpen(false)}>
            <span>Search site</span>
            <CommandShortcut>{modifier}+K</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <For each={nav.slice(1)}>
          {(navGroup) => (
            <>
              <CommandSeparator />
              <CommandGroup heading={navGroup.label}>
                <For each={navGroup.items}>
                  {(navItem) => (
                    <CommandItem
                      onSelect={() => {
                        window.location.href = navItem.href;
                      }}
                    >
                      {navItem.label}
                    </CommandItem>
                  )}
                </For>
              </CommandGroup>
            </>
          )}
        </For>
      </CommandList>
      <CommandSeparator />
      <div class="px-4 py-2">
        <ul class="flex gap-4 text-sm [&_svg]:size-4">
          <li class="flex items-center gap-1">
            <span class="rounded bg-muted p-0.5">
              <FluentArrowEnter24Filled />
            </span>
            <span>Select</span>
          </li>
          <li class="flex items-center gap-0.5">
            <span class="rounded bg-muted p-0.5">
              <ArrowUpIcon />
            </span>
            <span class="rounded bg-muted p-0.5">
              <ArrowDownIcon />
            </span>
            <span>Move</span>
          </li>
          <li class="flex items-center gap-1">
            <span class="rounded bg-muted p-0.5 text-xs">Esc</span>
            <span>Close</span>
          </li>
        </ul>
      </div>
    </CommandDialog>
  );
}
