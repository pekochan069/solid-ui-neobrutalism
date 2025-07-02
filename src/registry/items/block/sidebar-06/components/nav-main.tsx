import type { LucideIcon } from "lucide-solid";

import { For, Show } from "solid-js";
import MoreHorizontalIcons from "lucide-solid/icons/more-horizontal";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "~/components/ui/sidebar";

export function NavMain(props: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  const { isMobile } = useSidebar();

  return (
    <SidebarGroup>
      <SidebarMenu>
        <For each={props.items}>
          {(item) => (
            <DropdownMenu placement={isMobile() ? "bottom-end" : "right-start"}>
              <SidebarMenuItem>
                <DropdownMenuTrigger
                  as={SidebarMenuButton}
                  class="ui-expanded:bg-sidebar-accent ui-expanded:text-sidebar-accent-foreground"
                >
                  {item.title} <MoreHorizontalIcons class="ml-auto" />
                </DropdownMenuTrigger>
                <Show when={item.items?.length}>
                  <DropdownMenuContent class="min-w-56 rounded-lg">
                    <For each={props.items}>
                      {(item) => (
                        <DropdownMenuItem as="a" href={item.url}>
                          {item.title}
                        </DropdownMenuItem>
                      )}
                    </For>
                  </DropdownMenuContent>
                </Show>
              </SidebarMenuItem>
            </DropdownMenu>
          )}
        </For>
      </SidebarMenu>
    </SidebarGroup>
  );
}
