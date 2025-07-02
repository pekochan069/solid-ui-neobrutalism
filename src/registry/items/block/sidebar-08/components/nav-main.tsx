import type { LucideIcon } from "lucide-solid";

import { For, Show } from "solid-js";
import ChevronRightIcon from "lucide-solid/icons/chevron-right";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "~/components/ui/sidebar";

export function NavMain(props: {
  items: {
    title: string;
    url: string;
    icon: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        <For each={props.items}>
          {(item) => (
            <Collapsible as={SidebarMenuItem} defaultOpen={item.isActive}>
              <SidebarMenuButton as="a" href={item.url} tooltip={item.title}>
                <item.icon />
                <span>{item.title}</span>
              </SidebarMenuButton>
              <Show when={item.items?.length}>
                <CollapsibleTrigger
                  as={SidebarMenuAction}
                  class="ui-expanded:rotate-90"
                >
                  <ChevronRightIcon />
                  <span class="sr-only">Toggle</span>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    <For each={item.items}>
                      {(subItem) => (
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton as="a" href={subItem.url}>
                            <span>{subItem.title}</span>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      )}
                    </For>
                  </SidebarMenuSub>
                </CollapsibleContent>
              </Show>
            </Collapsible>
          )}
        </For>
      </SidebarMenu>
    </SidebarGroup>
  );
}
