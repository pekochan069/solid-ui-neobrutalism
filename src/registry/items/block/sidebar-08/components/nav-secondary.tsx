import type { ComponentProps } from "solid-js";

import { For } from "solid-js";
import { type LucideIcon } from "lucide-solid";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/components/ui/sidebar";

export function NavSecondary(
  props: {
    items: {
      title: string;
      url: string;
      icon: LucideIcon;
    }[];
  } & ComponentProps<typeof SidebarGroup>,
) {
  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          <For each={props.items}>
            {(item) => (
              <SidebarMenuItem>
                <SidebarMenuButton as="a" href={item.url} size="sm">
                  <item.icon />
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )}
          </For>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
