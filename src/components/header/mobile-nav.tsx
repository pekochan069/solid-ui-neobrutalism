import type { NavGroup, NavItem } from "~/types/nav";

import { For } from "solid-js";

import { Button } from "~/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";

function MobileNavItem(props: { item: NavItem }) {
  return (
    <a href={props.item.href} class="text-2xl font-semibold">
      {props.item.label}
    </a>
  );
}

function MobileNavGroup(props: { group: NavGroup }) {
  return (
    <li>
      <h3 class="mb-3 text-foreground/70">{props.group.label}</h3>
      <ul class="grid gap-2">
        <For each={props.group.items}>
          {(item) => <MobileNavItem item={item} />}
        </For>
      </ul>
    </li>
  );
}

type MobileNavProps = {
  navGroups: NavGroup[];
};

export default function MobileNav(props: MobileNavProps) {
  return (
    <Popover gutter={10}>
      <PopoverTrigger as={Button}>Menu</PopoverTrigger>
      <PopoverContent class="h-[calc(100svh-var(--header-height)-2px)] w-svw -translate-x-2 overflow-y-scroll rounded-none pb-12">
        <div>
          <ul class="grid gap-10">
            <For each={props.navGroups}>
              {(group) => <MobileNavGroup group={group} />}
            </For>
          </ul>
        </div>
      </PopoverContent>
    </Popover>
  );
}
